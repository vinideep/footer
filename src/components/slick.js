import React from "react";
import Card from "./card";
import Slider from "react-slick";

export default function SimpleSlider() {
  const cardData = [
    {
      name: "Smart 6",
      data: "6 GB",
      price: "29,99 €",
      time: "6",
      color: "blue",
      active: false,
    },
    {
      name: "Smart L",
      data: "7 GB",
      price: "19,99 €",
      time: "4",
      color: "purple",
      active: false,
    },
    {
      name: "Smart M",
      data: "6 GB",
      price: "12,99 €",
      time: "4",
      color: "yellow",
      active: true,
    },
    {
      name: "Smart S",
      data: "3 GB",
      price: "7,99 €",
      time: "4",
      color: "red",
      active: false,
    },
  ];
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide:true,
    slickNext: true,
  };
  return (
    <div className="max-w-screen-2xl m-auto bg-gray-300">
      <Slider {...settings}>
        {cardData.map((card, index) => {
          return (
            <React.Fragment key={index}>
              <Card
                name={card.name}
                data={card.data}
                price={card.price}
                time={card.time}
                color={card.color}
                active={card.active}
              />
            </React.Fragment>
          );
        })}
      </Slider>
    </div>
  );
}
