import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" mt-10 bg-slate-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            Chefs Academy is a premier institution dedicated to teaching the art
            and science of cooking. We cultivate talent from the basics to
            mastery, fostering a vibrant community of culinary enthusiasts and
            professionals.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="/Home"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/Courses"
                className="hover:text-white transition-colors duration-300"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="/Contact"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <Link href={"https://www.facebook.com"}>
              <FaFacebook color="#4267B2" size="2em" />
            </Link>

            <Link href={"https://github.com"}>
              <FaGithub color="white" size="2em" />
            </Link>

            <Link href={"https://www.instagram.com"}>
              <FaInstagram color="#E1306C" size="2em" />
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Karachi, Pakistan</p>
          <p>Email: info@Chefschool.com</p>
          <p>Phone: (021) 456-7890</p>
        </div>
      </div>

      <div className="bg-teal-900 py-4 text-center text-base font-bold text-black mt-5">
        © 2024 ChefAcademy | Designed by Neha Arshad | All right reserved
      </div>
    </footer>
  );
}

export default Footer;
