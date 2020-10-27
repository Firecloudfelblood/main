
function show_modal(target, title, size) {
    $('#modal').removeData('bs.modal');
    $('.modal-content').load('./html/info'+title+'.html');
    $('.modal-dialog').removeClass('modal-lg');
    $('#modal').removeClass('create_event_task');
    $('.modal-dialog').addClass(size);
    var newTarget = target.indexOf("?") >= 0 ? target + '&modal-title=' + title : target + '?modal-title=' + title;
    $('#modal').modal({remote: encodeURI(newTarget)});
}
function cerrar_modal(){
    $(".modal-content").empty();
    $('.modal').hide();
    $(".modal-backdrop").hide();
    $('body').css('overflow','scroll');
}
