const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  let width = document.documentElement.clientWidth;
  let height = document.documentElement.clientHeight;
  alert(`Размер вашего экрана = ${width} х ${height}`);
});