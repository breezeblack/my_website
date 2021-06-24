function hamburger() {
    var navon = function(){document.getElementById('nav__list').classList.toggle('nav__list-in');};
    document.getElementById('line1').classList.toggle('line_1');
    document.getElementById('line2').classList.toggle('line_2');
    document.getElementById('line3').classList.toggle('line_3');
    document.getElementById('nav').classList.toggle('in');
    setTimeout(navon, 500);
  }
  document.getElementById('menu-btn').addEventListener('click' , function () {
    hamburger();
  } );