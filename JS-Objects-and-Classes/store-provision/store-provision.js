// *** Store Provision ***
// You will receive two arrays. The first array represents the current stock of the local store. 
// The second array will contain products that the store has ordered for delivery.
// The following information applies to both arrays:
// Every even index will hold the name of the product and every odd index will hold the quantity of that product. 
// The second array could contain products that are already in the local store. 
// If that happens increase the quantity for the given product. 
// You should store them into an object, and print them in the following format: (product -> quantity)
// All of the arrays’ values will be strings.


function storeProvision(currentStock, newStock) {
    let stock = {};

    function addingStock(products) {
        for (let index = 0; index < products.length; index += 2) {
            let product = products[index]
            let quantity = Number(products[index + 1]);

            if (!Object.keys(stock).includes(product)) {
                stock[product] = quantity;
            } else {
                stock[product] += quantity;
            }
        }
    }

    function getStock(inventory) {
        for (const [product, quantity] of Object.entries(inventory)) {
            console.log(`${product} -> ${quantity}`)
        }
    }

    addingStock(currentStock)
    addingStock(newStock)
    getStock(stock)
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)