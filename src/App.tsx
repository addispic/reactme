import { Routes, Route } from "react-router-dom";

// layouts
import AuthLayout from "./layouts/AuthLayout";
import PostLayout from "./layouts/PostLayout";

// pages
import Home from "./pages/Home";
import PostComments from "./pages/PostComments";
// auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
export default function App() {
  return (
    <>
      <Routes>
        {/* auth */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        {/* posts */}
        <Route path="/" element={<PostLayout />}>
          <Route index element={<Home />} />{" "}
          <Route path="comments/:id" element={<PostComments />} />
        </Route>
      </Routes>
    </>
  );
}
