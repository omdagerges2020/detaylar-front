"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import LayoutLogin from "../components/layout/LayoutLogin";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterPage = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    firstname: "",
    telephone: "",
  });
  const [status, setStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userToken = localStorage.getItem("userToken");
      if (userToken) {
        router.push("/profile");
      }
    }
  }, [router]);

  const validateForm = () => {
    const newErrors = {};
    if (!user.firstname) newErrors.firstname = "Name is required";
    if (!user.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!user.telephone) {
      newErrors.telephone = "Telephone is required";
    } else if (!/^\d+$/.test(user.telephone)) {
      newErrors.telephone = "Telephone must contain only numbers";
    }
    if (!user.password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleForm = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setIsLoading(false);
      return;
    }
    setErrors({});
    try {
      const res = await axios({
        method: "post",
        url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user/register`,
        headers: {
          token: "RuQChqz2FqJkP6wMAQiVlLx5OTRIXAPPWEB",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        data: user,
      });
      if (res.data.status === 0) {
        setErrorMessage(res.data.message);
      } else if (res.data.status === 1) {
        localStorage.setItem("userToken", res.data.authToken);
        localStorage.setItem("userData", JSON.stringify(res.data.data));
        router.push("/");
      }
      setStatus(true);
      setIsLoading(false);
    } catch (er) {
      setStatus(false);
      setErrorMessage("An error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <LayoutLogin>
      <div className="bg-[#FAFAFA] flex justify-center items-center w-full h-screen px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <form onSubmit={handleForm} className="flex flex-col gap-3">
            <h2 className="text-[2em] mb-4 text-gray-700 text-center font-thin tracking-widest">
              Detaylar
            </h2>
            <div className="mb-4 flex flex-col gap-3">
              <label htmlFor="firstname" className="text-[12px]">
                Enter your name
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={user.firstname}
                onChange={handleChange}
                required
                className="w-full px-4 placeholder:text-black py-2 border rounded-lg text-black focus:outline-none focus:border-black"
                placeholder="Name"
              />
              {errors.firstname && (
                <div className="text-red-500 text-[12px]">{errors.firstname}</div>
              )}
              <label htmlFor="email" className="text-[12px]">
                Enter your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                required
                className="w-full px-4 placeholder:text-black py-2 border rounded-lg text-black focus:outline-none focus:border-black"
                placeholder="Email"
              />
              {errors.email && (
                <div className="text-red-500 text-[12px]">{errors.email}</div>
              )}
              <label htmlFor="telephone" className="text-[12px]">
                Enter your telephone
              </label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                value={user.telephone}
                onChange={handleChange}
                required
                className="w-full px-4 placeholder:text-black py-2 border rounded-lg text-black focus:outline-none focus:border-black"
                placeholder="Phone"
              />
              {errors.telephone && (
                <div className="text-red-500 text-[12px]">{errors.telephone}</div>
              )}
              <label htmlFor="password" className="text-[12px]">
                Enter your password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                required
                className="w-full px-4 placeholder:text-black py-2 border rounded-lg text-black focus:outline-none focus:border-black"
                placeholder="Password"
              />
              {errors.password && (
                <div className="text-red-500 text-[12px]">{errors.password}</div>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white font-semibold py-2 px-4 rounded-lg"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Register"}
            </button>
            <Link
              href="/login"
              className="mt-3 text-center text-blue-500 cursor-pointer"
            >
              Already have an account? Login
            </Link>
            {errorMessage && (
              <div className="text-red-500 text-center mt-2">
                {errorMessage}
              </div>
            )}
            {status === false && (
              <div className="text-red-500 text-center mt-2">
                Register failed. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </LayoutLogin>
  );
};

export default RegisterPage;
