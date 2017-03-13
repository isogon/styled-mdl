import FontFaceObserver from 'fontfaceobserver';

import './h5pb.style';
import './base.style';

if (window && document) {
  const fontLoaded = () => document.body.classList.add('fontLoaded');
  const fontNotLoaded = () => document.body.classList.remove('fontLoaded');

  const robotoObserver = new FontFaceObserver('Roboto', {});
  robotoObserver.load().then(fontLoaded, fontNotLoaded);
}
