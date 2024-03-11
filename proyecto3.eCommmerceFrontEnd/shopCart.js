// Array para simular productos
const products = [
    { id: 1, name: 'cremameste', price: 10.99 },
    { id: 2, name: 'cremamesta', price: 15.99 },
    { id: 3, name: 'cremamesta1', price: 16.99 },
    { id: 4, name: 'cremamesta2', price: 17.99 },
    { id: 5, name: 'cremamesta3', price: 18.99 },
    { id: 6, name: 'cremamesta4', price: 19.99 },
    { id: 7, name: 'cremamesta5', price: 11.99 },
    { id: 8, name: 'cremamesta6', price: 12.99 },
    { id: 9, name: 'cremamesta7', price: 133.99 },
    { id: 10, name: 'cremamesta8', price: 144.99 },
];

// Función para agregar un producto al carrito
function addToCart(product) {
    const cart = document.getElementById('cart');
    cart.innerHTML = `Producto agregado al carrito: ${product.name} - Precio: $${product.price}`;
}

// Obtén el botón de compra
const buyButton = document.getElementById('buy-button');

// Escucha el evento de clic en el botón de compra
buyButton.addEventListener('click', function() {
    // Simplemente agregamos el primer producto al carrito como ejemplo
    addToCart(products[0]);
});

