import React from 'react';
export interface ButtonProps {
    variant: 'primary' | 'secondary';
    size: 'small' | 'medium' | 'large';
    label: string;
    backgroundColor: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}
export declare const Button: {
    ({ variant, backgroundColor, size, label, ...props }: ButtonProps): JSX.Element;
    defaultProps: {
        backgroundColor: string;
        variant: string;
        size: string;
        onClick: undefined;
    };
};
