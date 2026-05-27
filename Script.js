let leads = [];

function addLead() {

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let source = document.getElementById("source").value;
  let status = document.getElementById("status").value;
  let notes = document.getElementById("notes").value;

  if(name === "" || email === ""){
    alert("Please fill all required fields");
    return;
  }

  let lead = {
    name,
    email,
    source,
    status,
    notes
  };

  leads.push(lead);

  displayLeads();

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("source").value = "";
  document.getElementById("notes").value = "";
}

function displayLeads(){

  let table = document.getElementById("leadTable");

  table.innerHTML = "";

  leads.forEach((lead, index) => {

    table.innerHTML += `
      <tr>
        <td>${lead.name}</td>
        <td>${lead.email}</td>
        <td>${lead.source}</td>
        <td>${lead.status}</td>
        <td>${lead.notes}</td>
        <td>
          <button onclick="deleteLead(${index})">Delete</button>
        </td>
      </tr>
    `;

  });
}

function deleteLead(index){
  leads.splice(index,1);
  displayLeads();
}