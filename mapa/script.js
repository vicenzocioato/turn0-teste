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



const bg = document.getElementById("bg");

bg.addEventListener("click", () => {
    const fundo = document.createElement("div");
    fundo.classList.add("modal-fundo");
    
    const modal = document.createElement("div");
    modal.classList.add("modal-caixa");
    
    modal.innerHTML = `
        <div class="modal-container">
            <button class="btn-back"><i class="fa-solid fa-arrow-left"></i></button>

            <div class="modal-content">
                <div class="left-column">
                    <div class="input-group">
                        <label>URL do fundo</label>
                        <input type="text" class="input-url" placeholder="Cole o link da imagem aqui...">
                    </div>
                </div>

                <div class="footer">
                    <button class="btn-save">Salvar</button>
                </div>
            </div>
        </div>
    `;
    
    fundo.appendChild(modal);
    document.body.appendChild(fundo);

    const inputUrl = modal.querySelector(".input-url");
    const botaoVoltar = modal.querySelector(".btn-back");
    const botaoSalvar = modal.querySelector(".btn-save");

    const fecharModal = () => {
        fundo.remove();
    };

    botaoVoltar.addEventListener("click", fecharModal);

    botaoSalvar.addEventListener("click", () => {
        const urlValue = inputUrl.value.trim();
        const divFundo = document.getElementById("fundo"); 

        if (urlValue !== "") {
            divFundo.style.backgroundImage = `url('${urlValue}')`;
            divFundo.style.backgroundSize = "cover";
            divFundo.style.backgroundPosition = "center";
            divFundo.style.backgroundRepeat = "no-repeat";
            
            fecharModal(); // Fecha o modal após salvar
        } else {
            alert("Por favor, insira uma URL válida.");
        }
    });
});