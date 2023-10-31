// Your code here
let poster1 = document.getElementById('poster')
let ttile = document.getElementById('title')
let runTime = document.getElementById('runtime')
let content = document.getElementsByClassName('content')
let filmInfo = document.getElementById('film-info')
let showTime = document.getElementById('showtime')
let remainingTickets = document.getElementById('ticket-num')
let movies = document.getElementById('films')
let btn = document.getElementById('buy-ticket')
let updatedTickets;


const request = async () => {
    let req = await fetch('http://localhost:3000/films')
    let res = await req.json()
    poster1.setAttribute('src', res[0].poster)
    ttile.innerHTML = res[0].title
    runTime.innerHTML = res[0].runtime
    content.innerHTML = res[0].content
    filmInfo.innerHTML = res[0].description
    showTime.innerHTML = res[0].showtime
    updatedTickets = (res[0].capacity - res[0].tickets_sold)
    remainingTickets.innerHTML = updatedTickets
    res.forEach((element) => {
        let li = document.createElement('li')
        movies.appendChild(li)
        li.append(element.title)
        
    })
    btn.addEventListener('click', () => {
        if (updatedTickets > 0) {
         remainingTickets.innerHTML = --updatedTickets
        }
         if (updatedTickets <= 0) return alert('No More Tickets')
    })

}
request()
