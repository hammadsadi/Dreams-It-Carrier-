"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavItem from "../Shared/NavItem";
import Link from "next/link";
import useClickOutside from "@/hooks/useHandleClickOutSide";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { isOpen, setIsOpen, menuRef } = useClickOutside();
  const toggleMenu = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="bg-secondary fixed w-full top-0 z-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between relative">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className=" text-white flex gap-[1px] items-center" href="/">
              <span className="text-action-primary text-4xl font-bold">D</span>
              <span>reamms</span>
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12 right-0 top-16  absolute bg-primary md:bg-transparent md:static">
            <nav aria-label="Global" className="">
              <ul className="w-full md:flex flex-col md:flex-row items-center gap-6 text-sm hidden">
                <NavItem linkTitle="About" dLink="#about" />
                <NavItem linkTitle="Contact Us" dLink="contact" />
                <NavItem linkTitle="Services" dLink="services" />
              </ul>
              <ul className="w-full flex flex-col md:flex-row items-center gap-6 text-sm md:hidden ">
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className="absolute end-0 z-10 mt-0.5 w-56 divide-y divide-body-secondary/10 rounded-md border border-body-secondary/10 bg-primary shadow-lg"
                      role="menu"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-2">
                        <Link
                          href="#"
                          className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-action-primary hover:text-white"
                          role="menuitem"
                        >
                          About
                        </Link>
                        <a
                          href="#"
                          className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-action-primary hover:text-white"
                          role="menuitem"
                        >
                          Billing summary
                        </a>
                        <a
                          href="#"
                          className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-action-primary hover:text-white"
                          role="menuitem"
                        >
                          Team settings
                        </a>
                      </div>
                      <div className="p-2">
                        <button
                          type="submit"
                          className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-action-primary hover:bg-action-primary hover:text-white"
                          role="menuitem"
                        >
                          <FaUserCircle />
                          Dashboard
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </ul>
            </nav>

            <div className="hidden md:relative md:block" ref={menuRef}>
              <button
                type="button"
                className="overflow-hidden rounded-full border border-gray-300 shadow-inner"
                onClick={toggleMenu}
              >
                <span className="sr-only">Toggle dashboard menu</span>
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="User Avatar"
                  className="size-10 object-cover"
                />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    className="absolute end-0 z-10 mt-0.5 w-56 divide-y divide-body-secondary/10 rounded-md border border-body-secondary/10 bg-primary shadow-lg"
                    role="menu"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-2">
                      <a
                        href="#"
                        className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-action-primary hover:text-white"
                        role="menuitem"
                      >
                        My profile
                      </a>
                      <a
                        href="#"
                        className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-action-primary hover:text-white"
                        role="menuitem"
                      >
                        Billing summary
                      </a>
                      <a
                        href="#"
                        className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-action-primary hover:text-white"
                        role="menuitem"
                      >
                        Team settings
                      </a>
                    </div>
                    <div className="p-2">
                      <form method="POST" action="#">
                        <button
                          type="submit"
                          className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-action-primary hover:bg-action-primary hover:text-white"
                          role="menuitem"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                            />
                          </svg>
                          Logout
                        </button>
                      </form>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* <div className="block md:hidden">
              <button className="rounded bg-action-primary text-white p-2 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div> */}
          </div>
          <div className="block md:hidden" ref={menuRef}>
            <button
              className="rounded bg-action-primary text-white p-2 transition"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
