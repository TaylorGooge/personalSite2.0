import HomePage from './Pages/homepage';
import BlogPage from './Pages/blogpage';
import AboutPage from "./Pages/aboutpage"
import FAQPage from "./Pages/faqpage"
import BlogSinglePage from "./Pages/blogsinglepage"
import './App.css';
import "./assets/css/style.css";
import React from "react";

import {
  BrowserRouter, Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={ <HomePage />} />
          <Route path="/blog" element={ <BlogPage />} />
          <Route path="/about" element={ <AboutPage />} />
          <Route path="/faq" element={ <FAQPage />} />
          <Route path="/blogpost" element={ <BlogSinglePage />} >
            <Route path=":blogId" element={<BlogSinglePage />} />
          </Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;