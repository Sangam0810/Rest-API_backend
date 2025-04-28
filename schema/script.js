

const fetchData = async()=>{
const response = await fetch('http://localhost:2000/player/all')
const data = await response.json()
console.log(data);
}
fetchData()