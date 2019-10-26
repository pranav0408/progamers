function myFunction(x) {
    x.classList.toggle("change");
    document.querySelector('.container-nav').classList.toggle("changeContainerNav");
}
function myFunction2(x) {
    x.classList.toggle("changeContainerNav");
    document.querySelector('.container-main').classList.toggle("change");
}

const parallax = ()=>{
    var diverge = window.scrollY/20 + "%";
    document.querySelector('.header img').style['transform'] = `translateY(${diverge})` ;
}