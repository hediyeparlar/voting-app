import { wrapper } from "../Store";
import { AppProps } from "next/app";
import "../../public/styles/index.scss";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};
export default wrapper.withRedux(MyApp);
