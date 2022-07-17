//==========================================================
//DOLLAR, RUB, EURO exchange rate against the Uzbek SO'M   =
//==========================================================

/* -------------------------------------------------------------------------- */
/*                                  USD RATE                                  */
/* -------------------------------------------------------------------------- */
const uzs = document.querySelector(".uzs");
const usd = document.querySelector(".usd");

uzs.addEventListener("input", () => {
  /* -------------------------------------------------------------------------- */
  /*                                CONNECT AJAX                                */
  /* -------------------------------------------------------------------------- */
  const request = new XMLHttpRequest();
  /* -------------------------------------------------------------------------- */
  /*                              GET OBJ FROM JSON                             */
  /* -------------------------------------------------------------------------- */
  request.open("GET", "json/current.json");
  request.setRequestHeader("Content-Tab", "application/json; charset=utf-8");
  request.send();
  /* -------------------------------------------------------------------------- */
  /*                      CHECK JSON OBJ AND CHANGE TO OBJ                      */
  /* -------------------------------------------------------------------------- */
  request.addEventListener("load", () => {
    if (request.status == 200) {
      const xmlHTTP = JSON.parse(request.response);
      usd.value = (+uzs.value / xmlHTTP.current.usd).toFixed(2);
    } else {
      usd.value = "Something wrong";
    }
  });
});
/* -------------------------------------------------------------------------- */
/*                                  RUB RATE                                  */
/* -------------------------------------------------------------------------- */
const uzsRubl = document.querySelector(".uzs-rubl");
const rubl = document.querySelector(".rubl");

uzsRubl.addEventListener("input", () => {
  /* -------------------------------------------------------------------------- */
  /*                                CONNECT AJAX                                */
  /* -------------------------------------------------------------------------- */
  const request = new XMLHttpRequest();
  /* -------------------------------------------------------------------------- */
  /*                              GET OBJ FROM JSON                             */
  /* -------------------------------------------------------------------------- */
  request.open("GET", "json/current.json");
  request.setRequestHeader("Content-Tab", "application/json; charset=utf-8");
  request.send();
  /* -------------------------------------------------------------------------- */
  /*                      CHECK JSON OBJ AND CHANGE TO OBJ                      */
  /* -------------------------------------------------------------------------- */
  request.addEventListener("load", () => {
    if (request.status == 200) {
      const xmlHTTP = JSON.parse(request.response);
      rubl.value = (+uzsRubl.value / xmlHTTP.current.rub).toFixed(2);
    } else {
      rubl.value = "Something wrong";
    }
  });
});
/* -------------------------------------------------------------------------- */
/*                                  EUR RATE                                  */
/* -------------------------------------------------------------------------- */
const uzsEuro = document.querySelector(".uzs-euro");
const euro = document.querySelector(".euro");

uzsEuro.addEventListener("input", () => {
  /* -------------------------------------------------------------------------- */
  /*                                CONNECT AJAX                                */
  /* -------------------------------------------------------------------------- */
  const request = new XMLHttpRequest();
  /* -------------------------------------------------------------------------- */
  /*                              GET OBJ FROM JSON                             */
  /* -------------------------------------------------------------------------- */
  request.open("GET", "json/current.json");
  request.setRequestHeader("Content-Tab", "application/json; charset=utf-8");
  request.send();
  /* -------------------------------------------------------------------------- */
  /*                      CHECK JSON OBJ AND CHANGE TO OBJ                      */
  /* -------------------------------------------------------------------------- */
  request.addEventListener("load", () => {
    if (request.status == 200) {
      const xmlHTTP = JSON.parse(request.response);
      euro.value = (+uzsEuro.value / xmlHTTP.current.eur).toFixed(2);
    } else {
      euro.value = "Something wrong";
    }
  });
});
/* -------------------------------------------------------------------------- */
/*                              MADE BY YOQUB RABBIMQULOV                     */
/* -------------------------------------------------------------------------- */
