import { Link } from "react-router-dom";

const CssChallengesList = () => {
  return (
    <>
      <h2>Css</h2>
      <ul className="detail-list">
        <li>
          <details>
            <summary>Css Parallax</summary>
            <div>
              <Link to={'/challenges/css/cssparallax'}>Jump to it</Link>
              <p>Here is to make the parallax effect in the website with only Html and CSS</p>
            </div>
          </details>
        </li>
        <li>
          <details>
            <summary>Css Slider</summary>
            <div>
              <Link to={'/challenges/css/cssslider'}>Jump to it</Link>
              <p>Here is to make the parallax effect in the website with only Html and CSS</p>
            </div>
          </details>
        </li>
      </ul>
    </>
  );
}

export default CssChallengesList;