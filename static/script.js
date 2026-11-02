const btn = document.getElementById('botao_submeter');
const autor = document.getElementById('autor');
const campus = document.getElementById('campus');
const modalidade = document.getElementById('modalidade');
const titulo = document.getElementById('titulo');
const resumo = document.getElementById('resumo');

const aviso = document.getElementById('aviso');
const aviso_bg = document.getElementById('aviso_bg');

btn.addEventListener('click', function(e) {
    e.preventDefault();

    btn.disabled = true
    validar()
})

function validar() {
    if (autor.value == "" || campus.value == "" || modalidade.value == "" || titulo.value == "" || resumo.value == "") {
        aviso.innerHTML = "Preencha todos os campos.";
        aviso.classList.add('text-danger');
        aviso_bg.style.backgroundColor = '#ffcccc';
    } else {
        aviso.textContent = "Formulário enviado com sucesso!";
        aviso.classList.remove('text-danger');
        aviso.classList.add('text-success');
        aviso_bg.style.backgroundColor = '#ccffcc';
        enviar()
    }
    btn.disabled = false
}

async function enviar() {
    const trabalho = {
        "autor":autor.value, 
        "titulo":titulo.value, 
        "modalidade":modalidade.value, 
        "campus":campus.value, 
        "resumo":resumo.value
    }

    fetch('/novo_trabalho', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(trabalho)
    }).then(response => response.json()).then(data => {
        redireciona()
    })
    .catch(error => {
        console.error('Erro:', error);
    });
}

function redireciona() {
    setTimeout(() => {
        window.location.href = '/';
    }, 1500);
}