const mongoose = require('mongoose');
const json = require('./data/data.json');

mongoose.connect('mongodb://localhost/bestbuy', { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

const priceSchema = mongoose.Schema({
    id: { type: Number, unique: true },
    original_price: Number,
    current_price: Number
}, { collection: 'prices' });

const priceInfo = mongoose.model('prices', priceSchema);

priceInfo.collection.insertMany(json, (err, result) => {
    if (err) {
        console.log('error inserting many', err.errmsg);
    } else {
        console.log('Success inserting many', result);
    }
})

const getPriceById = id => {
    return priceInfo.findOne({ id: id }).exec();
};

//var Club = mongoose.model('Club', clubSchema)

// var data = [
//     { 'name': 'Barcelona' },
//     { 'name': 'Real Madrid' },
//     { 'name': 'Valencia' }
// ]

// Club.collection.insertMany(data, function (err, r) {
//     assert.equal(null, err);
//     assert.equal(3, r.insertedCount);

//     db.close();
// })




module.exports = {
    priceInfo,
    getPriceById,
    mongoose
};
