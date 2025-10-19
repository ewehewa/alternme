import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";   // ✅ make sure this is imported
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/home/HomePage";
import Pricing from "./pages/home/Pricing";
import Contact from "./pages/home/Contact";
import LoginSection from "./pages/home/LoginSection";
import SignUpPage from './pages/home/SignUpPage';
import DashboardLayout from "../src/pages/dashboard/DashboardLayout";
import ProtectedRoute from "./routes/ProtectedRoute";



const Layout = ({ children }) => {
  const location = useLocation();
  const showLayout = ["/", "/signup", "/services", "/pricing", "/contact", "/login" ].includes(location.pathname);

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
           <Route path="/contact" element={<Contact />} />
          {/* Add more routes here */}
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginSection/>} />
          {/* <Route path="/services" element={<Services />} /> */}

           <Route path="/dashboard" element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          ></Route>
          
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
