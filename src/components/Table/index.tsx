import "./styles.css";

export type Column = {
  id: string;
  name: string;
  email: string;
  address: string;
  company: string;
};

export type Row = {
  id: string;
  values: Record<string, string>;
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
            <th key={column.id}>{column.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr className="tr-item" key={row.id}>
            {columns.map((column) => (
              <td className="td-item" key={column.id}>
                {row.values[column.id]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Table;
