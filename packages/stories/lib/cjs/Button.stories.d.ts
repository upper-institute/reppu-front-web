import { ButtonProps } from './Button';
declare const _default: {
    title: string;
    component: {
        ({ variant, backgroundColor, size, label, ...props }: ButtonProps): JSX.Element;
        defaultProps: {
            backgroundColor: string;
            variant: string;
            size: string;
            onClick: undefined;
        };
    };
    argTypes: {
        backgroundColor: {
            control: string;
        };
    };
};
export default _default;
export declare const Primary: any;
export declare const Secondary: any;
export declare const Large: any;
export declare const Small: any;
