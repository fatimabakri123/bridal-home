import "./intro.css";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function IntroPage() {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.play().catch(() => {
        // If autoplay is blocked, the video controls remain available.
      });
    }
  }, []);

  function handleVideoEnd() {
    navigate("/role", { replace: true });
  }

  function skipIntro() {
    navigate("/role", { replace: true });
  }

  return (
    <main className="intro-page">
      <video
        ref={videoRef}
        className="intro-video"
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
      >
        <source src="/videos/intro.mp4" type="video/mp4" />
        Your browser does not support video playback.
      </video>

      <button className="skip-intro" onClick={skipIntro}>
        Skip Intro →
      </button>
    </main>
  );
}

export default IntroPage;
