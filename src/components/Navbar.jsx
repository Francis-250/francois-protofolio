import { useState } from "react";
import { menu } from "../assets/asset";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="flex justify-between items-center sm:p-6 p-4 px-[2em] sm:px-[10em] bg-black bg-opacity-60 fixed w-full left-0 z-50">
      <header className="text-white text-2xl">Francois</header>
      <div className="hidden sm:flex gap-5">
        {menu.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
      <div
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="sm:hidden flex items-center justify-center h-[50px] w-[50px] rounded-full text-3xl text-white cursor-pointer"
      >
        <HiMenuAlt3 />
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] max-w-[300px] rounded-lg p-6 relative">
            <div
              onClick={() => setIsMobileOpen(false)}
              className="absolute top-4 right-4 flex items-center justify-center h-[40px] w-[40px] text-2xl bg-red-600 text-white rounded-full cursor-pointer"
            >
              <MdClose />
            </div>
            <div className="flex flex-col gap-4">
              {menu.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-black hover:text-[#65ED52] transition-all duration-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;