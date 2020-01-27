import React from "react";

import style from "./Header.module.css";

/**
 * opis pliku z przykładem z HeaderBig.md
 *
 * @example ./HeaderBig.md
 */

const HeaderBig = ({ children }) => (
  <h1 className={style.HeaderBig}>{children}</h1>
);

export default HeaderBig;
