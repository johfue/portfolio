import React, {useEffect} from "react";


export default function Boop ({ children }) {

    const [isBooped, setIsBooped] = React.useState(true);

    function handleBoop() {
        setIsBooped(!isBooped);
    }

    return (
      <span class={(isBooped ? "" : "boop") + " boop__wrap"} onMouseEnter={handleBoop} onAnimationEnd={handleBoop}>
        {children}
      </span>
    );
  };