console.log("video 41");

const ages = [10, 20, 30, 25, 12, 19]

const agesX2 = ages.map((item, index) => {
    return item * 2;
})

const agesGreatThan18 = ages.filter((item, index) => {
    return item > 18;
})
console.log(ages);
console.log(agesX2);
console.log("agesGreatThan18", agesGreatThan18);