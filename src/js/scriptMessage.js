function boxMessage(elem, func) {
  if(!!func)
    func();
  
  const body = document.querySelector('#tutorial');
  let article;
  article = document.querySelector('#tutorial .box-message');
  
  if(!!article) {
    article.innerHTML = "";
  } else {
    article = document.createElement("article");
    article.classList.add("box-message");
    body.appendChild(article);
  }

  if(!!elem.article) {
    if(!!elem.article.style) {
      Object.assign(article.style,elem.article.style);
    }
  }
  
  let divText = document.createElement("div");
  divText.classList.add("box-text");
  divText.innerHTML = elem.text.toUpperCase();
  article.appendChild(divText);

  let divBtns = document.createElement("div");
  if(!!elem.goTo || !!elem.goBack) {
    article.classList.add('no-padding-bot')
    divBtns.classList.add("box-btns");
    article.appendChild(divBtns);
  } else {
    article.classList.remove('no-padding-bot')
  }

  if(!!elem.goBack) {
    let btnBack = document.createElement("btn");
    btnBack.classList.add("btn");
    btnBack.classList.add("btn-back");
    btnBack.innerHTML = 'VOLTAR';
    btnBack.addEventListener("click", ()=>{clickButton(elem, 'goBack');});
    divBtns.appendChild(btnBack);
  }

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
  const body = document.querySelector('#tutorial');
  body.classList.remove("parte3");

  const boxMessage2 ={
    text: `primeiro clicamos no ícone da conversa (Destacado abaixo) para escolhermos a pessoa.`,
    // article: {
    //   style:{
    //     top: '-250px'
    //   }
    // }
  }

  boxMessage(boxMessage2);

  const style = {
    position: 'absolute',
    bottom: '25px',
    right: '21px',
    width: '110px',
    height: '110px',
    opacity: '0.7',
    borderRadius: '100%',
    background: 'none',
    border: '15px solid red'
  }
  
  sinalizar(style);
}

function parte3() {
  alert('Parte 03');
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

function sinalizar(style) {
  const body = document.querySelector('#tutorial');
  let botao;
  botao = document.querySelector('#tutorial .btn-sinal');
  
  
  if(!!botao) {
    botao.innerHTML = "";
  } else {
    botao = document.createElement("btn");
    botao.classList.add("btn-sinal");
    const s = {
      position: 'absolute'
    }
    Object.assign(botao.style,s);
    Object.assign(botao.style,style);
    body.appendChild(botao);
  } 
}