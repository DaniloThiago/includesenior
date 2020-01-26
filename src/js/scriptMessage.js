function boxMessage(elem) {
  elem.atual();

  const body = document.querySelector('#tutorial');
  
  let article = document.createElement("article");
  article.classList.add("box-message");
  body.appendChild(article);
  
  let divText = document.createElement("div");
  divText.classList.add("box-text");
  divText.innerHTML = elem.text.toUpperCase();
  article.appendChild(divText);

  let divBtns = document.createElement("div");
  if(!!elem.goTo || !!elem.goBack) {
    article.classList.add('no-padding-bot')
    divBtns.classList.add("box-btns");
    article.appendChild(divBtns);
  }

  if(!!elem.goBack) {
    let btnBack = document.createElement("btn");
    btnBack.classList.add("btn");
    btnBack.classList.add("btn-back");
    btnBack.innerHTML = 'VOLTAR';
    btnBack.addEventListener("click", ()=>{clickButton(elem, 'goBack');});
    divBtns.appendChild(btnBack);
  }

  // let pipper = document.createElement("text");
  // pipper.innerHTML = '|';
  // divBtns.appendChild(pipper);

  if(!!elem.goTo) {
    let btnGo = document.createElement("btn");
    btnGo.classList.add("btn");
    btnGo.classList.add("btn-go");
    btnGo.innerHTML = "AVANÇAR";
    btnGo.addEventListener("click", ()=>{clickButton(elem, 'goTo');});
    divBtns.appendChild(btnGo);
  }

}

function menu() {
  alert('Go To Menu');
}

function parte1() {
  const body = document.querySelector('#tutorial');
  body.classList.add("parte1");
}

function parte2() {
  alert('Go To Parte 2');
}


function clickButton(elem, action) {
  switch (action) {
    case 'goBack':
      elem.goBack();
      break;
    case 'goTo':
      elem.goTo();
      break;
  }
}