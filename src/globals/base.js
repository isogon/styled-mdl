import { injectGlobal } from 'styled-components';
import FontFaceObserver from 'fontfaceobserver';

const robotoObserver = new FontFaceObserver('Roboto', {});

robotoObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
}, () => {
  document.body.classList.remove('fontLoaded');
});

/* eslint no-unused-expressions: 0 */
injectGlobal`
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
`;
