function create(words) {
   const content = document.getElementById('content');

   for (const word of words) {
      let divElement = document.createElement('div');

      let paragraphElement = document.createElement('p');
      paragraphElement.textContent = word;
      paragraphElement.style.display = 'none';

      content.appendChild(divElement);
      divElement.appendChild(paragraphElement);

      divElement.addEventListener('click', ()=>{paragraphElement.style.display = 'block'});
   }


}