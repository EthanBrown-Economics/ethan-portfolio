import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import DataPlayground from "./pages/DataPlayground";

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="/playground" element={<DataPlayground />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </>
  );
}11