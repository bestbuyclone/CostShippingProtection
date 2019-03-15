const faker = require('faker');
const fs = require('fs');

const generateData = n => {
    const result = [];
    for (let i = 1; i <= n; i++) {
        let original = Number(faker.commerce.price().replace(/\..+/g, '.99'))
        let current;
        if (original > 10 && original < 100) current = original - 10;
        if (original > 100 && original < 250) current = original - 20;
        if (original > 250 && original < 500) current = original - 30;
        if (original > 500 && original < 1000) current = original - 50;
        if (original > 1000 && original < 1200) current = original - 100;
        if (original > 1200 && original < 2000) current = original - 150;
        if (original > 2000) current = original - 200;
        if (!current) current = original;
        current = Number(current.toFixed(2))
        result.push({
            id: i,
            original: original,
            current: current
        })
    }
    return result;
}

const data = generateData(100);

fs.appendFile('./data/data1.json', JSON.stringify(data), (error) => {
    if (error) {
        throw error;
    } else {
        console.log('success writing to file');
    }
});




//console.log(generateData(1000))