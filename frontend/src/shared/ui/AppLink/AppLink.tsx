import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    children?: React.ReactNode,
    theme?: AppLinkTheme,
}

export const AppLink: FC<AppLinkProps> = (props) => {

const {to, className, children, theme = AppLinkTheme.PRIMARY, ...OtherProps} = props;
 
return (
<Link to={to} className={classNames(cls.AppLink,{}, [className, cls[theme]])}
{...OtherProps}>
    {children}
</Link>
);
};