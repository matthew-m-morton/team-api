const fetch = require('node-fetch2');

it ("Should be valid", async ()=>{
    const response = await fetch('http://localhost:3000/ryan');

    const name = await response.text();
    console.log(name);
    expect(name).toBe("ryan"); 
})