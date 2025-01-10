import { social } from "../assets/asset";

const Footer = () => {
  return (
    <div className="text-white py-8 border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            {social.map((item, index) => (
              <span
                key={index}
                className="text-2xl hover:text-[#65ED52] transition-all duration-300"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="text-center sm:text-right">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Munyankindi Francois. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
