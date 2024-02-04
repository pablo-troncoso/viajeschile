$(document).ready(function(){
    /*Bootstrap*/
    let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

/*Smooth scroll Navbar*/
$("a").click(function () { 
    let redirect =  this.hash;
    $("html,body").animate({
        scrollTop: $(redirect).offset().top - 60
    }, 1200
    );
});
    
    $(window).scroll(function () {
        let navegador = $(".navbar");
        if ($(this).scrollTop() > 100) {
          navegador.css("background", "#0DCAF0");
        } else {
          navegador.css("background", "none");
        }
      });

    
    
    
    
    
});
