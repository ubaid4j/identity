import React, {useContext, useEffect, useRef} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {UserContext} from "../../providers/UserProvider";
import {useSelector} from "react-redux";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    card: {
        maxWidth: 345
    }
}));

const Welcome = () => {

    const user = useContext(UserContext);

    const formId = useSelector(state => state.login.formInfo.formId);
    const isFormCompleted = useSelector(state => state.login.formInfo.isFormCompleted);
    const isFormTouched = useSelector(state => state.login.formInfo.isFormTouched);
    const formInfoView = useRef();


    useEffect(() => {
        let info = null;
        if (formId == null) {
            info = "Welcome in Identity. Click below to start filling your Identity form";
        } else if (!isFormCompleted) {
            info = "You have not completed your Identity form yet. Kindly complete your form as soon as possible";
        } else if (isFormCompleted) {
            info = "Your Identity form is completed";
        }

        formInfoView.current.innerHTML = info;
    }, [formId, isFormCompleted, isFormTouched]);

    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Grid container spacing={2} justify={"flex-start"} style={{marginTop: '8px'}}>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        U
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title= "Welcome Back"
                                subheader={user.username}
                            />
                            <CardMedia
                                className={classes.media}
                                image="/static/images/cards/paella.jpg"
                                title="Paella dish"
                            />
                            <CardContent>
                                <Typography ref={formInfoView} variant="body2" color="textSecondary" component="p">
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container spacing={2} justify={"flex-start"}>
                    <Grid item>
                        <Link to="/identity/create" style={{textDecoration: 'none', outline: "none"}}>
                            <Button size="small" color="primary">
                                Click here to fill your identity form
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
}

export default Welcome;
