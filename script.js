// fetch("https://fakestoreapi.com/products")
//     .then((res) => res.json())
//     .then((json) => console.log(json));

// const product_list=fetch("https://fakestoreapi.com/products").then((res)=>res.json()).then((json)=>console.log(json));


const product_container=document.getElementById("product-container");

fetch("https://fakestoreapi.com/products/")
    .then(res => res.json())
    .then(products => {
        // console.log(products);   
        products.forEach(element => {
            console.log(element);
            var product = document.createElement("div");
            product.className = "product";

            product.innerHTML = `
            <div class="product-image" style="background:url(${element.image});background-size:contain;background-position: center;background-repeat: no-repeat;"></div>
            <p class="product-title">${element.title}</p>
            <p class="price">$${element.price}</p>
            <p class="ratting">⭐⭐⭐⭐⭐</p>
            `;
            product_container.appendChild(product);
            console.log(product);   
        });
    });


