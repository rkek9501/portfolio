import { useEffect } from "react";

const useInitialScrollByHash = (callback: () => void, time: number) => {
  useEffect(() => {
    setTimeout(() => {
      const { hash } = window.location;
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ block: 'start', behavior: 'smooth', inline: "nearest" });
          callback();
        }
      }
    }, time || 1000);
  }, []);
};

export default useInitialScrollByHash;