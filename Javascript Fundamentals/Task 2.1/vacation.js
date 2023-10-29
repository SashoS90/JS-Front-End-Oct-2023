function vacationQuote(group_size, group_type, day) {
    let totalPrice = 0;
    let ticketPrice = 0;

    const prices = {
        'Students': {
            'Friday': 8.45,
            'Saturday': 9.80,
            'Sunday': 10.46,
        },
        'Business': {
            'Friday': 10.90,
            'Saturday': 15.60,
            'Sunday': 16,
        },
        'Regular': {
            'Friday': 15,
            'Saturday': 20,
            'Sunday': 22.50,
        }
    }
    ticketPrice = prices[group_type][day]
    totalPrice = group_size * ticketPrice

    if (group_type == 'Students' && group_size >= 30) {
        totalPrice *= 0.85;
    }
    else if (group_type == 'Business' && group_size >= 100) {
        totalPrice -= (ticketPrice * 10);
    }
    else if (group_type == 'Regular' && (group_size >= 10 && group_size <= 20)) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)

}

// vacationQuote(30,"Students","Sunday")
// vacationQuote(40, "Regular", "Saturday")
vacationQuote(10, "Students", "Sunday")