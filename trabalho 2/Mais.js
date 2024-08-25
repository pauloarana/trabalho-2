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
function aumenta Tamanho() {
  if (tamanhoSenha < 20) {
# style.css
// tamanhoSenha tamanhoSenha+1;
trancar.svg
tamanho Senha++;
}
numeroSenha.textContent = tamanhoSenha;
geraSenha();
}
for (i = 0; i < checkbox.length; i++) {
checkbox[i].onclick = geraSenha;
}
geraSenha();
function geraSenha() {
let alfabeto = '';
if (checkbox[0].checked) {
alfabeto alfabeto + letrasMaiusculas;
}
if (checkbox[1].checked) {
> OUTLINE
alfabeto alfabeto + letrasMinusculas;
}
if (checkbox[2].checked) {
ancar.svg
alfabeto alfabeto numeros
if (checkbox[3].checked) (
alfabeto alfabeto simboloss
}
let senha
for (let 10514 tamanhosenhas 1++) {
let numeroAleatorio Math.random() alfabeto.length;
numeroAleatorie Math.floor(numeroAleatorio)s senha senha + alfabeto [numeroAleatorio);
camposenha.value = senhas classificasenha(alfabeto.length);
function classificaSenha(tamanhoAlfabeto) {
let entropia tamanhosenha Math.log2(tamanhoAlfabeto); console.log(entropia);
forcasenha.classList.remove('fraca', 'media', 'forte');
if (entronias 571/
