// 以前版本批量更新原理
let state = { age: 0 };
let isBatchUpdate = false; // 批量更新标识
const updaeQueue =[]; // 批量更新队列
function setState(newState){
  if(isBatchUpdate){
    updaeQueue.push(newState);
  }else{
    state = newState;
  }
}
function handleClick() {
  setState({ age: state.age + 1 });
  console.log(state.age);
  setState({ age: state.age + 1 });
  console.log(state.age);
  setState({ age: state.age + 1 });
  console.log(state.age);
  setTimeout(() => {
    setState({ age: state.age + 1 });
    console.log(state.age);
    setState({ age: state.age + 1 });
    console.log(state.age);
  });
}
// 更新函数
function batchUpdate(fn){
  isBatchUpdate= true; // 启用批量更新
  fn();
  isBatchUpdate = false; // 关闭批量更新，此时同步任务执行结束，异步任务还没开始，所以，进入异步任务后，批量更新标识为false，也就是关闭了批量更新。
  console.log(updaeQueue, 'updaeQueue')
  updaeQueue.forEach(item=>{
    state = item;
  });
  updaeQueue.length = 0;
}

batchUpdate(handleClick);