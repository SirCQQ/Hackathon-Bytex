import React from "react";
import useTheme from "../hooks/themeHook";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {MonetizationOn} from '@mui/icons-material'
export default function Navigation() {
  const {
    palette: { primary },
  } = useTheme();
  const user = useSelector((state) => state.user);
  return (
    <nav
      className='navigation-bar'
      style={{ backgroundColor: primary.main, color: primary.contrastText }}
    >
      <div className='company'>
        <Link className='no-link' to='/'>
          {" "}
          Company Name
        </Link>
      </div>
      <div className='user-name'>{`Welcome back, ${user.name}`}<MonetizationOn/> {user.coins}</div>
    </nav>
  );
}
