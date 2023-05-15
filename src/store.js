import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from './reduxApplications/slice/actionReducers';
import ResourceSlice from "./reduxResources/ResourceSlice/ResourceSlices";

const rootreducer = combineReducers({
    users: userSlice,
    resource: ResourceSlice,

})

export const store=configureStore({
    reducer:rootreducer
});