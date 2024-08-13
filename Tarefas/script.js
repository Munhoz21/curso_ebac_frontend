$(document).ready(function(){
    $('li').on("click",function(){
    $('li').css('text-decoration', 'line-through')
    })
    })


$('form').on('submit', function(e){
    e.preventDefault();
    const valorTarefa = $('#input-tarefa').val()
    const novaLinha = $(`<li style ="display:none">${valorTarefa}</li>`)

    $(novaLinha).appendTo('ul');
    $(novaLinha).fadeIn();
    $(novaLinha).click(function(){
        $(novaLinha).css('text-decoration', 'line-through')
    })
    $('input').val('')

})



