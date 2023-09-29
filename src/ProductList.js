// // import React, { useState, useEffect } from "react";
// // import './productlist.css'

// // const ProductList = () => {
// //   const [products, setProducts] = useState([]);

// //   useEffect(() => {
// //     // Fetch product data from /all_products
// //     fetch("http://localhost:5000/all_products")
// //       .then((response) => response.json())
// //       .then((data) => {
// //         setProducts(data.products);
// //       })
// //       .catch((error) => {
// //         console.error("Error fetching product data:", error);
// //       });
// //   }, []);

// //   const addToCart = (product) => {
// //     // Implement your "Add to Cart" logic here
// //     // You can store the selected products in state or use a shopping cart library
// //   };

// //   return (
// //     <div className="product-list">
// //       {products.map((product) => (
// //         <div className="product-card" key={product.product_id}>
// //           {/* Display product details */}
// //           <h3>{product.product_name}</h3>
// //           <p>Price: ${product.price.toFixed(2)}</p>
// //           <p>{product.details}</p>
  
// //           {/* Add to Cart button */}
// //           <button onClick={() => addToCart(product)}>Add to Cart</button>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default ProductList;


// import React, { useState, useEffect } from "react";
// import './productlist.css'

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Fetch product data from /all_products
//     fetch("http://127.0.0.1:5000/all_products")
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data.products);
//       })
//       .catch((error) => {
//         console.error("Error fetching product data:", error);
//       });
//   }, []);

//   const addToCart = async (product) => {
//     // Disable the button when clicked
//     product.isAddingToCart = true;

//     try {
//       // Send a request to the Python backend to add the product to the cart
//       // const response = await fetch("http://localhost:5000/add_to_cart", {
//       //   method: "POST",
//       //   headers: {
//       //     "Content-Type": "application/json",
//       //   },
//       //   body: JSON.stringify({
//       //     product_name: product.product_name,
//       //     count: 1, // You can adjust the count as needed
//       //   }),
//       // });

//       if (true) {
//         // Handle successful addition to cart
//         product.isAddedToCart = true;
//       } else {
//         // Handle error adding to cart
//         console.error("Error adding product to cart");
//       }
//     } catch (error) {
//       // Handle network error
//       console.error("Network error:", error);
//     } finally {
//       // Re-enable the button
//       product.isAddingToCart = false;
//     }

//     // Force a re-render by updating the state
//     setProducts([...products]);
//   };

//   return (
//     <div className="product-list">
//       {products.map((product) => (
//         <div className="product-card" key={product.product_id}>
//           {/* Display product details */}
//           <h3>{product.product_name}</h3>
//           <p>Price: ${product.price.toFixed(2)}</p>
//           <p>{product.details}</p>

//           {/* Add to Cart button */}
//           <button
//             onClick={() => addToCart(product)}
//             disabled={product.isAddingToCart || product.isAddedToCart}
//           >
//             {product.isAddedToCart ? "Added to Cart" : "Add to Cart"}
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductList;

import React, { useState, useEffect } from "react";
import './productlist.css'

const ProductList = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from /all_products
    fetch("http://127.0.0.1:5000/all_products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, []);

  const addToCart = async (product) => {
    // Disable the button when clicked
    product.isAddingToCart = true;

    try {
      // Simulate adding the product to the cart
      // For actual implementation, you should call onAddToCart with the product
      onAddToCart(product);

      // Handle successful addition to cart
      product.isAddedToCart = true;
    } catch (error) {
      // Handle network error or other errors
      console.error("Error adding product to cart:", error);
    } finally {
      // Re-enable the button
      product.isAddingToCart = false;
    }

    // Force a re-render by updating the state
    setProducts([...products]);
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product-card" key={product.product_id}>
          {/* Display product details */}
          <h3>{product.product_name}</h3>
          <p>Price: &#8377;{product.price.toFixed(2)}</p>
          <p>{product.details}</p>

          {/* Add to Cart button */}
          <button
            onClick={() => addToCart(product)}
            disabled={product.isAddingToCart || product.isAddedToCart}
          >
            {product.isAddedToCart ? "Added to Cart" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
