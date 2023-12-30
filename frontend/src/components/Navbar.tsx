import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-10 bg-cyan-500 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <h2>Logo</h2>
            <ul className="hidden md:flex gap-x-6 text-gray">
              <li>
                <Link href="/">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/business">
                  <p>Businesses</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p>Contacts</p>
                </Link>
              </li>
            </ul>
            <h2>Button</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;