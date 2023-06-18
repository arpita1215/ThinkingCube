import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios";
import "../AddBook/AddBook.css";

const Login = () => {
  const [user, setUser] = useState({
    title: "",
    description: "",
    author:""
  });
  const navigate = useNavigate();
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const loginSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`/api/addbook`, { ...user })
      alert("book added successfully");
      navigate(`/api/allBooks`);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <div>
        <h2 className="headingA">
          Write your <span style={{ color: "rgb(98, 47, 47)" }}>Volume</span> to
          the Cubicle :
        </h2>
      </div>
      <div className="login-page">
        <h2>Add your Book</h2>
        <form onSubmit={loginSubmit}>
          
        <input
            type="text"
            name="title"
            required
            placeholder="Title"
            value={user.title}
            onChange={onChangeInput}
          />

          <input
            type="text"
            name="description"
            required
            placeholder="Description"
            value={user.description}
            onChange={onChangeInput}
          />

          <input
            type="text"
            name="author"
            required
            autoComplete="on"
            placeholder="Author"
            value={user.author}
            onChange={onChangeInput}
          />

          <div className="row">
            <button type="submit">Add Book</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
