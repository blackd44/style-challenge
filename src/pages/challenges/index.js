import { Route, Routes } from "react-router-dom";
import CssChallengesList from "../../components/challenges/cssList";
import CssChallenges from "./css/css";

const Challengs = () => {
  return (
    <>
      <Routes>
        <Route index element={<Index />}/>
        <Route path="/css/*" element={<CssChallenges />} />
      </Routes>
    </>
  );
}

const Index = () => {
  return (
    <>
      <section className="list-section">
        <h1>My Challenges</h1>
        <article>
          <CssChallengesList />
        </article>
      </section>
    </>
  )
}

export default Challengs;