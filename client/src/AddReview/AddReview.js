import React, { useState , useEffect } from "react";
import axios from "axios";
import "../AddReview/AddReview.css";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    review: "",
  });


  const { id } = useParams();
  const navigate = useNavigate();


  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const reviewSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`/api/addreview/${id}`, { ...user });
      alert("review added successfully");
      navigate(`/book/${id}`);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <div>
        <h2 className="headingA">
          Write your <span style={{ color: "rgb(98, 47, 47)" }}>Feelings</span>{" "}
          for the book :
        </h2>
      </div>
      <div className="login-page">
        <h2>Add your Review</h2>
        <form onSubmit={reviewSubmit}>
          <h1 className="movieName">Book you clicked on</h1>
          <input
            type="text"
            name="username"
            required
            placeholder="Username"
            value={user.username}
            onChange={onChangeInput}
          />

          <input
            type="text"
            name="review"
            required
            autoComplete="on"
            placeholder="Review"
            value={user.review}
            onChange={onChangeInput}
          />

          <div className="row">
            <button type="submit">Add Review</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
