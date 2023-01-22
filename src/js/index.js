const video = document.getElementById("video");
const linkDoVideo = video.src;
const botaoTrailer = document.querySelector(".botao-trailer");
console.log(botaoTrailer);
const modal = document.querySelector(".modal");
const botaoFecharModal = document.querySelector(".fechar-modal");

botaoTrailer.addEventListener("click", () => {
    modal.classList.add("aberto");
    video.setAttribute("src", linkDoVideo);
})

botaoFecharModal.addEventListener("click", () => {
    modal.classList.remove("aberto");
    video.setAttribute("src", "")
})

