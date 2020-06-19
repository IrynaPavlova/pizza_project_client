import { createReducer } from "@reduxjs/toolkit";
import localActions from "./localActions";

const localRuducer = createReducer("ru", {
  [localActions.setEngLanguage]: (_, action) => "en",
  [localActions.setUkrLanguage]: (_, action) => "ukr",
  [localActions.setRusLanguage]: (_, action) => "ru",
});

export default localRuducer;
