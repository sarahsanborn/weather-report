// WAVE 2

const increaseTemp = () => {
  const increaseButton = document.getElementById('increase-temp');

  increaseButton.addEventListener('click', () => {
    const currentTemperature = document.getElementById('curr-temp');
    currentTemperature.innerHTML = parseInt(currentTemperature.innerHTML) + 1;
    tempcolor();
  });
};

const decreaseTemp = () => {
  const decreaseButton = document.getElementById('decrease-temp');

  decreaseButton.addEventListener('click', () => {
    const currentTemperature = document.getElementById('curr-temp');
    currentTemperature.innerHTML = parseInt(currentTemperature.innerHTML) - 1;
    tempcolor();
  });
};

const tempcolor = () => {
  const currentTemperature = document.getElementById('curr-temp');
  // Double check that how we can access background-image in grid-container class
  const gridContainer = document.querySelector('.grid-container');

  if (currentTemperature.innerHTML >= 80) {
    currentTemperature.className = 'temp-red';
    gridContainer.style.backgroundImage =
      'url(../assets/desert-nicole-herrero.jpg)';
  } else if (currentTemperature.innerHTML >= 70) {
    currentTemperature.className = 'temp-orange';
    gridContainer.style.backgroundImage =
      'url(../assets/tropical-alexis-antonio.jpg)';
  } else if (currentTemperature.innerHTML >= 55) {
    currentTemperature.className = 'temp-yellow';
    gridContainer.style.backgroundImage =
      'url(../assets/green-field-anisur-rahman.jpg)';
  } else if (currentTemperature.innerHTML >= 40) {
    currentTemperature.className = 'temp-green';
    gridContainer.style.backgroundImage =
      'url(../assets/fall-federica-galli.jpg)';
  } else if (currentTemperature.innerHTML <= 39) {
    currentTemperature.className = 'temp-teal';
    gridContainer.style.backgroundImage =
      'url(../assets/winter-christiaan-huynen.jpg)';
  }
};

// wave 3
const changeCity = () => {
  const inputCityName = document.getElementById('city-name');
  // const headerCityName = document.getElementById('header-city');
  // headerCityName.innerHTML = inputCityName;
  inputCityName.addEventListener('input', () => {
    // const inputCityName = document.getElementById('city-name');
    const headerCityName = document.getElementById('header-city');
    headerCityName.textContent = inputCityName.value;
  });
};

const setUp = () => {
  increaseTemp();
  decreaseTemp();
  tempcolor();
  changeCity();
};

if (document.readyState !== 'loading') {
  increaseTemp();
  decreaseTemp();
  tempcolor();
  changeCity();
} else {
  document.addEventListener('DOMContentLoaded', setUp);
}
