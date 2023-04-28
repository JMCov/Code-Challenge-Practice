import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/webpack-resolver";
import "./styles.css";

const ChallengeCard = ({ title, description, solution }) => {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <AceEditor
        mode="javascript"
        theme="monokai"
        readOnly={true}
        value={showSolution ? solution : ""}
        width="100%"
        height="400px"
      />
      <button onClick={() => setShowSolution(!showSolution)}>
        {showSolution ? "Hide Solution" : "Show Solution"}
      </button>
    </div>
  );
};

export default ChallengeCard;