document.addEventListener("DOMContentLoaded", function() {
    const colorPicker = document.getElementById("color-picker");
    const colorDisplay = document.getElementById("color-display");
    const copyButton = document.getElementById("copy-button");

    // Initialize the color display with the default color
    colorDisplay.style.backgroundColor = colorPicker.value;

    // Event listener for color picker input
    colorPicker.addEventListener("input", function() {
        const selectedColor = colorPicker.value;
        colorDisplay.style.backgroundColor = selectedColor;
    });

    // Event listener for copy button
    copyButton.addEventListener("click", function() {
        const selectedColor = colorPicker.value;
        copyToClipboard(selectedColor);
    });

    // Function to copy a string to clipboard
    function copyToClipboard(text) {
        const tempInput = document.createElement("input");
        tempInput.value = text;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        alert("Color code copied to clipboard: " + text);
    }
});
