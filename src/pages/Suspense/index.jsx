import React, { Component } from "react";
class Suspense extends Component {
  state = { loading: false };
  componentDidCatch(error) {
    if (typeof error.then === "function") {
      this.setState({ loading: true });
      error.then(() => {
        this.setState({ loading: false });
      });
    }
  }
  render() {
    const { loading = false } = this.state;
    const { fallback, children } = this.props;
    if (loading) {
      return <div>{fallback}</div>;
    }
    return children;
  }
}
export default Suspense;
