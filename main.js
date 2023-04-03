
// Nav Section --------------------------------

var nav_id=document.getElementsByTagName('nav')
window.addEventListener('scroll',()=>{
    if (window.scrollY>0){
        nav_id[0].classList.add('active')
    }
    else{
        nav_id[0].classList.remove('active')
    }
})


// Hamburger----------------------------------

var nav_items_id=document.querySelector('.nav_items')
var hamburger_id=document.querySelector('.hamburger')
var close_id=document.querySelector('.close')

hamburger_id.addEventListener('click',()=>{
    nav_items_id.style.display='block'
    close_id.style.display='block'
    hamburger_id.style.display='none'
})

close_id.addEventListener('click',()=>{
    nav_items_id.style.display='none'
    close_id.style.display='none'
    hamburger_id.style.display='block'
})

// FAQ Section -------------------------------

var faq_card_id=document.querySelectorAll('.faq_card')

faq_card_id.forEach((element,id)=>{
    var para_id=element.querySelector('.para')
    element.addEventListener('click',()=>{
        para_id.classList.toggle('active')


        icon_id=element.getElementsByTagName('i')
        console.log(icon_id[0].className)

        if (icon_id[0].className=="uil uil-plus"){
            icon_id[0].className="uil uil-minus"
        }
        else{
            icon_id[0].className="uil uil-plus"
        }
    })

})
