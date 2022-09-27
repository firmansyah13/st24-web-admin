import React, { Component } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate } from 'react-simple-captcha';
// import TextField from '@mui/material/TextField';

class CaptchaTest extends Component {

    componentDidMount() {
        loadCaptchaEnginge(8);
    };

    render() {
        return (
            <div>
                <div className="container">
                    <div className="form-group">
                        <LoadCanvasTemplate reloadColor="red" />
                        <input
                            required
                            id="user_captcha_input"
                            label="Capcha"
                            name="user_captcha_input"
                            class="w-full h-10 pl-8 pr-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                            autoComplete="capcha"
                            placeholder='Please enter captcha above'
                            type='text'
                            autoFocus
                        />
                    </div>
                </div>
            </div>
        );
    };
}

export default CaptchaTest;