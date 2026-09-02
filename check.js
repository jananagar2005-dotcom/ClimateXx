let search=document.querySelector(".country-name")
let enterbtn=document.querySelector(".enter")
let locationbox=document.querySelector(".location")
let temp=document.querySelector(".temp-result")
let cloud=document.querySelector(".cloud-result")
let sun=document.querySelector(".sun-result")
let wind=document.querySelector(".wind-result")

let tempinfo = document.querySelector("#temperature");
let cloudinfo = document.querySelector("#cloud");
let suninfo = document.querySelector("#sun");
let windinfo = document.querySelector("#wind");
let locationinfo = document.querySelector("#location-info");
let loading = document.querySelector(".loading");
let result = document.querySelector(".result2");
let advice = document.querySelector(".advice");
// //////////////////////////////////////////////////////////////////////////////////////
  

  enterbtn.addEventListener("click",function(){
    let country=search.value
        if(country.trim() === ""){
    alert("Please enter a location");
    return;
}
    let apikey="0b991c41362367a80ca55b1e5d4ad6a9"
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apikey}&units=metric`;
    
    loading.style.display="flex"  
    result.style.display="none"
  fetch(url)
  .then(function(Response){


      if(!Response.ok){
    throw new Error("Location not found");
}
    return Response.json()
  
  })
  .then(function(data){
    console.log(data);
    tempinfo.innerHTML=data.main.temp+" °C";
       cloudinfo.innerHTML=data.clouds.all+" %";
       windinfo.innerHTML=data.wind.speed+"m/s";
       locationinfo.innerHTML=data.name
       suninfo.innerHTML=data.weather[0].description;

           
    loading.style.display="none"  
    result.style.display="grid"

    if(data.main.temp>=35){
        advice.innerHTML=" It is very hot today Stay hydrated and avoid direct sunlight"
    }
    else if(data.main.temp>=30){
         advice.innerHTML="The weather is hot Stay hydrated and try to avoid prolonged sun exposure"
    }
    else if(data.main.temp >= 20){

    advice.innerHTML = " The weather is pleasant Consider enjoying outdoor activities";

}
else{

    advice.innerHTML = " The weather is cool. Dress warmly and stay comfortable";

}

  })
  .catch(function(error){
    
    loading.style.display = "none";

    result.style.display = "none";

    alert("Location not found. Please enter a valid location.");

    console.log(error);
  });
});

  