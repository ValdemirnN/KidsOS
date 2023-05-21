var btnMenu = document.getElementById('btn-menu');
var nav = document.getElementById('nav');

btnMenu.addEventListener('click', function(){
   // alert('Menu de Pagina');
    nav.classList.toggle('mostrar');
});