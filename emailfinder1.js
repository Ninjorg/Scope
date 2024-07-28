

function findEmail() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const emailDomain = document.getElementById('email-domain').value;

    if (firstName && lastName && emailDomain) {
        fetchEmail(firstName, lastName, emailDomain);
    } else {
        alert('Please fill out all fields.');
    }
}

function fetchEmail(firstName, lastName, emailDomain) {
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'c753760241msh4aafaa1fda97f81p1b0a40jsnf163a2a6b34f', // Replace with your actual API key
            'x-rapidapi-host': 'email-finder4.p.rapidapi.com'
        }
    };

    const url = `https://email-finder4.p.rapidapi.com/find-emails?name=${firstName}%20${lastName}&email_domain=${emailDomain}&min_similarity=0`;

    fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            displayResult(data);
        })
        .catch(error => {
            console.error('Error fetching email:', error);
            const resultDiv = document.getElementById('email-result');
            resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
        });
}

function displayResult(data) {
    const resultDiv = document.getElementById('email-result');
	resultDiv.innerHTML = `<p>Email found: ${data.data[0].email}</p>`;
}


//