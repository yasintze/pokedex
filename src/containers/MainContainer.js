// @flow
import React from "react";
import { useQuery } from "react-apollo";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { GET_POKEMON_INFO } from "../queries";
import PokemonList from "../components/PokemonList";
import Loading from "../components/Loading";

const useStyles = makeStyles(theme => ({
  totalDataInfo: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
}));

const MainContainer = () => {
  const { data, loading } = useQuery(GET_POKEMON_INFO);
  const classes = useStyles();

  if (loading) return <Loading />;

  return (
    <>
      <div className={classes.totalDataInfo}>
        <Typography variant="body2">
          {"Found "}
          <strong>{data.pokemons.length}</strong>
          {" Pokemon data"}
        </Typography>
      </div>
      {data && <PokemonList data={data.pokemons} />}
    </>
  );
};

export default MainContainer;
