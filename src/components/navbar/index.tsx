import "./styles.css";

export type Item = {
  href: string;
  label: string;
};

export type NavbarProps = {
  logo: string;
  items: Item[];
};

const Navbar = ({ logo, items }: NavbarProps) => {
  return (
    <nav className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-logo">
            {logo}
        </div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div className="nav-links">
        {items.map((items: Item) => (
          <a key={items.href} href={items.href}>
            {items.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
