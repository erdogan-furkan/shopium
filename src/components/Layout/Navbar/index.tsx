import classNames from "classnames";
import { useState } from "react";
import {
  RiMenuLine,
  RiShoppingCartLine,
  RiHeartFill,
  RiCloseLine,
} from "react-icons/ri";
import { NavLink } from "react-router-dom";
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
          <NavLink to={"/"}>Shopium</NavLink>

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
                <NavLink to={"/cart"} className={s.navbarItemCart}>
                  <RiShoppingCartLine size={"1.5rem"} />
                  <span>Sepetim</span>
                </NavLink>
              </li>
              <li className={s.navbarItem}>
                <NavLink to={"/"} className={s.navbarItemFavorites}>
                  <RiHeartFill size={"1.5rem"} />
                  <span>Favorilerim</span>
                </NavLink>
              </li>
            </ul>
          </nav>

          <nav
            className={classNames(s.navbarMenuNavMobile, {
              [s.active]: isActive,
            })}
          >
            <div className={s.navbarMenuHeader}>
              <NavLink to={"/"}>Shopium</NavLink>
              <div className={s.navbarMenuClose} onClick={toggleMenu}>
                <RiCloseLine size={"1.5rem"} />
              </div>
            </div>

            <ul className={s.navbarMenuMobile}>
              <li className={s.navbarItem}>
                <span>Dil</span>
                <LanguageSwitcher />
              </li>
              <li className={s.navbarItem}>
                <span>Tema</span>
                <ThemeSwitcher />
              </li>
              <li className={s.navbarItem}>
                <span>Sepetim</span>
                <NavLink to={"/"}>
                  <RiShoppingCartLine size={"1.5rem"} />
                </NavLink>
              </li>
              <li className={s.navbarItem}>
                <span>Favorilerim</span>
                <NavLink to={"/"}>
                  <RiHeartFill size={"1.5rem"} />
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
