const updaeQueue = [];// 更新队列
let onePriority = 1; // 更新优先级1，数字越小更新优先级越高
let towPriority = 2; // 更新优先级2
let larstPriority; // 上一次更新优先级
let state = { age: 0 }; // 初始化状态

function setState(newState, priority) {
  updaeQueue.push(newState);
  if (priority === larstPriority) {
    return;
  }
  larstPriority = priority;
  setTimeout(() => { // 模拟热更新
    updaeQueue.forEach((item) => {
      state = item;
    });
    updaeQueue.length =0;
  });
}

function handleClick() {
  setState({ age: state.age + 1 }, onePriority);
  console.log(state.age);
  setState({ age: state.age + 1 }, onePriority);
  console.log(state.age);
  setTimeout(() => {
    setState({ age: state.age + 1 }, towPriority);
    console.log(state.age);
    setState({ age: state.age + 1 }, towPriority);
    console.log(state.age);
  });
}
handleClick()