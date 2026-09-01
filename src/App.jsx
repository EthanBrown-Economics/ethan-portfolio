import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import PdfViewer from "./pages/PdfViewer";

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />

      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/projects/:slug"
            element={
              <PageTransition>
                <ProjectPage />
              </PageTransition>
            }
          />
          <Route
            path="/blog"
            element={
              <PageTransition>
                <Blog />
              </PageTransition>
            }
          />
          <Route
            path="/blog/:slug"
            element={
              <PageTransition>
                <BlogPost />
              </PageTransition>
            }
          />
          <Route
            path="/pdf"
            element={
              <PageTransition>
                <PdfViewer />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}
