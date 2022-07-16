import "./App.css";
import Main from "./layouts/main";
import ErrorBoundary from "./errorFallback";

function App() {
  return (
    <ErrorBoundary>
      <Main></Main>
    </ErrorBoundary>
  );
}

export default App;
