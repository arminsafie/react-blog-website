import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import Home from "@/page/Home";
import Post from "@/page/Post";
import Articles from "@/page/Articles";
import About from "@/page/AboutMe";
import Login from "@/page/Login";
import Subscription from "@/page/Subscription";
import PageLoader from "@/components/PageLoader";
import PlanDetail from "@/page/PlanDetail";
export default function AppRoutes() {
  const location = useLocation();
  const hideLayout = location.pathname === "/login";

  const [loading, setLoading] = useState(false);

  // 👇 Detect route change
  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 700); // loader duration (ms)

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {!hideLayout && <Header />}

      {/* Loader */}
      <AnimatePresence>{loading && <PageLoader />}</AnimatePresence>

      {/* Pages */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/subscription/:planName" element={<PlanDetail />} />
        </Routes>
      </AnimatePresence>

      {!hideLayout && <Footer />}
    </>
  );
}
