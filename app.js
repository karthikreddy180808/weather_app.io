function GetSelectedTextValue(){
    var request  = new XMLHttpRequest();
    // city_name = "delhi";
    var city_name = document.getElementById("cities");
    var city_name_selected = city_name.options[city_name.selectedIndex].innerHTML;
    console.log(city_name_selected);
    request.open('GET',"https://api.openweathermap.org/data/2.5/weather?q="+city_name_selected+"&appid=93f26e3c57081a6210de53b8dcfdfea4",true);

    request.onload = function(){

        if(request.status >= 200 && request.status < 400){
            var data = JSON.parse(request.responseText);
            let imgname = data.weather[0].icon+".png";
            console.log(data);
            switch(city_name_selected){
                case "hyderabad":
                    document.body.style.backgroundImage = "url('./hyderabad.jpg')";
                    break;
                case "chennai":
                    document.body.style.backgroundImage = "url('./chennai.jpg')"; 
                    break;
                case "mumbai":
                    document.body.style.backgroundImage = "url('./mumbai.jpg')";  
                    break;     
                case "delhi":
                    document.body.style.backgroundImage = "url('./delhi.jpg')"; 
                    break;
                default:


            }
            // name of the place 
            document.getElementById("place").textContent = data.name;
            // temparature of the place 
            document.getElementById("weather").textContent = Math.round((data.main.temp)-270)+"˚C";
            // feels like of the place 
            document.getElementById("feels-like").textContent = Math.round((data.main.feels_like)-270)+"˚C";
            //icon
            document.getElementById("pic").src = "https://openweathermap.org/img/w/"+imgname;
        }
        else{
            console.log("there was an error");
        }
    };

    request.send();


}