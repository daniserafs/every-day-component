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
  const [selected, setSelected] = useState<Options[]>([]);

  const isChecked = (option: Options) => {
  return selected.some((item) => item.value === option.value)
  }
  const handleSelect = (option: Options) => {
    if(isChecked(option)){
      setSelected(selected.filter((item) => item.value !== option.value))
     
    } else {
      setSelected([...selected, option])
    }
    
    
  }

  

  const handleSubmit = () => {
    console.log(selected)
  }

  return (
    <div className="container-checkbox">
      <div className="header-checkbox">
        <div className="title-checkbox">{title}</div>
        <div className="subtitle-checkbox">{subtitle}</div>
      </div>

      <ul className="list-checkbox">
        {options.map((option) => (
          <li key={option.value}>
            <div className="checkbox">
              <input
                type="checkbox"
                checked={isChecked(option)}
                id={option.value}
                name={option.value}
                value={option.value}
                onChange={()=>handleSelect(option)}
                
              />
              <label htmlFor={option.value}>{option.label}</label>
            </div>
          </li>
        ))}
      </ul>

      <div className="action-checkbox">
        <Button label="Submit" onClick={handleSubmit} isLarge />
      </div>
    </div>
  );
};

export default CheckBox;
