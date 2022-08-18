import React from "react";
import Modal from "./components/modal";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return {
      hasError: true,
      error: String(error),
      errorInfo: null,
      buttons: [],
    };
  }

  reloadWebpage() {
    window.location.reload();
  }

  sendReport(error, errorInfo) {
    try {
      fetch(`${process.env.REACT_APP_API_ENDPOINT}/errors`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          error: String(error),
          errorInfo: errorInfo.componentStack,
          env: process.env.NODE_ENV,
        }),
      });
      return true;
    } catch (err) {
      console.error(err);
    }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    if (process.env.NODE_ENV === "development") {
      console.log("Skipping error report due to development env");
      console.debug("err", error);
      console.debug("errinfo", errorInfo);
    } else this.sendReport(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Modal
          isModalOpen={true}
          disableClosing={true}
          content={`${
            process.env.NODE_ENV === "development"
              ? 'Oops, something broke. "fix it nerd" - hax4dayz#9094'
              : "Something went wrong while running the application."
          }`}
          rawContent={
            <div>
              <p className="text-sm">
                {process.env.NODE_ENV === "development"
                  ? String(this.state.error)
                  : ""}
              </p>
              <p className="text-sm text-gray-500 italic">
                {process.env.NODE_ENV === "development"
                  ? String(this.state.errorInfo?.componentStack)
                  : ""}
              </p>
            </div>
          }
          buttonsOverride={[
            {
              title: "Reload Application",
              action: this.reloadWebpage,
              color: "blue",
            },
          ]}
          title="Application Crashed"
        ></Modal>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
