(function() {const criptoText = document.querySelector('.criptografar__box-text__text');
const criptoBtn = document.querySelector('.criptografar__box-btn__cod');
const descriptoBtn = document.querySelector('.criptografar__box-btn__descod');
const verCriptografado = document.querySelector('.descritografar__copiar');
const res = document.querySelector('.copia__resposta');
const resBtn = document.querySelector('.copia__resposta__btn');
const textoAvalidar = criptoText.value;


document.addEventListener('click', evento => {
  const el = evento.target;

  if(el.classList.contains('criptografar__box-btn__cod')) {
    let criptoTextV = criptoText.value;
    criptografar(criptoTextV);
    resCriptografia();
    console.log(criptografar(criptoTextV));
  }

  if(el.classList.contains('criptografar__box-btn__descod')) {
    let criptoTextVcopiado = criptoText.value;
    descriptografar(criptoTextVcopiado)
  }

  if(el.classList.contains('copia__resposta__btn')) {
    res.select();
    res.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(res.value);
    resBtn.innerText = "Texto copiado";
    window.setTimeout(function() {
    resBtn.innerText = "Copiar";
    }, 3500);
  }
})

function criptografar(string) {
  
  let resultado = string
  .replaceAll('a', 'ai')
  .replaceAll('e', 'enter')
  .replaceAll('i', 'imes')
  .replaceAll('o', 'ober')
  .replaceAll('u', 'ufat')

  return res.innerHTML = resultado;

}

function descriptografar(string) {
  let resultado = string
  .replaceAll('ai', 'a')
  .replaceAll('enter', 'e')
  .replaceAll('imes', 'i')
  .replaceAll('ober', 'o')
  .replaceAll('ufat', 'u')

  return res.innerHTML = resultado;
}

function resCriptografia() {
  const verCriptodUm = document.querySelector('.descriptografar__copiar__img');
  const verCriptodDois = document.querySelector('.descriptografar__copiar__img__aviso');

  if(verCriptodUm.style.display != 'none' & verCriptodDois.style.display != 'none') {
    verCriptodUm.style.display = 'none';
    verCriptodDois.style.display = 'none';
  }
  if(res.style.display != 'block' & resBtn.style.display != 'block') {
    res.style.display = 'block';
    resBtn.style.display = 'block';
  }
}})()