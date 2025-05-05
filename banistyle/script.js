const list = document.querySelector('.list')
const ham = document.querySelector('.ham')
const close1 =document.querySelector('.close')
ham.addEventListener('click',function(){
    ham.classList.add('hidden')
    list.classList.add('list2')
    
   
})
close1.addEventListener('click',function(){
    list.classList.remove('list2')
    ham.classList.remove('hidden')
    
})


const ingArray = ['imges/slide1.jpg','imges/sl.jpg']
const imgslider = document.querySelector('.img-slider')
const next1 = document.querySelector('.next')
const prev1 = document.querySelector('.prev')


let imgIndex = 0
function nextimg() {
    imgIndex++
    if(imgIndex > ingArray.length-1){
        imgIndex = 0
    }
    imgslider.setAttribute('src', ingArray[imgIndex])
}
next1.addEventListener('click', nextimg)
setInterval(nextimg,4000)


function previmg() {
    imgIndex--
    if(imgIndex < 0){
        imgIndex = ingArray.length-1
    }
    imgslider.setAttribute('src', ingArray[imgIndex])
}
prev1.addEventListener('click', previmg)


const mahsol = [
    `<div class="cc col-5 d-flex flex-column justify-content-center align-items-center">
                        <img src="./imges/lebas1.jpg" alt="">
                        <h2>تیشرت زنانه بسته دو عددی </h2>
                        <p>تومان2.468.000</p>
                    </div>`,

    `                    <div class="cc col-5 me-2 d-flex flex-column justify-content-center align-items-center">
                        <img src="./imges/lebas2.jpg" alt="">
                        <h2>تیشرت زنانه استراویوس</h2>
                        <p>تومان4.468.000</p>
                    </div>`,

    `                    <div class="cc col-5 me-2 d-flex flex-column justify-content-center align-items-center">
                        <img src="./imges/lebas3.jpg" alt="">
                         <h2>کت تک زنانه</h2>
                        <p>تومان4.468.000</p>
                    </div>`,

    `                    <div class="cc col-5 me-2 d-flex flex-column justify-content-center align-items-center">
                        <img src="./imges/lebas4.jpg" alt="">
                         <h2>کت تک زنانه</h2>
                        <p>تومان6.468.000</p>
                    </div>`,

    `                    <div class="cc col-5 me-2 d-flex flex-column justify-content-center align-items-center">
                        <img src="./imges/lebas5.jpg" alt="">
                        <h2>کت تک زنانه</h2>
                        <p>تومان6.468.000</p>
                    </div>`,

    `                    <div class="cc col-5 me-2 d-flex flex-column justify-content-center align-items-center">
                        <img src="./imges/lebas6.jpg" alt="">
                        <h2>کت تک زنانه</h2>
                        <p>تومان6.468.000</p>
                    </div>`,

    `                    <div class="cc col-5 me-2 d-flex flex-column justify-content-center align-items-center">
                        <img src="./imges/lebas7.jpg" alt="">
                         <h2>کت تک زنانه</h2>
                        <p>تومان6.468.000</p>
                    </div>`,

    `                    <div class="cc col-5 me-2 d-flex flex-column justify-content-center align-items-center">
                        <img src="./imges/lebas8.jpg" alt="">
                         <h2>کت تک زنانه</h2>
                        <p>تومان6.468.000</p>
                    </div>`
]
const list3 = document.querySelector('.list3')
const next2 =document.querySelector('.next1')
const prev2 =document.querySelector('.prev1')

let ezafeh = 0

function nextimg1() {
    ezafeh++
    if(ezafeh > mahsol.length-1){
        ezafeh = 0
    }
    list3.setAttribute('src', mahsol[ezafeh])
}
next2.addEventListener('click', nextimg1)
setInterval(nextimg1,4000)


function previmg1() {
    ezafeh--
    if(ezafeh < 0){
        ezafeh = mahsol.length-1
    }
    list3.setAttribute('src', mahsol[ezafeh])
}
prev2.addEventListener('click', previmg1)



const brand = ['imges/zara-banistyle.png','imges/bershka-logo-2.jpg','imges/massimodutti-banistyle3.png','imges/pullandbear-banistyle4.png','imges/brand-mango-banistyle5.png','imges/Stradivarius-logo6.jpg','imges/Stradivarius-logo7.jpg','imges/Logo-U.S.-Polo-Assn.-banistyle-8.png']
const brand1 = document.querySelector('.list4')
const btnNext = document.querySelector('.next2')
const btnPrev = document.querySelector('.prev2')

let ezbrand = 0
function btnnextimg(){
    ezbrand++
    if(ezbrand > brand.length-1){
        ezbrand = 0
    }
    brand1.setAttribute('src',brand[ezbrand])
}
btnNext.addEventListener('click',btnnextimg)

function btnprevimg(){
    ezbrand--
    if(ezbrand < 0 ){
        ezbrand = brand.length-1
    }
    brand1.setAttribute('src',brand[ezbrand])
}
btnPrev.addEventListener('click',btnprevimg)