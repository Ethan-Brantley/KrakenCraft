function getDepth() {
    var scrollDistance = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;

    scrollDistance /= 4;

    scrollDistance =    Math.trunc(scrollDistance);

    document.getElementById('depth-meter').innerHTML = scrollDistance + "m below";
}