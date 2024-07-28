function findEmail() {
    const domainInput = document.getElementById('email-domain').value;
    if (!domainInput) {
        document.getElementById('email-result').innerText = 'Please enter a website link.';
        return;
    }

    const url = `https://website-contacts-scraper.p.rapidapi.com/scrape-contacts?query=${encodeURIComponent(domainInput)}&match_email_domain=false&external_matching=false`;

    fetch(url, {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'your-key-here',
            'x-rapidapi-host': 'website-contacts-scraper.p.rapidapi.com'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Assuming the API returns JSON data
        document.getElementById('email-result').innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        document.getElementById('email-result').innerText = 'An error occurred. Please try again.';
    });
}
