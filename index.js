let quote=" "
let author=" "
let qt=" "
let value=" "
function generateQuote(){
 const url = 'https://api.api-ninjas.com/v1/quotes?';
const options = {
	headers: {
		'X-Api-Key': 'YOUR_API',
	}
}
let fetchRes = fetch(url,options);
    quote=fetchRes.then(res =>
        res.json()).then(quote => {
            qt=quote
       for (let i = 0; i < qt.length; i++) {
            value=qt[i]['quote']
          }
          for (let i = 0; i < qt.length; i++) {
            author=qt[i]['author']
          }
          document.getElementById("quote").innerHTML=value;
          document.getElementById("author").innerHTML=author;
        }).catch(error=>console.error('Error fetching quote:',error))
}