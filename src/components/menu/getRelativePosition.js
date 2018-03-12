export default function getRelativePosition(element) {
  const rect = element.getBoundingClientRect();
  const sx = window.scrollX || window.pageXOffset;
  const sy = window.scrollY || window.pageYOffset;

  return {
    height: rect.height,
    width: rect.width,
    top: rect.top + sy,
    left: rect.left + sx,
    bottom: rect.bottom + sy,
    right: rect.right + sx,
  };
}
