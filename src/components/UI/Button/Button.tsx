import React from "react";

interface IButton {
    chirdren: JSX.Element;
    title: string;
    styleName: string;
}

const Button = ({ chirdren, title, styleName }: IButton) => {
    return (
        <Button>
            {chirdren}
        </Button>
    );
}

export default Button;