import React from "react";
import Card from "./Card.jsx";

import image1 from "../assets/images/desktop/image-deep-earth.jpg";
import image2 from "../assets/images/desktop/image-night-arcade.jpg"
import image3 from "../assets/images/desktop/image-soccer-team.jpg"
import image4 from "../assets/images/desktop/image-grid.jpg"
import image5 from "../assets/images/desktop/image-from-above.jpg"
import image6 from "../assets/images/desktop/image-pocket-borealis.jpg"
import image7 from "../assets/images/desktop/image-curiosity.jpg"
import image8 from "../assets/images/desktop/image-fisheye.jpg"


const cards = [
  {
    id: 1,
    title: "DEEP EARTH",
    image: image1,
    url: "https://www.google.com/intl/es/earth/",
  },
  {
    id: 2,
    title: "NIGTH ARCADE",
    image: image2,
    url: "https://friv.com",
  },
  {
    id: 3,
    title: "SOCCER TEAM VR",
    image: image3,
    url: "https://fcf.com.co",
  },
  {
    id: 4,
    title: "THE GRID",
    image: image4,
    url: "https://www.dakar.com/es",
  },
  {
    id: 5,
    title: "FROM UP ABOVE VR",
    image: image5,
    url: "https://it3d.com/",
  },
  {
    id: 6,
    title: "POCKET BOREALIS",
    image: image6,
    url: "https://www.nationalgeographic.com.es/",
  },
  {
    id: 7,
    title: "THE CURIOSITY",
    image: image7,
    url: "https://mars.nasa.gov/msl/home/",
  },
  {
    id: 8,
    title: "MAKE IT FISHEYE",
    image: image8,
    url: "https://www.shutterstock.com/es/image-photo/fish-eye-tench-tinca-close-115854907",
  },
];

function Cards() {
  return (
    
    <div className="container d-flex justify-content-center align-items-center h-100 flex-column">
        <h1 className="titulito d-flex ">our creations</h1>
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;