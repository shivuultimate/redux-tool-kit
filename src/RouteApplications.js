import React from "react";
import { Routes, Route } from 'react-router-dom';
import UserApplications from "./reduxApplications/slice/UserApplications";
import ResourceApplications from "./reduxResources/ResourceSlice/ResourceApplications";

function RouteApplications () {
    return (
      <div>
        <Routes>
          <Route path="/CostAnalysis" element={<div>CostAnalysis</div>}></Route>
          <Route path="/Resources" element={<ResourceApplications/>}></Route>
          <Route path="/Applications" element={<UserApplications/>}></Route>
        </Routes>
      </div>
    )
}

export default RouteApplications;