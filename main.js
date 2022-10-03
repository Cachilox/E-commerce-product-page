//Change of number introduced for by the user.

let minusBtn = document.querySelector(".input__minus")
let plusBtn = document.querySelector(".input__plus")
let inputNumber = document.querySelector(".input__number")

let userInputNumber = 0;

plusBtn.addEventListener("click", ()=>{
    userInputNumber++
    inputNumber.value = userInputNumber
});

minusBtn.addEventListener("click", ()=>{
    userInputNumber--;
    if (userInputNumber <= 0) {
        userInputNumber = 0;
    }
    inputNumber.value = userInputNumber
});

// Add total products to cart when button is pressed ADD TO CART
let addToCartBtn = document.querySelector(".details__button")
let cartNotification = document.querySelector(".header__cart--notification")
let lastValue = parseInt(cartNotification.innerText);

addToCartBtn.addEventListener("click", () => {
    lastValue += userInputNumber
    
    cartNotification.innerText = lastValue
    cartNotification.style.display = "block"
    drawProductInModal()
})

// Show the modal with the cart detail
const cartBtn = document.querySelector(".header__cart")
const cartModal = document.querySelector(".cart-modal")
const productoContainer = document.querySelector(".cart-modal__checkout-container")

cartBtn.addEventListener("click", ()=>{
    cartModal.classList.toggle('show');

    if(lastValue === 0){
        productoContainer.innerHTML = `<p class="cart-empty">Your cart is empty.</p>`
    }else {
        drawProductInModal()
    }
})

// Delete cart content.
function deleteProduct() {
    const deleteProductBtn = document.querySelector(".cart-modal__delete")
    
    deleteProductBtn.addEventListener("click", ()=>{
        productoContainer.innerHTML = `<p class="cart-empty">Your cart is empty.</p>`
        lastValue = 0
        cartNotification.innerText = lastValue
    });
}

// Change images when arrow buttons are pressed
const imageContainer = document.querySelector(".gallery__image-container")
const previousGalleryBtn = document.querySelector(".gallery__previous")
const nextGalleryBtn = document.querySelector(".gallery__next")
let imgIndex = 1;

nextGalleryBtn.addEventListener("click", ()=>{
    changeNextImage(imageContainer)
});

previousGalleryBtn.addEventListener("click", ()=>{
    changePreviousImage(imageContainer)
});

// Show images modal when I click on main image
const imagesModalGallery = document.querySelector(".modal-gallery__background")
const closeModalBtn = document.querySelector(".modal-gallery__close")

imageContainer.addEventListener("click", ()=>{
    if(window.innerWidth >= 1115){
        imagesModalGallery.style.display = 'grid';
    }
});

closeModalBtn.addEventListener("click", ()=>{
    imagesModalGallery.style.display="none";
})

//Change main images from thumbnails
let thumbnails = document.querySelectorAll(".gallery__thumnail")
thumbnails = [...thumbnails]

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", (e)=>{
        imageContainer.style.backgroundImage = `url("../images/image-product-${e.target.id}.jpg")`
    })
})

//Change main images from thumbnails in the modal
let modalthumbnails = document.querySelectorAll(".modal-gallery__thumnail");
const modalImageContainer = document.querySelector(".modal-gallery__image-container")
modalthumbnails = [...modalthumbnails]

modalthumbnails.forEach(modalthumbnail => {
    modalthumbnail.addEventListener("click", (e)=>{
        modalImageContainer.style.backgroundImage = `url("../images/image-product-${e.target.id.slice(-1)}.jpg")`
    });
});

// Change main image of modal from arrows in the modal
const nextModalBtn = document.querySelector(".modal-gallery__next")  
const previousModalBtn = document.querySelector(".modal-gallery__previous") 

nextModalBtn.addEventListener("click", ()=>{
    changeNextImage(modalImageContainer)
});

previousModalBtn.addEventListener("click", ()=>{
    changePreviousImage(modalImageContainer)
});

// Show the navbar when I press the hamburger menu
const hamburgerMenu = document.querySelector(".header__menu");
const modalNavbar = document.querySelector(".modal-navbar__background");
const closeModalNavbar = document.querySelector(".modal-navbar__closed");

modalNavbar.style.display="none"
hamburgerMenu.addEventListener("click", ()=>{
    modalNavbar.style.display = "block"
})

closeModalNavbar.addEventListener("click", ()=>{
    modalNavbar.style.display = "none"
})

// Funciones
function drawProductInModal() {
    productoContainer.innerHTML = `
    <div class="cart-modal__checkout-container">
        <div class="cart-modal__details-container">
            <img class="cart-modal__image" src="./images/image-product-1-thumbnail.jpg" alt="thumbnail">
            <div>
            <p class="cart-modal__product">Autum Limited Editon..</p>
            <p class="cart-modal__price">$125 x3 <span>$375.00</span></p>
            </div>
            <img class="cart-modal__delete" src="./images/icon-delete.svg" alt="icon delete">
        </div>
        <button class="cart-modal__checkout">Checkout</button>
    </div>`
    deleteProduct()
    let priceModal = document.querySelector(".cart-modal__price")
    priceModal.innerHTML = `$125 x${lastValue} <span>$${lastValue*125}.00</span>`;
}

function changeNextImage(imgContainer) {
    imgIndex === 4 ? imgIndex = 1 : imgIndex++
    imgContainer.style.backgroundImage = `url("../images/image-product-${imgIndex}.jpg")`
}

function changePreviousImage(imgContainer) {
    imgIndex === 1 ? imgIndex = 4 : imgIndex--
    imgContainer.style.backgroundImage = `url("../images/image-product-${imgIndex}.jpg")`
}
