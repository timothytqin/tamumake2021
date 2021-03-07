import React, { useState, useEffect } from "react";
import RangeTile from "./RangeTile";

export default function LeftStatusBar({ cpm }) {
  const getRange = () => {
    console.log(typeof cpm);
    if (cpm < 40) return 0;
    if (cpm < 60) return 1;
    if (cpm < 100) return 2;
    return 3;
  };

  const [selected, setSelected] = useState(-1);
  useEffect(() => {
    setSelected(getRange(cpm));
  }, [cpm]);

  return (
    <>
      <RangeTile
        range="1-39"
        level="low"
        color="#B5E5BF"
        selected={selected == 0}
      />
      <RangeTile
        range="40-59"
        level="medium"
        color="#EAAF56"
        selected={selected == 1}
      />
      <RangeTile
        range="50-99"
        level="high"
        color="#E26D48"
        selected={selected == 2}
      />
      <RangeTile
        range="100+"
        level="very high"
        color="#4B4B4B"
        selected={selected == 3}
      />
    </>
  );
}
