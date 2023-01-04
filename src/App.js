import React, { Component } from "react";
import Navbar from "./components/Navbar";
import NewsClass from "./components/NewsClass";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pageSize = 20;
  myapiKey = process.env.REACT_APP_NEWS_API;
  country = "in";
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <NewsClass
                  key={"general"}
                  pageSize={this.pageSize}
                  country={this.country}
                  category={"general"}
                  apiKey={this.myapiKey}
                />
              }
            />
            <Route
              path="/business"
              element={
                <NewsClass
                  key={"business"}
                  pageSize={this.pageSize}
                  country={this.country}
                  category={"business"}
                  apiKey={this.myapiKey}
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <NewsClass
                  key={"entertainment"}
                  pageSize={this.pageSize}
                  country={this.country}
                  category={"entertainment"}
                  apiKey={this.myapiKey}
                />
              }
            />
            <Route
              path="/general"
              element={
                <NewsClass
                  key={"general"}
                  pageSize={this.pageSize}
                  country={this.country}
                  category={"general"}
                  apiKey={this.myapiKey}
                />
              }
            />
            <Route
              path="/health"
              element={
                <NewsClass
                  key={"health"}
                  pageSize={this.pageSize}
                  country={this.country}
                  category={"health"}
                  apiKey={this.myapiKey}
                />
              }
            />
            <Route
              path="/science"
              element={
                <NewsClass
                  key={"science"}
                  pageSize={this.pageSize}
                  country={this.country}
                  category={"science"}
                  apiKey={this.myapiKey}
                />
              }
            />
            <Route
              path="/sports"
              element={
                <NewsClass
                  key={"sports"}
                  pageSize={this.pageSize}
                  country={this.country}
                  category={"sports"}
                  apiKey={this.myapiKey}
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
}
