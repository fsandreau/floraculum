const Footer = () => {
    return (
      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">About PlantID</h3>
              <p>
                PlantID is your go-to resource for plant identification and
                information. Our AI-powered tool helps you discover and learn
                about various plant species.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/privacy" className="hover:text-green-300">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-green-300">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/faq" className="hover:text-green-300">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p>Email: info@plantid.com</p>
              <p>Phone: (123) 456-7890</p>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="hover:text-green-300">
                  Facebook
                </a>
                <a href="#" className="hover:text-green-300">
                  Twitter
                </a>
                <a href="#" className="hover:text-green-300">
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-green-700 text-center">
            <p>&copy; 2024 PlantID. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;