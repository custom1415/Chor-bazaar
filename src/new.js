// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage/homepage.component";
// import { signInWithGoogle, signInWithFb } from "./firebase.utils";
// import { auth } from "./firebase.utils";
// import { useEffect } from "react";

import { AnimatePresence } from "framer-motion";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import SignIn from "./components/sign-in/sign-in.component";
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <div
            style={{
              position: "fixed",
              bottom: "40px",
              right: "40px",
              zIndex: "1000",
            }}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            Scroll
          </div>
          <AnimatePresence exitBeforeEnter initial={false}>
           
          </AnimatePresence>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
