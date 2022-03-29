// import logo from "./logo.svg";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./components/sign-in/sign-in.component";
import Homepage from "./pages/Homepage/homepage.component";
// import { signInWithGoogle, signInWithFb } from "./firebase.utils";
// import { auth } from "./firebase.utils";
// import { useEffect } from "react";
import store from "./redux/store";

function App() {
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
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
