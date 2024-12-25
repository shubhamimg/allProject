// document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById("newListingForm").addEventListener("submit", function (e) {
//         e.preventDefault(); // Prevent form submission for validation
      
//         // Clear previous error messages
//         document.querySelectorAll(".error").forEach((error) => (error.textContent = ""));
      
//         // Form field values
//         const title = document.getElementById("title").value.trim();
//         const description = document.getElementById("description").value.trim();
//         const price = document.getElementById("price").value.trim();
//         const location = document.getElementById("location").value.trim();
//         const country = document.getElementById("country").value.trim();
//         const image = document.getElementById("image").value.trim();
      
//         let isValid = true;
      
//         // Validation rules
//         if (!title) {
//           isValid = false;
//           document.getElementById("fromError").textContent = "Title is required.";
//         }
      
//         if (!description) {
//           isValid = false;
//           document.getElementById("description").nextElementSibling.textContent =
//             "Description is required.";
//         }
      
//         if (!price) {
//           isValid = false;
//           document.getElementById("price").nextElementSibling.textContent = "Price is required.";
//         } else if (isNaN(price) || Number(price) <= 0) {
//           isValid = false;
//           document.getElementById("price").nextElementSibling.textContent =
//             "Price must be a positive number.";
//         }
      
//         if (!location) {
//           isValid = false;
//           document.getElementById("location").nextElementSibling.textContent = "Location is required.";
//         }
      
//         if (!country) {
//           isValid = false;
//           document.getElementById("country").nextElementSibling.textContent = "Country is required.";
//         }
      
//         if (!image) {
//           isValid = false;
//           document.getElementById("image").nextElementSibling.textContent = "Image URL is required.";
//         } else if (!isValidUrl(image)) {
//           isValid = false;
//           document.getElementById("image").nextElementSibling.textContent =
//             "Please enter a valid URL for the image.";
//         }
      
//         // If all validations pass, submit the form
//         if (isValid) {
//           alert("Form submitted successfully!");
//           this.submit();
//         }
//       });
      
//       // Helper function to validate URL
//       function isValidUrl(url) {
//         const urlPattern = new RegExp(
//           "^(https?:\\/\\/)?" + // Protocol
//             "((([a-zA-Z0-9.-]+)\\.([a-zA-Z]{2,}))|localhost)" + // Domain name or localhost
//             "(\\:\\d+)?(\\/.*)?$", // Port and path
//           "i"
//         );
//         return !!urlPattern.test(url);
//       };
//     // Validation script here
//   });
  



  