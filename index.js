module.exports = function afterOngoingPromises() {
  return new Promise(function(resolve) {
    setImmediate(resolve);
  });
};
