function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      const restaurantsData = JSON.parse(document.querySelector('#inputs textarea').value);
      const bestRestaurantOutput = document.querySelector('#bestRestaurant p');
      const bestWorkerOutput = document.querySelector('#workers p');
      let restaurantsList = [];

      for (const restaurant of restaurantsData) {
         let [restaurantName, workersData] = restaurant.split(" - ");
         let workers = workersData.split(", ");
         let currentRestaurant = {name: restaurantName, workers: []};
         let restaurantIndex = 0;

         if (!restaurantsList.find((restaurant) => restaurant.name === restaurantName)) {
            restaurantsList.push(currentRestaurant);
         }

         restaurantIndex = restaurantsList.indexOf(currentRestaurant);

      for (const worker of workers) {
         let [workerName, workerWage] = worker.split(" ");
         let currentWorker = {name: workerName, wage: Number(workerWage)};
         currentRestaurant.workers.push(currentWorker);
         console.log(currentRestaurant.workers);
      }

         // let restaurantObj = {name: restaurantName, workers: []};

         // for (const worker of workersDetails) {
         //    let [name, salary] = worker.split(" ");
         //    let workerObj = {name: name, salary: salary};
         //    restaurantObj.workers.push(workerObj);
         // }
         // restaurantsList.push(restaurantObj);
         console.log(restaurantIndex);
      }
      // console.log(restaurantsList);
   }
}


// TBC