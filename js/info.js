
let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);
// -----------------tabMenu----------------

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
    //SHOP CART -----------------
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
    // SHOW du lieu chi tiet ---------------
    function detailPro(){
        const obj=JSON.parse(localStorage.getItem('bem'));
        let productsDetail = document.querySelector('.shop-section');
        let htmls='';
    obj.map((e)=>{
        return htmls+=  `<div class="name-product">
        <p>${e.name}</p>
        <hr width="100%">
        </div>
        <div class="info-product">
        <div class="img-product">
            <img src="${e.image}">
        </div>
        <div class="cost-more">
            <div class="cost">
                <h3>${e.cost}</h3>
            </div>
            <div class="more-product">
                        <div class="product">
                            <p>RK ROYAL KLUDGE 112 Double Shot PBT Pudding Keycaps</p>
                            <p><b>380.000 VNĐ</b></p>
                        </div>
                    </div>
            <p id="amount">SL:</p>
            <div class="amount">     
                <i class="fa fa-minus prev remove"></i><input type="text" value="1" maxlength="3"><i class="fa fa-plus next"></i>
            </div>
            <div class="endow">
                <div class="guarantee">
                    <fieldset>
                    <p>Hoàn trả trong 30 ngày</p>
                    <p>Đảm bảo hoàn tiền</p>
                    <legend><i class="fa fa-check-circle"></i></legend>
                </fieldset>
                </div>
                <div class="ship">
                    <fieldset>
                        <p>Miễn phí vận chuyển trên toàn quốc</p>
                        <p>Từ 3-7 ngày</p>
                        <legend><i class="fa fa-check-circle"></i></legend>
                    </fieldset>
                </div>
            </div>
            <button class="buy-now">Mua ngay</button>
            <button class="buy">Thêm vào giỏ hàng</button>
        </div>
        </div>`
    })
    productsDetail.innerHTML=htmls;
    eventClick(htmls)
    addProductShop(htmls);
}
    detailPro()

    function addProductShop(htmls){    
        // Tạo và gán các thẻ trong đối số htmlKeyCaps
        var btnAdd= document.querySelector('.buy')
        let notifi= document.querySelector('.notifi')
        btnAdd.onclick=()=>{
            var product = btnAdd.parentElement.parentElement.parentElement
            var namePro = product.querySelector('.name-product p').innerHTML;
            var imgPro = product.querySelector('.info-product .img-product img').src;
            var costPro = product.querySelector('.cost-more .cost h3').innerHTML;
            var index= product.querySelector('.amount input').value;
            addItemCart(imgPro,namePro,costPro,index)
            setTimeout(()=>{
                notifi.style.top=0;
            },10)
            setTimeout(()=>{
                notifi.style.top=-20 +'%';
            },2500)
        }
    }

        //Lấy đối số để show ra Giỏ hàng
        function addItemCart(imgPro,namePro,costPro,index){
            //Mỗi khi click sẽ tạo ra 1 thẻ div có class product-id
            let productAdd = document.createElement('div');
            productAdd.classList.add('product-add')
            //Thẻ đó là thẻ con của product-item
            document.querySelector('.product-item').appendChild(productAdd)
            //Gán các giá trị đối số vào
            var addNewProductShop = `
                 <div class="img-add">
                     <img src="${imgPro}" >
                    
                 </div>
                 <div class="content-add">
                     <span class="name-sp">${namePro}</span>
                     <p class="card-price">${costPro}</p>
                 </div>
                 <div class="sl-add">
                     <p>x<span class="quaty-item">${index}</span></p>
                 </div>
                 <div class="delete">
                     <i class="fa fa-times" ></i>
                 </div>
                 
                 `;
                //  Show ra ngoài
                 productAdd.innerHTML=addNewProductShop
                  // Xóa theo DOM
                productAdd.querySelectorAll('.delete')[0].addEventListener('click',function(){
                    let notifiDel= confirm('Bạn có muốn xóa sản phẩm này trong giỏ hàng?')
                    if(notifiDel==true){
                    productAdd.querySelectorAll('.delete')[0].parentElement.remove();
                    alert('Đã xóa sản phẩm! MỜi bạn mua săm tiếp!')}
                
                    updateProduct()
                })
                 updateProduct()
                }
        //         addItemCart();
        //         function handlePay(namePro,costPro,imgPro,index){
        //     const btnPay = document.querySelector('.clear');
        //     console.log(namePro,costPro,imgPro,index)
        //     btnPay.onclick=()=>{
        //         for(let i=0;i<addNewProductShop.length;i++){

        //         }
        //     }

        // }

    //Update giá tiền
        function updateProduct(){
            const productItem = document.querySelector('.product-item');
            const productAdd = productItem.querySelectorAll('.product-add');
            let total = 0
            for(var i=0; i<productAdd.length;i++)
            {
                let productAdds = productAdd[i];
                let priceItem = productAdds.querySelectorAll('.card-price')[0]
                let quartyItem = productAdds.querySelectorAll('.quaty-item')[0]
                let price = parseFloat(priceItem.innerHTML) //CHuyển chuỗi => số
                let quantity= parseFloat(quartyItem.innerHTML)
                total = total + (price*quantity)
            }
            document.querySelector('.price-total').innerHTML = total + 'VNĐ';
        }
        updateProduct()
    






    function eventClick(){
        const input = $('input[type="text"]')
        const prevBTN  = $('.remove')
        const nextBTN  = $('.next')
        nextBTN.onclick=()=>{
        prevBTN.style.color="black";
        if(input.value<999)
        {input.value++;
            nextBTN.style.color='black'}
            else{
                input.value
                nextBTN.style.color='#ccc';
            }
        }
    
        prevBTN.onclick=(e)=>{
        if(input.value<=1)
        {prevBTN.style.color="#ccc";
        input.value;}
        else{
            input.value--;
            prevBTN.style.color='black'
        }
    }
}

