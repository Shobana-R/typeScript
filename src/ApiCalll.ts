class ApiService { 
    cityName: string;
    constructor(element: string) {   
        this.cityName = element;
        console.log(this.cityName)
    }
    getTempDetail(cityName: string):void {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=37d99f4c8bd8fa96d4509c54c8a262d7").then(Response => {         
            return Response.json();
        }).then(data => {
           console.log(data) ;
        })
    }
}
window.onload = () => {
    var e = document.querySelector('input')?.value;
     if(e!=null){
        var api = new ApiService(e);
        var result = api.getTempDetail(e);
        console.log(result);
     }    
}




/*Object.defineProperty(exports, "__esModule", { value: true }); 
import axios, { AxiosRequestConfig, AxiosPromise, AxiosResponse } from 'axios';

class Api {
    element: HTMLElement;
    cityName: string;
    constructor(element: HTMLElement) {
        this.element = element;
        this.cityName= element.innerText;
        console.log(this.cityName)
    }
     apiCall():void{

    const url = "https://api.openweathermap.org/data/2.5/weather?q=Bangalore&appid=37d99f4c8bd8fa96d4509c54c8a262d7";
    
    axios.get(url).then((result: { data: { main: { temp: any; }; }; }) => {
        console.log(result.data.main.temp)
    })
}
}
window.onload=()=>{
    var e=document.getElementById('cityName');
    if(e!=null){
        var api=new Api(e);
        var result=api.apiCall();
        console.log(result);
    }
}
*/

//import * as request from 'request';