const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    id: { type: Number, required: false },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    color: { type: String, required: true },
    size: { type: String, required: true },
    quantity: { type: Number, required: true, min: 0, max: 1000 },
    image: { type: [String], required: false },
    category:
{ type: String, required: true }


}, { collection: 'Products' } )

const Product = mongoose.model('Product', productSchema)

module.exports = Product