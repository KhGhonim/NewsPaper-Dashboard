"use client";
import React, { useEffect, useRef, useState } from "react";
import "./style.css";
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
      } w-full h-full bg-black bg-opacity-80  fixed inset-0  `}
    >
      <div className="w-full h-full flex justify-center items-center">
        <div ref={ref} className=" wrapper">
          <div className="title-text">
            <div
              className="title"
              style={{
                transform:
                  activeTab === "login" ? "translateX(0)" : "translateX(-100%)",
              }}
            >
              Login Form
            </div>
            <div
              className="title"
              style={{
                transform:
                  activeTab === "login" ? "translateX(0)" : "translateX(-100%)",
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
              {activeTab === "login" ? (
                <form className="login">
                  <div className="field">
                    <input type="text" placeholder="Email Address" required />
                  </div>
                  <div className="field">
                    <input type="password" placeholder="Password" required />
                  </div>
                  <div className="pass-link">
                    <a href="#">Forgot password?</a>
                  </div>
                  <div className="field btn">
                    <div className="btn-layer"></div>
                    <input type="submit" value="Login" />
                  </div>
                </form>
              ) : (
                <form className="signup">
                  <div className="field">
                    <input type="text" placeholder="Email Address" required />
                  </div>
                  <div className="field">
                    <input type="password" placeholder="Password" required />
                  </div>
                  <div className="field">
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      required
                    />
                  </div>
                  <div className="field btn">
                    <div className="btn-layer"></div>
                    <input type="submit" value="Signup" />
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
