import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
    return (
      <footer className="bg-cyan-100 text-black font-semibold py-4 w-full">
        <div className="containers mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <p> <a target='_blank' href="https://saeed-sharifi.ir">Saeed Sharifi Academy</a>  &copy; {new Date().getFullYear()} | All rights reserved</p>
          </div>
          <div className="flex space-x-4">
          
        
            <a
              href="https://saeed-sharifi.ir/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-slate-900"
            >
              
            </a>
          </div>
        </div>
      </footer>
    );
  };