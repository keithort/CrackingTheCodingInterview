(function() {
  function stringRotation(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
    return (str2 + str2).includes(str1);
  }
})();
