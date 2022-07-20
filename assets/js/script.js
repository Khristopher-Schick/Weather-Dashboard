
 function weather () {
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=2cc8df7d9aaf0caf0291a295fae04fe0")
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log();

    });
  };
//   weather ()




