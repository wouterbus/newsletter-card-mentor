var body = document.getElementsByTagName('body')
document.body.style.display = 'flex'
document.body.style.justifyContent = 'center'
document.body.style.alignItems = 'center'
document.body.style.padding = '0'
document.body.style.height = '100vh'
document.body.style.backgroundColor = '#242742'
document.body.style.fontFamily = '"Roboto", sans-serif'

 
var container = document.createElement('div') 
container.classList.add('container')
container.style.display = 'flex'
container.style.flexDirection = 'row'
container.style.justifyContent = 'space-between'
container.style.backgroundColor = '#fff'
container.style.padding = '14px'
container.style.borderRadius = '20px'
container.style.width = '800px'

var colLeft = document.createElement('div')
colLeft.classList.add('mobile-w')
colLeft.style.margin = '30px'
colLeft.style.width = '100%'
colLeft.style.display = 'flex'
colLeft.style.flexDirection = 'column'
colLeft.style.justifyContent = 'center'

var title = document.createElement('h1')
title.textContent = 'Stay updated!'
title.style.color = '#242742'
title.style.fontSize = '40px'
title.style.margin = '0'

var subtitle = document.createElement('p')
subtitle.textContent = 'Join 60,000+ product managers receiving monthly updates on:'
subtitle.style.color = '#36384e'

var ul = document.createElement('ul')
ul.style.paddingLeft = '22px'
ul.style.color = '#36384e'

var li1 = document.createElement('li')
li1.style.listStyleImage = 'url(./assets/images/icon-list.svg)'
li1.style.marginBottom = '8px'

var li2 = document.createElement('li')
li2.style.listStyleImage = 'url(./assets/images/icon-list.svg)'
li2.style.marginBottom = '8px'

var li3 = document.createElement('li')
li3.style.listStyleImage = 'url(./assets/images/icon-list.svg)'
li3.style.marginBottom = '8px'

var span_list_first = document.createElement('span')
span_list_first.textContent = 'Product discovery and building what matters'
span_list_first.style.position = 'relative'
span_list_first.style.top = '-4px'
span_list_first.style.left = '4px'

var span_list_second = document.createElement('span')
span_list_second.textContent = 'Measuring to ensure updates are a success'
span_list_second.style.position = 'relative'
span_list_second.style.top = '-4px'
span_list_second.style.left = '4px'

var span_list_tirth = document.createElement('span')
span_list_tirth.textContent = 'And much more!'
span_list_tirth.style.position = 'relative'
span_list_tirth.style.top = '-4px'
span_list_tirth.style.left = '4px'

var label = document.createElement('label')
label.textContent = 'Email address'
label.setAttribute('for', 'input')
label.style.display = 'block'
label.style.color = '#242742'
label.style.fontWeight = '700'
label.style.fontSize = '16px'
label.style.lineHeight = '30px'

var errorLabel = document.createElement('span')
errorLabel.classList.add('error-label')
errorLabel.setAttribute('for', 'input')
errorLabel.textContent = 'Valid email required'
errorLabel.style.textAlign = 'right'
errorLabel.style.marginTop = '-25px'
errorLabel.style.marginBottom = '10px'
errorLabel.style.fontWeight = '700'
errorLabel.style.color = 'tomato'
errorLabel.style.display = 'none'

var input = document.createElement('input')
input.setAttribute('onkeydown', 'validation()')
input.setAttribute('id', 'email')
input.setAttribute('placeholder', 'email@company.com')
input.setAttribute('type', 'email')
input.setAttribute('autocomplete', 'off')
input.style.display = 'inline-block'
input.style.width = '100%'
input.style.color = '#36384e'
input.style.border = '1px solid #ccc'
input.style.height = '54px'
input.style.padding = '10px'
input.style.paddingLeft = '20px'
input.style.fontSize = '16px'
input.style.borderRadius = '6px'
input.style.fontFamily = 'inherit'
input.style.position = 'relative'

var submit = document.createElement('button')
submit.innerText = 'Subscribe to monthly newsletter'
submit.style.color = '#fff'
submit.style.backgroundColor = '#242742'
submit.style.width = '100%'
submit.style.border = 'none'
submit.style.height = '56px'
submit.style.fontFamily = 'inherit'
submit.style.fontSize = '16px'
submit.style.fontWeight = '700'
submit.style.borderRadius = '6px'
submit.style.marginTop = '10px'
submit.style.cursor = 'pointer'

