
let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);
// ----------------------------------------------------

const listNewBox =document.querySelectorAll('.product-new')
const wrapperNBox = document.querySelector('.new-product');
const btnLeft = document.querySelector('.back-btn');
const btnRight = document.querySelector('.next-btn');
const reviewDiv = document.querySelector('.new');

// TOP-HOt
const listHotBox = document.querySelectorAll('.product-hot');
const wrapperHBox= $('.hot-product');
const reviewHDiv = document.querySelector('.top-hot');
const btnHLeft = document.querySelector('.prev-hot');
const btnHRight = document.querySelector('.next-hot');

//Special
const listSpBox = document.querySelectorAll('.product-special');
const wrapperSpBox= $('.special-product');
const reviewSpDiv = document.querySelector('.special');
const btnSpLeft = document.querySelector('.prev-special');
const btnSpRight = document.querySelector('.next-special');

//Sale
const listSBox = document.querySelectorAll('.product-sale');
const wrapperSBox= $('.sale-product');
const reviewSDiv = document.querySelector('.sale');
const btnSLeft = document.querySelector('.prev-sale');
const btnSRight = document.querySelector('.next-sale');

// Slide----------------------------------------------
document.addEventListener('DOMContentLoaded',function(){
//    make_slide(4) 
    window.addEventListener("resize",()=>{
        if(window.innerWidth >= 1366){
            make_slide(4)    
            makeHot_slide(4)
            makeSpecial_slide(4)
            makeSale_slide(4)

        }
        else if(window.innerWidth >=992){
            make_slide(3)    
            makeHot_slide(3)
            makeSpecial_slide(3)
            makeSale_slide(3)
        }
        else if(window.innerWidth >=768){
            make_slide(2)    
            makeHot_slide(2)
            makeSpecial_slide(2)
            makeSale_slide(2)
        }
        else{
            make_slide(1)    
            makeHot_slide(1)
            makeSpecial_slide(1)
            makeSale_slide(1)
        }
        
    })
    const media = [
        window.matchMedia('(min-width:1366px)'),    
        window.matchMedia('(min-width:992px)'),
        window.matchMedia('(min-width:768px)'),
        window.matchMedia('(min-width:0px)')
    ]
    if(media[0].matches){
        make_slide(4)    
        makeHot_slide(4)
        makeSpecial_slide(4)
        makeSale_slide(4)
    }
    else if(media[1].matches){
        make_slide(3)    
        makeHot_slide(3)
        makeSpecial_slide(3)
        makeSale_slide(3)
    }
    else if(media[2].matches){
        make_slide(2)    
        makeHot_slide(2)
        makeSpecial_slide(2)
        makeSale_slide(2)
    }
    else if(media[3].matches){
        make_slide(1)    
        makeHot_slide(1)
        makeSpecial_slide(1)
        makeSale_slide(1)
    }
   
})    

//NEw
function make_slide(amoutSlideAppear){
    const widthItemAndMargin = reviewDiv.offsetWidth/ amoutSlideAppear;
    let widthAllBox = widthItemAndMargin * listNewBox.length;
    wrapperNBox.style.width = `${widthAllBox}px`
listNewBox.forEach(element=>{
        element.style.marginRight = '10px';

        element.style.width = `${widthItemAndMargin - 10}px`
    })
    let count = 0;
    let spacing = widthAllBox - widthItemAndMargin * amoutSlideAppear;
    btnRight.addEventListener('click',()=>{
        count += widthItemAndMargin;    
        if(count>spacing){
            count = 0;    
        }
        wrapperNBox.style.transform = `translateX(${-count}px)`;
    });
    
    btnLeft.addEventListener('click',()=>{
        count -= widthItemAndMargin;    
        if(count<0){
            count = spacing;    
        }
        wrapperNBox.style.transform = `translateX(${-count}px)`;
    });
    setInterval(function(){
        count += widthItemAndMargin;    
        if(count>spacing){
            count = 0;    
        }
        wrapperNBox.style.transform = `translateX(${-count}px)`;
    },3500)
}

//Hot_slide
function makeHot_slide(amoutSlideAppear){
    const widthItemAndMargin = reviewHDiv.offsetWidth/ amoutSlideAppear;
    let widthAllBox = widthItemAndMargin * listHotBox.length;
    wrapperHBox.style.width = `${widthAllBox}px`
    listHotBox.forEach(element=>{
        element.style.marginRight = '10px';    

        element.style.width = `${widthItemAndMargin - 10}px`
    })
    let count = 0;
    let spacing = widthAllBox - widthItemAndMargin * amoutSlideAppear;

    btnHRight.addEventListener('click',()=>{
        count += widthItemAndMargin;    
        if(count>spacing){
            count = 0;    
        }
        wrapperHBox.style.transform = `translateX(${-count}px)`;
    });
    
    btnHLeft.addEventListener('click',()=>{
        count -= widthItemAndMargin;    
        if(count<0){
            count = spacing;    
        }
        wrapperHBox.style.transform = `translateX(${-count}px)`;
    });
    setInterval(function(){
        count += widthItemAndMargin;    
        if(count>spacing){
            count = 0;    
        }
        wrapperHBox.style.transform = `translateX(${-count}px)`;
    },3000)
}

