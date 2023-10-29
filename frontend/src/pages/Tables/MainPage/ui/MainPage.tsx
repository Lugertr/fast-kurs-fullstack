import React, { useState } from 'react'
import cls from './MainPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Table, ThemeTable } from 'shared/ui/Report/Table/Table';

interface PatientsDataPageProps {
    className?: string;
    }

const PatientsDataPage = ({className}: PatientsDataPageProps) => {
    const [data, setData] = useState<string[][]>([]);

    return (
        <div>
        </div>
    )
}

export default PatientsDataPage;