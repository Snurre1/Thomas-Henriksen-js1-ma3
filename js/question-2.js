/* 
Question 2
Make a call to the Rawg API.

Go to https://rawg.io/apidocs and get an API key which you’ll use as part of the endpoint you’re making an API call to. You can use https://noroff.no for the URL and Noroff Assignment for the description.

You'll be given an API Key you can add as a "key" parameter in your fetch request.

Make a call to the following API endpoint replacing INSERTAPIKEYHERE with the key given to you from the Rawg API.
https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=INSERTAPIKEYHERE

Loop through the results and display the following properties in HTML, but only for the first eight results:
name
rating
number of tags (not the tag details, just the amount of tags)
The styling for this assignment is not important but loading indicator should be displayed while the API call is in progress.

Be sure to handle any potential errors in the code.

You can use either regular promise or async/await syntax to make the call.
*/

const API_URL =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=58d6d87f699445699e6ce2e1b939b006";

const heyContainer = document.querySelector(".container");

async function getRawg() {
  try {
    const response = await fetch(API_URL);

    const result = await response.json();

    const gameChanger = result.results;

    heyContainer.innerHTML = "";

    for (let i = 0; i < gameChanger.length; i++) {
      if (i === 8) {
        break;
      }

      heyContainer.innerHTML += `<div><div>Name: ${gameChanger[i].name}</div>
    <div>Rating: ${gameChanger[i].rating}</div>
    <div>Tags: ${gameChanger[i].tags.length}</div></div>`;
    }
  } catch (error) {
    heyContainer.innerHTML = "OH NO, something went wrong";
  }
}
getRawg();
