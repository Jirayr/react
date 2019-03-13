import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import CardActionArea from '@material-ui/core/CardActionArea';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 338,
        width: 300,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
    card: {
        maxWidth: 345,
    },
    media: {
        // ⚠️ object-fit is not supported by IE 11.
        objectFit: 'cover',
    },
});


class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            spacing: '16'
        };
    }

    componentDidMount() {
        fetch('https://api.github.com/users')
            .then(res => res.json())
            .then(
                (res) => {
                    this.setState({
                        users: res
                    });
                }
            );
    }

    render() {

        const { classes } = this.props;
        const { spacing } = this.state;

        const users = this.state.users;

        return (
            <Grid container className={classes.root} spacing={16}>
                <Grid item xs={12}>
                    <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
                        {users.map(user => (
                            <Grid key={user.id} item>
                                <Paper className={classes.paper}>
                                    <Card className={classes.card}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                alt="Contemplative Reptile"
                                                className={classes.media}
                                                height="140"
                                                image={user.avatar_url}
                                                title="Contemplative Reptile"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {user.login}
                                                </Typography>
                                                <Typography component="p">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                    across all continents except Antarctica
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button size="small" color="primary">
                                                Share
                                            </Button>
                                            <Button size="small" color="primary">
                                                <a href={user.html_url} target="_blank">Learn more</a>
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);