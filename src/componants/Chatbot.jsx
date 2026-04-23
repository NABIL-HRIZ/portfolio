import { useEffect } from 'react';
import '../styles/Chatbot.css';


const Chatbot = () => {
  useEffect(() => {
    window.chatbase = (...args) => {
      if (!window.chatbase.q) {
        window.chatbase.q = [];
      }
      window.chatbase.q.push(args);
    };

    window.chatbase = new Proxy(window.chatbase, {
      get(target, prop) {
        if (prop === "q") return target.q;
        return (...args) => target(prop, ...args);
      },
    });

    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = "PRhB9n8X4uIuA_lrFBlsc";
    script.domain = "www.chatbase.co";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.getElementById("PRhB9n8X4uIuA_lrFBlsc");
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null; 
};

export default Chatbot;