import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import {
    Button,
    Box,
    TextField,
    Grid,
    Paper,
    Typography,
} from '@material-ui/core';

import { apis } from '../services/apis';
import { NotificationManager } from 'react-notifications';
import HttpStatus from 'http-status-codes';
import { AxiosResponse, AxiosError } from 'axios';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { withTranslation } from '../i18n';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            height: '100%',
            textAlign: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
        },

        button: {
            marginRight: theme.spacing(2),
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        facebookButton: {
            color: '#3b5998',
        },
        googleButton: {
            color: '#db4a39',
        },
    }),
);

const LoginForm = ({ t }) => {
    const classes = useStyles();

    const submit = (email, password) => {
        const model = { email: email, password: password };
        //MODEL SENT
        console.log('REQUEST: MODEL SENT:');
        console.log(model);
        apis.auth
            .localLogin(model)
            .then((res: AxiosResponse) => {
                // SUCCES
                console.log('SUCCES');
                console.log(res);

                if (res.status === HttpStatus.OK) {
                    NotificationManager.success(
                        'Nice to see you again!',
                        'Success',
                    );
                    //TODO redirect
                }
            })
            .catch((error: AxiosError) => {
                if (error.response) {
                    // ERROR: SERVER RESPONSE
                    console.log('ERROR: SERVER RESPONSE');

                    const data = error.response.data;
                    const status = error.response.status;

                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log('data: ', data);
                    console.log('status: ', status);
                    console.log('headers: ', error.response.headers);

                    NotificationManager.error(
                        'Email and/or password incorrect',
                        'Error',
                    );
                } else if (error.request) {
                    // ERROR: SERVER NO RESPONSE
                    console.log('ERROR: SERVER NO RESPONSE');

                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // ERROR: REQUEST ERROR
                    console.log('ERROR: REQUEST ERROR');

                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                //ERROR: CONFIG
                console.log('ERROR: CONFIG');
                console.log(error.config);
            });
    };
    return (
        <div className={classes.root}>
            <form noValidate autoComplete="off">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <img src="/images/logo512.png" width="70%" />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h4">{t('form.login')}</Typography>
                    </Grid>
                    <Grid item xs={2} />
                    <Grid item xs={4}>
                        <Button
                            variant="outlined"
                            className={classes.facebookButton}
                            startIcon={<FontAwesomeIcon icon={faFacebook} />}
                        >
                            Facebook
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button
                            variant="outlined"
                            className={classes.googleButton}
                            startIcon={<FontAwesomeIcon icon={faGoogle} />}
                        >
                            Google
                        </Button>
                    </Grid>
                    <Grid item xs={2} />

                    {/* --- FORM --- */}
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="outlined-basic"
                            label="Password"
                            type="password"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="outlined"
                            color="primary"
                            type="submit"
                        >
                            {t('form.login')}
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="text">
                            {t('form.forgottenPassword')}
                        </Button>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="body1">
                            {t('form.notRegistered')}
                        </Typography>
                        <Link href="/register" passHref>
                            <Button component="a" className={classes.button}>
                                {t('form.signUp')}
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default withTranslation('common')(LoginForm as any);
