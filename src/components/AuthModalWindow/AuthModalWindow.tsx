import React from 'react';
import SvgIcons from '../UI/Svg/SvgIcons';
import Button from '../UI/Button/Button';

interface IAuthModalWindow {
    type: 'signup' | 'signin'
}

const AuthModalWindow: React.FC<IAuthModalWindow> = ({ type }) => {
    return (
        <>
            <form>
                <div>Sign Up</div>
                <input type="text" name="login" id="" placeholder='Login' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input type="email" name="email" id="" placeholder='Email' required />

                <div>
                    <button>Sign In</button>
                </div>
            </form>
            <Button styleName={"none"} buttonShape={"none"} colorStyle={"none"}>
                <SvgIcons iconName={"cross"} />
            </Button>
        </>
    );
}

export default AuthModalWindow;