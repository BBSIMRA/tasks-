type Product = {
    id: number;
    name: string;
    price: number;
};

function getProductNames(products: Product[]){
    return products.map(product =>product.name);
}


const products: Product[] = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 2500 },
    { id: 4, name: "Keyboard", price: 1500 },
    { id: 5, name: "Mouse", price: 800 },
    { id: 6, name: "Monitor", price: 12000 }
];
 console.log(getProductNames(products));