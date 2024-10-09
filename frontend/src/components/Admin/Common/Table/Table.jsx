import React from 'react';
import { TableHeader } from './TableHeader/TableHeader';
import { TableRow } from './TableRow/TableRow';

export const Table = ({ NumofRows, HeaderTitles, RowTitles }) => {
    return (
        <table>
            <TableHeader NumofRows={NumofRows} Titles={HeaderTitles} />
            <TableRow NumofRows={NumofRows} Titles={RowTitles} />
        </table>
    );
};

