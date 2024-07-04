"use client";
import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import SingUp from "./SignUp/SingUp";
import SingIn from "./SignIn/SingIn";
export default function Signin({ setUser, User }) {
  const [activeTab, setActiveTab] = useState("login");

  const SignUpModelCloser = () => {
    setUser(false);
  };

  const ref = useRef(null);
  useEffect(() => {
    // Event handler for clicking outside the SignUp modal
    const HandleModelCloser = (eo) => {
      // Check if the click is not inside the SignUp div
      if (ref.current && !ref.current.contains(eo.target)) {
        // Close the modal
        SignUpModelCloser();
      }
    };

    // Add the event listener for clicking outside the SignUp modal
    document.addEventListener("mousedown", HandleModelCloser);

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener("mousedown", HandleModelCloser);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div
      className={` ${
        User ? "block" : "hidden"
      } w-full h-full bg-black bg-opacity-80  fixed inset-0 z-20  `}
    >
      <div className="w-auto h-full flex justify-center items-center">
        <div className="flex justify-center items-center" ref={ref}>
          <div className="hidden md:block">
            <img
              src="https://www.gonewsindia.com/assets/uploads/Screen_Shot_2021-08-14_at_1.50.25_PM2.png"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className=" wrapper">
            <div className="title-text">
              <div
                className="title"
                style={{
                  transform:
                    activeTab === "login"
                      ? "translateX(0)"
                      : "translateX(-100%)",
                }}
              >
                Login Form
              </div>
              <div
                className="title"
                style={{
                  transform:
                    activeTab === "login"
                      ? "translateX(0)"
                      : "translateX(-100%)",
                }}
              >
                Signup Form
              </div>
            </div>

            <div className="form-container">
              <div className="slide-controls">
                <input
                  type="radio"
                  name="slide"
                  id="login"
                  checked={activeTab === "login"}
                  onChange={() => setActiveTab("login")}
                />
                <input
                  type="radio"
                  name="slide"
                  id="signup"
                  checked={activeTab === "signup"}
                  onChange={() => setActiveTab("signup")}
                />
                <label
                  htmlFor="login"
                  className={`slide login ${
                    activeTab === "login" ? "active" : ""
                  }`}
                >
                  Login
                </label>
                <label
                  htmlFor="signup"
                  className={`slide signup ${
                    activeTab === "signup" ? "active" : ""
                  }`}
                >
                  Signup
                </label>
                <div className="slider-tab"></div>
              </div>
              <div className="form-inner">
                {activeTab === "login" ? <SingIn /> : <SingUp />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
