import React from "react";
import { Route, Routes } from "react-router-dom";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <Categories />

      <Routes>
        <Route
          path="/"
          element={
            <Home pageSize={10} country="in" category="general" key="general" />
          }
        />

        <Route
          path="/business"
          element={
            <Home
              pageSize={10}
              country="in"
              category="business"
              key="business"
            />
          }
        />

        <Route
          path="/entertainment"
          element={
            <Home
              pageSize={10}
              country="in"
              category="entertainment"
              key="entertainment"
            />
          }
        />

        <Route
          path="/health"
          element={
            <Home pageSize={10} country="in" category="health" key="health" />
          }
        />

        <Route
          path="/science"
          element={
            <Home pageSize={10} country="in" category="science" key="science" />
          }
        />

        <Route
          path="/sports"
          element={
            <Home pageSize={10} country="in" category="sports" key="sports" />
          }
        />

        <Route
          path="/technology"
          element={
            <Home
              pageSize={10}
              country="in"
              category="technology"
              key="technology"
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
