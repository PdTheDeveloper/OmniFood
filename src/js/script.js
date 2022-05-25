$(document).ready(function() {

    // Sticky navigation implementation
    $('.js--section-features').waypoint(function(direction) {
        console.log(direction)
        if(direction == "down") {
            $('nav').addClass('sticky')
        } else {
            $('nav').removeClass('sticky')
        }
    } , {
        offset: '60px'
    })
})