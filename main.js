var cifra = ''
var acumulation = 0
var sumar = false
var restar = false
var mul = false
var div = false

var acumulacionPrevia = document.getElementById('acumulacionPrevia')

function displayNumeros(numero) {
  document.getElementById('txt').value = cifra + numero

  cifra = document.getElementById('txt').value
}

function displaySuma() {
  acumulacionPrevia.innerText = cifra
  if (restar) {
    acumulation = acumulation - parseInt(cifra)
    document.getElementById('txt').value = acumulation
  } else if (mul) {
    acumulation = acumulation * parseInt(cifra)
    document.getElementById('txt').value = acumulation
  } else if (div) {
    acumulation = acumulation / parseInt(cifra)
    document.getElementById('txt').value = acumulation
  } else {
    acumulation = acumulation + parseInt(cifra)
    document.getElementById('txt').value = acumulation
  }
  cifra = ''
  sumar = true
  restar = false
  mul = false
  div = false
  restarpr = false
}

function displayResta() {
  if (restarpr == false) {
    if (sumar) {
      acumulation = acumulation + parseInt(cifra)
      document.getElementById('txt').value = acumulation
    } else if (mul) {
      acumulation = acumulation * parseInt(cifra)
      document.getElementById('txt').value = acumulation
    } else if (div) {
      acumulation = acumulation / parseInt(cifra)
      document.getElementById('txt').value = acumulation
    } else {
      acumulation = acumulation - parseInt(cifra)
      document.getElementById('txt').value = acumulation
    }
  } else {
    acumulation = parseInt(cifra)
    restarpr = false
  }
  cifra = ''
  sumar = false
  restar = true
  mul = false
  div = false
}

function displayMul() {
  if (restar) {
    acumulation = acumulation - parseInt(cifra)
    document.getElementById('txt').value = acumulation
  } else if (sumar) {
    acumulation = acumulation + parseInt(cifra)
    document.getElementById('txt').value = acumulation
  } else if (div) {
    acumulation = acumulation / parseInt(cifra)
    document.getElementById('txt').value = acumulation
  } else {
    acumulation = acumulation * parseInt(cifra)
    document.getElementById('txt').value = acumulation
  }
  cifra = ''
  mul = true
  sumar = false
  restar = false
  div = false
}

function displayDiv() {
  if (restar) {
    acumulation = acumulation - parseInt(cifra)
    document.getElementById('txt').value = acumulation
  } else if (mul) {
    acumulation = acumulation * parseInt(cifra)
    document.getElementById('txt').value = acumulation
  } else if (sumar) {
    acumulation = acumulation + parseInt(cifra)
    document.getElementById('txt').value = acumulation
  } else {
    acumulation = acumulation / parseInt(cifra)
    document.getElementById('txt').value = acumulation
  }

  cifra = ''
  mul = false
  sumar = false
  restar = false
  div = true
}

function displayEraseNum() {}

function displayResult() {
  if (sumar) {
    document.getElementById('txt').value = acumulation + parseInt(cifra)
  } else if (restar) {
    document.getElementById('txt').value = acumulation - parseInt(cifra)
  } else if (mul) {
    document.getElementById('txt').value = acumulation * parseInt(cifra)
  } else if (div) {
    document.getElementById('txt').value = acumulation / parseInt(cifra)
  }
  acumulation = parseInt(document.getElementById('txt').value)
  cifra = 0
}

function displayErase() {
  document.getElementById('txt').value = null
  cifra = ''
  acumulation = 0
  sumar = false
  restar = false
  mul = false
  div = false
}

function share() {
  prompt('Copy this link and Share: ', 'file:///C:/Users/Tzivi/Desktop/Calculadora%20en%20internet/index.html#')
}
