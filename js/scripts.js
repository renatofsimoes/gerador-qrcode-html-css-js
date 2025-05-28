const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#url-form button");
const qrCodeInput = document.querySelector("#url-form input");
const qrCodeImg = document.querySelector("#qr-code img");

//Eventos

function generateQrCode() {
  const qrCodeInputValue = qrCodeInput.value;

  if (!qrCodeInputValue) {
    return;
  }

  qrCodeBtn.innerText = "Gerando código...";

  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

  qrCodeImg.addEventListener("load", () => {
    container.classList.add("active"); //Usando o load, garantimos que o qr code só será mostrado (o container active chamado), quando estiver 100% carregado
    qrCodeBtn.innerText = "QR Code criado!";
  });
}

qrCodeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  generateQrCode();
});

//Limpar área do QR Code
qrCodeInput.addEventListener("keyup", () => {
  if (!qrCodeInput.value) {
    container.classList.remove("active");
    qrCodeBtn.innerText = "Gerar QR Code";
  }
});
