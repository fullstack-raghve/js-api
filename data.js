// api url
const api_url =
	"https://dummyjson.com/users";

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
    console.log('response',response);

	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
	let tab =
		`<tr>
		<th>Name</th>
		<th>Office</th>
		<th>Position</th>
		<th>Salary</th>
		</tr>`;
	
	// Loop to access all rows
	for (let r of data.users) {
		tab += `<tr>
	<td>${r.firstName} </td>
	<td>${r.lastName}</td>
	<td>${r.age}</td>
	<td>${r.phone}</td>		
</tr>`;
	}
	// Setting innerHTML as tab variable
	document.getElementById("employees").innerHTML = tab;
}
