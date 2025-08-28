// fetch("https://fakestoreapi.com/products")
//     .then((res) => res.json())
//     .then((json) => console.log(json));

// const product_list=fetch("https://fakestoreapi.com/products").then((res)=>res.json()).then((json)=>console.log(json));


const product_container = document.getElementById("product-container");

fetch("https://fakestoreapi.com/products/")
    .then(res => res.json())
    .then(products => {
        // console.log(products);   
        products.forEach(element => {
            console.log(element);
            var product = document.createElement("div");
            product.className = "product";

            product_rating = element.rating.rate;
            var rating_stars = '';

            for (let i = 0; i < 5; i++) {
                if ((product_rating - i) > 1) {
                    rating_stars += '★';
                }
                else if ((product_rating - i) > 0 && (product_rating - i) < 1) {
                    rating_stars += '⯪';
                } else {
                    rating_stars += '☆'
                }
            }

            product.innerHTML = `
            <div class="product-image" style="background:url(${element.image});background-size:contain;background-position: center;background-repeat: no-repeat;"></div>
            <div class="product-details">
            <p class="product-title">${element.title}</p>
            <p class="price">$${element.price}</p>
            <p class="rating"><span>${rating_stars}</span>(${element.rating.count} views)</p>
            </div>
            <div class="action">
            <button>Add to cart <i class="fa-solid fa-cart-plus"></i></button>
            <button>Details <i class="fa-solid fa-list"></i></button>
            </div>`;
            product_container.appendChild(product);
            console.log(product);
        });
    });



