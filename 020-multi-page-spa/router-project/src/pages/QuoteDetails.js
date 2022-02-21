import React from "react";
import { useParams } from "react-router-dom";
const QuoteDetails = () => {
  const param = useParams();
  return (
    <div>
      <h2>QuoteDetails</h2>
      <p>{param.qouteId}</p>
    </div>
  );
};

export default QuoteDetails;
