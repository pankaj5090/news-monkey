import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const pageSize = 20;
  const myapiKey = process.env.REACT_APP_NEWS_API;
  const country = "in";
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <News
                key={"general"}
                pageSize={pageSize}
                country={country}
                category={"general"}
                apiKey={myapiKey}
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                key={"business"}
                pageSize={pageSize}
                country={country}
                category={"business"}
                apiKey={myapiKey}
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                key={"entertainment"}
                pageSize={pageSize}
                country={country}
                category={"entertainment"}
                apiKey={myapiKey}
              />
            }
          />
          <Route
            path="/general"
            element={
              <News
                key={"general"}
                pageSize={pageSize}
                country={country}
                category={"general"}
                apiKey={myapiKey}
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                key={"health"}
                pageSize={pageSize}
                country={country}
                category={"health"}
                apiKey={myapiKey}
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                key={"science"}
                pageSize={pageSize}
                country={country}
                category={"science"}
                apiKey={myapiKey}
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                key={"sports"}
                pageSize={pageSize}
                country={country}
                category={"sports"}
                apiKey={myapiKey}
              />
            }
          />
          <Route
            path="/about"
            element={
              <div className="container my-3">
                <About />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
