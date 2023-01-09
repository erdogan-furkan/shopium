import classNames from "classnames";
import { useState } from "react";
import {
  RiMenuLine,
  RiShoppingBasket2Line,
  RiHeartFill,
  RiCloseLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import Container from "../../Container";
import LanguageSwitcher from "../../LanguageSwitcher";
import ThemeSwitcher from "../../ThemeSwitcher";
import s from "./styles.module.scss";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <header className={s.header}>
      <Container>
        <div className={s.navbar}>
          <Link to={"/"}>Shopium</Link>

          <div className={s.navbarToggler} onClick={toggleMenu}>
            <RiMenuLine size={"1.5rem"} />
          </div>

          <nav className={s.navbarMenuNav}>
            <ul className={s.navbarMenu}>
              <li className={s.navbarItem}>
                <LanguageSwitcher />
              </li>
              <li className={s.navbarItem}>
                <ThemeSwitcher />
              </li>
              <li className={s.navbarItem}>
                <Link to={"/"}>
                  <RiShoppingBasket2Line size={"1.5rem"} />
                </Link>
              </li>
              <li className={s.navbarItem}>
                <Link to={"/"}>
                  <RiHeartFill size={"1.5rem"} />
                </Link>
              </li>
            </ul>
          </nav>

          <nav
            className={classNames(s.navbarMenuNavMobile, {
              [s.active]: isActive,
            })}
          >
            <div className={s.navbarMenuHeader}>
              <Link to={"/"}>Shopium</Link>
              <div className={s.navbarMenuClose} onClick={toggleMenu}>
                <RiCloseLine size={"1.5rem"} />
              </div>
            </div>

            <ul className={s.navbarMenuMobile}>
              <li className={s.navbarItem}>
                <LanguageSwitcher />
              </li>
              <li className={s.navbarItem}>
                <ThemeSwitcher />
              </li>
              <li className={s.navbarItem}>
                <Link to={"/"}>
                  <RiShoppingBasket2Line size={"1.5rem"} />
                </Link>
              </li>
              <li className={s.navbarItem}>
                <Link to={"/"}>
                  <RiHeartFill size={"1.5rem"} />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
