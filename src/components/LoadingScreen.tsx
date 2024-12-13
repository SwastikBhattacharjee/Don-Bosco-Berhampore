import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import './CSS/LoadingScreen.css';

import * as location from "./MODELS/3.json";
import * as success from "./MODELS/2.json";

const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: location.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: success.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const LAST_VISIT_KEY = 'lastVisitTimestamp';

function LoadingScreen({ onLoadComplete }: { onLoadComplete: () => void }) {
  const [loading, setLoading] = useState(false);
  const [isStartingAPI, setIsStartingAPI] = useState(false);

  useEffect(() => {
    const lastVisit = localStorage.getItem(LAST_VISIT_KEY);
    const now = Date.now();
    const oneMinute = 60 * 1000;

    if (lastVisit && now - parseInt(lastVisit) > oneMinute) {
      setIsStartingAPI(true);
      setTimeout(() => {
        setLoading(true);
        onLoadComplete();
      }, 5000); // Longer loading time for API startup
    } else {
      setTimeout(() => {
        setLoading(true);
        onLoadComplete();
      }, 2000); // Normal loading time
    }

    localStorage.setItem(LAST_VISIT_KEY, now.toString());
  }, [onLoadComplete]);

  return (
    <div className="loading-container">
      <div className="loading-content">
        {!loading ? (
          <>
            <Lottie options={defaultOptions1} height={200} width={200} />
            <p className="loading-text">
              {isStartingAPI ? "Starting API... Please wait! 🚀" : "Hold Tight! Loading Resources! 📚"}
            </p>
          </>
        ) : (
          <>
            <Lottie options={defaultOptions2} height={150} width={150} />
            <p className="success-text">All Set! Let's Get Started! 🚀</p>
          </>
        )}
      </div>
    </div>
  );
}

export default LoadingScreen;