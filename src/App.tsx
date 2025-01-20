import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import CreateInvestigation from "./pages/CreateInvestigation";
import UpdateInvestigations from "./pages/UpdateInvestigations";
import ProtectedRoute from "./components/ProtectedRoute";
import CreateNewUser from "./components/forms/CreateUser";
import AdvancedSearch from "./pages/AdvancedSearch";
import DetailedReport from "./pages/DetailedReport";
import CreateInvInspector from "./components/forms/CreateInvInpector";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route
            path="/create-investigation"
            element={<CreateInvestigation />}
          />
          <Route
            path="/update-investigations"
            element={<UpdateInvestigations />}
          />
          <Route path="/update-investigation-assignments" element={<Login />} />
          <Route path="/update-suspectors" element={<Login />} />
          <Route path="/create-investigation-inspector" element={<CreateInvInspector />} />
          <Route path="/update-formal-inquiries" element={<Login />} />
          <Route path="/update-interim-reports" element={<Login />} />
          <Route path="/update-charge-sheets" element={<Login />} />
          <Route path="/advanced-search" element={<AdvancedSearch />} />
          <Route path="/detailed-reports" element={<DetailedReport />} />
          <Route path="/create-user" element={<CreateNewUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
