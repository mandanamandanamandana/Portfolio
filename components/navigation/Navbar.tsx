import classes from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.logoContainer}>
        <Link href='/'>
        <img 
            src="/assets/logo/MandanaLogoOutline.svg" />
            </Link>
      </div>
      <nav className={classes.nav}>
        <ul className={classes.navList}>
                <li>
                    <Link href='/'
                        className={classes.Link}>
                        Home
                    </Link>
                </li>

                <li>
                    <Link href='/projects'
                        className={classes.Link}>
                        Projects
                    </Link>
                </li>

                <li>
                    <Link href='/contact'
                        className={classes.Link}>
                        Contact
                    </Link>
                </li>
            
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
