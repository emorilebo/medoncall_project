import Features from "./Features";

function Header() {
  return (
    <div className="flex">
      {/* Left header */}
      <div className="bg-red-500">
        <a href="#">
          <div className="text-red-500 text-xs">MedOnCall</div>
        </a>
        <div>
          <img src="ellipse.svg" alt="" />
          <img src="ellipse.svg" alt="" />
          <img src="ellipse.svg" alt="" />
        </div>
      </div>

      {/* Right Header */}
      <div>
        <div>{/* Features */}</div>
        <div>
          <Features />
        </div>
        <div>Contact</div>
        <button>Get it Now</button>
      </div>
    </div>
  );
}

export default Header;
