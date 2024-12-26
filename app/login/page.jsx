"use client";

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import LayoutLogin from "../components/layout/LayoutLogin";
import {
  setLogin,
  setLoginError,
  setLogout,
  setLoading,
} from "../redux-system/slices/loginSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const userToken = useSelector((state) => state.login.userToken);
  const isLoading = useSelector((state) => state.login.isLoading);
  const dispatch = useDispatch();

  const validateForm = () => {
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError("Please enter a valid email address.");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return false;
    }
    setError(""); // Clear error if validation passes
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    dispatch(setLoading(true)); // Set loading to true
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }

      );

      if (!response.ok) {
        throw new Error("Invalid email or password.");
      }
      const data = await response.json();
      if (data.authToken) {
        dispatch(setLogin({ token: data.authToken, userData: data.data })); // Store token and userData
        localStorage.setItem("userToken", data.authToken);
        localStorage.setItem("userData", JSON.stringify(data.data));
        alert("Logged in successfully!");
        router.push("/profile");
      } else {
        dispatch(setLoginError(data.message));
        setError(data.message);
      }
    } catch (error) {
      dispatch(setLoginError(error.message));
      setError(error.message);
    } finally {
      dispatch(setLoading(false)); // Set loading to false
    }
  };

  const handleLogout = () => {
    dispatch(setLogout());
    localStorage.removeItem("userToken");
    localStorage.removeItem("userData");
    alert("Logged out successfully!");
  };


  return (
    <LayoutLogin>

      <div className="bg-[#FAFAFA] flex justify-center items-center w-full h-screen px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          {userToken ? (
            <div className="text-center">
              <h2 className="text-[2em] text-gray-700 font-thin tracking-widest">
                Welcome Back!
              </h2>
              <button
                onClick={handleLogout}
                className="w-full bg-red-500 text-white font-semibold py-2 px-4 rounded-lg mt-4"
              >
                Logout
              </button>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="flex flex-col gap-3">
              <h2 className="text-[2em] mb-4 text-gray-700 text-center font-thin tracking-widest">
                Detaylar
              </h2>
              <div className="mb-4 flex flex-col gap-3">
                <h1 className="font-bold text-[1.5em]">Log in</h1>
                <label htmlFor="email" className="text-[12px]">
                  Enter your email and password
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 placeholder:text-black py-2 border rounded-lg text-black focus:outline-none focus:border-black"
                  placeholder="Email"
                />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 placeholder:text-black py-2 border rounded-lg text-black focus:outline-none focus:border-black"
                  placeholder="Password"
                />
              </div>
              {error && (
                <p
                  className="text-red-500 text-sm"
                  aria-live="polite" // For accessibility
                >
                  {error}
                </p>
              )}
              <button
                type="submit"
                className="w-full bg-black text-white font-semibold py-2 px-4 rounded-lg"
                disabled={isLoading} // Disable button when loading
              >
                {isLoading ? "Loading..." : "Continue"}
              </button>

              <Link
                href="/register"
                className="mt-3 text-center text-blue-500 cursor-pointer"
              >
                Don’t have an account? Register here.
              </Link>

              <span className="mt-3 text-center">Privacy</span>
            </form>
          )}
        </div>

      </div>
    </LayoutLogin>
  );
};

export default LoginPage;
