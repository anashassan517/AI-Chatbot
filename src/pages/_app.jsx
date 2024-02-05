import 'styles/globals.css';
import 'styles/tailwind.css';
import { ModalProvider, ToastProvider } from '@apideck/components';

import { AppProps } from 'next/app';

export default function App({ Component, pageProps }) {
  return (
    <ToastProvider>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </ToastProvider>
  );
}