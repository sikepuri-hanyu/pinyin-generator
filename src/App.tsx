import React, { useState, Fragment } from "react";
import pinyin from "pinyin";

function App(): JSX.Element {
  const [inputChineseText, setInputChineseText] = useState<string>("");
  return (
    <>
      <input
        type="text"
        value={inputChineseText}
        onChange={(e) => {
          setInputChineseText(e.target.value);
        }}
      />
      {Array.from(inputChineseText).map((chineseChar, i) => (
        <Fragment key={i}>
          <ruby style={{ margin: "0.3rem" }}>
            {chineseChar} <rp>(</rp>
            <rt>
              {pinyin(chineseChar, {
                heteronym: true,
                style: pinyin.STYLE_TONE,
              }).join("")}
            </rt>
            <rp>)</rp>
          </ruby>
        </Fragment>
      ))}
    </>
  );
}

export default App;
