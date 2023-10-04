const placar = document.querySelector('.placar');
const selecao = document.querySelector('#maximo');
const botao1 = document.querySelector('#botao1');
const botao2 = document.querySelector('#botao2');
const reset = document.querySelector('#reset');
const jog1 = document.querySelector('#jog1');
const jog2 = document.querySelector('#jog2');

let maximo = [0, 5, 10, 15, 20, 25];
let selecionado = 0;

let pontos1 = 0;
let pontos2 = 0;

let jogando = true;

function resetar() {
    pontos1 = 0;
    pontos2 = 0;
    jogando = true;
    jog1.innerHTML = `${pontos1}`;
    jog2.innerHTML = `${pontos2}`;
    jog1.style.color = "black";
    jog2.style.color = "black";
}

// Preechendo a seleção de placar máximo
for (let i = 0; i < maximo.length; i++) {
    let option = document.createElement('option');
    option.value = maximo[i];
    option.innerText = maximo[i];
    selecao.appendChild(option);
}

selecao.addEventListener('change', (e) => {
    selecionado = Number(e.target.value);
    resetar();
});

botao1.addEventListener('click', () => {
    if (jogando){
        pontos1++;
        jog1.innerHTML = `${pontos1}`;
        if (pontos1 === selecionado){
            jog1.style.color = "green";
            jog2.style.color = "red";
            jogando = false;
        }
    }
});

botao2.addEventListener('click', () => {
    if (jogando){
        pontos2++;
        jog2.innerHTML = `${pontos2}`;
        if(pontos2 === selecionado){
            jog2.style.color = "green";
            jog1.style.color = "red";
            jogando = false;
        }
    }
});

reset.addEventListener('click', resetar);