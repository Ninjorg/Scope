function findLinkedIn() {
    const emailInput = document.getElementById('email').value;
    if (!emailInput) {
        document.getElementById('linkedin-result').innerText = 'Please enter an email address.';
        return;
    }

    const url = `https://email-to-linkedin-profile-finder-api.p.rapidapi.com/v1/rapidapi/person?email=${encodeURIComponent(emailInput)}`;

    fetch(url, {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'c753760241msh4aafaa1fda97f81p1b0a40jsnf163a2a6b34f',
            'x-rapidapi-host': 'email-to-linkedin-profile-finder-api.p.rapidapi.com'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Assuming the API returns JSON data
        document.getElementById('linkedin-result').innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        document.getElementById('linkedin-result').innerText = 'An error occurred. Please try again.';
    });
}
