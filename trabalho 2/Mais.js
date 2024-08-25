const numeroSenha document.querySelector('.parametro-senha_texto');
senha.html
let tamanhoSenha 12;
style.css
numeroSenha.textContent = tamanhoSenha;
trancar.svg
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvxywz';
const numeros = '0123456789';
const simbolos = '!@%*?';
const botoes = document.querySelectorAll('.parametro-senha_botao');
const campoSenha = document.querySelector('#campo-senha'); const checkbox = document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelector('.forca');
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumenta Tamanho;
function diminuiTamanho() {
if (tamanhoSenha > 1) {
// tamanhoSenha tamanhoSenha-1;
tamanhoSenha--;
}
numeroSenha.textContent = tamanhoSenha;
> OUTLINE
geraSenha();
> TIMELINE
}
function aumenta Tamanho()
