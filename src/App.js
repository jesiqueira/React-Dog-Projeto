import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import User from "./Components/User/User";
import { UserStorage } from "./Context/UserContext";
import ProtectedRoute from "./Components/Helper/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            {/* <Route exact path="/" element={<Home />} />
            <Route exact path="login/*" element={<Login />} />
            { <Route exact path="conta/*" element={<User />} /> }
            <Route
              path="conta/*"
              element={
                <React.Fragment>
                  <ProtectedRoute />
                  <User />
                </React.Fragment>
              }
            /> */}
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <ProtectedRoute path="conta/*" element={<User />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
