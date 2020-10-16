import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Widget1 from "widgets/Widget1";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

const App = () => (
  <div>
    <ErrorBoundary>
      <Widget1 />
    </ErrorBoundary>
    <div>Hi there, I'm React from React.</div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
