const Navigation = () => {
    return (
      <>
        <nav className="flex items-center justify-between p-4 max-w-screen-sm mx-auto h-18">
          <div className="logo font-bold">
            <img src="/images/brand_logo.png" alt="logo" className="h-8" />
          </div>
  
          <ul className="flex flex-col md:flex-row gap-4 text-center md:text-left">
            <li><a href="#">Menu</a></li>
            <li><a href="#">Location</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
  
          <button className="rounded-lg bg-red-600 p-2 text-white font-semibold hover:cursor-pointer">
            Login
          </button>
        </nav>
      </>
    );
  };
  
  export default Navigation;
  