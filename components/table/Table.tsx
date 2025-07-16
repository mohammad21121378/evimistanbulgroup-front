import classNames from "classnames";

import styles from './Table.module.css'

type Props = {
    columns: string[];
    rows: string[][];
}

export default function Table({ columns, rows }: Props) {
    return (
        <div className={classNames("overflow-auto", styles.wrapper)}>
            <table className={classNames("min-w-full", styles.table)}>
                <thead className="text-base">
                    <tr>
                        {columns.map((col, colIdx) => (
                            <th
                                key={colIdx}
                                className="text-center font-semibold"
                            >
                                {col}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="text-sm text-[#363853]">
                    {rows.map((row, rowIdx) => (
                        <tr key={rowIdx} className="hover:bg-gray-50 ">
                            {row.map((cell, cellIdx) => (
                                <td
                                    key={cellIdx}
                                    className=""
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}