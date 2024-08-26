import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import './index.css';
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { useState } from "react";
import Order from "./pages/Order";
import FilterData from "./pages/FilterData";
import ProductDetail from "./pages/ProductDetail";

function App() {
  const [order, setOrder] = useState(null);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout setOrder={setOrder} />} />
        <Route path="/order-confirmation" element={<Order order={order} />} />
        <Route path="/filter-data" element={<FilterData />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        {/* Fallback route for undefined routes 
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />*/}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;


// import { BrowserRouter, Route, Routes } from "react-router-dom"
// import Navbar from "./components/Navbar"
// import Footer from "./components/Footer"
// import Home from "./pages/Home"
// import './index.css';
// import Shop from "./pages/Shop";
// import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";
// import { useState } from "react";
// import Order from "./pages/Order";
// import FilterData from "./pages/FilterData";

// function App() {
//   const [order,setOrder]=useState(null)
//   return (
//     <BrowserRouter>
//     <Navbar />
//     <Routes>
//       <Route path="/" element={<Home />}></Route>
//       <Route path="/shop" element={<Shop />}></Route>
//       <Route path="/cart" element={<Cart />}></Route>
//       <Route path="/checkout" element={<Checkout setOrder={setOrder} />}></Route>
//       <Route path="/order-confirmation" element={<Order order={order} />}></Route>
//       <Route path="/filter-data" element={<FilterData />}></Route>
      
      
//     </Routes>
//     <Footer />
//     </BrowserRouter>
// )
// }

// export default App
