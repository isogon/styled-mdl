import FontFaceObserver from 'fontfaceobserver'
import { injectGlobal } from 'styled-components'

const isBrowser =
  Object.prototype.toString.call(
    typeof process !== 'undefined' ? process : 0,
  ) !== '[object process]'

export default (fontObserver = 'Roboto') => {
  if (isBrowser && fontObserver) {
    const fontLoaded = () => document.body.classList.add('fontLoaded')
    const fontNotLoaded = () => document.body.classList.remove('fontLoaded')

    const observer = new FontFaceObserver(fontObserver)
    observer.load().then(fontLoaded, fontNotLoaded)
  }

  // eslint-disable-next-line no-unused-expressions
  injectGlobal`
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
      min-height: 100%;
      margin: 0;
      font-size: 16px;
      line-height: 1.4;
      letter-spacing: 0.04em;
      -ms-touch-action: manipulation;
      touch-action: manipulation;
    }

    body {
      width: 100%;
      min-height: 100%;
      margin: 0;
      -webkit-font-smoothing: antialiased;
    }
  `
}
