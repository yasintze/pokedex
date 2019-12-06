// @flow
import React from "react";
import { Link } from "@reach/router";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";

import uniqueId from "../../utils/helpers/unique";
import "./PokemonList.css";

interface PokemonTypes {
  id: string;
  number: string;
  name: string;
  image: string;
  types: Array;
}

type Props = {
  data: PokemonTypes
};

const PokemonList = (props: Props) => {
  const { data } = props;
  const matches = useMediaQuery(theme => theme.breakpoints.up("sm"));

  return (
    <GridList cellHeight="auto" spacing={16} cols={matches ? 3 : 1}>
      {data &&
        data.map(row => {
          const { id, name, image, types } = row;
          return (
            <GridListTile key={uniqueId()} cols={1}>
              <Card key={uniqueId()}>
                <CardMedia
                  component="img"
                  alt={name}
                  height="180"
                  image={image}
                  title={name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {name}
                  </Typography>
                  <div>
                    {types &&
                      types.length > 0 &&
                      types.map(type => (
                        <Chip
                          key={uniqueId()}
                          size="small"
                          color="secondary"
                          label={type}
                        />
                      ))}
                  </div>
                </CardContent>
                <CardActions>
                  <Button
                    to={`detail/${id}`}
                    component={Link}
                    size="small"
                    color="primary"
                  >
                    More Details
                  </Button>
                </CardActions>
              </Card>
            </GridListTile>
          );
        })}
    </GridList>
  );
};

export default PokemonList;
