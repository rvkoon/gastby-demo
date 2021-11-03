import React from "react";
import * as classes from "./section.module.scss";

export default function Section({ children, otherClasses, ...otherProps }) {
  return (
    <section className={`${classes.section} ${otherClasses}`} {...otherProps}>
      {children}
    </section>
  );
}
