import React from "react";
import Tpp from "./video";
import styled from "styled-components";

const Banner = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 10px;
  background: transparent;
  z-index: 15;
`;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Banner>
          <Tpp></Tpp>
        </Banner>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
