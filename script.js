// Sample data
let contacts = [
    { id: 1, name: "Akash Banger", email: "aakash@sarc.com" },
    { id: 2, name: "Pranita Randive", email: "pranita@sarc.com" }
  ];
  
  // Function to render the table rows
  function renderTable() {
    const tableBody = document.getElementById("data-body");
    tableBody.innerHTML = "";
  
    for (const contact of contacts) {
      const row = document.createElement("tr");
  
      const nameCell = document.createElement("td");
      nameCell.textContent = contact.name;
      row.appendChild(nameCell);
  
      const emailCell = document.createElement("td");
      emailCell.textContent = contact.email;
      row.appendChild(emailCell);
  
      const actionsCell = document.createElement("td");
      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.addEventListener("click", () => editContact(contact.id));
      actionsCell.appendChild(editButton);
  
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => deleteContact(contact.id));
      actionsCell.appendChild(deleteButton);
  
      row.appendChild(actionsCell);
  
      tableBody.appendChild(row);
    }
  }
  
  // Function to handle form submission
  function handleFormSubmit(event) {
    event.preventDefault();
  
    const nameInput = document.getElementById("name-input");
    const emailInput = document.getElementById("email-input");
  
    const contact = {
      id: contacts.length + 1,
      name: nameInput.value,
      email: emailInput.value
    };
  
    contacts.push(contact);
    renderTable();
    clearForm();
  }
  
  // Function to clear the form inputs
  function clearForm() {
    document.getElementById("crud-form").reset();
  }
  
  // Function to edit a contact
  function editContact(contactId) {
    const contact = contacts.find(c => c.id === contactId);
  
    if (!contact) {
      alert("Contact not found!");
      return;
    }
  
    const newName = prompt("Enter a new name", contact.name);
    const newEmail = prompt("Enter a new email", contact.email);
  
    contact.name = newName;
    contact.email = newEmail;
  
    renderTable();
  }
  
  // Function to delete a contact
  function deleteContact(contactId) {
    const confirmDelete = confirm("Are you sure you want to delete this contact?");
  
    if (!confirmDelete) {
      return;
    }
  
    contacts = contacts.filter(c => c.id !== contactId);
    renderTable();
  }
  
  // Render the initial table
  renderTable();
  
  // Attach event listener to the form submission
  const form = document.getElementById("crud-form");
  form.addEventListener("submit", handleFormSubmit);
  