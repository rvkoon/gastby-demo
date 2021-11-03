import React from "react";
import * as classes from "./hero.module.scss";

export default function ContentfulHero({ title, description, image }) {
  return (
    <section className={classes.heroContainer}>
      <div className={classes.heroInside}>
        <div className={classes.heroInfos}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <img
          src={image.fluid.src}
          alt="My beautiful image"
          className={classes.heroImage}
        />
      </div>
    </section>
  );
}
