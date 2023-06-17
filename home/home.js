// CHAMADA PARA API --------------------------------
// 4095 = Porta Aberta
// 0 = Porta Fechada

const fetchApi = async () => {
  const response = await fetch(
    "https://api.thingspeak.com/channels/2108924/feeds.json?api_key=0ZI9RTX77Q8NDV3B&results=1"
  );
  const data = await response.json();
  resultado = data.feeds[0].field1;
  return resultado;
};

// Verifica se o botão de modo alerta está ativo

let checkbox = document.getElementById("myCheckbox");
let status = document.getElementById("status");

checkbox.addEventListener("click", function () {
  if (checkbox.checked) {
    setInterval(async function () {
      const resultado = await fetchApi();
      // console.log(resultado);

      if (resultado == 4095) {
        console.log("Porta Aberta");
        status.innerHTML = "Aberta";
      } else {
        console.log("Porta Fechada");
        status.innerHTML = "Fechada";
      }
    }, 2500);
  } else {
    window.location.reload(true);
    console.log("Modo alerta desligado");
  }
});
