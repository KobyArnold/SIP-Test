async function checkUrl() {
    const url = document.getElementById('urlInput').value;

    try {
        const response = await fetch(url);
        if (response.ok) {
            document.getElementById('result').innerText = 'URL is valid.';
        } else {
            document.getElementById('result').innerText = `URL is not valid. Status Code: ${response.status}`;
        }
    } catch (error) {
        document.getElementById('result').innerText = 'Error occurred while checking the URL.';
    }
}