submit.addEventListener('mouseenter', () => {
    submit.style.background = 'rgb(236,96,123)'
    submit.style.background = 'linear-gradient(90deg, rgba(236,96,123,1) 0%, rgba(255,98,87,1) 50%, rgba(237,113,75,1) 100%)'
    submit.style.boxShadow = '0px 15px 30px rgba(255, 0, 0, .4)'
})

submit.addEventListener('mouseleave', () => {
    submit.style.background = '#242742'
    submit.style.boxShadow = 'none'
})



var colRight = document.createElement('div')
colRight.innerHTML = `
<style>
@media (max-width:725px) {
  .img-m {
    display: block;
  }
  .img-d {
    display: none;
  }
}

@media (min-width:726px) {
  .img-m {
    display: none;
  }
  .img-d {
    display: block;
  }
}
</style>

<img class="img-m" src="./assets/images/illustration-sign-up-mobile.svg" alt="img mobile">

<img class="img-d" width="350" src="./assets/images/illustration-sign-up-desktop.svg" alt="img desktop">
`
colRight.style.BackgroundImage = './assets/images/illustration-sign-up-desktop.svg'

function validation() {
  let email = document.getElementById('email').value
  let text = document.getElementById('text')
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

  if (email.match(pattern)) {
    input.classList.remove('invalid')
    errorLabel.style.display = 'none'
    submit.removeAttribute('disabled')
    submit.classList.remove('disabled')
  } else {
    input.classList.add('invalid')
    errorLabel.style.display = 'block'
    submit.setAttribute('disabled', 'disabled')
    submit.classList.add('disabled')
  }

  if (email == '') {
    form.classList.remove('valid')
    form.classList.remove('invalid')
    submit.setAttribute('disabled', 'disabled')
  }
}

submit.addEventListener('click', () => {
    container.style.display = 'none'
    containerSuccess.style.display = 'block'
    document.getElementById('emailPlaceholder').textContent = document.getElementById('email').value
})

var containerSuccess = document.createElement('div')
containerSuccess.style.display = 'none'
containerSuccess.style.backgroundColor = '#fff'
containerSuccess.style.padding = '50px'
containerSuccess.style.maxWidth = '400px'
containerSuccess.style.borderRadius = '20px'

var iconSuccess = document.createElement ('div')
iconSuccess.innerHTML = `
<img width="40" src="./assets/images/icon-list.svg" alt="image icon">
`

var titleSuccess = document.createElement('div')
titleSuccess.innerHTML = `
<h1 style="color:#242742">Thanks for Subscribing!</h1>
<p>A confirmation email has been sent to <b id="emailPlaceholder"></b>. Please open it and click the button inside to confirm your subscription.</p>
`


var submit2 = document.createElement('button')
submit2.innerText = 'Dismiss message'
submit2.style.color = '#fff'
submit2.style.backgroundColor = '#242742'
submit2.style.width = '100%'
submit2.style.border = 'none'
submit2.style.height = '56px'
submit2.style.fontFamily = 'inherit'
submit2.style.fontSize = '16px'
submit2.style.fontWeight = '700'
submit2.style.borderRadius = '6px'
submit2.style.marginTop = '10px'
submit2.style.cursor = 'pointer'

submit2.addEventListener('mouseenter', () => {
  submit2.style.background = 'rgb(236,96,123)'
  submit2.style.background = 'linear-gradient(90deg, rgba(236,96,123,1) 0%, rgba(255,98,87,1) 50%, rgba(237,113,75,1) 100%)'
  submit2.style.boxShadow = '0px 15px 30px rgba(255, 0, 0, .4)'
})

submit2.addEventListener('mouseleave', () => {
  submit2.style.background = '#242742'
  submit2.style.boxShadow = 'none'
})

container.appendChild(colLeft)
colLeft.appendChild(title)
colLeft.appendChild(subtitle)
colLeft.appendChild(ul)
ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)
li1.appendChild(span_list_first)
li2.appendChild(span_list_second)
li3.appendChild(span_list_tirth)
colLeft.appendChild(label)
colLeft.appendChild(errorLabel)
colLeft.appendChild(input)
colLeft.appendChild(submit)
container.appendChild(colRight)
containerSuccess.appendChild(iconSuccess)
containerSuccess.appendChild(titleSuccess)
containerSuccess.appendChild(submit2)
document.body.appendChild(container)
document.body.appendChild(containerSuccess)