console.log("lab03");

const sp1 = {
    name: "Iphone 14",
    price: 30,
    inStock: false
}

const sp2 = {
    name: "Samsung S23",
    price: 25,
    inStock: false
}
const sp3 = {
    name: "Xiaomi 13",
    price: 15,
    inStock: false
}
const sanPham = [sp1, sp2, sp3];
console.log(sanPham);
console.log(sanPham[0].name)
const update = [sp1, { name: sp2.name, price: 150, inStock: sp2.inStock }, sp3]
console.log(update);

sanPham.pop();
console.log(sanPham);
sanPham.push({
    name: "Nokia 9",
    price: 10,
    inStock: true
})
console.log(sanPham);

sanPham.forEach((item, index) => {
    console.log(index, item.name);
});

sanPham.map((item, index) => {
    console.log(index, item.price);
});

sanPham.filter((item) => {
    if (item.inStock === true) {
        console.log(item);
    }
});

for (let i = 0; i <= 0; i++) {
    console.log(i, sanPham[i])
}

