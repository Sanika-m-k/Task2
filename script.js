

fetch("https://codeforces.com/api/user.ratedList", {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },

})
    .then(response => response.json())
   .then(function(products) {
    let placeholder=document.querySelector("#data-output");
    let out="";
    out +=  `
    <tr>
          <th>Handle</th>
          <th>Rating</th>
          <th>Rank</th>
          
        </tr>`;
    for(let product of products["result"].filter(ele => ele.organization=="IIT Kharagpur")){
        out += `
        <tr>
        <td>${product.handle}</td>
        <td>${product.rating}</td>
        <td>${product.rank}</td>
        </tr>
        `;
    }
    placeholder.innerHTML = out;
   })

