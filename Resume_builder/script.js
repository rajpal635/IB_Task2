document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form values
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
  
    // Generate resume HTML
    var resumeHTML = `
      <h2>${fullName}</h2>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Address: ${address}</p>
  
      <h3>Education</h3>
      <p>${education}</p>
  
      <h3>Experience</h3>
      <p>${experience}</p>
  
      <h3>Skills</h3>
      <p>${skills}</p>
    `;
  
    // Display generated resume
    document.getElementById('resumePreview').innerHTML = resumeHTML;
  });
  