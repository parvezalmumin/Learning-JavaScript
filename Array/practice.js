var items = [250, 645, 300, 900, 50];

for (var i = 0; i < items.length; i++) {

    var offer = items[i] / 10;
    items[i] = items[i] - offer;
}

console.log(items);
