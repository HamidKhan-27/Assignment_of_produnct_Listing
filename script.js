const products = [
  {
    id: 1,
    brand: "Nike",
    name: "Air Max",
    color: "Black",
    size: 42,
    price: 5500,
    imageURl:
      "https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw2090a16e/nk/289/8/4/e/6/4/28984e64_4e1a_42a5_948f_648eae42e0d7.png?sw=700&sh=700&sm=fit&q=100&strip=false",
  },
  {
    id: 2,
    brand: "Adidas",
    name: "Ultraboost",
    color: "White",
    size: 43,
    price: 7500,
    imageURl:
      "https://prelovedtreasures.pk/cdn/shop/files/adidas-advantage-white-sneaker-shoes-sie-41-5-f36223.jpg?v=1745063698",
  },
  {
    id: 3,
    brand: "Puma",
    name: "RS-X",
    color: "Red",
    size: 41,
    price: 4500,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rKac8Fj5FlQ2xkj2qN3UzeK6puDMZNMbL8XHkboziw&s=10",
  },
  {
    id: 4,
    brand: "Jordan",
    name: "Air Jordan 1",
    color: "Black",
    size: 44,
    price: 12000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQtFi8X82FUTlghk1_r61Pg3GMGFDtINCPN8eYmqLNhA&s=10",
  },
  {
    id: 5,
    brand: "Nike",
    name: "Air Force 1",
    color: "White",
    size: 41,
    price: 6000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1HSI302Zb6I7ZL1n6bGC-uQH0xlZw8ClOW6faoCwE7A&s=10",
  },
  {
    id: 6,
    brand: "Adidas",
    name: "Superstar",
    color: "Black",
    size: 42,
    price: 5000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQppLN5kqCnqFMdUjADGTz8TNcOIMGajn6m0Q4WnFrnw&s=10",
  },
  {
    id: 7,
    brand: "Puma",
    name: "Suede Classic",
    color: "Blue",
    size: 43,
    price: 4200,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh0fhmn8JXNjcskpxomACMZzlsnyHGd6Bk-ibR-ar-AA&s=10",
  },
  {
    id: 8,
    brand: "Jordan",
    name: "Air Jordan 4",
    color: "Red",
    size: 45,
    price: 15000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwBs4KMqK0innpEtPomplzdgHcvcuXfH4bEzIp_kMP5w&s=10",
  },
  {
    id: 9,
    brand: "Nike",
    name: "Dunk Low",
    color: "Green",
    size: 43,
    price: 9000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwbqAUY2cgA_NhlreuSjiDYf3-OA4Bsscm39u3jsdlPw&s=100",
  },
  {
    id: 10,
    brand: "Adidas",
    name: "Gazelle",
    color: "Blue",
    size: 40,
    price: 5500,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2AzMI7Bk6QYE_JZoDE4wkrKpg42_81o7I1xTOuwSrCg&s=10",
  },
  {
    id: 11,
    brand: "Puma",
    name: "Future Rider",
    color: "White",
    size: 42,
    price: 5200,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmAzRtNSS0bS-Pw2WyPkqz5SMFyPclEmI8LUprc9U9Yw&s=10",
  },
  {
    id: 12,
    brand: "Jordan",
    name: "Air Jordan 1 Mid",
    color: "White",
    size: 42,
    price: 10500,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxaB0gV3XPfPI5OdjtyvUtfXWc9uJNii7p3qNkUbiojw&s=10",
  },
  {
    id: 13,
    brand: "Nike",
    name: "Revolution 7",
    color: "Grey",
    size: 40,
    price: 4000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHB30ph4TcU90Q8kqGaHXAopw6a11VJZqjg90XOTeyYA&s=10",
  },
  {
    id: 14,
    brand: "Adidas",
    name: "Runfalcon",
    color: "Green",
    size: 41,
    price: 3500,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8dXUh4JODqeBs7RIs9lgl0fnL_m0iPHeJzTDNmMJPUw&s=10",
  },
  {
    id: 15,
    brand: "Puma",
    name: "Caven 2.0",
    color: "Black",
    size: 44,
    price: 6000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv1r2ddoEpumYu0PBzib5BQt0-vQ_a3OQPgBQItnxjww&s=10",
  },
  {
    id: 16,
    brand: "Jordan",
    name: "Air Jordan 3",
    color: "Blue",
    size: 43,
    price: 13500,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSevgZbazb1DTTCHz7FIKkWxsZ-x_Yrzg9-nBJMWvC9fQ&s=10",
  },
  {
    id: 17,
    brand: "Nike",
    name: "Pegasus",
    color: "Red",
    size: 42,
    price: 8000,
    imageURl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
  },
  {
    id: 18,
    brand: "Adidas",
    name: "Forum Low",
    color: "White",
    size: 44,
    price: 6800,
    imageURl:
      "https://prelovedtreasures.pk/cdn/shop/files/adidas-advantage-white-sneaker-shoes-sie-41-5-f36223.jpg?v=1745063698",
  },
  {
    id: 19,
    brand: "Puma",
    name: "RS-Fast",
    color: "Grey",
    size: 40,
    price: 4800,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoT8XtAGeyLgdl4dyt9Fy9Xl68snyMKle4BxWU8jpTeA&s=10",
  },
  {
    id: 20,
    brand: "Jordan",
    name: "Air Jordan 11",
    color: "Black",
    size: 45,
    price: 16000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQtFi8X82FUTlghk1_r61Pg3GMGFDtINCPN8eYmqLNhA&s=10",
  },
  {
    id: 21,
    brand: "Nike",
    name: "Blazer Mid",
    color: "Green",
    size: 41,
    price: 6500,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwbqAUY2cgA_NhlreuSjiDYf3-OA4Bsscm39u3jsdlPw&s=10",
  },
  {
    id: 22,
    brand: "Adidas",
    name: "NMD R1",
    color: "Red",
    size: 42,
    price: 9500,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjEH8gx02dtJmYPIjrQSXHEnwXZxTZPBGhVlugF2ulSg&s=10",
  },
  {
    id: 23,
    brand: "Puma",
    name: "Velocity Nitro",
    color: "Green",
    size: 44,
    price: 8500,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUy1qrvfcneN3XnR_28cfSvRq5aqzf5-c2WMJGRnCTCw&s=10",
  },
  {
    id: 24,
    brand: "Jordan",
    name: "Air Jordan 5",
    color: "Grey",
    size: 41,
    price: 14000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwNz4vk2pYEGejVnfeTurudgf8LXnnGxGb7LRTHwzzrQ&s=10",
  },
  {
    id: 25,
    brand: "Nike",
    name: "Cortez",
    color: "White",
    size: 44,
    price: 4500,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1HSI302Zb6I7ZL1n6bGC-uQH0xlZw8ClOW6faoCwE7A&s=10",
  },
  {
    id: 26,
    brand: "Adidas",
    name: "Stan Smith",
    color: "Grey",
    size: 40,
    price: 5200,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_D_0TgZXIFjxW0caUl6dI-FA4BekaHPbSHODw72YcuQ&s=10",
  },
  {
    id: 27,
    brand: "Puma",
    name: "Palermo",
    color: "Red",
    size: 42,
    price: 5800,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rKac8Fj5FlQ2xkj2qN3UzeK6puDMZNMbL8XHkboziw&s=10",
  },
  {
    id: 28,
    brand: "Jordan",
    name: "Air Jordan 6",
    color: "Green",
    size: 45,
    price: 14500,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCWQcFY2mYl8rS3xogIuxqNI_y44sn-oA8JmY00doWPw&s=10",
  },
  {
    id: 29,
    brand: "Nike",
    name: "Zoom Fly",
    color: "Blue",
    size: 45,
    price: 11000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvXhe2Vev0_gtrWQjRjW45uOC6lOtsdHtRp01yDe6LQg&s=10",
  },
  {
    id: 30,
    brand: "Adidas",
    name: "Campus 00s",
    color: "Black",
    size: 45,
    price: 7200,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQppLN5kqCnqFMdUjADGTz8TNcOIMGajn6m0Q4WnFrnw&s=10",
  },
];

