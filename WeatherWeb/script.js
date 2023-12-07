async function getWeather() {
	try {
	  const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', {
		method: 'GET',
		headers: {
		  'X-RapidAPI-Key': '1f6bbfd2afmsh40dcde836ec1986p128a8ajsna91fc9263f6f',
		  'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	  });
	  const result = await response.text();
	//   console.log(result);
	  const Details= document.querySelector("span");
	  Details.textContent = result;
	} catch (error) {
	  console.log(error);
	}
  }
  
  getWeather();
  