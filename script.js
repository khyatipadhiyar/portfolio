const navmenu = document.querySelector('.navMenu');

// hamburger.addEventListener('click',() => {
// 	navmenu.classList.toggle('show');
	
// });

function myFunction(x) {
  x.classList.toggle("change");
  navmenu.classList.toggle('show');
}