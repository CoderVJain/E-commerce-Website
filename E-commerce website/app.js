const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductDesc = document.querySelector(".productDesc");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const productButton = document.querySelector(".productBtn");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      desc: `The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin 
            on what you know best: durably stitched overlays, clean finishes and the perfect amount of 
            flash to make you shine.`,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      desc: `The Air Jordan 1 Retro High remakes the classic sneaker, giving you a fresh look with 
            a familiar feel. Premium materials with new colors and textures give modern expression 
            to an all-time favorite.`,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      desc: `Rebuilt using insights from Grant Taylor, the Nike SB Zoom Blazer Low Pro GT is a fresh take on a favourite skate shoe. 
            The updated design has higher taping to give you more durability.`,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      desc: `Nike Crater Impact is part of our sustainability journey to 
            transform trash into shoes that tread a little lighter.`,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      desc: `Tassel Lace Up Bohemian Flat Style Sandals | Women Shoes Summer Sandals | 
            Handcrafted Artisan footwear | Hippie and Ethnic inspired flats`,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];

let choosenproduct = products[0];



menuItems.forEach((item,index) => {
    item.addEventListener("click", () => {
        // change the current silde
        wrapper.style.transform = `translateX(${-100 * index}v2)`;
    
        // change the currentProduct
        choosenproduct = products[index];

        // change texts of currentProduct
        currentProductTitle.textContent = choosenproduct.title;
        currentProductPrice.textContent = "$" + choosenproduct.price;
        currentProductImg.src = choosenproduct.colors[0].img;
        currentProductDesc.textContent = choosenproduct.desc;

        // assigning new colors
        currentProductColors.forEach((color, colorindex) => {
            color.style.backgroundColor = choosenproduct.colors[colorindex].code;
        });
    });
});

        currentProductColors.forEach((color, imgindex) => {
            color.addEventListener("click", () => {
                currentProductImg.src = choosenproduct.colors[imgindex].img;
            });
        });

        currentProductSizes.forEach((size,sizeindex) => {
            size.addEventListener("click", () => {
                currentProductSizes.forEach((othersizes) => {
                    othersizes.style.backgroundColor = "white";
                    othersizes.style.color = "black";
            });
                size.style.backgroundColor = "black";
                size.style.color = "white";
            });
        });

        productButton.addEventListener("click", () => {
            payment.style.display = "flex";
        });

        close.addEventListener("click", () => {
            payment.style.display = "none";
        });

        