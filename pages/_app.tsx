import type { AppProps } from "next/app";

import "@/styles/global.css";
import { useEffect } from "react";

const App = ({ Component, pageProps }: AppProps) => {

  
  return <Component {...pageProps} />;
};

export default App;
