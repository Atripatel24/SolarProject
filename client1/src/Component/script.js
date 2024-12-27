const form = document.getElementById('generalInfoForm');
const tableBody = document.getElementById('dataTable').querySelector('tbody');

// Function to save form data to local storage
function saveData(data) {
  let storedData = JSON.parse(localStorage.getItem('generalInfo')) || [];
  storedData.push(data);
  localStorage.setItem('generalInfo', JSON.stringify(storedData));
}

// Function to display data in a table
function displayData() {
  const storedData = JSON.parse(localStorage.getItem('generalInfo')) || [];
  tableBody.innerHTML = ''; // Clear existing rows
  storedData.forEach((item) => {
    const row = document.createElement('tr');
    row.innerHTML = `
          <td>${item.name}</td>
          <td>${item.consumer_number}</td>
          <td>${item.site_location}</td>
          <td>${item.category}</td>
          <td>${item.sanction_number}</td>
        `;
    tableBody.appendChild(row);
  });
}

// Handle form submission
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent page reload
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries()); // Convert form data to an object

  saveData(data); // Save to local storage
  displayData(); // Refresh table
  form.reset(); // Clear the form fields
});

// Display data on page load
window.onload = displayData;
