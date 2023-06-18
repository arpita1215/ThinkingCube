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
        <Route path="/allBook" element={<AllBooks/>}/>
        <Route path="/review/:id" element={<Reviews />} />
        <Route path="/addReview/:id" element={<AddReview />} />
        <Route path="/addBook" element={<AddBook />} />
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
