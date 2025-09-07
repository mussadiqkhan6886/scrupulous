import { useState, useEffect } from "react";

export default function useWindowWidth() {
  const [isLarge, setIsLarge] = useState<boolean>(
    typeof window !== "undefined" ? window.innerWidth >= 1024 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsLarge(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    // Run once on mount in case initial size is different
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isLarge;
}
