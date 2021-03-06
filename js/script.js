const elItems = document.querySelector('.items');
const elSearchInput = document.getElementById('search');
let users = [];

const getItem = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let responseJSON = await response.json();
    users = responseJSON;
    viewResults(users);
    console.log(users);

        // .then(res => {res.json()
        //     .then(res => {
        //         users = res
        //         viewResults(users);
        //     })
        //     .catch(err => console.log(`ERROR`, err))
        // })
        // .catch(err => console.log(`ERROR`, err))
}

elSearchInput.addEventListener('input', (e) => {
    const element = e.target.value.toLowerCase();
    const searchFunc = users 
        .filter(user => user.name
        .toLowerCase()
        .includes(element))

        viewResults(searchFunc)
})

const viewResults = (arr) => {
    let output = [];

    arr.forEach(({name, username}) => (output += `
        <tr>
            <td>
                <div class="results">
                    <div>
                        <h1> ${name} </h1>
                    </div>
                     <div>
                        <p> ${username} </p>
                    </div>
                </div>
            </td>
        </tr>        
    `))
     elItems.innerHTML = output;   
}

document.addEventListener('DOMContentLoaded', getItem);
