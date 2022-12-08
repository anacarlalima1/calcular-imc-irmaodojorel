const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')
const backBtn = document.querySelector("#back-btn");


const calcIMC = () => {

  if (altura.value !== '' && peso.value !== '') {
    const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
    let classification = ''
    let img = document.getElementById('img')

    if (imc >= 0 && imc < 18.5) {
      classification =
      'Você está abaixo do peso. Come abacate bem!'
      img.src = 'img/abaixo.jpg'
      document.getElementById('p').hidden = true;
      document.getElementById('box').style.background = '#F0FFF0'
      document.getElementById('altura').style.background = '#F5F5DC'
      document.getElementById('peso').style.background = '#F5F5DC'
      document.getElementById('button').style.background = '#6B8E23'
      document.getElementById('back-btn').style.background = '#6B8E23'
    } else if (imc >= 18.5 && imc < 24.9) {
      classification = 'O seu peso está normal. Parabéns!'
      img.src = 'img/normal.jpg'
      document.getElementById('p').hidden = true;
      document.getElementById('box').style.background = '#D8BFD8'
      document.getElementById('altura').style.background = '#E6E6FA'
      document.getElementById('peso').style.background = '#E6E6FA'
      document.getElementById('button').style.background = '#9370DB'
      document.getElementById('back-btn').style.background = '#9370DB'
    } else if (imc >= 25 && imc < 30) {
      classification = 'Você está acima do peso. Cuide-se!'
      img.src = 'img/acima.jpg'
      document.getElementById('p').hidden = true;
      document.getElementById('box').style.background = '#FFDEAD'
      document.getElementById('altura').style.background = '#FFEBCD'
      document.getElementById('peso').style.background = '#FFEBCD'
      document.getElementById('button').style.background = '#8B008B'
      document.getElementById('back-btn').style.background = '#8B008B'
    } else if (imc >= 35.1 && imc < 99) {
      classification = 'Você está obeso. Se cuide!'
      img.src = 'img/obeso.png'
      document.getElementById('p').hidden = true;
      document.getElementById('box').style.background = '#D8BFD8'
      document.getElementById('altura').style.background = '#B0E0E6'
      document.getElementById('peso').style.background = '#B0E0E6'
      document.getElementById('button').style.background = '#4682B4'
      document.getElementById('back-btn').style.background = '#4682B4'
    } else {
      classification 
    }
    
    resultado.innerHTML = `${imc} 
    <br/>
    ${classification}`
  } else {
    resultado.innerHTML = 'Preencha os campos'
  }
}

function cleanInputs() {
    peso.value = "";
    altura.value = "";
    resultado.value = "";
  }

backBtn.addEventListener("click", (e) => {
    window.history.go();
  });