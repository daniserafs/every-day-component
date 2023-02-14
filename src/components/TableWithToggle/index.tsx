import { useState } from "react";
import "../Table/styles.css";
import Toggle from "../ToggleButton";

export type Column = {
  id: string;
  name: string;
  email: string;
  address: string;
  phone: string;
  company: string;
  isActive: boolean;
};

export type Row = {
  id: string;
  values: Record<string, string | boolean>;
};

export type TableWithToggleProps = {
  columns: Column[];
  rows: Row[];
  
};

const TableWithToggle = ({ columns, rows}: TableWithToggleProps) => {
  const [list, setList] = useState<Row[]>(rows);

  const handleToggle = (id: string) => {
    const newList = list.map((row) => {
      if (row.id === id) {
        return {
          ...row,
          values: {
            ...row.values,
            isActive: !row.values.isActive,
          },
        };
      }

      return row;
    });

    setList(newList);
  };

  return (
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
          {list.map((row) => (
            <tr className="tr-item">
              {columns.map((column) => (
                <td className="td-item">
                  {column.id === "is_Active" ? (
                    <Toggle
                    id={row.id}
                      checked={row.values[column.id] as boolean}
                      onChange={() => handleToggle(row.id)}
                    />
                  ) : (
                    row.values[column.id]
                  )}{" "}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableWithToggle;
