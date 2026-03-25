const convertBtn = document.getElementById("convert")
const inputSha = document.getElementById("inputSha")
const sha1Text = document.getElementById("sha1Text")
const resultText = document.getElementById("result")

convertBtn.addEventListener('click', function() {
    let value = inputSha.value.trim()
    let result = sha1HexToKeyHash(value)
    sha1Text.textContent = `SHA1: \"${value}\"`
    resultText.textContent = `Hash: ${result}`
})

function sha1HexToKeyHash(sha1Hex) {
    // Bỏ dấu : và convert hex string sang bytes
    const hex = sha1Hex.replace(/:/g, "");
    const bytes = new Uint8Array(hex.match(/.{1,2}/g).map(b => parseInt(b, 16)));
    
    // Convert bytes sang Base64
    const binary = String.fromCharCode(...bytes);
    return btoa(binary);
}

const sha1 = "EA:F2:72:A2:55:69:31:50:14:A5:5C:EE:4D:6C:E2:1F:14:82:40:2C";
console.log(sha1HexToKeyHash(sha1));
