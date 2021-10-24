import React from "react";
import useTheme from "../hooks/themeHook";

export default function Answer(props) {
  const {
    palette: { primary },
  } = useTheme();
  let style = { backgroundColor: primary.main, color: "black" };
  let styleAnswer = { borderColor: primary.main };
  return (
    <div className='answer' {...props} style={styleAnswer}>
      <div className='selecting' style={style} />
      {props.children}
    </div>
  );
}
