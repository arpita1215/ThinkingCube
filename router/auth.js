const express = require("express");
const router = express.Router();
const Book = require("../models/bookSchema");
require("../db/conn");


//api to add book to database 

router.post("/addbook", async (req, res) => {
  const { title, description, author } = req.body;
  if (!title || !description || !author) {
    return res
      .status(422)
      .json({ error: "Please fill all the field properly" });
  }
  try {
    const book = new Book({ title, description, author });
    const bookAdd = await book.save();

    if (bookAdd) {
      return res.status(201).json({ message: "book added successfully" });
    } else {
      res.status(500).json({ error: "Failed to add" });
    }
  } catch (error) {
    console.log(error);
  }
});

//api to add review to database 

router.post("/addreview/:id", async (req, res) => {
  try {
    const { username, review } = req.body;
    const findBook = await Book.findOne({ _id: req.params.id });
    if (findBook) {
      const addReviews = await findBook.addReview(username, review);
      await findBook.save();
      res.json({ success: true, data: "review added successfully" });
    }
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
});

//api to get all book from database 
router.get("/allBooks", async (req, res) => {
  try {
    const allBooks = await Book.find();
    res.json( allBooks );
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
});


//api to get particular book from database 
router.get("/book/:id", async (req, res) => {
    try {
        
        const bookExist = await Book.find({ _id: req.params.id });
        res.json(bookExist );
    } catch (error) {
        res.json({ success: false, error: error.message });
  }
});


router.delete("/deletebook/:id", async (req, res) => {
  try {
    const deleteBook = await Book.findOneAndDelete({ _id: req.params.id });
    res.json({success:true, data: "deleted successfully"});
  } catch (error) {
    res.json({success:false, error:error.message}); 
  }
})



module.exports = router;
