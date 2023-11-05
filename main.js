// Get the list of items element
const itemsList = document.getElementById('items');

// Add an event listener to the contact form submit button
document.querySelector('form').addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the contact form data
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const message = document.querySelector('textarea[name="message"]').value;

  // Send the contact form data to your server using a POST request
  fetch('/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      email,
      message
    })
  })
    .then(response => response.json())
    .then(data => {
      // If the contact form was submitted successfully, display a success message
      if (data.success) {
        alert('Your message has been sent successfully!');
      } else {
        // If the contact form submission failed, display an error message
        alert('An error occurred while sending your message. Please try again later.');
      }
    })
    .catch(error => {
      // Display an error message if something went wrong while sending the contact form data
      alert('An error occurred while sending your message. Please try again later.');
    });

  // Clear the contact form
  document.querySelector('form').reset();

  // Add the list of items to the list of items element
  message.split('\n').forEach(item => {
    itemsList.appendChild(document.createElement('li')).textContent = item;
  });
});
