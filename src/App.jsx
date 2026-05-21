import {
  Provider,
} from "react-redux";

import {
  PersistGate,
} from "redux-persist/integration/react";

import AppRoutes from "./routes/AppRoutes";

import {
  store,
  persistor,
} from "./app/store";

import "./styles/global.css";

export default function App() {
  return (
    <Provider
      store={store}
    >

      <PersistGate
        persistor={
          persistor
        }
      >

        <AppRoutes />

      </PersistGate>

    </Provider>
  );
}