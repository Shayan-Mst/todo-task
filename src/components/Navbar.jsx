// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="shadow-md p-4 flex justify-center gap-6">
      <Link href="/add">
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition cursor-pointer">
          Create
        </button>
      </Link>

      <Link href="/delete">
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition cursor-pointer">
          Delete
        </button>
      </Link>

      <Link href="/view">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          View
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
