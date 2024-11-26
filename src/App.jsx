import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CoursePage from "./pages/CoursePage";
import TestimonialPage from "./pages/TestimonialPage";
import TermsConditionPage from "./pages/TermsConditionPage";
import FaqPage from "./pages/FaqPage";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/course" element={<CoursePage />} />
        <Route path="/testimonial" element={<TestimonialPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/termsandcondition" element={<TermsConditionPage />} />
      </Routes>
      <FooterComponent />
    </>
  );
}

export default App;
