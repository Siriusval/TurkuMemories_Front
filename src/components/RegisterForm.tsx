/**
 * Register form
 * May not be used if switched to auth0 authentication
 *
 */

// --- IMPORTS ---
import React from 'react';

import { apis } from '../services/apis';
import Link from 'next/link';
import { withTranslation } from '../i18n';
import { Button, TextField, Grid, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { AxiosResponse, AxiosError } from 'axios';
import { useSnackbarContext } from '../contexts/SnackbarContext';

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

interface IRegisterForm {
    t(key: string, opts?): Function;
}
// --- COMPONENT ---
const RegisterForm: React.FC<IRegisterForm> = ({ t }) => {
    //Contexts
    const classes = useStyles();
    const snackbarContext = useSnackbarContext();

    //States
    const [email, setEmail] = React.useState<string>('');
    const [username, setUsername] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    const handleUsernameChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setPassword(event.target.value);
    };
    //Functions
    const handleSubmit = () => {
        const model = { email: email, username: username, password: password };
        //MODEL SENT
        console.log('REQUEST: MODEL SENT:');
        console.log(model);
        apis.auth
            .localRegister(model)
            .then((res: AxiosResponse) => {
                snackbarContext.displaySuccessSnackbar('Registered');
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
                    <Grid item xs={12}>
                        <Typography variant="h4">
                            {t('form.register')}
                        </Typography>
                    </Grid>

                    {/* --- FORM --- */}
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

                            <div>
                                <TextField
                                    required
                                    id="outlined-basic"
                                    label="Username"
                                    variant="outlined"
                                    value={username}
                                    onChange={handleUsernameChange}
                                />
                            </div>

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

                    <Grid item xs={12}>
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={handleSubmit}
                        >
                            {t('form.register')}
                        </Button>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="body1">
                            {t('form.alreadyRegistered')}
                        </Typography>
                        <Link href="/login" passHref>
                            <Button component="a" className={classes.button}>
                                {t('form.login')}
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default withTranslation('common')(RegisterForm as any);
