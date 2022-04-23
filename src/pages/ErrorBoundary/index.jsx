import React, {Component} from 'react';

class ErrorBoundary extends Component{
  state = {hasError: false, error: null};

  static getDerivedStateFromError(err){ // 用于报错时候ui切换
    return {hasError: true, error: err}
  }

  componentDidCatch(error, info){ // 用于上报错误信息
    console.log(error, info);
  }
  render(){
    if(this.state.hasError){
      return <div>报错{this.state.error.toString()}</div>
    }
    return this.props.children;
  }
}
export default ErrorBoundary;