import { ReactNode } from "react";
import "./styles.css";

export type Column = {
  id: string;
  name: string;
  email: string;
  address: string;
  company: string;
  toggle: ReactNode;
};

export type Row = {
  id: string;
  values: Record<string, string | Function>;
};

export type TableProps = {
  columns: Column[];
  rows: Row[];
};

const Table = ({ columns, rows }: TableProps) => (
  <div className="container">
    <table className="table">
      <thead>
        <tr>
          {columns.map((column) => (
            <th className="th-item" key={column.id}>
              {column.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => {
          const trKey = `row-${rowIndex}-id-${row.id}`;
          return (
            <tr className="tr-item" key={trKey} onClick={() => console.log('click on tr key', trKey)}>
              {/* <p>trKey: {trKey}</p> */}
              {columns.map((column, columnIndex) => {
                const key = `${trKey}-column-${columnIndex}-id-${column.id}`;
                const content = row.values[column.id];
                // console.log(key, content)

                return (
                  <td className="td-item" key={key}>
                    {typeof content === "function" ? content() : content}
                    {/* {key} */}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

export default Table;
