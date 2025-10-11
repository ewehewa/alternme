import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";   // ✅ make sure this is imported
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/home/HomePage";
import Pricing from "./pages/home/Pricing";


const Layout = ({ children }) => {
  const location = useLocation();
  const showLayout = ["/", "/signup", "/services"].includes(location.pathname);

  return (
    <>
      {showLayout && <Navbar />}
      {children}
      {showLayout && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Toaster position="top-right" reverseOrder={false} />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<Pricing />} />
          {/* Add more routes here */}
          {/* <Route path="/signup" element={<Signup />} /> */}
          {/* <Route path="/services" element={<Services />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
