// MyInput.js
import { withFormsy } from 'formsy-react';
import React from 'react';
import { Label, Input } from 'semantic-ui-react';

const MyInput = props => {
    //Vars
    // An error message is passed only if the component is invalid
    const errorMessage = props.errorMessage;
    const displayError = errorMessage && !props.isPristine;

    //Functions
    const changeValue = event => {
        // setValue() will set the value of the component, which in
        // turn will validate it and the rest of the form
        // Important: Don't skip this step. This pattern is required
        // for Formsy to work.
        props.setValue(event.currentTarget.value);
    };

    return (
        <div>
            <label style={{ fontWeight: 'bold' }}>{props.label}</label>
            <br />
            <Input
                type={props.type}
                placeholder={props.placeholder || props.label || ''}
                onChange={changeValue}
                value={props.value || ''}
                icon={props.icon}
                iconPosition="left"
                fluid
            />
            <Label
                basic
                color="red"
                pointing
                content={errorMessage}
                hidden
                style={{
                    visibility: displayError ? 'visible' : 'hidden',
                }}
            />
        </div>
    );
};

export default withFormsy(MyInput);
