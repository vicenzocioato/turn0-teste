const menu = document.getElementById("menu");
menu.addEventListener("click", () => {
    const fundo = document.createElement("div")
    document.body.appendChild(fundo)
    const barra = document.createElement("div")
    barra.innerHTML = `
   <div class="sidebar">
    <i class="fa-solid fa-x btn-bk"></i>
    <div class="opcoes"><a href="../campanhas/index.html"><i class="fa-solid fa-house"></i> <span>Início</span></a></div>
    <div class="opcoes"><a href="../mapa/index.html"><i class="fa-solid fa-map-location-dot"></i> <span>Mapa</span></a></div>
    <div class="opcoes"><a href="../livro/index.html"><i class="fa-solid fa-book-open"></i> <span>Regras</span></a></div>
    <div class="opcoes"><a href="../personagens/index.html"><i class="fa-solid fa-circle-user"></i> <span>Fichas</span></a></div>
    <div class="opcoes"><a href="../relatorio/index.html"><i class="fa-solid fa-clipboard-check"></i> <span>Relatórios</span></a></div>
    <div class="opcoes"><a href="../dashboard/index.html"><i class="fa-solid fa-chart-column"></i> <span>Visão geral</span></a></div>
</div>
        `
    fundo.appendChild(barra)
    fundo.classList.add("modal-fundo")
    const botaoVoltar = barra.querySelector(".btn-bk");
    botaoVoltar.style.cursor = "pointer"
    botaoVoltar.addEventListener("click", () => {
        fundo.style.display = "none"
    });
})

