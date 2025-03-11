const Footer = () => {
  return (
      <footer className="text-secondary text-center py-2 mt-5 " style={{ backgroundColor: 'hsl(269, 20.00%, 71.60%)' }}>
          <div className="container">
              <p className="mb-0">&copy; {new Date().getFullYear()} Online Market. All rights reserved.</p>
              <p className="mb-0">
                  <a href="#" className="text-secondary mx-2">Privacy Policy</a> | 
                  <a href="#" className="text-secondary mx-2">Terms of Service</a> | 
                  <a href="#" className="text-secondary mx-2">Contact</a>
              </p>
          </div>
      </footer>
  );
};

export default Footer;
