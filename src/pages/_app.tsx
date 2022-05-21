import '@/styles/global.css';

import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo defaultTitle="doinki" description="Today I Learned" />
      <Component {...pageProps} />
    </>
  );
};

export default App;
