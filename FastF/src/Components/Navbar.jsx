import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar" style={{gap:"60%",display:"flex",marginLeft:"25px",marginTop:"25px"}}>
       <div style={{fontWeight:"450px"}}>FastF</div>

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
