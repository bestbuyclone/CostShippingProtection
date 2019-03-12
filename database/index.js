const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bestbuy', { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

const priceSchema = mongoose.Schema({
    id: { type: Number, unique: true },
    original_price: Number,
    current_price: Number
}, { collection: 'prices' });

const priceInfo = mongoose.model('prices', priceSchema);

const getPriceById = id => {
    return priceInfo.findOne({ id: id }).exec();
};

module.exports = {
    priceInfo,
    getPriceById,
    mongoose
};
