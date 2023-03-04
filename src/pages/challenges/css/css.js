import { Route, Routes } from "react-router-dom";
import CssChallengesList from "../../../components/challenges/cssList";
import CssParallax from "./cssParallax/cssParallax";
import CssSlider from "./cssSlider";

const CssChallenges = () => {
  return (
    <>
      <Routes>
        <Route index element={
          <>
            <section className="list-section">
              <CssChallengesList />
            </section>
          </>
        } />
        <Route path="/cssparallax" element={<CssParallax />} />
        <Route path="/cssslider" element={<CssSlider />} />
      </Routes>
    </>
  );
}

export default CssChallenges;