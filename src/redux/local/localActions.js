import { createAction } from "@reduxjs/toolkit";

const setEngLanguage = createAction("setEngLanguage");
const setUkrLanguage = createAction("setUkrLanguage");
const setRusLanguage = createAction("setRusLanguage");

export default {
  setEngLanguage,
  setUkrLanguage,
  setRusLanguage,
};
