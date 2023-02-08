
// var btn=document.getElementById("Btn");
// var city=document.getElementById("cityinput").value;
// let wData=fetch("https://api.openweathermap.org/data/2.5/forecast?q=city&appid=f794857091643744dda3e46fd4c732e7&units=metric")
// // console.log(wData)
// // wData.then(res=>{
// //     res.json().then(data=>console.log(data.list.dt_txt));
// // });
// var cname=document.getElementById("cname")
// var maxt=document.getElementById("maxt")
// var mint=document.getElementById("mint")
function parameters()
{
    var btn=document.getElementById("btn");
    var city=document.getElementById("cityinput").value;
    let wData=fetch("https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=f794857091643744dda3e46fd4c732e7&units=metric")
    var cname=document.getElementById("cname")
    var maxt=document.getElementById("maxt")
    var mint=document.getElementById("mint")
    wData.then(res=>{res.json().then(data=>{
        let c=data.city.country;
        let wArray=data.list;
         tempArray=[];
         dateArray=[];
         date=[];
        for(i=0,j=0;i<wArray.length;i=i+8,j=j+1)
        {
            tempArray[j]=wArray[i].main.temp
            dateArray=wArray[i].dt_txt.split(' ')
            date[j]=dateArray[0];
            console.log(dateArray[j])
            console.log(wArray[i].main.temp)
        }
        console.log(c)
        cname.innerHTML=c;
        maxt.innerHTML=Math.max(...tempArray)
        mint.innerHTML=Math.min(...tempArray)
        console.log(tempArray) 
        console.log(date)
        console.log(Math.min(...tempArray))
        plot(date,tempArray)
    })
    })
}
function plot(date,tempArray)
{
    const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: date,
      datasets: [{
        label: 'temperature',
        data: tempArray,
        borderWidth: 1
      }]
    },
    // options: {
    //   scales: {
    //     y: {
    //       beginAtZero: true
    //     }
    //   }
    // }
  });
}
