function calculateFruitPrice(fruit, weight_gr, price_per_kilogram) {
  
    let total_price = 0; output = ''; weight_kg = weight_gr / 1000;
    total_price = weight_kg * price_per_kilogram;
    
    output = `I need $${total_price.toFixed(2)} to buy ${weight_kg.toFixed(2)} kilograms ${fruit}.`
    
    console.log(output)
  }
  
  
  calculateFruitPrice('orange', 2500, 1.80)
  calculateFruitPrice('apple', 1563, 2.351)