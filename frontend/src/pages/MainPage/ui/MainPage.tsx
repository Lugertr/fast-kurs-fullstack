import React from 'react'
import cls from './MainPage.module.scss';
import { Table, ThemeTable } from 'shared/ui/Report/Table/Table';
import { classNames } from 'shared/lib/classNames/classNames';

interface GraphsPageProps {
    className?: string;
    }

const GraphsPage = ({className}: GraphsPageProps) => {
    return (
        <div>
            <Table theme={ThemeTable.CLEAR} className={classNames(cls.ThemeSwitcher, {}, [className])}>
            </Table>
        </div>
    )
}

export default GraphsPage;