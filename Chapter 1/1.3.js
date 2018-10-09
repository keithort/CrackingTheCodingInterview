(function() {
  function toURL(url) {
    let encodedUrl = Array.from(url.trim());
    for (let i = encodedUrl.length - 1; i > 0; i--) {
      if (encodedUrl[i] === " ") {
        encodedUrl.splice(i, 1, "%", "2", "0");
      }
    }
    return encodedUrl.join("").toString();
  }
})();
