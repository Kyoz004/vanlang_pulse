$("#pop").on("click", function() {
   $('#imagepreview').attr('src', $('#imageresource').attr('src')); // Assign the image to the modal when the user clicks the enlarge link
   $('#imagemodal').modal('show'); // Show the modal
});

document.getElementById("privacy-policy-link").addEventListener("click", function(event) {
   // Add your privacy policy link handling logic here
   event.preventDefault(); // Prevent the default behavior of the link
   alert("Privacy Policy Link Clicked");
});




