const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    reviews: [
        {
            username: {
                type: String,
                // required: true,
            },
            review: {
                type: String,
                // required: true,
            }
        }
    ]

}, {
    timestamps:true
})

bookSchema.methods.addReview = async function (username, review) {
    try {
        this.reviews = this.reviews.concat({ username, review });
        await this.save();
        return this.reviews;
    } catch (error) {
        
        console.log(error);
    }
}

const Book = mongoose.model('BOOK', bookSchema);

module.exports = Book;