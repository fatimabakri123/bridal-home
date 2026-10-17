import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import IntroPage from "./pages/IntroPage";
import RolePage from "./pages/RolePage";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Category from "./pages/Category";
import ProductDetails from "./pages/ProductDetails";
import Checklist from "./pages/Checklist";

import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import ProtectedAdminRoute from "./admin/ProtectedAdminRoute";
import AdminProducts from "./admin/AdminProducts";
import AddProduct from "./admin/AddProduct";
import AdminCategories from "./admin/AdminCategories";

function Offers() {
  return <div>Offers</div>;
}

function About() {
  return <div>About Us</div>;
}

function AppContent() {
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/" ||
    location.pathname === "/role";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        {/* INTRO VIDEO */}
        <Route path="/" element={<IntroPage />} />

        {/* ROLE SELECTION */}
        <Route path="/role" element={<RolePage />} />

        {/* CUSTOMER HOME */}
        <Route path="/home" element={<Home />} />

        {/* CATEGORIES */}
        <Route path="/categories" element={<Categories />} />

        {/* SINGLE CATEGORY */}
        <Route
          path="/category/:categoryId"
          element={<Category />}
        />

        {/* PRODUCT DETAILS */}
        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        {/* CHECKLIST */}
        <Route path="/checklist" element={<Checklist />} />

        {/* OFFERS */}
        <Route path="/offers" element={<Offers />} />

        {/* ABOUT */}
        <Route path="/about" element={<About />} />

        {/* ADMIN LOGIN */}
        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />

        {/* ADMIN DASHBOARD */}
        <Route
          path="/admin"
          element={
            <ProtectedAdminRoute>
              <AdminDashboard />
            </ProtectedAdminRoute>
          }
        />

        {/* ADMIN PRODUCTS */}
        <Route
          path="/admin/products"
          element={
            <ProtectedAdminRoute>
              <AdminProducts />
            </ProtectedAdminRoute>
          }
        />

        {/* ADD PRODUCT */}
        <Route
          path="/admin/products/add"
          element={
            <ProtectedAdminRoute>
              <AddProduct />
            </ProtectedAdminRoute>
          }
        />

        {/* ADMIN CATEGORIES */}
        <Route
          path="/admin/categories"
          element={
            <ProtectedAdminRoute>
              <AdminCategories />
            </ProtectedAdminRoute>
          }
        />

        {/* OWNER LOGIN */}
        <Route
          path="/owner/login"
          element={<div>Owner Login</div>}
        />

        {/* UNKNOWN ROUTES */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;