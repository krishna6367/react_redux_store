import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';



function App() {
  return (
    <div className="App">
       <Router>

        <Routes>
          <Route path='/' exact element = {<ProductListing />}></Route>
          <Route path='product/:id' exact element = {<ProductDetails />}></Route>
        </Routes>
      </Router>
    </div>
     
  );
}

export default App;

