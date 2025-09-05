import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import Footer from "./components/footer";
import PrivateRoute from "./components/PrivateRoute";
import ScrollToTop from "./components/ScrollTOTop";
import Signout from "./components/Signout";
import Login from './pages/Login';
import ForgotPassword from './components/ForgotPassword';
import ContactPage from './pages/Contact';
import NotFound from './pages/NotFound';
import AITherapist from './pages/AITherapist';
import { useSelector } from 'react-redux';
import MentalHealthQuiz from './components/Quiz';
import MoodHistory from './components/MoodHistory';

export default function App() {
  const { user } = useSelector((state) => state.user)
  console.log(user)
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signout" element={<Signout />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/test" element={<MentalHealthQuiz />} />
          <Route path="/moodHistory" element={<MoodHistory />} />
          <Route path="/therapist" element={<AITherapist />} />
        </Route>
        <Route path="*" element={<NotFound />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
