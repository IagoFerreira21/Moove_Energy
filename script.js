/* ===============================================
   MOVE FIT — COMPORTAMENTO DO SITE
   1) Slider de destaques (autoplay + setas + bolinhas)
   2) Menu mobile (hambúrguer)
   =============================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- 1) SLIDER ---------- */
  var slides = document.querySelectorAll('.slide');
  var pontos = document.querySelectorAll('.ponto');
  var botaoEsq = document.getElementById('setaEsq');
  var botaoDir = document.getElementById('setaDir');
  var indiceAtual = 0;
  var tempoAutoplay = 5000; // troca de slide a cada 5 segundos
  var temporizador = null;

  function mostrarSlide(indice) {
    // garante que o índice sempre fique dentro do intervalo válido
    if (indice < 0) indice = slides.length - 1;
    if (indice >= slides.length) indice = 0;

    slides.forEach(function (slide) { slide.classList.remove('is-active'); });
    pontos.forEach(function (ponto) { ponto.classList.remove('is-active'); });

    slides[indice].classList.add('is-active');
    pontos[indice].classList.add('is-active');

    indiceAtual = indice;
  }

  function iniciarAutoplay() {
    pararAutoplay();
    temporizador = setInterval(function () {
      mostrarSlide(indiceAtual + 1);
    }, tempoAutoplay);
  }

  function pararAutoplay() {
    if (temporizador) clearInterval(temporizador);
  }

  if (botaoDir) {
    botaoDir.addEventListener('click', function () {
      mostrarSlide(indiceAtual + 1);
      iniciarAutoplay(); // reinicia a contagem ao clicar
    });
  }

  if (botaoEsq) {
    botaoEsq.addEventListener('click', function () {
      mostrarSlide(indiceAtual - 1);
      iniciarAutoplay();
    });
  }

  pontos.forEach(function (ponto) {
    ponto.addEventListener('click', function () {
      var indice = parseInt(ponto.getAttribute('data-slide'), 10);
      mostrarSlide(indice);
      iniciarAutoplay();
    });
  });

  // pausa o autoplay quando o mouse está sobre o slider (desktop)
  var slider = document.getElementById('slider');
  if (slider) {
    slider.addEventListener('mouseenter', pararAutoplay);
    slider.addEventListener('mouseleave', iniciarAutoplay);
  }

  if (slides.length > 1) {
    iniciarAutoplay();
  }

  /* ---------- 2) MENU MOBILE ---------- */
  var hamburguer = document.getElementById('hamburguer');
  var nav = document.getElementById('nav');

  if (hamburguer && nav) {
    hamburguer.addEventListener('click', function () {
      var aberto = nav.classList.toggle('is-aberto');
      hamburguer.setAttribute('aria-expanded', aberto ? 'true' : 'false');
    });

    // fecha o menu ao clicar em um link (melhora a navegação no celular)
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-aberto');
        hamburguer.setAttribute('aria-expanded', 'false');
      });
    });
  }

});
