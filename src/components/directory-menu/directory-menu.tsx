import React, { FC, useState } from "react";
import "./directory-menu.scss";
import MenuItem from "../menu-item/menu-item";

const Directory = () => {
  const [section, setSection] = useState([
    {
      id: 1,
      heading: "Hats",
      imageUrl: "./images/istockphoto-858160872-612x612.jpg",
    },
    {
      id: 2,
      heading: "jackets",
      imageUrl: "./images/jackets.jpg",
    },
    {
      id: 3,
      heading: "sneaker",
      imageUrl: "./images/shores.jpg",
    },
    {
      id: 4,
      heading: "glasses black",
      imageUrl: "./images/gases.png",
    },
    {
      id: 5,
      heading: "lady shose",
      imageUrl: "./images/lady-shose.jpg",
    },
    {
      id: 6,
      heading: "man clothing",
      imageUrl: "./images/man-clothing.jpg",
    },
    {
      id: 7,
      heading: "man",
      imageUrl: "./images/man.jpg",
    },
    {
      id: 8,
      heading: "weman",
      imageUrl: "./images/weman.jpg",
    },
  ]);
  return (
    <div className="directory-menu">
      {section.map(({ id, heading, imageUrl }) => {
        return <MenuItem key={id} heading={heading} imageUrl={imageUrl} />;
      })}
    </div>
  );
};

export default Directory;
