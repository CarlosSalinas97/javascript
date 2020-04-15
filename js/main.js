$(document).ready(function(){
    //Cambiar tema
    var tema = $('#tema').attr('href')
    var localget = localStorage.getItem('tema')
    if(localget =='claro'){
        $('#tema').attr('href','css/claro.css')
    }else{
        $('#tema').attr('href','css/oscuro.css')
    }
    $('#fondo').click(function(){
        if(localStorage.getItem('tema') =='claro'){
            $('#tema').attr('href','css/oscuro.css')
            localStorage.setItem('tema','oscuro')
        }else{
            $('#tema').attr('href','css/claro.css')
            localStorage.setItem('tema','claro')
        }
    })
})