import { useEffect, useState } from 'react';


const HydrationWrapper = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return <>{children}</>;
};

export default HydrationWrapper;