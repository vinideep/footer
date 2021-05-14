import React from "react";

const Card = ({ name, data, price, time, color, active }) => {
  return (
    <div className="lg:w-96 md:w-80  max-w-sm px-10 md:px-2 lg:px-10 py-20">
      <div className="relative">
        <div
          className={`bg-${color}-600 text-center font-bold text-3xl p-5 mb-4 text-white`}
        >
          {name}
        </div>
        {active ? (
          <>
            <div className="absolute -bottom-8 -left-10 w-96  active">
              <p className="uppercase p-3 text-center font-bold text-lg text-white bg-green-500 transform -rotate-3">
                Aktiver Tarif
              </p>
            </div>
            <div className="absolute -top-8 w-full">
              <p className={`text-center font-bold text-3xl text-${color}-700 tracking-wide`}>Your current tariff</p>
            </div>
          </>
        ) : null}
      </div>
      <div
        className={`border-4 border-${color}-600 ${
          !active ? "rounded-b-3xl" : "rounded-b-2xl"
        }`}
      >
        <div className="pl-10 py-6 flex justify-between items-start">
          <div>
            <p className="font-medium">LTE Internet Flat</p>
            <span>(max.25Mbit/s)</span>
          </div>
          <div className="pr-4">
            <img className="w-10" src="./lte.png" alt="lte"/>
          </div>
        </div>
        <div className={`text-center p-4 bg-${color}-600 text-white`}>
          <h1 className="text-2xl font-bold">{data}</h1>
        </div>
        <div className="">
          <h1
            style={{ fontFamily: "Love Ya Like A Sister" }}
            className={`text-4xl pl-10 pt-6 text-${color}-600 tracking-wider font-semibold`}
          >
            Allnet Flat
          </h1>
          <p className="pl-10">in alle dt. Netze</p>
        </div>
        <div className="">
          <h1
            style={{ fontFamily: "Love Ya Like A Sister" }}
            className={`text-4xl pl-10 pt-6 text-${color}-600 tracking-wider font-semibold`}
          >
            SMS Flat
          </h1>
          <p className="pl-10">flexible buchbar</p>
          <p className="pl-10 pt-4">EU-Roaming inklusive</p>
        </div>
        <div className={`text-right py-10`}>
          <h1
            style={{ fontFamily: "Love Ya Like A Sister" }}
            className={`pr-10 text-5xl pb-4 leading-8 text-${color}-600`}
          >
            {price}
          </h1>
          <p className="pr-10">
            /{time} Monate<sup>2</sup>{" "}
          </p>
        </div>
        {!active ? (
          <div className={`text-center bg-${color}-600 p-2 rounded-2xl`}>
            <h3 className="text-xl font-bold text-white">TARIF WECHSELN</h3>
          </div>
        ) : (
          <div
            className={`text-center bg-white text-${color}-600 p-2 border-t-4 border-l-2 border-r-2 border-b-0 border-${color}-600 rounded-xl`}
          >
            <h3 className="text-xl font-bold">OPTIONEN BUCHEN</h3>
          </div>
        )}
      </div>
    </div>
  );
};
export default Card;
