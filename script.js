//button action set-up
const targetButton = document.getElementById('search-btn');
const actionButton = targetButton.addEventListener('click', function () {
    //search bar value pass
    const targetSearchBar = document.getElementById('search-bar').value;
    searchMeal(targetSearchBar);
})

function searchMeal(meal) {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`;

    fetch(apiUrl)
        .then(res => res.json())
        .then(data => displayMeal(data));

    const displayMeal = mealDetails => {
        const innerMeal = mealDetails.meals;
        const mealDiv = document.getElementById('meal-details');

        innerMeal.forEach(mealData => {
            //inherit
            const mealName = mealData.strMeal;
            const mealPicture = mealData.strMealThumb;
            //html part
            const mealSubDiv = document.createElement('div');
            mealSubDiv.className = 'mealSubDivStyle';
            
            mealSubDiv.innerHTML = `
                    <img src="${mealPicture}">
                    <h3 id='headerTagStyle' class='country-name'>${mealName}</h3>
            `;
           
            mealDiv.appendChild(mealSubDiv); 
            

        });
    }
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`
}


