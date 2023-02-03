import "./styles.css";

export type ToggleProps = {
  key?: string;
  checked: boolean;
  onChange: () => void;
};

const Toggle = ({ key, checked, onChange }: ToggleProps) => (
  <div className="container" key={key}>
    <input
      className="toggle-input"
      type="checkbox"
      checked={checked}
      onChange={onChange}
      id={"input-checkbox" + key}
    />
    <label className="toggle-label" htmlFor={"input-checkbox" + key} />
  </div>
);

export default Toggle;
