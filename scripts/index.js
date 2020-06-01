// Button id: find-projects-button
// div id: projects-div
$(document).ready(function(){
    $("#find-projects-button").click(function() {
        var exp = $("#projects-div");
        offset = exp.offset().top;
        
        $('html,body').animate({
            scrollTop:  offset - 30
        }, 500);
        // $('html,body').scrollTop(offset - 30);
    });
});



