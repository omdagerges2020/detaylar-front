import React from "react";
import SimpleRegistrationForm from "../components/loginComponents/LoginForm";
import LayoutLogin from "../components/layout/LayoutLogin";
import Link from "next/link";

const page = () => {
  return (
    <LayoutLogin>
      <div className="bg-[#FAFAFA] flex justify-center items-center w-full h-screen">
        {/* <div className="bg-white">
          <h1 className="text-black text-xl">Detaylar</h1>
          <SimpleRegistrationForm />
        </div> */}
        <form class="bg-white p-6 rounded-lg shadow-md w-[40%] flex flex-col gap-3">
          <h2 class="text-[2em] mb-4 text-gray-700 text-center font-thin tracking-widest">Detaylar</h2>
          <div class="mb-4 flex flex-col gap-3">
            <h1 className="font-bold text-[1.5em]">Log in</h1>
            <p className="text-[12px]">Enter your email and we'll send you a login code</p>
            {/* <label for="email" class="block text-gray-600 mb-2">
              Email Address
            </label> */}
            <input
              type="email"
              id="email"
              name="email"
              required
              class="w-full px-4 placeholder:text-black py-2 border rounded-lg text-black focus:outline-none  focus:border-black"
              placeholder="Email"
            />
          </div>
          <Link
            href="/login/profile"
            type="submit"
            class="w-full bg-black text-white font-semibold py-2 px-4 rounded-lg focus:outline-none "
          >
            Continue
          </Link>
          <span className="mt-3">Privacy</span>
        </form>
      </div>
    </LayoutLogin>
  );
};

export default page;
