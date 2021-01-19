const API = "http://localhost:8080/api"

export const createEvents = (event) => {
    return fetch(`${API}/event/create`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-type": "application/json"
        },
        body: JSON.stringify(event)
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}

export const getFreeSlots = (date) => {
    return fetch(`${API}/event/slots?date=${date}`, {
        method: "GET",
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}

export const getAllEvents = (date) => {
    return fetch(`${API}/events?date=${date}`, {
        method: "GET",
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}