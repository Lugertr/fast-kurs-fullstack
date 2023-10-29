import { TableHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Table.module.scss';

export enum ThemeTable {
    CLEAR = 'clear'
}

interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
    className?: string;
    theme?: ThemeTable;
    tableData: string[][],
}

export const Table: FC<TableProps>  = (props) => {
    const {
        className,
        theme,
        tableData,
        ...otherProps
    } = props;

return (
<table className={classNames(cls.Table,{}, [className, cls[theme]])} {...otherProps}>
</table>
);
};