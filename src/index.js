import styleSheet from 'styled-components/lib/models/StyleSheet';
import React from 'react';

export const SSRStyleSheet = () => {
  const styles = {
    __html: styleSheet.rules().map((rule) => rule.cssText).join('\n'),
  };

  // eslint-disable-next-line react/no-danger
  return <style dangerouslySetInnerHTML={styles} />;
};

export * from './globals';
export * from './buttons';
export * from './cards';
export * from './ripple';
export * from './theme';
export * from './mixins';
export * from './layout';
export * from './snackbar';
export * from './radio';
export * from './checkbox';
export * from './switch';
export * from './spinner';
export * from './progress';
export * from './textfield';
export * from './chips';
export * from './badges';
export * from './dialog';
export * from './list';
export * from './menu';
export * from './slider';
export * from './tables';
export * from './tooltips';
export * from './input';
export theme from './util/getters';

export * as util from './util';
