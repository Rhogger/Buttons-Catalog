const btnRipple = document.querySelector('.btn-ripple');

btnRipple.onmousemove = function (e) {
  const x = e.pageX - btnRipple.offsetLeft;
  const y = e.pageY - btnRipple.offsetTop;

  btnRipple.style.setProperty('--x', x + 'px');
  btnRipple.style.setProperty('--y', y + 'px');
}