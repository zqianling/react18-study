import React, {startTransition, useState, useEffect} from 'react';

export default function UpdatePriority(){
  const [result, setResult] = useState('');

  useEffect(()=>{
    console.log(result, 'result');
  }, [result]);
  function handleChangeResult(){
    setResult(item=>item + 'A');
    startTransition(()=>{setResult(item=>item + 'B')});
    setResult(item=>item + 'C');
    startTransition(()=>{setResult(item=>item + 'D')});
  }

  return <div>
    <h1>结果：{result}</h1>
    <button onClick={handleChangeResult}>改变结果</button>
  </div>
}