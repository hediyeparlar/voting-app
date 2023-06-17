import { wrapper } from "../Store";
import { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }:AppProps) => {
  return (
      <Component {...pageProps} />
  );
};
export default wrapper.withRedux(MyApp);
