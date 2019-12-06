// @flow
import React from "react";
import { useQuery } from "react-apollo";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";

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
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <SearchIcon />
        </Grid>
        <Grid item>
          <TextField label="Search Pokemon" />
        </Grid>
      </Grid>
      <div className={classes.totalDataInfo}>
        <Typography variant="body2">
          {"Found "}
          <strong>{data.pokemons.length}</strong>
          {" Pokemon data"}
        </Typography>
      </div>
      {data && data.pokemons && <PokemonList data={data.pokemons} />}
    </>
  );
};

export default MainContainer;
