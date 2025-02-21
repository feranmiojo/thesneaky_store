const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "img/airjordan1.png",
            },
            {
                code: "darkblue",
                img: "img/airforcedarkblue-removebg-preview.png",
            }
        ]
    },
    {
    id: 2,
        title: "Air Jordan",
        price: 109,
        colors: [
            {
                code: "black",
                img: "img/final_blazee-removebg-preview.png",
            },
            {
                code: "red",
                img: "img/redairjordan2222-removebg-preview.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 159,
        colors: [
            {
                code: "red",
                img: "img/redd-removebg-preview.png",
            },
            {
                code: "black",
                img: "img/blackblazer2222-removebg-preview.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 193,
        colors: [
            {
                code: "black",
                img: "img/blackandwhitairjordan.png",
            },
            {
                code: "white",
                img: "img/white_craters-removebg-preview.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 169,
        colors: [
            {
                code: "black",
                img: "img/image2jordan-removebg-preview (1).png",
            },
            {
                code: "grey",
                img: "img/greyhippies-removebg-preview.png",
            },
        ],
    },
];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice= document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");


menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
       wrapper.style.transform = `translateX(${-100 * index}vw)`;

       //change the choosen product
       choosenProduct = products[index]

    //change text
    currentProductTitle.textContent = choosenProduct.title
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img

    currentProductColors.forEach((color,index) => {
        color.style.backgroundColor = choosenProduct.colors[index].code;
    })
    });
});

currentProductColors.forEach((color,index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = choosenProduct.colors[index].img
    })
})

currentProductSizes.forEach((size,index)=>{
size.addEventListener("click",()=>{
    currentProductSizes.forEach((size) => {
        size.style.backgroundColor = "white";
        size.style.color = "black";
    });
    size.style.backgroundColor= "black"
    size.style.color= "white"
});
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex"
})
close.addEventListener("click",()=>{
    payment.style.display="none"
})
