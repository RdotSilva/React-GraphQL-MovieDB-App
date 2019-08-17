import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// Responsible for rendering a movie card. Reuse this component throughout.
const MovieCard = props => {
	const classes = useStyles();

	const { movieData } = props;

	return (
		<Card className={classes.card}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={movieData.poster_path}
					title={movieData.title}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{movieData.title}
					</Typography>
					<Typography gutterBottom variant="body2" component="p">
						{movieData.release_date}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{movieData.overview}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size="small" color="primary">
					IMDB
				</Button>
				<Button size="small" color="primary">
					Add to watch list
				</Button>
			</CardActions>
		</Card>
	);
};

const useStyles = makeStyles({
	card: {
		width: 500,
		height: 450,
		margin: 5
	},
	media: {
		height: 140
	}
});
export default MovieCard;
