$(document).ready (function(){
    $(".projectPanel").addClass("activePanel");
    $(".projectLink").addClass("activeLink")
})
/*$(function () {

 $(".testLink").hover(
 function () {
 $(this).toggleClass("active")
 },
 function () {
 $(this).toggleClass("active")
 }
 )


 });*/
$(function () {
    $(".aboutLink").bind("click", highlightAbout);
    $(".projectLink").bind("click", highlightProject);
    $(".contactLink").bind("click", highlightContact);
});

function highlightAbout() {
    $(".activePanel").removeClass("activePanel");
    $(".activeLink").removeClass("activeLink");
    $(".aboutPanel").addClass("activePanel");
    $(".aboutLink").addClass("activeLink");
}

function highlightProject() {
    $(".activePanel").removeClass("activePanel");
    $(".activeLink").removeClass("activeLink");
    $(".projectPanel").addClass("activePanel");
    $(".projectLink").addClass("activeLink");
}

function highlightContact() {
    $(".activePanel").removeClass("activePanel");
    $(".activeLink").removeClass("activeLink");
    $(".contactPanel").addClass("activePanel");
    $(".contactLink").addClass("activeLink");
}


function goURL(url) {
    window.open(url);
}