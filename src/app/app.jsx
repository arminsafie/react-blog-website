import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import Home from "../page/Home";
import Post from "../page/Post";
import Articles from "../page/Articles";
import About from "../page/AboutMe";
import Login from "../page/Login";
import Subscription from "../page/Subscription";

// Create a wrapper to use useLocation inside BrowserRouter
function AppWrapper() {
  const location = useLocation();
  const hideHeader = location.pathname === "/login";

  return (
    <>
      {!hideHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/subscription" element={<Subscription />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}
