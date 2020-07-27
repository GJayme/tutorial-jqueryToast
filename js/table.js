const FormScript = {
  _init() {
    $("button").on("click", (e) => {
      let url = $("#urlInput").val();
      this._fetchData(url);
    });
  },

  _fetchData(url) {
    $.get(url)
      .then((data) => data.filter((data) => data.id > 5))
      .then((data) => {
        if (data.length === 0) {
          throw Error("Não existe ususário com id > 5");
        }

        let dataNew = [];
        data.map((item) => {
          data = {
            id: item.id,
            name: item.name,
            username: item.username,
            email: item.email,
          };

          dataNew.push(data);
        });

        return dataNew;
      })
      .then((data) => {
        data.forEach((el) => {
          $("tbody").append(`<tr></tr><td>${el.id}</td>
                      <td>${el.name}</td>
                      <td>${el.username}</td>
                      <td>${el.email}</td></tr>`);
        });

        return data.length;
      })
      .done((data) => {
        if (data > 0) {
          Toast.toast({
            heading: "Sucesso",
            text: `Foram adicionados ${data} pessoas`,
            icon: "success",
            showHideTransition: "",
            allowToastClose: true,
            hideAfter: 3000,
            stack: 5,
            position: "top-right",
            textAlign: "left",
            loader: true,
            loaderBg: "#236f00",
            bgColor: "#49de2f",
            textColor: "black",
          });
        }
      })
      .catch((Error) => {
        Toast.toast({
          heading: "Erro",
          text: `${Error.message}`,
          icon: "warning",
          showHideTransition: "",
          allowToastClose: true,
          hideAfter: 3000,
          stack: 5,
          position: "top-right",
          textAlign: "left",
          loader: true,
          loaderBg: "#ec1132",
          bgColor: "#f15555",
        });
      });
  },
};

var Toast = $;
FormScript._init();
