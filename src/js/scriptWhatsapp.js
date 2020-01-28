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

function menu() {
  alert('Go To Menu');
}

function parte1() {
  const body = document.querySelector('#tutorial'); 
  btnWhatsapp();
  body.classList.add("parte1");
}

function parte2() {
  const body = document.querySelector('#tutorial');
  body.classList.remove("parte3");
  btnWhatsapp();
  const boxMessage2 ={
    text: `primeiro clicamos no ícone da conversa (Destacado abaixo) para escolhermos a pessoa.`,
  }

  boxMessage(boxMessage2);

  const style = {
    bottom: '25px',
    right: '21px',
    width: '110px',
    height: '110px',
    borderRadius: '100%'    
  }
  
  sinalizar(style, parte3);
}

function parte3() {
  let imgBtnWhats = document.querySelector('.btn-whats');
  if(!!imgBtnWhats) imgBtnWhats.remove();
  const body = document.querySelector('#tutorial');
  body.classList.remove("parte1");
  body.classList.add("parte3");
 
  const boxMessage3 ={
    text: `estamos na lista de contatos do whatsapp.<br><br>agora podemos procurar pelo nome da pessoa clicando no ícone de busca.`,
    article: {
      style:{
        width: '70%',
        padding: '20px'
      }
    }
  }

  boxMessage(boxMessage3);

  const style = {
    top: '50px',
    right: '82px',
    width: '90px',
    height: '90px',
    borderRadius: '100%'    
  }
  
  sinalizar(style, parte4);
}

function parte4() {
  let imgBtnWhats = document.querySelector('.btn-whats');
  if(!!imgBtnWhats) imgBtnWhats.remove();
  const body = document.querySelector('#tutorial');
  body.classList.remove("parte1");
  body.classList.add("parte3");
 
  const boxMessage4 ={
    text: `vamos fazer um exemplo: clique no campo de busca e digite "maria".`,
    article: {
      style:{
        width: '70%',
        padding: '80px 40px'
      }
    }
  }

  boxMessage(boxMessage4);

  const style = {
    top: '50px',
    right: '82px',
    width: '90px',
    height: '90px',
    borderRadius: '100%'    
  }
  
  sinalizar(style, parte4);
}


function sinalizar(style, event) {
  const body = document.querySelector('#tutorial');
  let botao;
  botao = document.querySelector('#tutorial .btn-sinal');
  
  
  if(!!botao) {
    botao.innerHTML = "";
  } else {
    botao = document.createElement("btn");
    botao.classList.add("btn-sinal");
    botao.addEventListener('click', ()=> {
      botao.remove();
      if(!!event)
        event();
    });
    style.opacity = '0.7';
    style.position = 'absolute';
    style.background = 'none';
    style.border = '15px solid red';
    Object.assign(botao.style,style);
    body.appendChild(botao);
  } 
}

function btnWhatsapp() {
  const body = document.querySelector('#tutorial');
  let imgBtnWhats = document.querySelector('.btn-whats');
  
  if(!!imgBtnWhats) return;
  
  imgBtnWhats = document.createElement("img");
  imgBtnWhats.classList.add("btn-whats");
  imgBtnWhats.setAttribute('style',`position: absolute; bottom: 40px; right: 35px;
  width:  170px;height: 170px;background-repeat: no-repeat;background-size: 100% 100%;`)  
  imgBtnWhats.setAttribute('src', './src/img/whats/btn-msg.png');
  body.appendChild(imgBtnWhats);
}