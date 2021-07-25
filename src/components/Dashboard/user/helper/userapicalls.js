import { API } from "../../../../backend";


export const getUser = (userId, token) => {
    return fetch(`${API}/user/${userId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",

            Authorization: `Bearer ${token}`
        },
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export const updateUser = (userId, token, data) => {
    return fetch(`${API}/user/${userId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)

    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export const payitback = (userId, token) => {
    return fetch(`${API}/payment/${userId}`, {
        method: "GET",
        headers: {
            Accept: "application/*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },


    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

