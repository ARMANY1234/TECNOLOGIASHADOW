(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    
    $('.dropdown-trigger').dropdown();
    $('select').formSelect();
    $('.datepicker').datepicker({
      format: 'yyyy-mm-dd'
    });
    $('.modal').modal();
  }); // end of document ready
})(jQuery); // end of jQuery name space

