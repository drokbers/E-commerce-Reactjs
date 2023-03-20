import { Fragment } from "react";

import HeaderCartButton from './HeaderCartButton';
import commerceIMG from "../../assets/commerce.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>E-commerce v1</h1>
       <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={commerceIMG} alt="commerce header image" />
      </div>
    </Fragment>
  );
};

export default Header;
