import { useEffect, useState } from "react";
import axios from "axios";

function SubscriptionTracker() {
  const [subscriptions, setSubscriptions] = useState([]);

  const fetchSubscriptions = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/subscriptions/1"
      );

      setSubscriptions(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSubscriptions();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Subscription Tracker
      </h1>

      <p className="text-gray-600 mb-6">
        Automatically detects repeated expense titles as possible subscriptions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {subscriptions.length === 0 ? (
          <div className="bg-white p-6 rounded-xl shadow">
            No recurring subscriptions detected yet.
          </div>
        ) : (
          subscriptions.map((sub) => (
            <div
              key={sub.name}
              className="bg-white p-6 rounded-xl shadow"
            >
              <h2 className="text-xl font-bold">
                {sub.name}
              </h2>

              <p className="mt-2">
                Average Amount: ₹ {sub.average_amount}
              </p>

              <p>
                Occurrences: {sub.occurrences}
              </p>

              <span className="inline-block mt-3 bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                {sub.status}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default SubscriptionTracker;