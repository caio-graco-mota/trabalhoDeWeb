window.onload = function() {

    var leftMenu =  document.getElementsByClassName("menu-left")[0];
    var rightMenu =  document.getElementsByClassName("menu-right")[0];
    var carousel = document.getElementById("comments");
    var carouselItemWidth = document.getElementsByClassName("carousel-item")[0].clientWidth || 0;

    rightMenu.onclick = function(){
        console.log(carousel.scrollLeft + carouselItemWidth);
        carousel.scrollLeft = carousel.scrollLeft + carouselItemWidth;
    };

    leftMenu.onclick = function(){
        if(carousel.scrollLeft - carouselItemWidth < 0){
            carousel.scrollLeft = 0;
        }else{
            carousel.scrollLeft = carousel.scrollLeft - carouselItemWidth;
        }
    };
};