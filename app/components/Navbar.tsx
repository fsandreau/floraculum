import Link from 'next/link';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className="bg-green-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
      <Link href="/" className="flex items-center space-x-2">
          <Logo />
          <span className="text-3xl font-bold font-lora">Floraculum</span>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-green-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-green-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-green-300">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/database" className="hover:text-green-300">
              Plant Database
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;