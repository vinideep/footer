import React from "react";

const Footer = () => {
  const serviceList1 = ["Aktivieren", "SIM-karte bestellen", "Aufladen", "FAQ"];
  const serviceList2 = [
    "Rufnummermitnahmen",
    "Login Kundenportal",
    "NORMA Connect App",
    "NORMA Filialfinder",
  ];
  const product = ["Start", "Smart S", "Smart M", "Smart L"];
  const bottomContent = [
    "Kontakt",
    "Datenschutz",
    "Impressum",
    "Rechtstexte",
    "Produktinformationsblatter",
  ];
  return (
    <div style={{ backgroundColor: "#74C3B2" }} className="text-white w-full">
      <div className=" max-w-screen-2xl m-auto md:flex block w-full justify-between pt-10">
        <div className="text-lg md:w-1/3 justify-around w-full px-2 md:px-6">
          <h1 className="pb-6 text-md md:text-xl">Kundenbetreuung</h1>
          <a className="text-xl md:text-2xl" href="tel: 08000033233">
            0800 00 33233
          </a>
          <p className="pb-6">(kostenlos aus dt. Netzen)</p>
          <p>33233 von NORMA Connect</p>
          <p className="pb-6">MO.- Sa. 8:00 bis 20:00 Uhr</p>
          <h1>E-Mail</h1>
          <a
            className="md:text-xl text-md"
            href="mailto: kundenbetreuung@norma-connect.de"
          >
            kundenbetreuung@norma-connect.de
          </a>
        </div>
        <div className="flex justify-between md:justify-around md:px-6 px-2 md:w-2/3 w-full md:pt-0 pt-10 ">
          <div className="h-20">
            <h1 className="pb-6 md:text-xl text-md">Service</h1>
            <ul className="md:block flex flex-wrap md:text-lg text-sm">
              <div>
                {serviceList1.map((service, index) => {
                  return (
                    <li
                      className="list-disc ml-5 leading-7 tracking-tight"
                      key={index}
                    >
                      {service}
                    </li>
                  );
                })}
              </div>
              <div className="md:pl-0 pl-4">
                {serviceList2.map((service, index) => {
                  return (
                    <li
                      className="list-disc ml-5 leading-7"
                      key={index}
                    >
                      {service}
                    </li>
                  );
                })}
              </div>
            </ul>
          </div>
          <div>
            <h1 className="pb-6 tmd:text-xl text-md">Produkte</h1>
            <ul>
              {product.map((product, index) => {
                return (
                  <li className="list-disc ml-5 leading-7 md:text-lg text-sm tracking-tight" key={index}>
                    {product}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-t-2 max-w-screen-2xl m-auto mt-10 mx-2">
        <ul className="flex justify-between py-4">
          {bottomContent.map((bottomContent, index) => {
            return <li className="md:text-lg lg:text-2xl tracking-tight text-xs">{bottomContent}</li>;
          })}
        </ul>
      </div>
      <div className="py-6 text-center">
        <h1>Fubnoten einblenden</h1>
      </div>
    </div>
  );
};
export default Footer;
