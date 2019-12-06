// @flow
import React from "react";
import { useQuery } from "react-apollo";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Chip from "@material-ui/core/Chip";
import HomeIcon from "@material-ui/icons/Home";

import { GET_POKEMON_BY_ID } from "../queries";
import uniqueId from "../utils/helpers/unique";
import Loading from "../components/Loading";

type Props = {
  pokeId: string
};

const useStyles = makeStyles(theme => ({
  breadcrumbIcon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20
  },
  breadcrumbPadding: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
}));

const DetailContainer = (props: Props) => {
  const { pokeId } = props;
  const { data, loading } = useQuery(GET_POKEMON_BY_ID, {
    variables: { pokeId }
  });
  const classes = useStyles();

  if (loading) return <Loading />;

  return (
    <>
      <div className={classes.breadcrumbPadding}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/">
            <HomeIcon className={classes.breadcrumbIcon} />
            Home
          </Link>
          <Typography color="textPrimary">
            {`Details (${data.pokemon.name})`}
          </Typography>
        </Breadcrumbs>
      </div>
      {data && data.pokemon && (
        <Card>
          <CardMedia
            component="img"
            alt={data.pokemon.name}
            height="240"
            image={data.pokemon.image}
            title={data.pokemon.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {data.pokemon.name}
            </Typography>
            <Table aria-label="pokemon details">
              <TableBody>
                <TableRow>
                  <TableCell>Types</TableCell>
                  <TableCell>
                    {data.pokemon.types.map(type => (
                      <Chip
                        key={uniqueId()}
                        size="small"
                        color="secondary"
                        label={type}
                      />
                    ))}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Classification</TableCell>
                  <TableCell>{data.pokemon.classification}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Weight</TableCell>
                  <TableCell>{`${data.pokemon.weight.minimum} - ${data.pokemon.weight.maximum}`}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Height</TableCell>
                  <TableCell>{`${data.pokemon.height.minimum} - ${data.pokemon.height.maximum}`}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Weakness</TableCell>
                  <TableCell>
                    {data.pokemon.weaknesses.map(type => (
                      <Chip key={uniqueId()} size="small" label={type} />
                    ))}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Max HP</TableCell>
                  <TableCell>{data.pokemon.maxHP}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Max CP</TableCell>
                  <TableCell>{data.pokemon.maxCP}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Flee Rate</TableCell>
                  <TableCell>{data.pokemon.fleeRate}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default DetailContainer;
