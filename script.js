document.getElementById('dataForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        date: document.getElementById('date').value,
        data: document.getElementById('data').value
    };

    try {
        const response = await fetch('http://localhost:3000/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const result = await response.json();
        document.getElementById('message').textContent = result.message;
    } catch (error) {
        document.getElementById('message').textContent = 'Error submitting form';
    }
});
