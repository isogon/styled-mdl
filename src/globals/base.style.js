import FontFaceObserver from 'fontfaceobserver';
import { injectGlobal } from 'styled-components';
import isNode from 'detect-node';

export default ({ defaultFont: fontObserver = 'Roboto' } = {}) => {
  if (!isNode && fontObserver) {
    const fontLoaded = () => document.body.classList.add('fontLoaded');
    const fontNotLoaded = () => document.body.classList.remove('fontLoaded');

    const observer = new FontFaceObserver(fontObserver, {});
    observer.load().then(fontLoaded, fontNotLoaded);
  }

  return injectGlobal`
    *, *:before, *:after {
      box-sizing: border-box;
    }

    body {
      font-family: Helvetica, Arial, sans-serif;
    }

    body.fontLoaded {
      font-family: '${fontObserver}', Helvetica, Arial, sans-serif;
    }

    html {
      width: 100%;
      height: 100%;
      margin: 0;
      font-size: 14px;
      line-height: 1.4;
      -ms-touch-action: manipulation;
      touch-action: manipulation;
    }

    body {
      width: 100%;
      min-height: 100%;
      margin: 0;
    }
  `;
};
