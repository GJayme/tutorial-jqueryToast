const FormScript = {
  _init() {
    let $form = $("form");

    let validEmail = 1;
    let validPassWord = 1;

    $form.on("submit", (e) => {
      e.preventDefault();

      // get fields
      //TODO check if all fields is filled

      let email = $form.find("input#inputEmail4");
      let password = $form.find("input#inputPassword4");

      if (email.val() == "") {
        this._toastLog("email");
        validEmail = 0;
      }

      if (password.val() == "") {
        this._toastLog("password");
        validPassWord = 0;
      }
      if ((validEmail === 1) & (validPassWord === 1)) {
        this, this._sucessLog("Sucess");
      }

      $("form")[0].reset();
      validEmail = 1;
      validPassWord = 1;
    });
  },

  _toastLog(el) {
    $.toast({
      heading: "Campo Inválido",
      text: `O campo ${el} é obrigatório`,
      icon: "warning",
      showHideTransition: "slide",
      allowToastClose: true,
      hideAfter: 3000,
      stack: 5,
      position: "top-right",
      textAlign: "left",
      loader: true,
      loaderBg: "#ec9caa",
      bgColor: "rgba(217,40,40,0.76)",
      textColor: "#fff",
    });
  },
  _sucessLog(el) {
    $.toast({
      heading: "Cadastro concluído!",
      text: `Obrigado por se cadastrar!`,
      icon: "sucess",
      showHideTransition: "slide",
      allowToastClose: true,
      hideAfter: 3000,
      stack: 5,
      position: "top-right",
      textAlign: "left",
      loader: true,
      loaderBg: "#9EC600",
      bgColor: "rgba(0,199,40,0.76)",
      textColor: "#fff",
    });
  },
};

var Toast = $;
FormScript._init();
