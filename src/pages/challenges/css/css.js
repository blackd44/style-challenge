import { Route, Routes } from "react-router-dom";
import CssParallax from "./cssParallax/cssParallax";

const CssChallenges = () => {
  return ( 
    <>
      <Routes>
        <Route index element={
          <>Css</>
        }/>
        <Route path="/cssparallax" element={<CssParallax />} />
      </Routes>
    </>
  );
}
 
export default CssChallenges;