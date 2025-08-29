import {
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="bg-purple-50 dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-300 px-6 md:px-16 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section: Logo + Newsletter */}
        <div>
          <h2 className="text-xl font-bold">
            <span className="text-black dark:text-white">Win</span>
            <span className="text-purple-600 italic">Flow</span>
          </h2>
          <p className="mt-2 text-sm">
            Where Knowledge Flows, Innovation Thrives, <br />
            and Expertise Connects.
          </p>

          <div className="mt-6">
            <p className="text-sm font-semibold mb-2">
              Follow The Flow With Our Newsletter
            </p>
            <form className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Email"
                className="px-3 py-2 rounded border border-gray-300 w-full max-w-[200px]"
              />
              <Button
                type="submit"
                className="bg-[#F6A63B] text-white px-4 py-2 cursor-pointer rounded hover:bg-[#E59535]"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>

        {/* Center Section: Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm cursor-pointer">
            <li>Home</li>
            <li>About Us</li>
            <li>Explore</li>
            <li>Recent</li>
          </ul>
        </div>

        {/* Right Section: Contact Info */}
        <div>
          <h3 className="font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaEnvelope /> Askwinflow@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhone /> +2349068121258
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> 126, Fake Street, New York NY1235, USA
            </li>
          </ul>

          <div className="mt-4">
            <p className="text-sm font-semibold mb-2">Follow Us</p>
            <div className="flex space-x-4 text-gray-600 dark:text-gray-400">
              <FaFacebook className="cursor-pointer hover:text-purple-600" />
              <FaXTwitter className="cursor-pointer hover:text-purple-600" />
              <FaInstagram className="cursor-pointer hover:text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-700 mt-10 pt-4 flex flex-col md:flex-row justify-between text-xs text-gray-500 dark:text-gray-400">
        <p>© 2025 Askwinflow - All right reserved</p>
        <div className="space-x-4 mt-2 md:mt-0 cursor-pointer">
          <span>Terms & conditions</span>
          <span>|</span>
          <span>Privacy Policies</span>
        </div>
      </div>
    </footer>
  );
}
