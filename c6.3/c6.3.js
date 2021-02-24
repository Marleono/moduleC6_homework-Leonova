const btn = document.querySelector('.j-btn-test');
const icon_1 = document.querySelector('.icon_1');
const icon_2 = document.querySelector('.icon_2');
btn.addEventListener('click', () => {
  if (icon_2.style.display === 'none' && icon_1.style.display === 'block') {
    icon_2.style.display = 'block';
    icon_1.style.display = 'none';
  } else {
    icon_2.style.display = 'none';
    icon_1.style.display = 'block';
  }
});
