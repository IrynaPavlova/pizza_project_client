import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
// routes

import authReducer from "./auth/authReducer";
import productReducer from "./product/productReducer";
import globalReducer from "./global/globalReducer";
import orderReducer from "./order/orderReducer";
import localReducer from "./local/localReducer";
import stocksReducer from "./stocks/stocksReducer";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const OrderPersistConfig = {
  key: "userOrderList",
  storage,
  whitelist: ["userOrderList"],
};

const localPersistConfig = {
  key: "local",
  storage,
  whitelist: ["lang"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    products: productReducer,
    global: globalReducer,
    orders: persistReducer(OrderPersistConfig, orderReducer),

    stocks: stocksReducer,

    local: persistReducer(localPersistConfig, localReducer),
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
