// import logo from './logo.svg';
import {Routes, Route} from "react-router-dom"
import AllBooks from './AllBooks/AllBooks';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import AddBook from "./AddBook/AddBook";
import AddReview from "./AddReview/AddReview";
import Reviews from "./Reviews/Reviews";
import About from "./About/About"

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/api/allBooks" element={<AllBooks/>}/>
        <Route path="/api/book/:id" element={<Reviews />} />
        <Route path="/api/addreview/:id" element={<AddReview />} />
        <Route path="/api/addbook" element={<AddBook />} />
        <Route path='*' element={<About />} />
      </Routes>
      {/* <AllBooks /> */}
      {/* <AddReview /> */}
      {/* <AddBook /> */}
      {/* <Reviews/> */}
      <Footer/>
    </div>
  );
}

export default App;
