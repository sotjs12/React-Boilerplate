export * from '@/utils/validation';
export * from '@/utils/router';
export * from '@/utils/request';

export const scrollTo = (element: HTMLElement, rest: unknown): void => {
  // const isIE = detectIE()
  const supportsNativeSmoothScroll =
    'scrollBehavior' in document.documentElement.style;

  if (!supportsNativeSmoothScroll) {
    // const [x, y] = rest;
    // const offsetTop = x?.top || x || 0;
    // const offsetLeft = x?.left || y || 0;
    // element.scrollTop = offsetTop;
    // element.scrollLeft = offsetLeft;
  } else {
    element.scrollTo(rest);
  }
};
