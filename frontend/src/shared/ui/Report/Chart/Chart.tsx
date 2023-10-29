import { TableHTMLAttributes, FC, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Table.module.scss';

export enum ThemeTable {
    CLEAR = 'clear'
}

interface TableData {
    [key: string]: any[]
}

interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
    className?: string;
    theme?: ThemeTable;
    inputData: TableData,
}

export const Table: FC<TableProps> = (props) => {
    const {
        className,
        theme,
        inputData,
        ...otherProps
    } = props;

    const columns = useMemo(() => {
        return Object.keys(inputData);
    }, [inputData]);

    const tableData = useMemo(() => {
        return inputData[columns[0]].map((_, rowIndex) =>
            columns.map((column) => inputData[column][rowIndex])
        );
    }, [inputData, columns]);

    return (
        <table className={classNames(cls.Table, {}, [className, cls[theme]])} {...otherProps}>
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th
                            key={column}
                        >
                            {column}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {tableData.map((rowData, rowIndex) => (
                    <tr key={rowIndex}>
                        {rowData.map((cell, cellIndex) => (
                            <td
                                key={cellIndex}
                            >
                                {cell}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};