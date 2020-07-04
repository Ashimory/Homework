function print(arr) {
    let listedProducts = "";
    for (i = 0; i < arr.length; i++) {
        listedProducts += `${i+1}. \n Name: ${arr[i].Name} \n Price: ${arr[i].Price}   \n `;
    }
    alert(`The store currently has: \n ${listedProducts}`);
};
const products = [ 
    {
        Name: "Xiaomi portable charger 20000mah",
        Brand: "Xiaomi",
        Price: 428,
        Color: "White",
        Category: "Charger",
        Providers: ["phukienzero", "dientuccc"]
    },
    {
        Name: "VSmart Active 1",
        Brand: "VSmart" ,
        Price: 5487,
        Color: "Black",
        Category: "Phone",
        Providers: ["tgdd","ddghn","vhstore"]
    },
    {
        Name: "IPhone X",
        Brand: "Apple",
        Price: 21490,
        Color: "Gray",
        Category: "Phone",
        Providers: ["tgdd"]
    },
    {
        Name: "Samsung Galaxy A9",
        Brand: "Samsung",
        Price: 8490,
        Color: "Blue",
        Category: "Phone",
        Providers: ["tgdd"]
    },
]
print(products)
command = prompt("Enter p to display a single product by its entry number, or c to display all products of a category").toLowerCase()
if (command == "p") {
    let pos = Number(prompt("Which item do you want to be displayed?")) - 1
    let display = Object.entries(products[pos])
    let result = ""
    for (let k = 0; k < display.length; k++) {
        result += `${display[k][0]}: ${display[k][1]} \n`
    }
    alert(result)
}
else if (command = "c") {
    let searchCategory = prompt("Enter a category:").toLowerCase()
    let searchProvider = prompt("Enter preferred retailer:").toLowerCase()
    const result = products.filter(product => product.Category.toLowerCase() == searchCategory && product.Providers.indexOf(searchProvider) !== -1)
    if (result == []) {
        alert("No matching products found")
    }
    else {
        print(result)
    }
}