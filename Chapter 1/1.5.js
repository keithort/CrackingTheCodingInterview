(function() {
  function oneAway(str1, str2) {
    const str1Array = Array.from(str1);
    const str2Array = Array.from(str2);
    let diff = 0;

    if (Math.abs(str1Array.length - str2Array.length) > 1) {
      return false;
    }

    str1Array.forEach(char => {
      if (!str2Array.includes(char)) {
        diff++;
      }
    });

    return diff <= 1;
  }
})();
