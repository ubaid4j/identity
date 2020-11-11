import React, {useCallback} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Redirect} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import Grid from '@material-ui/core/Grid';
import {useDispatch, useSelector} from 'react-redux';
import {TryLoginHandler} from 'store/actions/LoginHandler';
import FormLink from 'components/links/FormLink';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(-20),
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
}));


const Introduction = () => {
    const classes = useStyles();

    //try login
    const dispatch = useDispatch();
    const tryLoginHandler = useCallback(() => dispatch(TryLoginHandler()), [dispatch]);
    const isLogin = useSelector(state => state.login.isLogin);

    tryLoginHandler();

    if (isLogin) {
        return <Redirect to='/identity/welcome'/>
    }

    return (
        <Container component='main' maxWidth='xs'>
            <CssBaseline/>
            <div className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                >
                                    <Avatar className={classes.avatar}>
                                        <FingerprintIcon/>
                                    </Avatar>
                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant='h5' component='h2'>
                                        Identity
                                    </Typography>
                                    <Typography variant='body2' color='textSecondary' component='p'>
                                        Identity is the Project initiated by Govt of Pakistan to register yourself from
                                        anywhere.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <FormLink id={'toLogin'} to={'/identity/login'} label={'Sign In'}/>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
}
export default Introduction;
