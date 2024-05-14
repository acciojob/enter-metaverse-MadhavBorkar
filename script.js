//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the status paragraph element
    const statusElement = document.getElementById('status');
    
    // Retrieve the enter button
    const enterBtn = document.getElementById('enterBtn');

    // Add click event listener to the enter button
    enterBtn.addEventListener('click', function() {
        // Change the text of the status paragraph
        statusElement.innerHTML = '<h1>Entered Metaverse</h1>';
    });
});
