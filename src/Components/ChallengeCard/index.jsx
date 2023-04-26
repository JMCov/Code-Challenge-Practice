import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

const ChallengeCard = ({ title, description, solution }) => {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <AceEditor
        mode="javascript"
        theme="monokai"
        readOnly={true}
        value={showSolution ? solution : null}
        width="100%"
        height="300px"
      />
      <button onClick={() => setShowSolution(!showSolution)}>
        {showSolution ? "Hide Solution" : "Show Solution"}
      </button>
    </div>
  );
};

export default ChallengeCard;