import { useEffect, useState } from "react";
import axios from "axios";

function AIInsights() {

  const [prediction, setPrediction] =
    useState(null);

  useEffect(() => {

    fetchPrediction();

  }, []);

  const fetchPrediction = async () => {

    try {

      const response = await axios.get(
        "http://127.0.0.1:8000/predict/1"
      );

      setPrediction(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  if (!prediction) {

    return (
      <div className="bg-white p-6 rounded-xl shadow">
        Loading AI Insights...
      </div>
    );

  }

  return (

    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 rounded-xl shadow-lg">

      <h2 className="text-2xl font-bold mb-4">
        AI Financial Advisor
      </h2>

      <p className="text-lg mb-2">

        Predicted Future Expense:

      </p>

      <p className="text-4xl font-bold mb-6">

        ₹ {prediction.prediction}

      </p>

      <div className="bg-white/20 p-4 rounded-lg">

        {prediction.message}

      </div>

    </div>

  );
}

export default AIInsights;