import React, { FC } from "react";
import "./menu-item.scss";
interface Propsf {
  heading: string;
  imageUrl: string;
}

const MenuItem: FC<Propsf> = ({ heading, imageUrl }) => {
  return ( 
    <div
      className="item-menu"
    >
      <div className="background-image" style={{
       backgroundImage: `url(${imageUrl})`,
      }}
      />
      <h1 className="heading">{heading}</h1>
      <span className="title">Show Now</span>
    </div>
  );
};

export default MenuItem;
