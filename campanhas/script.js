const add = document.getElementById('add')
add.addEventListener('click', function(){
    const fundo = document.createElement("div")
        fundo.classList.add("modal-fundo")
        const modal = document.createElement("div")
        modal.classList.add("modal-caixa")
        modal.innerHTML = `
        <div class="modal-container modal-enredo">
    <button class="btn-back" onclick="fechaModal()">
        <i class="fa-solid fa-arrow-left"></i>
    </button>

    <div class="modal-content-enredo">
        <div class="input-group-enredo">
            <label>Nome da campanha</label>
            <input type="text" placeholder="Nome da campanha aqui...">
        </div>

        <div class="input-group-enredo">
            <label>Modelo de sistema</label>
            <input type="text" placeholder="Sistema base">
        </div>


            </div>
        </div>
    </div>

    <div class="footer-enredo">
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
            alert("Campanha salva com sucesso!");
            fundo.style.display = "none";
        });
})

const edits = document.querySelectorAll(".edit");

edits.forEach((edit) => {
    edit.addEventListener("click", () => {
        const fundo = document.createElement("div")
        fundo.classList.add("modal-fundo")
        const modal = document.createElement("div")
        modal.classList.add("modal-caixa")
        modal.innerHTML = `
        <div class="modal-container modal-enredo">
    <button class="btn-back" onclick="fechaModal()">
        <i class="fa-solid fa-arrow-left"></i>
    </button>

    <div class="modal-content-enredo">
        <div class="input-group-enredo">
            <label>Nome da campanha</label>
            <input type="text" placeholder="Nome da campanha aqui...">
        </div>

        <div class="input-group-enredo">
            <label>Modelo de sistema</label>
            <input type="text" placeholder="Sistema base">
        </div>


            </div>
        </div>
    </div>

    <div class="footer-enredo">
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
            alert("Campanha salva com sucesso!");
            fundo.style.display = "none";
        });
    })
});