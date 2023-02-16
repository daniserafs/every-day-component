import { useState } from "react";
import "./styles.css";

const Slider = () => {

const [value, setValeu] = useState(0);

const getBackgroundSliderRunnable = () => {
    return { backgroundSize: `${value}%`}
}



    return(
        <div className="content-slider">
          <input
            type="range"
            min="0"
            onChange={(e) => setValeu(parseInt(e.target.value))}
            value={value}
            style={getBackgroundSliderRunnable()}
          />
          <div> {value === 0 ? '🔇' : '🔊'}  {value}</div>
        </div>
      );
}

export default Slider;
