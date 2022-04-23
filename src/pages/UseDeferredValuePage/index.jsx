import React, { useDeferredValue, useState, useEffect } from "react";
function AssociativeWord({ word }) {
  const [wordList, setWordList] = useState([]);
  useEffect(() => {
    if (word.length > 0) {
      setWordList(new Array(20000).fill(word));
    }
  }, [word]);
  return (
    <ul>
      {wordList.map((item, index) => {
        return <li key={index.toString()}>{item}</li>;
      })}
    </ul>
  );
}
export default function UseDeferredValuePage() {
  const [word, setWord] = useState("");
  const defferedText = useDeferredValue(word);
  function handleInput(event) {
    const {
      target: { value = "" },
    } = event;
    setWord(value);
  }
  return (
    <div>
      <label htmlFor="world">请输入需要搜素的关键词：</label>
      <input type="text" id="world" onChange={handleInput} />
      <AssociativeWord word={defferedText} />
    </div>
  );
}
