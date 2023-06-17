import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};

  return { pageProps };
};

const wrapper = createWrapper(() => store);

export default wrapper.withRedux(MyApp);
