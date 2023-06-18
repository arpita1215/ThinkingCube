import React, { Component , useEffect , useState } from 'react';
import "../Reviews/Reviews.css"
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Reviews = () => {

  const [books, setBooks] = useState({
    title:"",description:"",author:"", reviews:[],bookId:""
  });

  const { id } = useParams();
  const navigate = useNavigate();


  const addReview = (bookId) => {
    navigate(`/addReview/${bookId}`);
  };

  const allBooks = async () => {
    try {
      const response = await axios.get('/api/allBooks')
      
      if (id) {
        response.data.forEach(book => {
          
          if (book._id === id) {
            console.log(book.reviews);
            setBooks({
              title: book.title,
              description: book.description,
              author: book.author,
              reviews: book.reviews,
              bookId:book._id
            })
          }
        });
      }
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
          Read all the <span style={{ color: "rgb(98, 47, 47)" }}>Thoughts</span>{" "}
          about the book :
        </h2>
        </div>
        <div className="cards" >
          <div className="cardBox">
            <Card sx={{ minWidth: 275 }} >
              <CardContent >
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Book Number 
                </Typography>
                <Typography variant="h5" component="div">
                  {books.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {books.author}
                </Typography>
                <Typography variant="body2">
                  {books.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small"  onClick={() => {
                    addReview(books.bookId);
                  }}>Add Review</Button>
            </CardActions>
          </Card>
          {books.reviews.map((review, index) => (
            <Card sx={{ minWidth: 275 }} >
            <CardContent>
              <Typography variant="h5" component="div">
                {review.username}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {review.review}
              </Typography>
              
            </CardContent>
            
          </Card>
          ))}
          <div className='bigButton'>
          <NavLink className="button" to="/addBook">Add Books</NavLink>
          </div>
          
          </div>
        </div>
      </div>

  )
}

export default Reviews