//Specail-Slide
function makeSpecial_slide(amoutSlideAppear){
    const widthItemAndMargin = reviewSpDiv.offsetWidth/ amoutSlideAppear;
    let widthAllBox = widthItemAndMargin * listSpBox.length;
    wrapperSpBox.style.width = `${widthAllBox}px`
    listSpBox.forEach(element=>{
        element.style.marginRight = '10px';    

        element.style.width = `${widthItemAndMargin - 10}px`
    })
    let count = 0;
    let spacing = widthAllBox - widthItemAndMargin * amoutSlideAppear;

    btnSpRight.addEventListener('click',()=>{
        count += widthItemAndMargin;    
        if(count>spacing){
            count = 0;    
        }
        wrapperSpBox.style.transform = `translateX(${-count}px)`;
    });
    
    btnSpLeft.addEventListener('click',()=>{
        count -= widthItemAndMargin;    
        if(count<0){
            count = spacing;    
        }
        wrapperSpBox.style.transform = `translateX(${-count}px)`;
    });
    setInterval(function(){
        count += widthItemAndMargin;    
        if(count>spacing){
            count = 0;    
        }
        wrapperSpBox.style.transform = `translateX(${-count}px)`;
    },3500)
}

//Sale_slide
function makeSale_slide(amoutSlideAppear){
    const widthItemAndMargin = reviewSDiv.offsetWidth/ amoutSlideAppear;
    let widthAllBox = widthItemAndMargin * listSBox.length;
    wrapperSBox.style.width = `${widthAllBox}px`
    listSBox.forEach(element=>{
        element.style.marginRight = '10px';    

        element.style.width = `${widthItemAndMargin - 10}px`
    })
    let count = 0;
    let spacing = widthAllBox - widthItemAndMargin * amoutSlideAppear;

    btnSRight.addEventListener('click',()=>{
        count += widthItemAndMargin;    
        if(count>spacing){
            count = 0;    
        }
        wrapperSBox.style.transform = `translateX(${-count}px)`;
    });
    
    btnSLeft.addEventListener('click',()=>{
        count -= widthItemAndMargin;    
        if(count<0){
            count = spacing;    
        }
        wrapperSBox.style.transform = `translateX(${-count}px)`;
    });
    setInterval(function(){
        count += widthItemAndMargin;    
        if(count>spacing){
            count = 0;    
        }
        wrapperSBox.style.transform = `translateX(${-count}px)`;
    },3000)
}






// ---------TabUI-----------------------
    const navActive =$('.item-nav.active');
    const nav = [...$$('.item-nav')];
    const borderBot = $('.border-bottom');
    borderBot.style.width = navActive.offsetWidth  + 'px';
    borderBot.style.left = navActive.offsetLeft  + 'px';
    nav.forEach((navs)=>{
       return navs.onmouseover=()=>{
        borderBot.style.width = navs.offsetWidth  + 'px';   
        borderBot.style.left = navs.offsetLeft  + 'px';}
    })    
    nav.forEach((navx)=>{
        return navx.onmouseout=()=>{
            borderBot.style.width = navActive.offsetWidth  + 'px';
                borderBot.style.left = navActive.offsetLeft  + 'px';
                // console.log("123")
        }        
    })        

// ----------------TabMenu-------------------
    const tabMenu = $('.menu');
    const widthTabMenu = tabMenu.offsetWidth
    const openMenu =  $('.add');
    const closeMenu = $('.close');
    openMenu.onclick=()=>{
        tabMenu.style.width='300px';
    }
    
    closeMenu.onclick=()=>{
        tabMenu.style.width= 0 +'px';
    }


    const shopCart = document.querySelector('.product-shop');
    const iconShopCart = document.querySelector('.shop');
    const closeShopCart = document.querySelector('.close-shop');
    const widthShopCart = shopCart.offsetHeight;
    closeShopCart.onclick=()=>{
        iconShopCart.style.display='block';
        shopCart.style.height=0+'px';
        shopCart.style.width=0+'px';
    }
    iconShopCart.onclick=()=>{
        iconShopCart.style.display='none';
        shopCart.style.height=450 +'px';
        shopCart.style.width=350+'px';
    }

    
