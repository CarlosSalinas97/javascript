$(document).ready(function(){
    //Contador de palabras
    //DEL es 8
    var txt = $('#txtbox_form')
    var cont = $('#contador')
    txt.keydown(function(e){
        if(e.which == 8 && txt.val().length == 0){
            cont.text('0')
        }else if(e.which == 8){
            cont.text((txt.val().length)-1)
        }else{
            cont.text((txt.val().length)+1)
        }
    })
    txt.keyup(function(){
        if(txt.val() == ''){
            cont.text('0') 
        }
    })
})