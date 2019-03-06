document.getElementById('sendMessageButton').addEventListener('click', (event) => {
  event.preventDefault();
  const contactName = document.getElementById('name').value;
  const contactEmail = document.getElementById('email').value;
  const contactPhone = document.getElementById('phone').value;
  const contactMessage = document.getElementById('message').value;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "jetzable@gmail.com",
    Password: "4c685346-2bb2-4d20-8706-805d45f1e7cc",
    To: 'jorge.garay.gutierrez@gmail.com',
    From: `${contactEmail}`,
    Subject: `${contactName} Teléfono: ${contactPhone}`,
    Body: `${contactMessage}`
  }).then(
    message => alert(message)
  );

})