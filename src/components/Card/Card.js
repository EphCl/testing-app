import React from "react";
import "./Card.css";
import PropTypes from "prop-types";

const Card = ({ children }) => (
  <section className="Card card"
    <div className="card-content">{children}</div>
  </section>
);

Card.propTypes = {
  children: PropTypes.node.isRequired // Valide que 'children' est présent et de type 'node'
};

const Avatar = ({ photoUrl, altText }) => (
  <img className="card-avatar" src={photoUrl} alt={altText} />
);

Avatar.propTypes = {
  photoUrl: PropTypes.string.isRequired, // Valide que 'photoUrl' est présent et de type 'string'
  altText: PropTypes.string.isRequired // Valide que 'altText' est présent et de type 'string'
};

const Title = ({ mainTitle, subTitle }) => (
  <div className="card-title">
    <div>{mainTitle}</div>
    <div className="card-subtitle">{subTitle}</div>
  </div>
);

Title.propTypes = {
  mainTitle: PropTypes.string.isRequired, // Valide que 'mainTitle' est présent et de type 'string'
  subTitle: PropTypes.string.isRequired // Valide que 'subTitle' est présent et de type 'string'
};

const Info = ({ icon, children, desc = icon }) => (
  <div className="card-info">
    <i className="material-icons" title={desc}>
      {icon}
    </i>
    <span>{children}</span>
  </div>
);

Info.propTypes = {
  icon: PropTypes.string.isRequired, // Valide que 'icon' est présent et de type 'string'
  children: PropTypes.node.isRequired, // Valide que 'children' est présent et de type 'node'
  desc: PropTypes.string // Valide que 'desc' est de type 'string' (facultatif)
};

Card.Avatar = Avatar;
Card.Title = Title;
Card.Info = Info;

export default Card;
