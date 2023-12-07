function solve() {
    const addButtons = Array.from(document.getElementsByClassName('add-product'));
    const textArea = document.querySelector('textarea');
    const checkoutButton = document.getElementsByClassName('checkout')[0];
    const allButtons = Array.from(document.getElementsByTagName('button'));
    let shoppingBasket = [];
    let totalPrice = 0;

    for (const button of addButtons) {
        button.addEventListener('click', addProduct);
    }

    checkoutButton.addEventListener('click', checkout);

    function addProduct(e) {
        let btn = e.currentTarget;
        let product = btn.parentNode.parentNode;
        let productTitle = product.getElementsByClassName('product-title')[0].textContent;
        let productPrice = Number(product.getElementsByClassName('product-line-price')[0].textContent);

        if (!shoppingBasket.includes(productTitle)) {
            shoppingBasket.push(productTitle);
        }

        textArea.value += `Added ${productTitle} for ${productPrice.toFixed(2)} to the cart.\n`
        totalPrice += productPrice;
    }

    function checkout(e) {
        textArea.value += `You bought ${shoppingBasket.join(", ")} for ${totalPrice.toFixed(2)}.`

        for (const button of allButtons) {
            button.disabled = true;
        }
    }
}