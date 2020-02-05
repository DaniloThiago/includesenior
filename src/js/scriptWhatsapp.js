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

function next_parte1() {
  const body = document.querySelector('#tutorial'); 
  btnWhatsapp();
  body.classList.add("parte1");
}

function btnMessage_parte2() {
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
  
  sinalizar(style, btnLupa_parte3);
}

function btnLupa_parte3() {
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
  
  sinalizar(style, inputText_parte4);
}

function inputText_parte4() {
  let imgBtnWhats = document.querySelector('.btn-whats');
  if(!!imgBtnWhats) imgBtnWhats.remove();
  const body = document.querySelector('#tutorial');
  body.classList.remove("parte1");
  body.classList.add("parte3");
 
  const boxMessage4 = {
    text: `vamos fazer um exemplo: clique no campo de busca e digite "maria".`,
    article: {
      style:{
        width: '70%',
        padding: '80px 40px'
      }
    }
  }
  boxMessage(boxMessage4);
  
  const styleInputText = {
    top: '70px',
    left: '0',
    width: '100%',
    height: '148px'
  }
  inputTextFind('maria', styleInputText, viewMaria);

  const styleSinalizar = {
    top: '52px',
    left: 0,
    width: '100%',
    height: '180px',
    boxSizing: 'border-box'
  }
  
  sinalizar(styleSinalizar, writeMaria);
}

function writeMaria() {
  const boxMessage1 = {
    text: 'Agora digite "maria".',
    article: {
      style:{
        width: '70%',
        padding: '80px 40px'
      }
    }
  }
  boxMessage(boxMessage1, focusInput);
}

function clickMaria() {
  const boxMessage1 = {
    text: 'Agora clique no nome de "maria" para abrir a conversa com maria.',
    article: {
      style:{
        width: '70%',
        padding: '80px 40px'
      }
    }
  }
  boxMessage(boxMessage1, focusInput);
}

function viewMaria() {
  const body = document.querySelector('#tutorial');
  body.classList.remove("parte-3");
  body.classList.add("findmaria");
  clickMaria();

  const styleSinalizar = {
    top: '229px',
    left: 0,
    width: '100%',
    height: '180px',
    boxSizing: 'border-box'
  }
  
  sinalizar(styleSinalizar, maria);
}

function maria() {
  const body = document.querySelector('#tutorial');
  body.classList.remove("findmaria");
  body.classList.add("maria");

  removeInputText();
  
  const styleInputSendText = {
    bottom: '20px',
    left: '20px',
    width: '80%',
    height: '130px',
    boxSizing: 'border-box',
    borderRadius: '100px' 
  }
  inputSendText(styleInputSendText);

  const boxMessage1 = {
    text: 'vamos mandar uma mensagem para maria. cliqie no campo mensagem sinalizado.',
    article: {
      style:{
        width: '70%',
        padding: '80px 40px'
      }
    }
  }
  boxMessage(boxMessage1);

  const styleSinalizar = {
    bottom: '5px',
    left: '130px',
    width: '470px',
    height: '163px',
    boxSizing: 'border-box'
  }
  sinalizar(styleSinalizar, helloMaria);
}

function helloMaria() {
  focusInputSendText();
  const boxMessage1 = {
    text: 'agora escreva uma mensagem. exemplo: "olá, tudo bem?"',
    article: {
      style:{
        width: '70%',
        padding: '80px 40px'
      }
    }
  }
  boxMessage(boxMessage1);
}

function focusInput() {
  const input = document.querySelector('#inputText');
  input.focus();
}

