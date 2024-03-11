var startImage = document.getElementById("start-image");
var video = document.getElementById("intro-video");
var videoContainer = document.querySelector(".video-container");
var logoImage = document.querySelector(".logo-animation");
// Almacena las dimensiones originales del video y su contenedor
var originalVideoWidth = video.width;
var originalVideoHeight = video.height;
var originalContainerClass = videoContainer.className;
var playVideo = false; // Inicialmente, el video no está en estado de reproducción
var linesContainer = document.querySelector(".lines-container"); // lineas animadas
const h2Element = document.querySelector('.right-text');

startImage.addEventListener("click", function() {
    if (video.paused) {
        // Al iniciar la reproducción
        video.play();
        video.style.display = "block";
        h2Element.classList.add('show');
        startImage.style.display = "none"; // Oculta la imagen al reproducir el video
        videoContainer.classList.add("fullscreen");
        video.classList.add("play-video");
      
        logoImage.style.display = "block";
        linesContainer.classList.add("animate-lines");
        setTimeout(function() {
            logoImage.classList.add("show");
        }, 500);
        playVideo = true;
     }
});

video.addEventListener("click", function() {
        if (playVideo) {
            video.pause();
            video.style.display = "none";
            startImage.style.display = "block"; // Muestra la imagen al pausar el video
            videoContainer.classList.remove("fullscreen");
            video.classList.remove("play-video");
            linesContainer.classList.remove("animate-lines");
            video.width = originalVideoWidth; // Restablece el ancho original del video
            video.height = originalVideoHeight; // Restablece la altura original del video
            playVideo = false;

            setTimeout(function() {
                logoImage.classList.remove("show");
            }, 500);
        }
    });

//--------------------------------- ANIMACIÓN SLIDER -------------------------------- //

$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
});


// -----------------------------SHOPING CAR FUNCTIONALITY--------------------------------------- //

// Array para simular productos
// const products = [
//     { id: 1, name: 'cremameste', price: 10.99 },
//     { id: 2, name: 'cremamesta', price: 15.99 },
//     { id: 3, name: 'cremamesta1', price: 16.99 },
//     { id: 4, name: 'cremamesta2', price: 17.99 },
//     { id: 5, name: 'cremamesta3', price: 18.99 },
//     { id: 6, name: 'cremamesta4', price: 19.99 },
//     { id: 7, name: 'cremamesta5', price: 11.99 },
//     { id: 8, name: 'cremamesta6', price: 12.99 },
//     { id: 9, name: 'cremamesta7', price: 133.99 },
//     { id: 10, name: 'cremamesta8', price: 144.99 },
// ];

// Función para agregar un producto al carrito
// function addToCart(product) {
//     const cart = document.getElementById('cart');
//     cart.innerHTML = `Producto agregado al carrito: ${product.name} - Precio: $${product.price}`;
// }

// Obtén el botón de compra
// const buyButton = document.getElementById('buy-button');

// Escucha el evento de clic en el botón de compra
// buyButton.addEventListener('click', function() {
    // Simplemente agregamos el primer producto al carrito como ejemplo
//     addToCart(products[0]);
// });

