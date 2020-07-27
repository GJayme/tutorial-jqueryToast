const FormScript = {
    _init() {
        $("button").on("click", (e) => {
            let url = $("#urlInput").val();
            this._fetchData(url);
        });
    },

    _fetchData(url) {
        $.get(url)
            .then((data) => data.filter((data) => data.id > 2))
            .then((data) => {

                if (data.length === 0) {
                    throw Error("Nao existe usuário com esse parametro");
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
                        heading: 'Successo',
                        text: `Foram adicionados ${data} usuários`,
                        icon: 'success',
                        position: 'top-right',
                        loaderBg: "#2aba1a",
                        bgColor: "#23a138",
                        textColor: "white"
                    })
                }
            })
            .catch((Error) => {

                if (Error.status === 404) {
                    Toast.toast({
                        heading: 'Error 404',
                        text: `Não foi possível realizar a operacao`,
                        icon: 'warning',
                        position: 'top-right',
                        loaderBg: "#e71a1a",
                        bgColor: "#e71a1a",
                        textColor: "white"
                    })
                } else {
                    Toast.toast({
                        heading: 'Error',
                        text: `${Error.message}`,
                        icon: 'warning',
                        position: 'top-right',
                        loaderBg: "#e71a1a",
                        bgColor: "#e71a1a",
                        textColor: "white"
                    })
                }


            });
    },
};

var Toast = $;
FormScript._init();
