//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
    const statusElement = document.getElementById('status');
    const enterBtn = document.getElementById('enterBtn');
 enterBtn.addEventListener('click', function() {
        statusElement.innerHTML = '<h1>Entered Metaverse</h1>';
    });
});