function focusInputSendText() {
  const input = document.querySelector('#inputSendText');
  input.focus();
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

function inputTextFind(nome, style, callback) {
  const body = document.querySelector('#tutorial');
  const temp = document.querySelector('#inputText');
  if(!!temp) removeInputText();

  let inputText = document.createElement("input");
  inputText.setAttribute('id','inputText');  
  inputText.setAttribute('type','"text"');  
  style.position = 'absolute';
  style.boxSizing = 'border-box';
  style.textTransform = 'uppercase';
  style.padding = '0 150px';
  style.fontSize = '50px';
  Object.assign(inputText.style,style);

  inputText.addEventListener('keyup', (e)=>{
    let name = e.target.value;

    if(name.includes(nome, 0)) {
      if(!!callback) callback();
      inputText.blur();
      inputText.setAttribute('disabled','true')
    } else if(name.length == 5) {
      e.target.style.color = 'red';
    } else if(name.length < 5) {
      e.target.style.color = 'black';
    }
  })
  
  let iconBack = document.createElement("img");
  iconBack.setAttribute('id', 'ico-back');
  iconBack.setAttribute('src','./src/ico/svg/arrow_back.svg');
  let style2 = {
    position: 'absolute',
    left: '42px', top: '107px',
    zIndex: 0, width: '69px'
  };
  Object.assign(iconBack.style,style2);

  let iconClose = document.createElement("img");
  iconClose.setAttribute('id', 'ico-close');
  iconClose.setAttribute('src','./src/ico/svg/close.svg');
  let style3 = {
    position: 'absolute',
    right: '42px', top: '107px',
    zIndex: 0, width: '69px'
  };
  Object.assign(iconClose.style,style3);
  
  body.appendChild(inputText);
  body.appendChild(iconBack);
  body.appendChild(iconClose);

}

function removeInputText() {
  const input = document.querySelector('#inputText');
  const icon1 = document.querySelector('#ico-close');
  const icon2 = document.querySelector('#ico-back');
  input.remove();
  icon1.remove();
  icon2.remove();
}

function inputSendText(style, callback) {
  const body = document.querySelector('#tutorial');
  const temp = document.querySelector('#inputSendText');
  if(!!temp) {
    const back = document.querySelector('#back-ico');
    const close = document.querySelector('#close-ico');
    temp.remove();
    back.remove();
    close.remove();
  }

  let inputText = document.createElement("input");
  inputText.setAttribute('id','inputSendText');  
  inputText.setAttribute('type','text');
  inputText.setAttribute('contentEditable','true');
  style.position = 'absolute';
  style.boxSizing = 'border-box';
  style.padding = '0px 120px';
  style.fontSize = '50px';
  Object.assign(inputText.style,style);
  
  let iconBack = document.createElement("img");
  iconBack.setAttribute('src','./src/ico/svg/tag_faces.svg');
  let style2 = {
    position: 'absolute',
    left: '58px', bottom: '51px',
    zIndex: 0, width: '69px'
  };
  Object.assign(iconBack.style,style2);

  let iconAttach = document.createElement("img");
  iconAttach.setAttribute('src','./src/ico/svg/attach_file.svg');
  let style3 = {
    position: 'absolute',
    right: '312px', bottom: '49px',
    zIndex: 0, width: '69px', transform: 'rotateZ(-35deg)'
  };
  Object.assign(iconAttach.style,style3);
  
  let iconCamera = document.createElement("img");
  iconCamera.setAttribute('src','./src/ico/svg/camera_alt.svg');
  let style4 = {
    position: 'absolute',
    right: '205px', bottom: '49px',
    zIndex: 0, width: '69px'
  };
  Object.assign(iconCamera.style,style4);


  var iconSend = document.createElement("img");
  iconSend.setAttribute('src','./src/ico/svg/mic.svg');
  let divText = document.createElement("div");
  divText.classList.add("btn-send");
  divText.appendChild(iconSend);
  body.appendChild(divText);

  inputText.addEventListener('keyup', (e)=>{
    let text = e.target.value;

    if(text.length > 0) {
      iconCamera.style.opacity = 0;
      iconAttach.style.right = '212px';
      iconSend.removeAttribute('src');
      iconSend.setAttribute('src','./src/ico/svg/send.svg');
    } else if(text.length == 0) {
      iconCamera.style.opacity = 1;
      iconAttach.style.right = '312px';
      iconSend.removeAttribute('src');
      iconSend.setAttribute('src','./src/ico/svg/mic.svg');
    }
  });

  function message(text) {
    const body = document.querySelector('#tutorial');
    let article = document.createElement('article');
    let sub = document.createElement('sub');
    sub.innerHTML = getHours();
    sub.style.fontSize = '30px';
    sub.style.padding = '0 20px';
    article.innerHTML = text;
    article.classList.add('box-sendMsg');
    article.appendChild(sub);
    body.appendChild(article);
  }

  iconSend.addEventListener('click', (e)=>{
    let text = inputText.value;
    
    if(text.length > 0) {
      inputText.value = '';
      iconCamera.style.opacity = 1;
      iconAttach.style.right = '312px';
      iconSend.removeAttribute('src');
      iconSend.setAttribute('src','./src/ico/svg/mic.svg');
      inputText.setAttribute('disabled', 'true');
      message(text);
    }
  
  });

  body.appendChild(inputText);
  body.appendChild(iconBack);
  body.appendChild(iconAttach);
  body.appendChild(iconCamera);

}

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function getHours() {
  var d = new Date();
  var h = addZero(d.getHours());
  var m = addZero(d.getMinutes());
  return h + ":" + m ;
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