
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Prepare the email parameters
    var templateParams = {
      name: name,
      email: email,
      message: message
    };

    // Send email using EmailJS
    emailjs.send('service_ersjolp', 'template_yaqac4c', templateParams)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
      }, function(error) {
        console.error('FAILED...', error);
        alert('Failed to send message. Please try again later.');
      });
  });
