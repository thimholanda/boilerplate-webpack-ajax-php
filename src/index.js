import * as bootstrap from "bootstrap";
import $ from "jquery";

import "./sass/main.sass";
import "@fortawesome/fontawesome-free/js/all.js";

$(function () {
  const data = { name: "test" };
  $.ajax({
    method: "POST",
    data: data,
    url: "send.php",
    beforeSend: () => {
      console.log("load");
    },
    success: (data) => {
      console.log(JSON.parse(data));
    },
    error: () => {
      console.log("error");
    },
  });
});
