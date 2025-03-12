const Footer = () => {
  return (
      <footer className="text-center py-2 mt-5 " style={{ backgroundColor: 'hsl(269, 20.00%, 71.60%)' }}>
          <div className="container">
              <p className="mb-0">&copy; {new Date().getFullYear()} Online Market. All rights reserved.</p>
              <p className="mb-0">
                <button className="btn btn-link text-black mx-2 text-decoration-none p-0" type="button">Privacy Policy</button> | 
                <button className="btn btn-link text-black mx-2 text-decoration-none p-0" type="button">Terms of Service</button> | 
                <button className="btn btn-link text-black mx-2 text-decoration-none p-0" type="button">Contact</button>
             </p>
          </div>
      </footer>
  );
};

export default Footer;
