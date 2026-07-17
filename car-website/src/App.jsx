import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

// Customer Pages
import Homepage from "./pages/Home";
import Cars from "./pages/Cars";
import CarDetails from "./pages/CarDetails";
import About from "./pages/about";
import Contact from "./pages/Contact";

// Admin Pages
import Login from "./admin/Login";
import Register from "./admin/Register";
import Dashboard from "./admin/Dashboard";
import AddCar from "./admin/AddCar";
import ViewCars from "./admin/ViewCars";
import EditCar from "./admin/Edit";

function App() {
  const location = useLocation();

  // Hide Navbar/Footer on admin pages
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminPage && <Navbar />}

      <Routes>


        <Route path="/" element={<Homepage />} />

        <Route path="/cars" element={<Cars />} />

        <Route path="/cars/:id" element={<CarDetails />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />


        <Route path="/admin/login" element={<Login />} />

        <Route path="/admin/register" element={<Register />} />


        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/add-car"
          element={
            <ProtectedRoute>
              <AddCar />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/view-cars"
          element={
            <ProtectedRoute>
              <ViewCars />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/edit/:id"
          element={
            <ProtectedRoute>
              <EditCar />
            </ProtectedRoute>
          }
        />

      </Routes>

      {!isAdminPage && <Footer />}
    </>
  );
}

export default App;