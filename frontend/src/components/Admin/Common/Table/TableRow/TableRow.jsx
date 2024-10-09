import React from 'react';

export const TableRow = ({ NumofRows, Titles }) => {
    return (
        <tbody>
            {Titles.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {Object.values(row).map((cell, cellIndex) => (
                        <td key={cellIndex}>{cell}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};

