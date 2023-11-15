import '@mantine/carousel/styles.css';
import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './framework/presentation/store/store';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const theme = createTheme({
  breakpoints: {
    xs: '30em',
    sm: '48em',
    md: '64em',
    lg: '74em',
    xl: '90em',
  },
  // components: {
  //   Container: Container.extend({
  //     classNames: (_, { size }) => ({
  //       root: cx({ [classes.responsiveContainer]: size === 'responsive' }),
  //     }),
  //   }),
  // },
});

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <MantineProvider theme={theme}>
        <App/>
      </MantineProvider>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
