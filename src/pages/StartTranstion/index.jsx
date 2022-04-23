import React, { startTransition, useState, useEffect } from "react";
function AssociativeWord({ word }) {
  const [wordList, setWordList] = useState([]);
  useEffect(() => {
    if (word.length > 0) {
      startTransition(()=>{
        setWordList(new Array(20000).fill(word));
      })
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
export default function StartTransitionPage() {
  const [word, setWord] = useState("");
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
      <AssociativeWord word={word} />
    </div>
  );
}
