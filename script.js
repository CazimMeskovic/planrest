
let allTotal = 0;

function addToCart(element) {
    //console.log(element.previousElementSibling);

    let mainEL = element.closest('.single-item'); //ovo mainEL je samo naziv varijable mozemo ga dati kakav hocemeo
    // let input = element.previousElementSibling;
    let price = mainEL.querySelector('.price').innerText;
    let name = mainEL.querySelector('h3').innerText;
    let quantity = mainEL.querySelector('input').value;
    let cartItems = document.querySelector('.cart-items');

    price = price.substring(1);
    price = parseInt(price);
    quantity = parseInt(quantity);
    let total = price * quantity;


    if (parseInt(quantity) > 0) {

        allTotal += total;

        cartItems.innerHTML += `<div class= "cart-single-item">
                   <h3>${name}</h3>
                   <p>Dirhem${price} x ${quantity} = Dirhem<span>${total}</span> </p>
                   <button onclick="removeFromCart(this)" class="remove-item">Ukloni</button>
        
                   </div>`;
        document.querySelector('.total').innerHTML = `total: Dirhema <span>${allTotal}</span> `;

        element.innerText = 'dodato';
        element.style.backgroundColor = 'green';
        element.setAttribute('disabled', 'true');
        console.log(element)

    } else {
        alert('odaberi kolicinu');
    }
}



function removeFromCart(element) {
    let itemToRemove = element.closest('.cart-single-item');
    let itemPrice = itemToRemove.querySelector('p span').innerText;
    itemPrice = parseInt(itemPrice);

    itemToRemove.remove();

    allTotal -= itemPrice;
    document.querySelector('.total span').innerText = allTotal;
}




vegetables.forEach(function (vege) {
    let pravi_vege = vege.querySelector('.si-content h3').innerText;
    let dugme = document.querySelector('.actions button').innerHTML;

    if (naziv === pravi_vege) {
        //  console.log("jhnjkkj");
        dugme = 'dodaj';

        dugme.setAttribute('disabled', 'false');


    }

})







spor_elem.remove();









