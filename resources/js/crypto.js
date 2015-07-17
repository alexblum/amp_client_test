//taken from mozilla dev page - https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest
//with litte changes in hex-function, to match the server-side algorithm

function sha256(str) {
  // We transform the string into an arraybuffer.
  var buffer = new TextEncoder("utf-8").encode(str);
  return crypto.subtle.digest("SHA-256", buffer).then(function (hash) {
    return hex(hash);
  });
}

function hex(buffer) {
  var hexCodes = [];
  var view = new DataView(buffer);
  for (var i = 0; i < view.byteLength; i++) {
    var value = view.getUint8(i)
    // toString(16) will give the hex representation of the number without padding
    var stringValue = value.toString(16);
    hexCodes.push(stringValue);
  }

  // Join all the hex strings into one
  return hexCodes.join("");
}
