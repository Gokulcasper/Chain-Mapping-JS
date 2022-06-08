const item = [
  { id: 1, mobile: "Android Phone", cost: 10000 },
  { id: 2, mobile: "Laptop", cost: 70000 },
  { id: 3, mobile: "Desktop", cost: 10000 },
];

// // Sort it using lowest price

// let itemCost = item.sort((a, b) => {
//   return a.cost - b.cost; // ascending
//   // return b.cost - a.cost; // descending
// });

// // Sort it title ascending

// let itemMobile = itemCost.sort((c, d) => {
//   if (c.mobile < d.mobile) return -1;
//   if (c.mobile > d.mobile) return 1;
//   return 1;
// });

// // Filter Product less than 11000

// let itemFilter = itemMobile.filter((value) => {
//   return value.cost < 11000;
// });

// // Map // Android Phone - ₹10000// &#8377;

// let itemMap = itemFilter.map((val) => {
//   return val.mobile + "  -  ₹" + val.cost;
// });
// console.log(itemMap);

let itemMap = item
  .sort((a, b) => {})
  .sort((c, d) => {
    if (c.mobile < d.mobile) return -1;
    if (c.mobile > d.mobile) return 1;
    return 1;
  })
  .filter((value) => {
    return value.cost < 11000;
  })
  .map((val) => {
    return val.mobile + "  -  ₹" + val.cost;
  });
console.log(itemMap);
