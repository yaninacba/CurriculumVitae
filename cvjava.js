
document.getElementById('laboral').addEventListener('click',function(){
    document.getElementById('texto1').style.display='none';
});
document.getElementById('estudios').addEventListener('click',function(){
    document.getElementById('texto2').style.display='none';
});
document.getElementById('contacto').addEventListener('click',function(){
    document.getElementById('texto3').style.display='none';
});

element.addEvenListener('click', ()=> {
  document.getElementById('texto1').classList.toggle(''togle);
})

