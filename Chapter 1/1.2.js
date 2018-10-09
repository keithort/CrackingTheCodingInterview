(function() {
  function checkPermutation(str1, str2) {
    const str1Sorted = Array.from(str1).sort();
    const str2Sorted = Array.from(str2).sort();
    if (str1Sorted.length === str2Sorted.length) {
      return str1Sorted === str2Sorted;
    }
    return 0;
  }
})();
