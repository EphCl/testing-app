import React from "react";
import { useParams } from "react-router-dom";
import Person from "../components/Person";
import PropTypes from "prop-types";

const ShowPerson = ({ people }) => {
  const params = useParams();

  const person = people.find(person => person.id === params.id);

  return (
    <div className="card-container">
      {person ? <Person person={person} /> : <h1>Person not found :(</h1>}
    </div>
  );
};

ShowPerson.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object).isRequired // Valide que 'people' est présent et de type 'array' contenant des objets
};

export default ShowPerson;
