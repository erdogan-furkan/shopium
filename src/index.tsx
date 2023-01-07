import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./assets/styles/globals.scss";
import Layout from "./components/Layout";

import "./lang/i18n";
import router from "./routes/router";
import store from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </Provider>
);
