/**
 * Child of LoginModal
 * Render'SignInContent' form in Modal
 *
 * Doc for formsy : https://github.com/formsy/formsy-react
 */
import React, { useState } from 'react';
import { Button, Header, Modal, Icon, Container } from 'semantic-ui-react';
import apis from '../../../../api';
import MyInput from '../../../Form/MyInput';
import Formsy from 'formsy-react';
import { NotificationManager } from 'react-notifications';
import HttpStatus from 'http-status-codes';

export const SignInContent = props => {
    //States
    const [canSubmit, setCanSubmit] = useState(false);

    //Functions
    const disableButton = () => {
        setCanSubmit(false);
    };

    const enableButton = () => {
        setCanSubmit(true);
    };

    const submit = model => {
        //MODEL SENT
        console.log('REQUEST: MODEL SENT:');
        console.log(model);
        apis.auth
            .localLogin(model)
            .then(res => {
                // SUCCES
                console.log('SUCCES');
                console.log(res);

                if (res.status === HttpStatus.OK) {
                    NotificationManager.success(
                        'Nice to see you again!',
                        'Success'
                    );
                    //props.history.push('/'); //TODO redirect with <Redirect> component
                }
            })
            .catch(error => {
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
                        'Error'
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
        <Modal.Content>
            <Modal.Description>
                <Container textAlign="center">
                    <Header>Login</Header>

                    {/* --- BUTTONS --- */}
                    {/* Facebook */}
                    <Button icon labelPosition="left" color="facebook">
                        <Icon name="facebook" />
                        Facebook
                    </Button>

                    {/* Google */}
                    <Button icon labelPosition="left" color="google plus">
                        <Icon name="google" />
                        Google
                    </Button>
                    <br />
                </Container>
                <br />
                {/* --- FORM --- */}
                <Formsy
                    onValidSubmit={submit}
                    onValid={enableButton}
                    onInvalid={disableButton}
                >
                    {/* Email */}
                    <MyInput
                        label="Email"
                        icon="at"
                        name="email"
                        validations="isEmail"
                        validationError="This is not a valid email"
                        type="text"
                        required
                    />
                    <br />
                    {/* Password */}
                    <MyInput
                        label="Password"
                        icon="lock"
                        name="password"
                        validations="isExisty"
                        type="password"
                        validationError="Please enter password"
                        required
                    />
                    <br />

                    {/* --- LINKS --- */}
                    <Container textAlign="center">
                        <Button type="submit" disabled={!canSubmit}>
                            Log In
                        </Button>
                        <br />
                        <Button className="tertiary">
                            Forgotten your password ?
                        </Button>
                        <br />
                        Not registered yet ?{' '}
                        <Button
                            className="tertiary"
                            onClick={e => props.callbackFn(e, 'SignUp')}
                        >
                            Sign Up
                        </Button>
                    </Container>
                </Formsy>
            </Modal.Description>
        </Modal.Content>
    );
};
