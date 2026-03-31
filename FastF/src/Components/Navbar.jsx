import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
       <div className="navbar-brand">FastF</div>

      <div className="gap">
        <div><a href="#home" className="nb">Home</a></div>
        <div><a href="#about" className="nb">About</a></div>
        <div><a href="#services" className="nb">Services</a></div>
        <div><a href="#contact" className="nb">Contact</a></div>
      </div> 
    </nav>
  );
}
export default Navbar;
