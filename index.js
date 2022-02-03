function AddBegin(ling) {
  ling.classList.add('Begin');
}
function RemBegin(ling) {
  ling.classList.remove('Begin');
}

function AddEnd(ling) {
  ling.classList.add('end');
}
function RemEnd(ling) {
  ling.classList.remove('end');
}

// begin
const begin = document.querySelector('.begin');
const beginId = document.querySelector('.beginId');
const mario = document.querySelector('.mario');

function BeginEnd() {
  AddEnd(begin);

  function RemoveBegin() {
    beginId.style.display = 'none';
    RemEnd(begin);
    nav.style.display = 'flex';
  }
  setTimeout(RemoveBegin, 1900);
}

// nav
const nav = document.getElementById('nav');

//inicio
const inicio = document.querySelector('#inicio');
const sobre = document.querySelector('#sobre');
const portifolio = document.querySelector('#portifolio');
const contato = document.querySelector('#contato');

function Inicio() {
  AddEnd(sobre);
  AddEnd(portifolio);
  AddEnd(contato);

  setTimeout(() => {
    nav.style.display = 'none';
    beginId.style.display = 'flex';

    RemEnd(sobre);
    RemEnd(portifolio);
    RemEnd(contato);
  }, 1900);
}
//sobre
const about = document.querySelector('#about');

function About() {
  AddEnd(inicio);
  AddEnd(portifolio);
  AddEnd(contato);

  setTimeout(() => {
    AddBegin(about);
    nav.style.display = 'none';
    imgMe.style.opacity = '1';
    imgMe.classList.remove('img-meAnimation');
    about.style.display = 'flex';

    RemEnd(inicio);
    RemEnd(portifolio);
    RemEnd(contato);
  }, 1900);
}
//voltar
const voltar = document.querySelector('#voltar');

function Voltar() {
  about.style.display = 'none';
  portfolio.style.display = 'none';
  souBom.style.display = 'none';
  nav.style.display = 'flex';
}

//sou bom em
const imgMe = document.querySelector('.img-me');
const souBom = document.querySelector('.souBom');
const react = document.querySelector('.react');
const vue = document.querySelector('.vue');
const bootstrap = document.querySelector('.bootstrap');
const c = document.querySelector('.c');
const dotnet = document.querySelector('.dotnet');
const word = document.querySelector('.word');

function img() {
  imgMe.classList.add('img-meAnimation');
  souBom.style.display = 'flex';

  setTimeout(() => {
    imgMe.style.opacity = '0';
  }, 2000);

  function timeLing(ling, text, cor, time) {
    setTimeout(() => {
      ling.textContent = text;
      ling.style.color = cor;
    }, time);
  }

  timeLing(react, 'React 67%', '#67ced7', 1000);
  timeLing(vue, 'Vue 60%', '#3fb17f', 2000);
  timeLing(bootstrap, 'Bootstrap 73%', '#8413ef', 3000);
  timeLing(c, 'C# 50%', '#92458b', 4000);
  timeLing(dotnet, 'DotNet 55%', '#127dbe', 5000);
  timeLing(word, 'WordPress 60%', '#1f6f93', 6000);
}

//portfolio
const portfolio = document.querySelector('#portfolio');

function Portfolio() {
  AddEnd(inicio);
  AddEnd(sobre);
  AddEnd(contato);
  setTimeout(() => {
    portfolio.style.display = 'flex';
    nav.style.display = 'none';
    RemEnd(inicio);
    RemEnd(sobre);
    RemEnd(contato);
    AddBegin(portfolio);
  }, 1900);
}

//voltar2
const voltar2 = document.querySelector('.voltar2');

function Voltar2() {
  about.style.display = 'none';
  portfolio.style.display = 'none';
  souBom.style.display = 'none';
  nav.style.display = 'flex';
}
//contato
const contact = document.querySelector('#contact');

function Contato() {
  AddEnd(inicio);
  AddEnd(sobre);
  AddEnd(portifolio);

  setTimeout(() => {
    AddBegin(contact);
    nav.style.display = 'none';
    contact.style.display = 'flex';
    RemEnd(inicio);
    RemEnd(sobre);
    RemEnd(portifolio);
  }, 1900);
}

//voltar3
const voltar3 = document.querySelector('.voltar3');

function Voltar3() {
  contact.style.display = 'none';
  nav.style.display = 'flex';
}
