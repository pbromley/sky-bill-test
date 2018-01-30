'use strict';
import moment from 'moment';

export const twoDp = value => {
  const formatted = parseFloat(value).toFixed(2);
  return formatted === 'NaN' ? '' : formatted;
};

export const displayMoney = value => {
  const money = twoDp(value);
  return money.length ? `£${money}` : money;
};

const DATE_FORMAT = 'DD/MM/YYYY';

export const formatDate = dateToFormat => moment(dateToFormat).format(DATE_FORMAT);

export const capitalise = word => {
  if (typeof word === 'string') {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  return word;
};