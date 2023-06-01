const fetch = require('node-fetch2');

it ("The endpoint should say 'Hello Grant'", async ()=> {

    const options = {
        method: 'POST',
        headers: {
            "content-type":"application/json"
        }
    }

    const response = await fetch('http://localhost:3000/grant');
    const name = await response.text();

    expect(name).toBe("Hello Grant");

});