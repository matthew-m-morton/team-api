const fetch = require('node-fetch2')

it ("Should test validity of token", async()=>{
    let token = "";

    const options = {
        method: 'POST',
        headers: {
            "content-type":"application/json"

        },

    };
    const response = await fetch('http://localhost:3000/landon')
    //token = await response.text()
    const name = await response.text();
    expect(name).toBe("Hello Landon")

});