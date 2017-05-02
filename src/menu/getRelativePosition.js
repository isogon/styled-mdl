function getOffset(object, offset = { x: 0, y: 0 }) {
  if (!object) {
    return offset;
  }

  const x = offset.x + object.offsetLeft;
  const y = offset.y + object.offsetTop;

  return getOffset(object.offsetParent, { x, y });
}

function getScrolled(object, scrolled = { x: 0, y: 0 }) {
  if (!object) {
    return scrolled;
  }

  const x = scrolled.x + object.scrollLeft;
  const y = scrolled.y + object.scrollTop;
  const nextScrolled = { x, y };

  if (object.tagName.toLowerCase() === 'html') {
    return nextScrolled;
  }

  return getScrolled(object.parentNode, nextScrolled);
}

export default function getRelativePosition(element) {
  const offset = getOffset(element);
  const scrolled = getScrolled(element.parentNode);
  const { height, width } = element.getBoundingClientRect();

  const top = offset.y - scrolled.y;
  const left = offset.x - scrolled.x;

  return { top, left, height, width };
}
