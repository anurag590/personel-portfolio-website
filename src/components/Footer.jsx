import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            {/* Social Links */}
            <div className="flex space-x-6">
              <a
                href="https://github.com/anurag590"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-600"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/anurag-bansod/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://leetcode.com/u/anuragbansod8468/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500"
              >
                <SiLeetcode size={24} />
              </a>
              <a
                href="https://www.geeksforgeeks.org/user/anuragpno0m/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-700"
              >
                <SiGeeksforgeeks size={24} />
              </a>
            </div>

            {/* Footer Text */}
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center space-y-1">
              <p className="text-sm">
                &copy; 2025 Anurag Bansod. All rights reserved.
              </p>
              <p className="text-sm">Supportive Partner ❤️ Anurag </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
