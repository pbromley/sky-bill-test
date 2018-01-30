'use strict';

export const deleteCache = () => {
  Object.keys(require.cache).forEach(key => {
    if (key.match(/src\/react/)) {
      delete require.cache[key];
    }
  });
};

export const noOp = () => {};
