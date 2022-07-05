//import axios from "axios";
const myUrl: string = "https://api.openweathermap.org/data/2.5/weather?q=Bangalore&appid=37d99f4c8bd8fa96d4509c54c8a262d7";
try {
    const response =  axios.get(myUrl);
    console.log(`In try block${response}`);
} 
catch {
  console.log("There was an error");
}
/*import request from 'request';
class ApiService{
    getTempDetails(cityName:string){
        request.get("https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=37d99f4c8bd8fa96d4509c54c8a262d7");
        console.log(request);
    }
}
const result=new ApiService();
result.getTempDetails("Mumbai");

*/
//import rp from 'request-promise';
//import $ from 'cheerio';
//const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';

/*rp(url)
  .then(function(html: any){
    //success!
    console.log($('big > a', html).length);
    console.log($('big > a', html));
  })
  .catch(function(err: any){
    //handle error
  });*/