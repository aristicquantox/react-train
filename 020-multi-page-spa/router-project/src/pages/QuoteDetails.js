import React from "react";
import { useParams } from "react-router-dom";
const QuoteDetails = () => {
  const params = useParams();
  return (
    <div>
      <h2>QuoteDetails</h2>
      <p>{params.qouteId}</p>
    </div>
  );
};

export default QuoteDetails;
