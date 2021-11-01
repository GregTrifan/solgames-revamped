import React from "react";
import { ReactComponent as Plug } from "../svg/plug.svg";
import "./infoCard.scoped.scss";
const InfoCard = ({ details }) => {
  const { special, title, description } = details;
  return (
    <div className="m-6">
      <div
        className={`${
          special ? "card-special" : "card"
        } flex flex-col p-6 text-center flex-grow`}
      >
        <div
          className={`${
            special ? "special-bg" : "standard-bg"
          } rounded-full h-24 w-24 flex mx-auto items-center justify-center`}
        >
          <Plug />
        </div>
        <h2 className="text-4xl self-center">{title}</h2>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
