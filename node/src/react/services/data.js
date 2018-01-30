'use strict';
import {GET, rejectNonOKStatus, parseJson} from '../requests';

export const getData = () => {
  return fetch('/api/data', GET)
      .then(rejectNonOKStatus)
      .then(parseJson);
};