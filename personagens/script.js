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
    botaoVoltar.style.cursor = "pointer";
    botaoVoltar.addEventListener("click", () => {
        fundo.style.display = "none";
    });
})

const add = document.getElementById("add");
add.addEventListener("click", () => {

    const fundo = document.createElement("div")
    fundo.classList.add("modal-fundo")
    const modal = document.createElement("div")
    modal.classList.add("modal-caixa")
    modal.innerHTML = `
         <div class="modal-container">
        <button class="btn-back" onclick=fechaModal()><i class="fa-solid fa-arrow-left"></i></button>

        <div class="modal-content">

            <div class="left-column">
                <div class="input-group">
                    <label>Nome</label>
                    <input type="text">
                </div>
                <div class="input-group">
                    <label>Idade</label>
                    <input type="text">
                </div>
                <div class="input-group">
                    <label>Classe</label>
                    <input type="text">
                </div>
                <div class="input-group">
                    <label>Raça</label>
                    <input type="text">
                </div>
            </div>

            <div class="grid-sections">
                <div class="section-box">
                    <h3>Inventário</h3>
                    <textarea class="white-box" placeholder="Itens e equipamentos..."></textarea>
                </div>
                <div class="section-box">
                    <h3>Origem</h3>
                    <textarea class="white-box" placeholder="História do personagem..."></textarea>
                </div>
                <div class="section-box">
                    <h3>Status</h3>
                    <textarea class="white-box" placeholder="HP, Mana, Estamina..."></textarea>
                </div>
                <div class="section-box">
                    <h3>Poderes/skills</h3>
                    <textarea class="white-box" placeholder="Habilidades especiais..."></textarea>
                </div>
            </div>

        </div>

        <div class="footer">
            <button class="btn-save">Salvar</button>
        </div>
    </div>
    `;
    fundo.appendChild(modal)
    document.body.appendChild(fundo)

    const botaoVoltar = modal.querySelector(".btn-back");
    botaoVoltar.addEventListener("click", () => {
        fundo.style.display = "none";
    });

    const botaoSalvar = modal.querySelector(".btn-save");
    botaoSalvar.addEventListener("click", () => {
        alert("Ficha salva com sucesso!");
        fundo.style.display = "none";
    });

})

const btns = document.querySelectorAll(".categoria-btn");
btns.forEach(btn => {
    btn.addEventListener("click", () => {
        btns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
    });
});

const deleteBtns = document.querySelectorAll(".excluir");
deleteBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const fundo = document.createElement("div")
        fundo.classList.add("modal-fundo")
        const modal = document.createElement("div")
        modal.classList.add("modal-caixa")
        modal.innerHTML = `<div class="modal-container modal-delete">

    <div class="modal-content-delete">
        <div class="icon-warning">
            <i class="fa-solid fa-triangle-exclamation"></i>
        </div>
        
        <div class="text-group-delete">
            <h2>Confirmar Exclusão?</h2>
            <p>Você está prestes a apagar este personagem. Esta ação não pode ser desfeita.</p>
        </div>
    </div>

    <div class="footer-delete">
        <button class="btn-cancel">Cancelar</button>
        <button class="btn-confirm-delete">Excluir Permanentemente</button>
    </div>
</div>`

        fundo.appendChild(modal)
        document.body.appendChild(fundo)

        const botaoVoltar = modal.querySelector(".btn-cancel");
        botaoVoltar.addEventListener("click", () => {
            fundo.style.display = "none";
        });

        const botaoSalvar = modal.querySelector(".btn-confirm-delete");
        botaoSalvar.addEventListener("click", () => {
            alert("Personagem excluído com sucesso!");
            fundo.style.display = "none";
        });

    })


})