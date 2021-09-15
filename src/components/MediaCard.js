import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 20,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.plantshed.com//media/catalog/product/cache/1/image/600x600/040ec09b1e35df139433887a97daa66f/p/s/ps28225-minijade-crassulaovata-4_navarro_1.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography align="center" gutterBottom variant="h5" component="h2">
            Mini Jade
          </Typography>
          <Typography
            align="center"
            variant="body2"
            color="textSecondary"
            component="p"
          >
            $12.00
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Details
        </Button>
        <Button size="small" color="primary">
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
}
