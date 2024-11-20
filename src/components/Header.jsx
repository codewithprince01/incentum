const Header = () => {
    return (
      <header className="bg-blue-900 p-4 flex justify-between items-center">
        <div className="text-white font-bold text-lg">INCENTUM</div>
        <nav className="space-x-4">
          <a href="/" className="text-white">Home</a>
          <a href="/about" className="text-white">About</a>
          <a href="/services" className="text-white">Services</a>
          <a href="/contact" className="text-white">Contact</a>
          <button className="bg-yellow-500 px-4 py-2 rounded">Get Started</button>
        </nav>
      </header>
    );
  };
  
  export default Header;