"use client";

import Image from "next/image";
import { IoMdArrowDropright } from "react-icons/io";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Footer() {
  const [state, handleSubmit] = useForm("mwpekpkz");
  const notify = () => toast("Thank you for subscribing!");
  return (
    <>
      <footer className="w-screen px-4 divide-y bg-[#222222] text-[--text-color]">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="w-2/5 max-md:w-full ">
            <a
              rel="noopener noreferrer"
              href="/"
              className="flex justify-center space-x-3 lg:justify-start"
            >
              <div className="flex items-center justify-center w-24 h-24 rounded-full">
                <Image
                  width={100}
                  height={100}
                  quality={100}
                  className="flex-shrink-0 object-cover   rounded-full"
                  src={"/logo/KG.png"}
                  alt={""}
                />
              </div>

              <span className="self-center text-[#f7fafc] text-2xl font-semibold">
                KGNEWS
              </span>
            </a>

            <p className="text-[#f7fafc] font-serif text-xs sm:text-sm mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              aperiam nam aliquam illo nisi harum repellat vitae, cupiditate
              placeat facere odit, soluta aut porro? Et?
            </p>

            <div className="flex justify-center items-center gap-4 my-2 ">
              <Link
                className="bg-red-600 text-white  p-3 hover:scale-110 transition-all duration-200 "
                href={""}
              >
                <FaFacebook />
              </Link>
              <Link
                className="bg-red-600 text-white  p-3 hover:scale-110 transition-all duration-200"
                href={""}
              >
                <FaInstagram />
              </Link>
              <Link
                className="bg-red-600 text-white  p-3 hover:scale-110 transition-all duration-200"
                href={""}
              >
                {" "}
                <FaPinterestP />
              </Link>
              <Link
                className="bg-red-600 text-white  p-3 hover:scale-110 transition-all duration-200"
                href={""}
              >
                <FaLinkedin />
              </Link>
              <Link
                className="bg-red-600 text-white p-3 hover:scale-110 transition-all duration-200 "
                href={""}
              >
                <FaYoutube />
              </Link>
            </div>
          </div>
          <div className="flex justify-between max-md:flex-col w-2/5 text-md  gap-3  pr-2 max-md:pr-0 max-md:w-full ">
            <div className="space-y-3 w-1/2 max-md:w-full ">
              <h3 className="tracking-wide  text-3xl text-gray-50 font-bold border-b pb-4">
                Categories
              </h3>
              <ul className="space-y-1 ">
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex justify-start items-center gap-2 group text-[--secondary-text-color] hover:text-gray-50 hover:font-bold transition-all duration-200 ease-linear"
                  >
                    <span className="transform transition-transform duration-300 ease-in-out text-2xl group-hover:translate-x-2 ">
                      <IoMdArrowDropright color="red" />{" "}
                    </span>{" "}
                    Politics
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex justify-start items-center gap-2 group text-[--secondary-text-color] hover:text-gray-50 hover:font-bold transition-all duration-200 ease-linear"
                  >
                    <span className="transform transition-transform duration-300 ease-in-out text-2xl group-hover:translate-x-2 ">
                      <IoMdArrowDropright color="red" />{" "}
                    </span>{" "}
                    Technology
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex justify-start items-center gap-2 group text-[--secondary-text-color] hover:text-gray-50 hover:font-bold transition-all duration-200 ease-linear"
                  >
                    <span className="transform transition-transform duration-300 ease-in-out text-2xl group-hover:translate-x-2 ">
                      <IoMdArrowDropright color="red" />{" "}
                    </span>{" "}
                    Business
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex justify-start items-center gap-2 group text-[--secondary-text-color] hover:text-gray-50 hover:font-bold transition-all duration-200 ease-linear"
                  >
                    <span className="transform transition-transform duration-300 ease-in-out text-2xl group-hover:translate-x-2 ">
                      <IoMdArrowDropright color="red" />{" "}
                    </span>{" "}
                    Sports
                  </a>
                </li>

                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex justify-start items-center gap-2 group text-[--secondary-text-color] hover:text-gray-50 hover:font-bold transition-all duration-200 ease-linear"
                  >
                    <span className="transform transition-transform duration-300 ease-in-out text-2xl group-hover:translate-x-2 ">
                      <IoMdArrowDropright color="red" />{" "}
                    </span>{" "}
                    Science
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3 w-1/2 max-md:w-full">
              <h3 className="tracking-wide border-b pb-4  text-3xl text-gray-50 font-bold">
                Links
              </h3>
              <ul className="space-y-1">
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex justify-start items-center gap-2 group text-[--secondary-text-color] hover:text-gray-50 hover:font-bold transition-all duration-200 ease-linear"
                  >
                    <span className="transform transition-transform duration-300 ease-in-out text-2xl group-hover:translate-x-2 ">
                      <IoMdArrowDropright color="red" />{" "}
                    </span>{" "}
                    Home
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex justify-start items-center gap-2 group text-[--secondary-text-color] hover:text-gray-50 hover:font-bold transition-all duration-200 ease-linear"
                  >
                    <span className="transform transition-transform duration-300 ease-in-out text-2xl group-hover:translate-x-2 ">
                      <IoMdArrowDropright color="red" />{" "}
                    </span>{" "}
                    About
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex justify-start items-center gap-2 group text-[--secondary-text-color] hover:text-gray-50 hover:font-bold transition-all duration-200 ease-linear"
                  >
                    <span className="transform transition-transform duration-300 ease-in-out text-2xl group-hover:translate-x-2 ">
                      <IoMdArrowDropright color="red" />{" "}
                    </span>{" "}
                    Contacts
                  </a>
                </li>

                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex justify-start items-center gap-2 group text-[--secondary-text-color] hover:text-gray-50 hover:font-bold transition-all duration-200 ease-linear"
                  >
                    <span className="transform transition-transform duration-300 ease-in-out text-2xl group-hover:translate-x-2 ">
                      <IoMdArrowDropright color="red" />{" "}
                    </span>{" "}
                    News
                  </a>
                </li>

                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex justify-start items-center gap-2 group text-[--secondary-text-color] hover:text-gray-50 hover:font-bold transition-all duration-200 ease-linear"
                  >
                    <span className="transform transition-transform duration-300 ease-in-out text-2xl group-hover:translate-x-2 ">
                      <IoMdArrowDropright color="red" />{" "}
                    </span>{" "}
                    Shop
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-5 w-2/5 max-md:w-full">
            <div className="capitalize text-3xl border-b pb-4  text-gray-50 font-bold">
              Subscribe
            </div>
            <div>
              <p className="text-[#f7fafc] my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                fugiat!
              </p>

              {state.succeeded ? (
                <span className=" text-xl font-semibold text-[#f7fafc] my-3 px-4 text-center">
                  Thanks for signing up
                </span>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col w-full gap-2 items-center"
                >
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your Email Address here"
                    className="w-full p-2 rounded-md mt-2 bg-white-5 border border-white-10 text-white"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                  <button
                    onClick={notify}
                    disabled={state.submitting}
                    type="submit"
                    className="w-32 p-2 rounded-md mt-2 bg-[--background-color] text-[--text-color]"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-center text-[#f7fafc]">
          © 2024{" "}
          <span className="font-semibold text-white">Khaled Ghonim </span>. All
          rights reserved.
        </div>
      </footer>
    </>
  );
}
