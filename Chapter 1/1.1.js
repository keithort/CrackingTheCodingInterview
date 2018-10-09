(function() {
  function isUnique(str) {
    const characters = new Set(str);
    return str.length === characters.size;
  }
})();
