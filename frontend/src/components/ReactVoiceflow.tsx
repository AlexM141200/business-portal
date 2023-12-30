import React, { useEffect, useRef } from 'react';

// Extend the Window interface to include voiceflow
declare global {
  interface Window {
    voiceflow: any;
  }
}

const VoiceFlowChat: React.FC = () => {
  // Create a ref for the container
  const voiceflowContainerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
    script.type = "text/javascript";
    script.onload = function() {
      // Check if voiceflow is defined on the window object
      if (window.voiceflow) {
        window.voiceflow.chat.load({
          verify: { projectID: '658f200e5b222405d4e4ac73' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
          container: voiceflowContainerRef.current // Specify the container here
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      document.querySelectorAll("script[src='https://cdn.voiceflow.com/widget/bundle.mjs']").forEach(el => el.remove());
    };
  }, []);

  // Render the container for the Voiceflow chat
  return <div ref={voiceflowContainerRef}></div>;
};

export default VoiceFlowChat;
