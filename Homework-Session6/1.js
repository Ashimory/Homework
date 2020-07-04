const product = {
    name: 'Xiaomi rice cooker',
    price: 1700,
    brand: 'Xiaomi',
    color: 'white'
    };
    for (let x in product) {
    console.log(x);
    };
    // 1.1. property
    // 1.2.
    for (let x in product) {
        console.log(`${x}: ${product[x]}`);
        }