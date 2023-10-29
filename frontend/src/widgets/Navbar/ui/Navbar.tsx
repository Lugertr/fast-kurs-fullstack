import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavBarProps {
    className?: string;

}

export const Navbar = ({className}: NavBarProps) => {

    return (
        <div className={classNames(cls.Navbar,{}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.INVERTED} to={'/'}>Главная</AppLink>
                <AppLink theme={AppLinkTheme.INVERTED} to={'/about'}>About</AppLink>
            </div>
        </div>
    );
};