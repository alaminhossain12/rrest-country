/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Country.css";

const Country = ({ country }) => {
  console.log(country);
  const { name, flags, cca3, area, region, population } = country;
  return (
    <div className="country">
      <img src={flags.png} alt="" />
      {/* <img src={flags.svg} alt="" /> */}
      <h1>Name: {name.common}</h1>
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>Region: {region}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
    </div>
  );
};

export default Country;
