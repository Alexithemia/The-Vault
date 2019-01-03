'use strict';
module.exports = function () {
  let newObj = {};

  function getValue(key) {
    if (newObj[key] === undefined) {
      return null;
    } else {
      return newObj[key];
    }
  }

  function setValue(key, value) {
    newObj[key] = value;
  }

  return {
    setValue, getValue
  };
};