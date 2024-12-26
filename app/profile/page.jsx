"use client";
import {
  ChevronDownIcon,
  PencilIcon,
  PlusIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setLoading,
  setLogin,
  setLogout,
} from "../redux-system/slices/loginSlice";
import { useRouter } from "next/navigation";

const Profile = () => {
  const route = useRouter();
  const dispatch = useDispatch();
  const { userToken, isLoading, userData } = useSelector(
    (state) => state.login
  );

  const handleLogout = () => {
    dispatch(setLogout());
    localStorage.removeItem("userData");
    route.push("/");
  };

  const handleEditField = (field, value) => {
    // Logic to handle field editing
    const updatedUserData = { ...userData, [field]: value };
    dispatch(setLogin({ token: userToken, userData: updatedUserData }));
    localStorage.setItem("userData", JSON.stringify(updatedUserData));
  };

  useEffect(() => {
    if (userToken && !userData) {
      dispatch(setLoading(true));
      fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user/login`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch(setLogin({ token: userToken, userData: data.data }));
          localStorage.setItem("userData", JSON.stringify(data.data));
          dispatch(setLoading(false));
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          dispatch(setLoading(false));
        });
    }
  }, [userToken, userData, dispatch]);

  if (isLoading || !userData) {
    return (
      <div class="text-center w-full flex flex-col items-center justify-center h-screen">
        <div class="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-black mx-auto"></div>
        <h2 class="text-zinc-900  mt-4">Loading...</h2>
        <p class="text-zinc-600 dark:text-zinc-400">
          Your adventure is about to begin
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/">
            <h1 className="text-2xl font-bold text-gray-800">Detaylar</h1>
          </a>
          <nav className="flex space-x-6 items-center">
            <a href="/" className="text-gray-600 hover:underline">
              Shop
            </a>
            <a href="/cart" className="text-gray-600 hover:underline">
              Orders
            </a>
            <button
              onClick={handleLogout}
              className="text-gray-600 hover:text-red-500"
            >
              Logout
            </button>
          </nav>
        </div>
      </header>
      <main className="container mx-auto mt-8 px-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Profile</h2>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between border-b pb-4">
            <div>
              <h3 className="text-lg font-medium text-gray-800">Name</h3>
              <p className="text-gray-600 mt-1">{userData.firstname}</p>
            </div>
            <button
              onClick={() =>
                handleEditField(
                  "firstname",
                  prompt("Enter new name:", userData.firstname)
                )
              }
              className="flex items-center text-blue-500 text-sm hover:underline"
            >
              <PencilIcon className="h-4 w-4 mr-1" />
              Edit
            </button>
          </div>

          <div className="mt-4 border-b pb-4">
            <h3 className="text-lg font-medium text-gray-800">Email</h3>
            <p className="text-gray-600 mt-1">{userData.email}</p>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-800">Addresses</h3>
              <button className="flex items-center text-blue-500 text-sm hover:underline">
                <PlusIcon className="h-4 w-4 mr-1" />
                Add
              </button>
            </div>
            <div className="mt-4 bg-gray-100 p-4 rounded-lg text-gray-500">
              {userData.addresses && userData.addresses.length > 0 ? (
                userData.addresses.map((address, index) => (
                  <p key={index}>{address}</p>
                ))
              ) : (
                <p>No addresses added</p>
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-12 bg-white border-t">
        <div className="container mx-auto py-4 px-6 flex justify-start gap-4 text-sm text-gray-500">
          <a href="/#" className="hover:underline">
            Refund policy
          </a>
          <a href="#" className="hover:underline">
            Shipping policy
          </a>
          <a href="#" className="hover:underline">
            Privacy policy
          </a>
          <a href="#" className="hover:underline">
            Terms of service
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Profile;
