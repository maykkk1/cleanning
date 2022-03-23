const btn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector("nav");
let showMenu = false;

btn.addEventListener("click", () => {
  if (!showMenu) {
    btn.classList.add("open");
    mobileMenu.classList.add("mobile-menu");
    showMenu = true;
  } else {
    btn.classList.remove("open");
    mobileMenu.classList.remove("mobile-menu");
    showMenu = false;
  }
});


const servicos = [
    {
        nome: "Limpeza de Sofás",
        imgAntes: "./assets/image/sofa-antes.jpg",
        imgDepois: "./assets/image/sofa-depois.jpg"
    },
    {
        nome: "Limpeza de Colchões",
        imgAntes: "./assets/image/colchao-antes.jpg",
        imgDepois: "./assets/image/colchao-depois.jpg"
    },
    {
        nome: "Limpeza de Cadeiras",
        imgAntes: "./assets/image/cadeira-antes.jpg",
        imgDepois: "./assets/image/cadeira-depois.jpg"
    }
]


const mostrarServicos = (nome, antes, depois) => {
  const servicosContainer = document.getElementById("servicos-container");
  const servico = `
    <div class="servico-item">
    <h2>${nome}</h2>
    <div class="servico-item__imgs-wrapper">
      <div class="servico-item__img-antes-wrapper">
        <img src=${antes} alt="">
      </div>
      <div class="servico-item__img-depois-wrapper">
        <img src=${depois} alt="">
      </div>
    </div>
  </div>
    `;
    servicosContainer.innerHTML += servico
};


servicos.forEach((servico)=>{
    mostrarServicos(servico.nome, servico.imgAntes, servico.imgDepois)
})