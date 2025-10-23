console.log("video 44");


const sv1 = {
    scores: 10,
    name: "a",
}
const sv2 = {
    scores: 6,
    name: "b",
}
const sv3 = {
    scores: 7,
    name: "c",
}
const sinhVien = [sv1, sv2, sv3];
console.log(sinhVien);
// sinhVien.forEach((item, index) => {
//     console.log(item, item.name);
// });
const person = {
    email: "ducanh@gmail.com",
    age: 25,
    address: "vietnam"
}
for (let key in person) {
    console.log(key, person[key]);
}