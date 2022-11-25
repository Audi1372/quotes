 async function getQuote(){
  try{
    let quotes = document.getElementById("quote")
    let author = document.getElementById("author")
    let series =document.getElementById("series")
    let url = "https://www.breakingbadapi.com/api/quote/random"
    // fetching the api

    let response = await fetch(url);
    let data = await response.json();
    console.log(data)
    console.log( `Quote:    ${data[0].quote}`)
    console.log( `Author:   ${data[0].author}`)
    console.log( `Series:    ${data[0].series}`)

      quotes.innerHTML =`${data[0].quote}`
      author.innerHTML = `Author:${data[0].author}`
      series.innerHTML = `Series:${data[0].series}`
  }
  catch(err){
    alert("enter the correct information")

  }
   
    
}