import { useState } from "react";
import Button from "../button";
import "./styles.css";

export type Options = {
  label: string;
  value: string;
};

export type RadioGroupProps = {
  title: string;
  subtitle: string;
  options: Options[];
};

const RadioGroup = ({ title, subtitle, options }: RadioGroupProps) => {
  const [isChecked, setIsChecked] = useState("");

  const handleClicked = () => {
    alert(`You selected ${isChecked}`);
  };

  return (
    <div className="container-radio">
      <div className="header">
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
      </div>

      <ul className="list">
        {options.map((option) => (
          <li key={option.value}>
            <div className="option">
              <input
                type="radio"
                checked={option.value === isChecked}
                id={option.value}
                name={option.value}
                value={option.value}
                onChange={() => setIsChecked(option.value)}
              />
              <label htmlFor={option.value}>{option.label}</label>
            </div>
          </li>
        ))}
      </ul>

      <div className="action">
        <Button label="Submit" onClick={handleClicked} isLarge />
      </div>
    </div>
  );
};

export default RadioGroup;
