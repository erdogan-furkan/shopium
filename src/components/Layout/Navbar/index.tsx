import classNames from "classnames";
import { useState } from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
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
                <NavLink
                  to={"/cart"}
                  className={({ isActive }) =>
                    classNames(s.navbarItemCart, { [s.active]: isActive })
                  }
                >
                  <RiShoppingCartLine size={"1.5rem"} />
                  <span>{t("My Cart")}</span>
                </NavLink>
              </li>
              <li className={s.navbarItem}>
                <NavLink
                  to={"/favorites"}
                  className={({ isActive }) =>
                    classNames(s.navbarItemFavorites, { [s.active]: isActive })
                  }
                >
                  <RiHeartFill size={"1.5rem"} />
                  <span>{t("My Favorites")}</span>
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
                <span>{t("Language")}</span>
                <LanguageSwitcher />
              </li>
              <li className={s.navbarItem}>
                <span>{t("Theme")}</span>
                <ThemeSwitcher />
              </li>
              <li>
                <NavLink to={"/cart"} onClick={() => setIsActive(false)}>
                  <div className={s.navbarItem}>
                    <span>{t("My Cart")}</span>
                    <RiShoppingCartLine size={"1.5rem"} />
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/favorites"} onClick={() => setIsActive(false)}>
                  <div className={s.navbarItem}>
                    <span>{t("My Favorites")}</span>
                    <RiHeartFill size={"1.5rem"} />
                  </div>
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
