/**
 * Login form
 * Maybe not use if we switch to Auth0 authentication
 */

// --- IMPORTS ---
import React from 'react';
import Link from 'next/link';

import { apis } from '../services/apis';
import { AxiosResponse, AxiosError } from 'axios';
import { withTranslation } from '../i18n';
import { useAuthContext } from '../contexts/AuthContext';
import { useSnackbarContext } from '../contexts/SnackbarContext';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Button, TextField, Grid, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';

// --- STYLES ---
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            height: '100%',
            textAlign: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
        },
        mainGrid: {
            width: '100%',
        },
        button: {
            marginRight: theme.spacing(2),
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        logo: {
            width: '70%',
            maxWidth: '400px',
            left: 0,
            right: 0,
        },
        facebookButton: {
            color: '#3b5998',
        },
        googleButton: {
            color: '#db4a39',
        },
    }),
);

// --- COMPONENT ---
const LoginForm = ({ t }) => {
    //Contexts
    const classes = useStyles();
    const authContext = useAuthContext();
    const snackbarContext = useSnackbarContext();

    //States
    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setPassword(event.target.value);
    };
    //Functions
    const handleSubmit = () => {
        const model = { email: email, password: password };
        //MODEL SENT
        console.log('REQUEST: MODEL SENT:');
        console.log(model);
        apis.auth
            .localLogin(model)
            .then((res: AxiosResponse) => {
                snackbarContext.displaySuccessSnackbar('Logged In');
            })
            .catch((err: AxiosError) => {
                snackbarContext.displayErrorSnackbar('Error');
                console.log(err);
            });
    };
    return (
        <div className={classes.root}>
            <form noValidate autoComplete="off">
                <Grid className={classes.mainGrid} container spacing={3}>
                    {/* Logo */}
                    <Grid item xs={12}>
                        <img
                            src="/images/logo512.png"
                            className={classes.logo}
                        />
                    </Grid>

                    {/* Titre */}
                    <Grid item xs={12}>
                        <Typography variant="h4">{t('form.login')}</Typography>
                    </Grid>
                    <Grid item xs={2} />

                    {/* Facebook button */}
                    <Grid item xs={4}>
                        <Button
                            variant="outlined"
                            className={classes.facebookButton}
                            startIcon={<FontAwesomeIcon icon={faFacebook} />}
                        >
                            Facebook
                        </Button>
                    </Grid>

                    {/* Google Button */}
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
                    {/* Email */}
                    <Grid item xs={12}>
                        <form noValidate autoComplete="off">
                            <div>
                                <TextField
                                    required
                                    id="outlined-basic"
                                    label="Email"
                                    variant="outlined"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                            </div>
                            <br />

                            {/* Password */}
                            <div>
                                <TextField
                                    required
                                    id="outlined-basic"
                                    label="Password"
                                    type="password"
                                    variant="outlined"
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                            </div>
                        </form>
                    </Grid>
                    {/* Submit button */}
                    <Grid item xs={12}>
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={handleSubmit}
                        >
                            {t('form.login')}
                        </Button>
                    </Grid>

                    {/* Forgotten password button */}
                    <Grid item xs={12}>
                        <Button variant="text">
                            {t('form.forgottenpassword')}
                        </Button>
                    </Grid>

                    {/* Register button */}
                    <Grid item xs={12}>
                        <Typography variant="body1">
                            {t('form.notRegistered')}
                        </Typography>
                        <Link href="/register" passHref>
                            <Button component="a" className={classes.button}>
                                {t('form.register')}
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default withTranslation('common')(LoginForm as any);
