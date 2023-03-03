import { Route, Routes } from "react-router-dom";
import CssChallenges from "./css/css";

const Challengs = () => {
  return (
    <>
      <Routes>
        <Route index element={
          <>challenges</>
        }/>
        <Route path="/css/*" element={<CssChallenges />} />
      </Routes>
    </>
  );
}

export default Challengs;