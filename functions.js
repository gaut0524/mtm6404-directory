// generates a list of clients as html list items
const list = (clients) => {
    // uses 'map' to loop over clients 
    return clients.map(client => `
        <li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
            ${client.name} <!-- Display client name -->
            <strong>${client.balance}</strong> <!-- Display client balance -->
        </li>
    `).join(''); 
    // joins all the list items into one string
}

// to calculate the total balance of all clients
const total = (clients) => {
    // add all client bal starting from 0
    return clients.reduce((total, client) => total + client.balance, 0); 
}

// search for clients by name or balance
const search = (query) => {
    return clients.filter(client =>
        client.name.toLowerCase().includes(query.toLowerCase()) 
    );
}


// order clients by a given property
const order = (clients, property) => {
    return clients.sort((a, b) => {
        // if property of a is less than b, return -1
        if (a[property] < b[property]) { 
            return -1;
            // if a is greater than b, return 1
        } else if (a[property] > b[property]) { 
            return 1;
        }
        // if both properties are equal, return 0
        return 0; 
    });
}

// find client by index
const info = (index) => {
    // return client that matches index
    return clients.find(client => client.index == index); 
}
