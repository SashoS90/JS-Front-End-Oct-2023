// *** GitHub Repos ***
// Your task is to write a JS function that loads a github repository asynchronously with AJAX. 
// You should use the Fetch API. Obtain the data by making  a GET request to the following URL: “https://api.github.com/users/testnakov/repos”
// Transform the body to text with res.text() and 
// in the second then() block of the Promise replace the text content of a div element with id "res" with the value from the response. 
// Do not format the response in any way.



function loadRepos() {
   const baseURL = 'https://api.github.com/users/testnakov/repos';
   const content = document.getElementById('res');

   fetch(baseURL)
      .then(response => response.text())
      .then(result => {
         content.textContent = result;
      });
}