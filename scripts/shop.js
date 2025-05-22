fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        // Access parent div from DOM
        const parentDiv = document.getElementById('products');
        for (const item of data) {
            // create product div
            const productDiv = document.createElement('div');
            // create product img and append to div
            const productImg = document.createElement('img'); 
            productImg.setAttribute('src', item.image);
            productImg.setAttribute('alt', item.title);
            productDiv.appendChild(productImg);
            // create product title with h1 and append to the div
            const productTitle = document.createElement('h1');
            productTitle.innerText =item.title;
            productDiv.appendChild(productTitle);
            // append product div to parent div
            parentDiv.appendChild(productDiv)
        }
    });

    