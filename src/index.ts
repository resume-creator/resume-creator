import { createElement, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

Promise.resolve()
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  .then(() => createRoot(document.getElementById('react')!))
  .then((root) =>
    root.render(createElement(StrictMode, undefined, createElement(App))),
  )
  .then(() => {
    console.info('Rendered');
  });
