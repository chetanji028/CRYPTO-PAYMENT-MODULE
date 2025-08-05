import PaymentPage from "../pages/PaymentPage";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Cart } from "../pages/Cart/Cart";
import { Login } from "../pages/auth/Login/Login";
import { ProductListing } from "../pages/ProductListing/ProductListing";
import { ProductDetails } from "../pages/ProductDetails/ProductDetails";
import { RequiresAuth } from "../components/requires-auth/RequiresAuth";
import { Signup } from "../pages/auth/Signup/Signup";
import { Logout } from "../pages/auth/Logout/Logout";
import { Checkout } from "../pages/Checkout/Checkout";
import { Wishlist } from "../pages/Wishlist/Wishlist";
import { UserProfile } from "../pages/UserProfile/UserProfile";
import { Profile } from "../pages/UserProfile/Profile/Profile";
import { Addresses } from "../pages/UserProfile/Addresses/Addresses";
import { Orders } from "../pages/UserProfile/Orders/Orders";
import { PageNotFound } from "../pages/PageNotFound/PageNotFound";

export const NavRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/cart"
        element={
          <RequiresAuth>
            <Cart />
          </RequiresAuth>
        }
      />
      <Route
        path="/wishlist"
        element={
          <RequiresAuth>
            <Wishlist />
          </RequiresAuth>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/product-listing" element={<ProductListing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/product-details/:productId" element={<ProductDetails />} />
      <Route
        path="/checkout"
        element={
          <RequiresAuth>
            <Checkout />
          </RequiresAuth>
        }
      /> 

      <Route
  path="/payment"
  element={
    <RequiresAuth>
      <PaymentPage />
    </RequiresAuth>
  }
/>
      <Route
        path="/profile"
        element={
          <RequiresAuth>
            <UserProfile />
          </RequiresAuth>
        }
      >
        <Route index element={<Profile />} />
        <Route path="orders" element={<Orders />} />
        <Route path="addresses" element={<Addresses />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
