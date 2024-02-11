import { StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./app/configureStore";
import config from "./config";
import App from './app/container/App/index';




ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={null}>
      <Provider store={store}>
        <BrowserRouter basename={config.basename}>
          <App />
        </BrowserRouter>
      </Provider>
    </Suspense>
  </StrictMode>
);
