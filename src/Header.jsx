import { HiMenu } from "react-icons/hi";

const Header = () => {
  const navLinks = [
    { text: "Home", url: "/" },
    { text: "Products", url: "/products" },
    { text: "Services", url: "/services" },
    { text: "About Us", url: "/about" },
    { text: "Contact Us", url: "/contact" },
  ];

  return (
    <nav className="flex justify-between items-center max-w-screen-2xl mx-6 md:mx-10 2xl:mx-auto py-4">
      <a href="" className="font-bold text-3xl">
        TechHub
      </a>
      <ul className=" gap-12 items-center text-lg hidden lg:flex">
        {navLinks.map((link, id) => (
          <li key={id}>
            <a href="#">{link.text}</a>
          </li>
        ))}
      </ul>

      <button className="px-8 py-3 bg-slate-500 font-medium text-xl rounded-xl hover:bg-slate-600 hidden lg:block">
        Explore Now
      </button>

      <button className="text-3xl border px-2 py-1 rounded-md lg:hidden">
        <HiMenu />
      </button>
    </nav>
  );
};

export default Header;
