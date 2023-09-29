// import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Login from "./Login";
// import Register from "./Register";

// function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/login">Login</Link>
//             </li>
//             <li>
//               <Link to="/register">Register</Link>
//             </li>
//           </ul>
//         </nav>

//         <Route path="/login" component={Login} />
//         <Route path="/register" component={Register} />
//       </div>
//     </Router>
//   );
// }

// export default App;



// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
// import Login from "./Login";
// import Register from "./Register";
// import Home from "./Home";
// import Header from "./Header"; // Import the Header component
// import './App.css';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = () => {
//     // Simulate a successful login (replace with actual authentication logic)
//     setIsLoggedIn(true);
//   };

//   const handleLogout = () => {
//     // Simulate a logout action
//     setIsLoggedIn(false);
//   };

//   const handleRegister = () => {
//     // Simulate a successful registration (replace with actual registration logic)
//     setIsLoggedIn(true);
//   };

//   return (
//     <Router>
//       <div>
//         {/* Include the Header component */}
//         <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />

//         {/* Display Login and Register buttons */}
//         {isLoggedIn?<br></br> : <div className="button_haven">
//           <Link to="/login">
//             <button className="login-button">Login</button>
//           </Link>
//           <Link to="/register">
//             <button className="register-button">Register</button>
//           </Link>
//         </div>}
        

//         {/* Rest of your navigation and routes */}
//         <Route path="/login">
//           {isLoggedIn ? <Redirect to="/homepage" /> : <Login onLogin={handleLogin} />}
//         </Route>
//         <Route path="/register">
//           {isLoggedIn ? <Redirect to="/homepage" /> : <Register onRegister={handleRegister} />}
//         </Route>
//         <Route path="/homepage">
//           {isLoggedIn ? <Home /> : <Redirect to="/login" />}
//         </Route>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Header from "./Header";
import ProductList from "./ProductList";
import Checkout from "./checkout";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const handleLogin = () => {
    // Simulate a successful login (replace with actual authentication logic)
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Simulate a logout action
    setIsLoggedIn(false);
  };

  const handleRegister = () => {
    // Simulate a successful registration (replace with actual registration logic)
    setIsLoggedIn(true);
  };

  const handleAddToCart = (product) => {
    // Implement your "Add to Cart" logic here
    // For simplicity, we'll add the product to the selectedProducts array
    setSelectedProducts([...selectedProducts, product]);
    // Update the total cost
    setTotalCost(totalCost + product.price);
  };

  return (
    <Router>
      <div>
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />

        {!isLoggedIn ? (
          <div className="button-container">
            <Link to="/login">
              <button className="login-button">Login</button>
            </Link>
            <Link to="/register">
              <button className="register-button">Register</button>
            </Link>
          </div>
        ) : null}

        <Route path="/login">
          {isLoggedIn ? <Redirect to="/homepage" /> : <Login onLogin={handleLogin} />}
        </Route>
        <Route path="/register">
          {isLoggedIn ? <Redirect to="/homepage" /> : <Register onRegister={handleRegister} />}
        </Route>
        <Route path="/homepage">
          {isLoggedIn ? (
            <ProductList onAddToCart={handleAddToCart} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/checkout">
  {isLoggedIn ? (
    <Checkout selectedProducts={selectedProducts} totalCost={totalCost} />
  ) : (
    <Redirect to="/login" />
  )}
</Route>

      </div>
    </Router>
  );
}

export default App;
