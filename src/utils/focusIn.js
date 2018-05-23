import filter from 'lodash/fp/filter'

const FOCUSABLE_QUERY =
  'a:not([disabled]), button:not([disabled]), input[type=text]:not([disabled]), [tabindex]:not([disabled]):not([tabindex="-1"])'

const getFocusableChildElements = (element) =>
  filter(
    (e) =>
      e.offsetWidth > 0 || e.offsetHeight > 0 || e === document.activeElement,
    element.querySelectorAll(FOCUSABLE_QUERY),
  )

const incFocusChild = (i) => (domNode, e) => {
  if (!domNode) {
    return
  }

  e.preventDefault()
  const focusable = getFocusableChildElements(domNode)
  if (focusable.length === 0) {
    return
  }
  const focusedIndex = focusable.indexOf(document.activeElement)

  if (focusedIndex === -1) {
    focusable[0].focus()
    return
  }

  focusable[(focusedIndex + i + focusable.length) % focusable.length].focus()
}

export const focusNextIn = incFocusChild(1)
export const focusPreviousIn = incFocusChild(-1)
