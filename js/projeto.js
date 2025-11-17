function inicializarProjeto() {

    // Pegando elementos da interface
    const ci = document.getElementById("checkInput");
    const di = document.getElementById("dateInput");
    const ti = document.getElementById("timeInput");

    if (!ci || !di || !ti) {
        console.warn("⚠️ Elementos do projeto não encontrados.");
        return;
    }

    // Desabilita inputs inicialmente
    di.disabled = true;
    ti.disabled = true;

    // Habilita/desabilita quando marcar agendamento
    ci.addEventListener('input', function () {
        di.disabled = !ci.checked;
        ti.disabled = !ci.checked;
    });

    // =============================
    //   Função SALVAR TAREFA
    // =============================
    window.salvarTask = function () {

        if (ci.checked) {

            if (!di.value || !ti.value) {
                alert("Preencha a data e hora para agendar a tarefa");
                return;
            }

            const agora = new Date();
            const dataAgendada = new Date(`${di.value}T${ti.value}`);

            if (dataAgendada <= agora) {
                alert("Data e hora devem ser maiores que a data e hora atual!");
                di.focus();
                return;
            }

            // Criando nova tarefa
            criarTarefa(true);

        } else {
            criarTarefa(false);
        }
    };

    // =============================
    //   Função CANCELAR
    // =============================
    window.cancelaTask = function () {
        document.getElementById("taskInput").value = "";
        document.getElementById("taskInput").focus();
    };

    // =============================
    //   Função CRIAR TAREFA
    // =============================
    function criarTarefa(agendada) {

        const p = document.getElementById("all-tasks");

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('all-tasks-cb');

        // Data atual
        const agora = new Date();
        const ano = agora.getFullYear();
        const mes = String(agora.getMonth() + 1).padStart(2, '0');
        const dia = String(agora.getDate()).padStart(2, '0');

        const dataFormatada = `${ano}-${mes}-${dia}`;

        const dataTask = document.createElement('input');
        dataTask.type = 'date';
        dataTask.value = dataFormatada;
        dataTask.readOnly = true;
        dataTask.classList.add("task-date");

        // Tarefa
        const inputTask = document.createElement('input');
        inputTask.type = 'text';
        inputTask.value = document.getElementById('taskInput').value;
        inputTask.readOnly = true;
        inputTask.classList.add("task-text");

        // Se tarefa agendada
        let inputSchT, inputDataSch, inputThour;

        if (agendada) {
            inputSchT = document.createElement('input');
            inputSchT.type = 'text';
            inputSchT.value = "Tarefa Agendada para";
            inputSchT.readOnly = true;
            inputSchT.classList.add("task-ag-label");

            inputDataSch = document.createElement('input');
            inputDataSch.type = 'date';
            inputDataSch.value = di.value;
            inputDataSch.readOnly = true;
            inputDataSch.classList.add("data-agendada");

            inputThour = document.createElement('input');
            inputThour.type = 'time';
            inputThour.value = ti.value;
            inputThour.readOnly = true;
            inputThour.classList.add("hora-agendada");
        }

        // Botões
        const btnEdit = document.createElement('button');
        btnEdit.textContent = 'Editar';
        btnEdit.classList.add("btn-edit");

        const btnSave = document.createElement('button');
        btnSave.textContent = 'Salvar';
        btnSave.classList.add("btn-save");

        const btnCancel = document.createElement('button');
        btnCancel.textContent = 'Cancelar';
        btnCancel.classList.add("btn-cancel");

        const quebra = document.createElement('br');

        // Montando na tela
        p.appendChild(checkbox);
        p.appendChild(dataTask);
        p.appendChild(inputTask);

        if (agendada) {
            p.appendChild(inputSchT);
            p.appendChild(inputDataSch);
            p.appendChild(inputThour);
        } else {
            const lbl = document.createElement('input');
            lbl.value = 'Tarefa Criada';
            lbl.readOnly = true;
            lbl.classList.add("lbl-criada");
            p.appendChild(lbl);
        }

        p.appendChild(btnEdit);
        p.appendChild(btnSave);
        p.appendChild(btnCancel);
        p.appendChild(quebra);

        // Resetando campos
        document.getElementById("taskInput").value = "";
        ci.checked = false;
        di.value = "";
        ti.value = "";
        di.disabled = true;
        ti.disabled = true;
        document.getElementById("taskInput").focus();
    }

    // =============================
    //   Verificar tarefas agendadas
    // =============================
    function verificarTarefasAG() {

        const datas = document.querySelectorAll('.data-agendada');
        const horas = document.querySelectorAll('.hora-agendada');
        const agora = new Date();

        for (let i = 0; i < datas.length; i++) {
            const data = datas[i].value;
            const hora = horas[i].value;

            const dataHora = new Date(`${data}T${hora}`);

            if (!datas[i].dataset.alertado && dataHora <= agora) {
                const [ano, mes, dia] = data.split('-');
                alert(`A tarefa agendada para ${dia}/${mes}/${ano} às ${hora} chegou!`);

                datas[i].dataset.alertado = 'true';
            }
        }
    }

    // Verificar a cada 5 segundos
    setInterval(verificarTarefasAG, 5000);

} // fim da função inicializarProjeto
