import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import UserDashboard from "./User/user.Dashboard";
// Customer Pages
import Homepage from "./pages/Home";
import Cars from "./pages/Cars";
import CarDetails from "./pages/CarDetails";
import About from "./pages/about";
import Contact from "./pages/Contact";
import SellCar from "./pages/sellcar";
// Admin Pages
import Login from "./admin/Login";
import Register from "./admin/Register";
import Dashboard from "./admin/Dashboard";
import AddCar from "./admin/AddCar";
import ViewCars from "./admin/ViewCars";
import EditCar from "./admin/Edit";
import SellRequests from "./admin/SellRequests";
function App() {
  const location = useLocation();

  // Hide Navbar/Footer on admin pages
const isAdminPage =
  location.pathname.startsWith("/admin/dashboard") ||
  location.pathname.startsWith("/admin/add-car") ||
  location.pathname.startsWith("/admin/view-cars") ||
  location.pathname.startsWith("/admin/edit");


  return (
    <>
   <Navbar />

      <Routes>


        <Route path="/" element={<Homepage />} />

        <Route path="/cars" element={<Cars />} />

        <Route path="/cars/:id" element={<CarDetails />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />


        <Route path="/admin/login" element={<Login />} />

        <Route path="/admin/register" element={<Register />} />
         <Route path="/sell-car" element={<SellCar />} />

<Route
  path="/user/dashboard"
  element={
    <ProtectedRoute>
      <UserDashboard />
    </ProtectedRoute>
  }
/>
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
       <Route
  path="/admin/sell-requests"
  element={
    <ProtectedRoute>
      <SellRequests />
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