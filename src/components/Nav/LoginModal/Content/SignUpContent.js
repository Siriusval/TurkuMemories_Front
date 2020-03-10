/**
 * Child of LoginModal
 * Render'SignUpContent' form in Modal
 *
 * Doc for formsy : https://github.com/formsy/formsy-react
 */

import React, { useState } from 'react';
import { Header, Modal, Container, Button } from 'semantic-ui-react';
import apis from '../../../../api';
import MyInput from '../../../Form/MyInput';
import Formsy from 'formsy-react';
import { NotificationManager } from 'react-notifications';
import HttpStatus from 'http-status-codes';

export const SignUpContent = props => {
    //States
    const [canSubmit, setcanSubmit] = useState(false);

    const disableButton = () => {
        setcanSubmit(false);
    };

    const enableButton = () => {
        setcanSubmit(true);
    };

    const submit = model => {
        //MODEL SENT
        console.log('REQUEST: MODEL SENT:');
        console.log(model);
        apis.auth
            .localRegister(model)
            .then(res => {
                // SUCCES
                console.log('SUCCES');
                console.log(res);
                if (
                    res.status === HttpStatus.OK ||
                    res.status === HttpStatus.CREATED
                ) {
                    NotificationManager.success(
                        'Sucessfully registered!',
                        'Success'
                    );
                    //props.history.push('/') //TODO : fix redirect
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
                        `${status}:${data.message}`,
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
                <Header textAlign="center">Register</Header>

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

                    {/* Username */}
                    <MyInput
                        label="Username"
                        icon="user"
                        name="username"
                        validations="isExisty"
                        validationError="This is not a valid username"
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
                            Register
                        </Button>
                        <br />
                        Already have an account ?{' '}
                        <Button
                            className="tertiary"
                            onClick={e => props.callbackFn(e, 'SignIn')}
                        >
                            Sign In
                        </Button>
                    </Container>
                </Formsy>
            </Modal.Description>
        </Modal.Content>
    );
};
