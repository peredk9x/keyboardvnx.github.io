const newProduct = document.querySelector('.new-product')
const hotProduct = document.querySelector('.hot-product')
const saleProduct = document.querySelector('.sale-product')
const specialProduct=document.querySelector('.special-product');
const allProduct =document.querySelector('.all-product')
const data={
    dataNewProduct:[
        {
            id:"1",
            image:"https://cf.shopee.vn/file/cbb80330b1fffd2391569d34dada8fd2",
            name:"One-Handed Keyboard/Programmable Keyboard",
            content:"1",
            cost:"900000"
        },
        {
            id:"2",
            image:"https://i.pinimg.com/originals/45/a0/d9/45a0d98771c9948807a6df9afe265e74.png",
            name:"LITBest G21 USB Wired Glowing Mouse Keyboard",
            content:"2",
            cost:"2500000"
        },
        {
            id:"3",
            image:"https://images-na.ssl-images-amazon.com/images/I/61bTRTgmk8S._AC_SY450_.jpg",
            name:"PICTEK TKL Mechanical Gaming Keyboard",
            content:"3",
            cost:"2300000"
        },
        {
            id:"4",
            image:"https://cf.shopee.vn/file/aef0fd18757e16aa446e6bcaf75e365d&giamaytinh.net.jpg",
            name:"GAMING KEYBOARD Metal Mechanical Colorful Backlit",
            content:"4",
            cost:"4600000"
        }
    ],
    dataHotProduct:[
        {
            id:"1",
            image:"https://i.shgcdn.com/e5911dbd-c7a4-4daa-a774-292d9157456f/-/format/auto/-/preview/3000x3000/-/quality/better/",
            name:"MOTOSPEED CK89 Mechanical Keyboard Gaming",
            content:"1",
            cost:"2000000"
        },
        {
            id:"2",
            image:"https://res.cloudinary.com/webstore/image/fetch/w_450,c_limit,c_fit,f_auto,e_trim/http%3A%2F%2Fwww.welenespicshop.com%2Ftupian9%2FZQI201202030_0859162749614665692.jpg",
            name:"LED Backlit USB Gaming Keyboard Fashion Mechanical",
            content:"2",
            cost:"1100000"
        },
        {
            id:"3",
            image:"https://file-cdn.bzfuture.com/product/1e22d0cde4a4bb8c71752c47cd8528ab.png",
            name:"CK80Pro-Phantom RGB mechanical gaming keyboard",
            content:"3",
            cost:"3200000"
        },
        {
            id:"4",
            image:"https://sc04.alicdn.com/kf/HTB181XvjFooBKNjSZFPq6xa2XXaX.jpg",
            name:"Z-88 Tenkeyless 81 Keys Small Mechanical Keyboard Rgb",
            content:"4",
            cost:"2500000"
        }
    ],
    dataSale:[
        {
            id:1,
            image:"https://9to5toys.com/wp-content/uploads/sites/5/2020/02/Drop-ALT-2.jpg?quality=82&strip=all",
            name:"MOTOSPEED CK89 Mechanical Keyboard Gaming",
            content:"1",
            del:"1.500.000",
            cost:"1000000"
        },
        {
            id:2,
            image:"https://cf.shopee.vn/file/00a4223b254f1d329f91335a5386daaa",
            name:"T-Rez Keyboard Gaming",
            content:"1",
            del:"1.700.000",
            cost:"1500000"
        },
        {
            id:3,
            image:"https://bizweb.dktcdn.net/100/270/727/articles/top-5-ban-phim-co-mini-ban-phim-may-tinh-mini-gia-re-tot-nhat.jpg?v=1570871295010",
            name:"KAIDO KeyBorad Gaming",
            content:"1",
            del:"4.500.000",
            cost:"3000000"
        },
        {
            id:4,
            image:"https://img4.thuthuatphanmem.vn/uploads/2020/12/26/anh-ban-phim-led-tim_033840306.jpg",
            name:"ZED-Black keyboard Gaming",
            content:"1",
            del:"1.000.000",
            cost:"800000"
        },
        {
            id:5,
            image:"https://salt.tikicdn.com/ts/tmp/05/26/60/4c86dc87fe8b23ff0254210b2674876c.jpeg",
            name:"ZIN-ZIN KeyBoard",
            content:"1",
            del:"2.000.000",
            cost:"1500000"
        },
    ],
    dataSpecial:[
        {
            id:1,
            image:"https://img4.thuthuatphanmem.vn/uploads/2020/12/26/anh-ban-phim-co_033839479.jpg",
            name:"MOTOSPEED CK89 Mechanical Keyboard Gaming",
            content:"1",
            cost:"1000000"
        },
        {
            id:2,
            image:"https://salt.tikicdn.com/cache/550x550/ts/product/47/2a/93/ecd239d1091ca19416ee11f8cb891545.jpg",
            name:"MOTOSPEED CK89 Mechanical Keyboard Gaming",
            content:"1",
            cost:"2000000"
        },
        {
            id:3,
            image:"https://ae01.alicdn.com/kf/HTB14nwse8Kw3KVjSZTEq6AuRpXau/M-i-CIDOO-CD702S-USB-C-D-y-B-n-Ph-m-C-Xanh-D-ng.jpg_q50.jpg",
            name:"CIDOO CD702S USB Có Dây Bàn Phím Cơ Xanh Dương",
            content:"1",
            cost:"3000000"
        },
        {
            id:4,
            image:"https://tintuc.viettelstore.vn/wp-content/uploads/2020/07/Backlit-keyboard-la-gi-1.jpg",
            name:"Backlit Keyboard Gaming",
            content:"1",
            cost:"5000000"
        },
        {
            id:5,
            image:"https://vn-test-11.slatic.net/p/01686ca9dc086cc56111bbe390ca4bca.jpg",
            name:"T-VOLF Keyboard Gaming",
            content:"1",
            cost:"8000000"
        }
    ],
    dataKeyCaps:[
        {
            id:"1",
            image:"https://images-na.ssl-images-amazon.com/images/I/61Xs-4se3aL._AC_SY355_.jpg",
            name:"Keycaps 108 Keys PBT Keycaps Set PBT Dye-Subbed Keycaps for Mechanical Keyboards",
            content:"1",
            cost:"4000000" 
        },
        {
            id:"2",
            image:"https://images-na.ssl-images-amazon.com/images/I/71GgXnqXjXL.jpg",
            name:" Happy Balls PBT Keycaps Backlit Cherry MX Keycap Set Doubleshot OEM",
            content:"2",
            cost:"1357000"
        },
        {
            id:"3",
            image:"https://ae01.alicdn.com/kf/H0a9a5b364d6b4db38c0c936ae7c54dc3r/B-u-Tr-i-y-Sao-OEM-Keycaps-PBT-Full-B-Keycap-PBT-Dye-Th-ng.jpg",
            name:" OEM Keycaps PBT Full Bộ Keycap PBT Dye Thăng Hoa Keycap Cho GK61",
            content:"3",
            cost:"4000000"
        },
        {
            id:"4",
            image:"https://cf.shopee.vn/file/0caea6bcccde029b8d91918de93381cd",
            name:"OEM PBT cho bàn phím 60% Anne pro 2 Royal Kludge ",
            content:"4",
            cost:"2000000"
        },
        {
            id:"5",
            image:"https://cdn.shopify.com/s/files/1/1679/2319/products/infinikey-team-liquid_keycaps_with-deskmat.jpg?v=1607026412",
            name:"Infinikey Team Liquid Keycaps",
            content:"5",
            cost:"10000000"
        },
        {
            id:"6",
            image:"https://cdn.shopify.com/s/files/1/0551/9563/1814/products/kc22-pbt-keycaps-with-puller_1.jpg?v=16153668694",
            name:"HAVIT KC22 PBT Keycaps with Puller - Pudding",
            content:"6",
            cost:"5000000"
        },
        {
            id:"7",
            image:"https://tandoanh.vn/wp-content/uploads/2021/04/RK-ROYAL-KLUDGE-112-Double-Shot-PBT-Pudding-Keycaps-H2.jpg",
            name:"RK ROYAL KLUDGE 112 Double Shot PBT Pudding Keycaps",
            content:"7",
            cost:"380000"
        },
        {
            id:"8",
            image:"https://imgaz1.staticbg.com/thumb/view/oaupload/ser1/banggood/images/2A/27/30bfa196-3daa-47c2-9a00-5a9b5feb50ce.JPG",
            name:"MechZone 71 Keys Cherry Blossoms Keycap Set OEM",
            content:"8",
            cost:"1300000"
        }
    ],
    renderNewProduct:()=>{
        let htmls;
        htmls=data.dataNewProduct.map((renderNew)=>{
            return `<div class="product-id product-new ${renderNew.id}">
            <div class="product-items">
                <div class="img-product">
                    <img src="${renderNew.image}" >
                </div>
                <div class="name-product">
                    <h4>${renderNew.name}</h4>
                </div>
                <div class="cost-product">
                <p>${renderNew.cost}<span>&#8363;</span></p>
                </div>
            </div>
                <button class="buy-now">BUY NOW</button>
            </div>`
        })
        if(newProduct){
        newProduct.innerHTML = htmls.join('');}
    },
    renderHotProduct:()=>{
        let htmls;
        htmls=data.dataHotProduct.map((renderHot)=>{
            return `<div class="product-id product-hot">
            <div class="product-items">
                <div class="img-product">
                    <img src="${renderHot.image}" >
                </div>
                <div class="name-product">
                    <h4>${renderHot.name}</h4>
                </div>
                <div class="cost-product">
                <p>${renderHot.cost}<span>&#8363;</span></p>
                </div>
            </div>
                <button class="buy-now">BUY NOW</button>
            </div>`
        })
        if(hotProduct){
        hotProduct.innerHTML = htmls.join('');}
    },
    renderSale:()=>{
        let htmls;
        htmls=data.dataSale.map((renderSale)=>{
            return `<div class="product-id product-sale">
            <div class="product-items">
                <div class="img-product">
                    <img src="${renderSale.image}" >
                </div>
                <div class="name-product">
                    <h4>${renderSale.name}</h4>
                </div>
                <div class="cost-product">
                <p>${renderSale.cost}<span>&#8363;</span><del>${renderSale.del}<span>&#8363;</span></del></p>
                </div>
            </div>
                <button class="buy-now">BUY NOW</button>
            </div>`
        })
        if(saleProduct){
        saleProduct.innerHTML = htmls.join('');}
    },
    renderAllProduct:()=>{
        const dataHot= data.dataHotProduct;
        const dataNew = data.dataNewProduct;
        const dataSale = data.dataSale;
        const dataSpecial = data.dataSpecial;
        const allDataProducts = dataHot.concat(dataNew,dataSale,dataSpecial)
        let htmls='';
        let renderAll = document.querySelector('.all-product')
        allDataProducts.map((renders)=>{
            return htmls+=`<div class="product-id product-all">
            <div class="product-items">
                <div class="img-product">
                    <img src="${renders.image}" >
                </div>
                <div class="name-product">
                    <h4>${renders.name}</h4>
                </div>
                <div class="cost-product">
                <p>${renders.cost}<span>&#8363;</span></p>
                </div>
            </div>
                <button class="buy-now">BUY NOW</button>
            </div>`
        })
        if(renderAll){
        renderAll.innerHTML=htmls;}
    },
    
    renderSpecial:()=>{
        let htmls='';
        data.dataSpecial.map((renderSpecial)=>{
            return htmls+=`<div class="product-id product-special">
            <div class="product-items">
                <div class="img-product">
                    <img src="${renderSpecial.image}" >
                </div>
                <div class="name-product">
                    <h4>${renderSpecial.name}</h4>
                </div>
                <div class="cost-product">
                <p>${renderSpecial.cost}<span>&#8363;</span></p>
                </div>
            </div>
                <button class="buy-now">BUY NOW</button>
            </div>`
        })
        if(specialProduct){
        specialProduct.innerHTML = htmls;}
      
    },
    renderKeyCaps:()=>{
        let keyCaps = document.querySelector('.keycaps-product')
        let htmls='';
        let dataKeyCaps = data.dataKeyCaps;
        dataKeyCaps.map((renders,index)=>{
            return htmls+=`<div class="product-id product-keycaps">
            <div class='product-items'>
            <div class="img-product">
                <img class="img" src="${renders.image}" >
            </div>
            <div class="name-product">
                <h4 class="name">${renders.name}</h4>
            </div>
            <div class="cost-product ">
                <p class="cost">${renders.cost} <span>&#8363;</span></p>
            </div>
            </div>
                <button class="buy-now" >BUY NOW</button>
        </div>`
        })
        if(keyCaps){
        keyCaps.innerHTML=htmls}
        data.shopCarts(htmls)
        data.handleEvent(htmls)
    },
  
    
    //-------SHOP CART -------------------
    shopCarts:(htmls)=>{
        const productSpecial = [...document.querySelectorAll('.product-id button')];
        for(let i=0; i< productSpecial.length;i++){
            let btn= productSpecial[i];
            btn.addEventListener('click',function(e){
                let product = btn.parentElement
                let image = product.querySelector('img').src;
                let name = product.querySelector('h4').innerHTML;
                let cost = product.querySelector('p').innerHTML;
                data.addProductShop(image,name,cost);
                setTimeout(()=>{
                    const notifi=document.querySelector('.notifi');
                    notifi.style.top=0;
                },10)
                setTimeout(()=>{
                    const notifi=document.querySelector('.notifi');
                    notifi.style.top=-20+'%';
                },2000)
            })
        }
    },
    addProductShop:(image,name,cost)=>{
        const productAdd = document.createElement('div');
        productAdd.classList.add('product-add')
        document.querySelector('.product-item').appendChild(productAdd)
        var addNewProductShop = `
                <div class="img-add">
                    <img src="${image}" >
                
                </div>
                <div class="content-add">
                    <span class="name-sp">${name}</span>
                    <p class="card-price">${cost}</p>
                </div>
                <div class="sl-add">
                    <p>x<span class="quaty-item">1</span></p>
                </div>
                <div class="delete">
                    <i class="fa fa-times" ></i>
                </div>
                </div>`;
       //  Show ra ngoài
        productAdd.innerHTML=addNewProductShop
        productAdd.querySelectorAll('.delete')[0].addEventListener('click',function(){
            let notifiDel= confirm('Bạn có muốn xóa sản phẩm này trong giỏ hàng?')
            if(notifiDel==true){
                productAdd.querySelectorAll('.delete')[0].parentElement.remove();
                alert('Đã xóa sản phẩm! MỜi bạn mua săm tiếp!')
            }
            data.updateProduct()
        })
        data.updateProduct()   
    },
    
    updateProduct:()=>{
      const productItem= document.querySelector('.product-item');
      const productAdd= productItem.querySelectorAll('.product-add');
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
  
      
    },
   
    //---Khi click chuyen sang ttrang chi tiet sp-----
     handleEvent:(htmls)=>{
        const productShow = [...document.querySelectorAll('.product-items')];
        for(let i=0; i< productShow.length;i++){
            let btn= productShow[i];
            btn.addEventListener('click',function(){
                let image = btn.querySelector('img').src;
                let name = btn.querySelector('h4').innerHTML;
                let cost = btn.querySelector('p').innerHTML;
                const obj=[{
                    'image':image,
                    'name':name,
                    'cost':cost
                }]
                const setobj = JSON.stringify(obj);
                 localStorage.setItem('bem',setobj);
                location.href="../html/infomation.html";
            })
        } 
    },
    
    start:function(){
        this.renderNewProduct();
        this.renderHotProduct();
        this.renderSale();
        this.renderAllProduct();
        this.renderSpecial();
        this.renderKeyCaps();
        this.updateProduct();
        
    }
}
data.start();

// renderAllProduct()