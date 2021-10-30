import React from "react";
import "./teamCard.scoped.scss";
import { FaDiscord, FaInstagram, FaLinkedin } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
const TeamCard = ({ teammate }) => {
  const { name, position, discord, instagram, linkedIn } = teammate;
  const copyDiscord = () => {
    navigator.clipboard.writeText(discord);
    toast.success("Copied Discord ID!", {
      style: {
        borderRadius: "10px",
        background: "#131622",
        color: "#fff",
      },
    });
  };
  return (
    <div className="mb-6">
      <div className="profile-pic"></div>
      <h3 className="special">{name}</h3>
      <h4 className="description">{position}</h4>
      <div className="flex flex-row text-2xl">
        <FaDiscord onClick={copyDiscord} color="#000AFF" />
        <a href={instagram} className="mx-2">
          <FaInstagram color="#FF0000" />
        </a>
        <a href={linkedIn}>
          <FaLinkedin color="#000AFF" />
        </a>
      </div>
      <Toaster />
    </div>
  );
};

export default TeamCard;
