function getInputValue(){
            // Selecting the input element and get its value 
            var inputVal = document.getElementById("myInput").value;
            
            
            
            getData(inputVal);
        }
async function getData(val){
    var res = await(await fetch("https://coronavirus-tracker-api.herokuapp.com/v2/locations?country="+val)).json();
    //console.log(res);
    document.getElementById("confirmed").innerText=res.latest.confirmed;
    document.getElementById("deaths").textContent=res.latest.deaths;
    //document.getElementById("recovered").textContent=res.latest.recovered;
    //document.getElementById("time_updated").textContent=res.locations[5].last_updated;
    
}


