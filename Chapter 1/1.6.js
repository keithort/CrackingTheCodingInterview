(function() {
  function stringCompression(str) {
    const strArr = Array.from(str);
    let compressed = "";
    let count = 1;
    strArr.forEach((char, index) => {
      if (char === strArr[index + 1]) {
        count++;
      } else {
        compressed += char + count;
        count = 1;
      }
    });
    return str.length < compressed.length ? str : compressed.toString();
  }
})();
