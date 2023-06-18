import React, { Component, useEffect, useState } from "react";
import "../AllBooks/AllBooks.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom";



const AllBooks = () => {

  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const addReview = (id) => {
    navigate(`/addreview/${id}`)
  }

  const viewReview = (id) => {
    navigate(`/book/${id}`)
  }

const allBooks = async () => {
  try {
    const response = await axios.get('/api/allBooks')
    console.log(response.data);
    setBooks(response.data);
  } catch (error) {
    console.log(error);
  }
}
  useEffect(() => {
    allBooks();
  },[])
  
  return (
    <div>
        <div className="heading">
          <h2 className="headingA">
          Expose your <span style={{ color: "rgb(98, 47, 47)" }}>Shelf</span>{" "}
            to something new 
        </h2>
      </div>
      
      {books.map((book,index) => 
        (
          <div className="cardss" >
          <div className="cardBoxs" key={index}>
            <Card sx={{ minWidth: 275 }} >
              <CardContent >
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Book Number: {index+1}
                </Typography>
                <Typography variant="h5" component="div">
                  {book.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {book.author}
                </Typography>
                <Typography variant="body2">
                  {book.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => {
                  addReview(book._id)
                }}>Add Review</Button>
                <Button size="small" onClick={() => {
                  viewReview(book._id)
                }}>View Review</Button>
              </CardActions>
            </Card>
          </div>
        </div>
          )
      )}
      <div className="bigButton">
      <NavLink className="button" to="/addbook">Add Books</NavLink>
      </div>
      
      </div>

  )
}

export default AllBooks



