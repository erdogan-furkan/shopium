import React from "react";
import { RiMenuLine, RiShoppingBasket2Line, RiHeartFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { LanguageSwitcher } from "../../LanguageSwitcher";
import ThemeSwitcher from "../../ThemeSwitcher";
import s from "./styles.module.scss";

const Navbar = () => {
  return (
    <header className={s.navbar}>
      <Link to={"/"}>Shopium</Link>

      <div className={s.navbarToggler}>
        <RiMenuLine />
      </div>

      <nav>
        <ul className={s.navbarMenu}>
          <li className={s.navbarItem}>
            <LanguageSwitcher />
          </li>
          <li className={s.navbarItem}>
            <ThemeSwitcher />
          </li>
          <li className={s.navbarItem}>
            <Link to={"/"}>
              <RiShoppingBasket2Line />
            </Link>
          </li>
          <li className={s.navbarItem}>
            <Link to={"/"}>
              <RiHeartFill />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
