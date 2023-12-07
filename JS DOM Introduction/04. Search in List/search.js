// *** Search List ***
// An HTML page holds a list of towns, a search box, and a [Search] button. 
// Implement the search function to bold and underline the items from the list which include the text from the search box. 
// Also, print the number of items the current search matches in the format `${matches} matches found`.
// Note: It is necessary to clear the results of the previous search.



function search() {
   const townsList = Array.from(document.querySelectorAll('#towns li'));
   const searchedText = document.getElementById('searchText').value.toLowerCase();
   const result = document.getElementById('result');
   let matches = [];

   for (const town of townsList) {
      town.style['text-decoration'] = '';
      town.style['font-weight'] = '';
   }

   townsList.forEach(town => {
      if (town.textContent.toLowerCase().includes(searchedText)) {
         town.style['text-decoration'] = 'underline';
         town.style['font-weight'] = 'bold';
         matches.push(town);
      }
   })
   result.textContent = `${matches.length} matches found`;
}
