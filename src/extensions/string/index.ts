String.prototype.toCamelCase = function () {
  return this.replace(/(?:^\w|[A-Z]|_+\w)/g, function (word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+|_+/g, "");
};

export {};
