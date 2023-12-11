// *** Github Repos By Username ***
// Your task is to write a JS function that executes an AJAX request with Fetch API and loads all user github repositories by a given username 
// (taken from an input field with id "username") into a list (each repository as a list-item) with id "repos". 
// Use the properties full_name and html_url of the returned objects to create a link to each repo’s GitHub page. 
// If an error occurs (like 404 "Not Found"), append to the list a list-item with text the current instead. 
// Clear the contents of the list before any new content is appended. 



function loadRepos() {
	const textInput = document.getElementById('username');
	const baseURL = `https://api.github.com/users/`;
	const reposList = document.getElementById('repos');
	let searchedUser = textInput.value;
	const initialResult = document.querySelector('li');

	textInput.value = '';
	reposList.removeChild(initialResult);

	fetch(baseURL + searchedUser + '/repos')
		.then(res => res.json())
		.then(result => {
			result.forEach(repo => {
				let newListItem = document.createElement('li');
				let repoLink = document.createElement('a');
				repoLink.textContent = `${searchedUser}/${repo.name}`;
				repoLink.href = repo.html_url;
				newListItem.appendChild(repoLink);
				reposList.appendChild(newListItem);
			});
		}).catch(() => {
			let newLi = document.createElement('li');
			newLi.textContent = 'Not found.'
			reposList.appendChild(newLi);
		})
}