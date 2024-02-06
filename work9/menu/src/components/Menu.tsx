import { NavLink, useLocation } from "react-router-dom";
import cn from "classnames";

const activeLink = ({ isActive }: { isActive: boolean }) =>
  isActive ? "menu__item-active" : "";

interface NavigationItemProps {
  to: string;
  children: React.ReactNode;
}

function NavigationItem({ to, children }: NavigationItemProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <NavLink to={to} className={cn(activeLink({ isActive }), "menu__item")}>
      {children}
    </NavLink>
  );
}

export default function Menu() {
  return (
    <nav className="menu">
      <NavigationItem to="/">Главная</NavigationItem>
      <NavigationItem to="/drift">Дрифт-такси</NavigationItem>
      <NavigationItem to="/timeattack">Time Attack</NavigationItem>
      <NavigationItem to="/forza">Forza</NavigationItem>
    </nav>
  );
}
