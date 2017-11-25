module.exports = function afterPendingPromises() {
  return new Promise(function(resolve) {
    setImmediate(resolve);
  });
};
