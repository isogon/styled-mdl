import FontFaceObserver from 'fontfaceobserver';
import { injectGlobal } from 'styled-components';
import isNode from 'detect-node';
import h5pb from './h5pb.style';

export default ({ fontObserver } = {}, styles) => {
  if (!isNode && fontObserver) {
    const fontLoaded = () => document.body.classList.add('fontLoaded');
    const fontNotLoaded = () => document.body.classList.remove('fontLoaded');

    const observer = new FontFaceObserver(fontObserver, {});
    observer.load().then(fontLoaded, fontNotLoaded);
  }

  // eslint-disable-next-line no-unused-expressions
  injectGlobal`
    ${h5pb}

    *, *:before, *:after {
      box-sizing: border-box;
    }

    body {
      font-family: Helvetica, Arial, sans-serif;
    }

    ${fontObserver && `
      body.fontLoaded {
        font-family: '${fontObserver}', Helvetica, Arial, sans-serif;
      }
    `}

    html {
      width: 100%;
      height: 100%;
      margin: 0;
      -ms-touch-action: manipulation;
      touch-action: manipulation;
    }

    /*
    * Make body take up the entire screen
    * Remove body margin so layout containers don't cause extra overflow.
    */
    body {
      width: 100%;
      min-height: 100%;
      margin: 0;
    }

    /*
     * Main display reset for IE support.
     * Source: http://weblog.west-wind.com/posts/2015/Jan/12/main-HTML5-Tag-not-working-in-Internet-Explorer-91011
     */
    main {
      display: block;
    }

    /*
    * Apply no display to elements with the hidden attribute.
    * IE 9 and 10 support.
    */
    *[hidden] {
      display: none !important;
    }

    ${styles}

  `;
};