const productContainer = document.querySelector(".product-container");

const brandFilter = document.querySelector("#brandFilter");
const colorFilter = document.querySelector("#colorFilter");

// Brand aur Color dropdowns ki values ke mutabiq filtering
function filterProducts() {
  const selectedBrand = brandFilter.value;
  const selectedColor = colorFilter.value;

  const filteredProducts = products.filter((product) => {
    return (
      (selectedBrand === "All" || product.brand === selectedBrand) &&
      (selectedColor === "All" || product.color === selectedColor)
    );
  });
  displayProducts(filteredProducts);
}

// Filter hone wale products ko cards mein show karna
function displayProducts(productList) {
  productContainer.innerHTML = "";

  productList.forEach((product) => {
    productContainer.innerHTML += `
     <div class="product-card">
        <div class="product-image">
          <img
          src="${product.imageURl}"
            alt="${product.brand} ${product.name}"
          >
          <span class="product-badge">Popular</span>
        </div>

        <div class="product-info">
          <p class="product-brand">${product.brand}</p>
          <h3 class="product-name">${product.name}</h3>

          <div class="product-details">
            <span>Color: ${product.color}</span>
            <span>Size: ${product.size}</span>
          </div>

          <div class="product-bottom">
            <p class="product-price">Rs. ${product.price.toLocaleString()}</p>
            <button class="buy-btn">View Details</button>
          </div>
        </div>
      </div> 
    `;
  });
}

// Dono dropdowns change hon to filtering dobara chale
brandFilter.addEventListener("change", filterProducts);
colorFilter.addEventListener("change", filterProducts);

// Shuru mein tamam products show hon
displayProducts(products);



/* <div class="product-card">
        <div class="product-image">
          <img
          src="${product.imageURl || "https://placehold.co/280x210?text=Shoe"}"
            alt="${product.brand} ${product.name}"
          >
          <span class="product-badge">Popular</span>
        </div>

        <div class="product-info">
          <p class="product-brand">${product.brand}</p>
          <h3 class="product-name">${product.name}</h3>

          <div class="product-details">
            <span>Color: ${product.color}</span>
            <span>Size: ${product.size}</span>
          </div>

          <div class="product-bottom">
            <p class="product-price">Rs. ${product.price.toLocaleString()}</p>
            <button class="buy-btn">View Details</button>
          </div>
        </div>
      </div> */
