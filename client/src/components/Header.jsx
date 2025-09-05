import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { signoutSuccess } from '../redux/user/userSlice';

export default function Header() {
  const path = useLocation().pathname;
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/test", name: "Test" },
    { path: "/therapist", name: "AI Therapist" },
    { path: "/contact", name: "Contact" },
    { path: "/about", name: "About" },
  ];

 const handleSignOut = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/user/signout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      dispatch(signoutSuccess());
      navigate('/login');

    } catch (err) {
     return toast.error(err.message);
    } 
  };


  return (
    <Navbar className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-900/80">
      <div className="container mx-auto flex w-full flex-wrap items-center justify-between px-4">
        {/* Brand Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <Navbar.Brand as={Link} to="/" className="flex items-center gap-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQZrRgwuKA5JrFS4glBVgzvmPDhhPjWrObr-D01xeKZQ&s"
              alt="MoodVibe Logo"
              className="h-10 w-10 rounded-lg"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent sm:text-2xl">
              MoodVibe
            </span>
          </Navbar.Brand>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden list-none flex-1 items-center justify-center  md:order-1 md:flex md:gap-2">
          {navLinks.map((link) => (
            <Navbar.Link
              key={link.path}
              as={Link}
              to={link.path}
              active={path === link.path}
              className={`rounded-lg px-3 py-2 mx-4 whitespace-nowrap text-sm font-medium transition-colors md:text-base ${
                path === link.path
                  ? "bg-blue-100 text-blue-500 dark:bg-blue-900/20 dark:text-blue-400"
                  : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {link.name}
            </Navbar.Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 md:order-2">
         

          {currentUser ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Avatar
                    alt="user"
                    img={currentUser.profilePicture}
                    rounded
                    className="border-2 border-transparent hover:border-blue-500 rounded-full"
                  />
                </motion.div>
              }
              className="rounded-xl shadow-xl"
            >
              <Dropdown.Header className="px-4 py-3">
                <span className="block truncate text-sm font-semibold">
                  {currentUser.name}
                </span>
                <span className="block truncate text-sm text-gray-500">
                  {currentUser.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item
                as={Link}
                to="/moodHistory"
                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                History
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item className="px-4 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20" onClick={handleSignOut}>
                Sign out
              </Dropdown.Item>
            </Dropdown>
          ) : (
            <Link to="/login">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button
                  gradientDuoTone="purpleToBlue"
                  className="px-4 py-2 text-sm font-medium sm:px-6 sm:text-base"
                >
                  Sign In
                </Button>
              </motion.div>
            </Link>
          )}

          {/* Mobile Menu Toggle */}
          <Navbar.Toggle className="ml-2 md:hidden" />
        </div>

        {/* Mobile Navigation */}
        <Navbar.Collapse className="w-full md:hidden md:order-1">
          {navLinks.map((link) => (
            <Navbar.Link
              key={link.path}
              as={Link}
              to={link.path}
              active={path === link.path}
              className={`block rounded-lg px-3 py-2 text-base font-medium ${
                path === link.path
                  ? "bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
                  : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {link.name}
            </Navbar.Link>
          ))}
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}