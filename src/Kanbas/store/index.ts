import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/modulesReducer";

export type ModuleType = {
  _id: string;
  name: string;
  description: string;
  course: string;
  lessons: {
    _id: string;
    name: string;
    description: string;
    module: string;
  }[];
}

export interface KanbasState {
  modulesReducer: {
    modules: ModuleType[];
    module: ModuleType;
  };
}
const store = configureStore({
  reducer: {
    modulesReducer
  }
});


export default store;

