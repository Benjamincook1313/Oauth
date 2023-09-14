import authReducer from "./authReducer";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

export default configureStore({ reducer: authReducer});

