import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("CozShopping"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
