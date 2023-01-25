import "./App.css";
import Navbar from "./components/Navbar";
import List from "./components/List";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Card from "./components/Card";
import Cart from "./components/Cart";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [user, setUser] = useState({});
  const [cardInfo, setCardInfo] = useState({});
  const [cart, setCart] = useState([]);
  const [watches, setWatches] = useState([]);
  const watchesCollectionRef = collection(db, "watches");

  useEffect(() => {
    const getWatches = async () => {
      const data = await getDocs(watchesCollectionRef);
      setWatches(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getWatches();
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <BrowserRouter>
      <Navbar user={user} />
      <Routes>
        <Route
          path="/"
          element={
            <List
              setCardInfo={setCardInfo}
              setCart={setCart}
              watches={watches}
              cart={cart}
              cardInfo={cardInfo}
            />
          }
        />
        <Route
          path="/card"
          element={<Card cardInfo={cardInfo} setCart={setCart} cart={cart} />}
        />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
