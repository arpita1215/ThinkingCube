import React, { Component } from "react";
import BooksImg from "../Images/books.png";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import "../About/About.css";


export class About extends Component {
  render() {
    return (
      <div className="maindiv">
        <div className="imgdiv">
          <img className="imgBooks" src={BooksImg} alt="Books" />
        </div>
        <div className="textdiv">
          <div className="heading">
            <h1>
              Thinking <span style={{ color: "rgb(98, 47, 47)" }}>Cube</span>
            </h1>
          </div>
          <h3>
            <span style={{ color: "rgb(98, 47, 47)" }}>[Bookmark] </span>This is
            one for the books.
          </h3>
          <Stack spacing={2} direction="row">
            {/* <Button variant="contained" >Books Here</Button> */}
            <NavLink className="button" to="/allBook">Books Here</NavLink>
            <NavLink className="button" to="/addBook">Add Books</NavLink>
          </Stack>

          {/* <h4>Expose you <span style={{ color: "rgb(98, 47, 47)" }} >Shelf</span> to something new</h4>
          <p>When you get lost in a library book, you can exist on borrowed time.</p> */}
        </div>
      </div>
    );
  }
}

export default About;
