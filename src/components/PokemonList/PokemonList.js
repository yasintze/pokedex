// @flow
import React from "react";
import { Link } from "@reach/router";

import uniqueId from "../../utils/helpers/unique";
import "./PokemonList.css";

interface EvolutionsTypes {
  id: string;
  number: string;
  name: string;
  image: string;
}

interface PokemonTypes {
  id: string;
  number: string;
  name: string;
  image: string;
  evolutions?: EvolutionsTypes;
}

type Props = {
  data: PokemonTypes
};

const PokemonList = (props: Props) => {
  const { data } = props;
  return (
    <>
      {data &&
        data.map(row => {
          const { id, number, name, image, evolutions } = row;
          return (
            <div key={uniqueId()} className="card">
              <h3>{id}</h3>
              <p>{number}</p>
              <img src={image} alt={name} />
              <div className="card-body">
                <Link to={`detail/${id}`}>
                  <h3>{name}</h3>
                </Link>
                <p>
                  {evolutions && evolutions.length !== 0 && (
                    <span>
                      {"Evolutions:"}
                      {evolutions.map(e => {
                        return <em key={uniqueId()}>{e.name}</em>;
                      })}
                    </span>
                  )}
                </p>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default PokemonList;
