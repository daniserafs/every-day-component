import { useState } from "react";
import Button from "../button";
import "./styles.css";

export type Options = {
  label: string;
  value: string;
};

export type CheckBoxProps = {
  title: string;
  subtitle: string;
  options: Options[];
};

const CheckBox = ({ title, subtitle, options }: CheckBoxProps) => {
  const [isChecked, setIsChecked] = useState("");

  

  return (
    <div className="container-checkbox">
      <div className="header">
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
      </div>

      <ul className="list">
        {options.map((option) => (
          <li>
            <div className="option">
              <input
                type="checkbox"
                
                id={option.value}
                name={option.value}
                value={option.value}
                
              />
              <label htmlFor={option.value}>{option.label}</label>
            </div>
          </li>
        ))}
      </ul>

      <div className="action">
        <Button label="Submit"  isLarge />
      </div>
    </div>
  );
};

export default CheckBox;
