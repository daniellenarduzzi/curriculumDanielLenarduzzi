$(document).ready(function(){
    $(".botoncurri").click(function(){
        $(".artcurri").hide();
        console.log($('#test').prop('id')));
        $("article#"+$('#test').prop('id')).show();
    });
});
