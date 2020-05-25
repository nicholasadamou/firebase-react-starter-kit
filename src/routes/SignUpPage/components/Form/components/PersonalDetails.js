import React, { Component } from 'react';

import { Form, FileUploader, Button, TextInput } from 'carbon-components-react';

import AccountContext from '../../../../../contexts/Account/AccountContext';

import ActionBar from './ActionBar';

const INITIAL_ERROR_STATE = {
    error: false,
    message: '',
};

class PersonalDetails extends Component {
    static contextType = AccountContext;

    constructor(props) {
        super(props);

        this.state = {
            profilePicture: '',
            error: {
                ...INITIAL_ERROR_STATE,
            },
            nameInvalid: false,
            nameInvalidText: '',
            removeImageBtnDisabled: true,
        };

        this.selectProfilePicture = this.selectProfilePicture.bind(this);
        this.removeprofilePicture = this.removeprofilePicture.bind(this);
        this.saveAndContinue = this.saveAndContinue.bind(this);
        this.back = this.back.bind(this);
    }

    selectProfilePicture = (e) => {
        let reader = new FileReader();
        let file = e.target.files[0];

        if (file) {
            reader.readAsDataURL(file);
        }

        reader.addEventListener(
            'load',
            () => {
                this.setState(
                    {
                        profilePicture: reader.result,
                    },
                    () =>
                        console.log(
                            'profilePicture=',
                            this.state.profilePicture
                        )
                );
            },
            false
        );
    };

    removeprofilePicture = () => {
        this.setState(
            {
                profilePicture: '',
            },
            () => console.log('profilePicture=', this.state.profilePicture)
        );
    };

    saveAndContinue = () => {
        const { account } = this.context;

        if (
            account.profilePicture !== undefined &&
            account.name !== undefined &&
            account.role !== undefined
        ) {
            this.props.nextStep();
        } else {
            this.setState({
                error: {
                    error: true,
                    message:
                        'Fields, profile-picture, first-name, last-name, and role are required to continue.',
                },
            });
        }
    };

    back = () => {
        this.props.prevStep();
    };

    render() {
        const { setAccount, removeAccountAttributeByKey } = this.context;
        const {
            profilePicture,
            removeImageBtnDisabled,
            nameInvalid,
            nameInvalidText,
            error,
        } = this.state;

        let fileUploader;

        return (
            <Form className="signup-form">
                <h1>Build your Profile</h1>
                {profilePicture && (
                    <img
                        src={profilePicture}
                        alt="profilePicture"
                        style={{ width: '100px', borderRadius: 100 }}
                    />
                )}
                <FileUploader
                    labelTitle="Profile Picture *"
                    labelDescription="only .jpg, .jpeg files."
                    buttonLabel="Choose a image"
                    name="profilePicture"
                    filenameStatus="complete"
                    accept={['.jpg', '.jpeg']}
                    ref={(node) => (fileUploader = node)}
                    onChange={(e) => {
                        this.setState({
                            error: {
                                ...INITIAL_ERROR_STATE,
                            },
                            removeImageBtnDisabled: false,
                        });

                        this.selectProfilePicture(e);
                        setAccount('profilePicture', e.target.files[0]);
                    }}
                />
                <Button
                    kind="secondary"
                    disabled={removeImageBtnDisabled}
                    onClick={() => {
                        this.setState({
                            removeImageBtnDisabled: true,
                        });

                        fileUploader.clearFiles();
                        this.removeprofilePicture();
                        removeAccountAttributeByKey('profilePicture');
                    }}
                >
                    Remove image
                </Button>
                <TextInput
                    id="name"
                    name="name"
                    labelText="Name *"
                    type="text"
                    placeholder="Stephen Alt"
                    hideLabel={false}
                    invalid={nameInvalid}
                    invalidText={nameInvalidText}
                    onBlur={(e) => {
                        const name = e.target.value;

                        if (name !== '') {
                            this.setState({
                                nameInvalid: false,
                                nameInvalidText: '',
                            });

                            setAccount('name', e);
                        } else {
                            this.setState({
                                nameInvalid: true,
                                nameInvalidText:
                                    'Name field must not be empty.',
                            });
                        }
                    }}
                />
                <ActionBar
                    back={this.back}
                    next={this.saveAndContinue}
                    backTextLabel="Back"
                    nextTextLabel="Next"
                />

                {error.error ? (
                    <span style={{ lineHeight: 2 }}>
                        <span role="img" aria-label="warning">
                            ⚠️
                        </span>{' '}
                        {error.message}
                    </span>
                ) : (
                    ''
                )}
            </Form>
        );
    }
}

export default PersonalDetails;
