import "./styles.css";

export type ToggleProps = {
  id: string
  checked: boolean;
  onChange: () => void;
};

const Toggle = ({ id, checked, onChange }: ToggleProps) => (
  <div className="container" > 
    <input
      className="toggle-input"
      type="checkbox"
      checked={checked}
      onChange={onChange}
      id={id}
    />
    <label className="toggle-label" htmlFor={id} />
  </div>
);

export default Toggle;
