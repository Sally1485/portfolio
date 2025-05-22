// Declare variable to store navbar element
const navElement =  document.getElementById('navbar');
// Detect scroll event on document
document.addEventListener('scroll',function() {
    // console.log(window.scrollY);
    if (window.scrollY > 70) {
        // change navbar bg to blue
 navElement.style.backgroundColor = '#0779E4'
            }else{
        // change navbar bg to transparent
       navElement.style.backgroundColor = 'transparent'
    }
    
});


// OBJECTS AND ARRAYS
const products = [product1, product2]
const product1 = {
  name: 'Digestive',
  price: 45.56,
  avaliable: true,
}
 const product2 ={
   name: 'Cookies',
   price: 56.78,
   avaliable: false,
 }
 products.push(product1, product2)

 console.table(products);










