



const init = () => {
    const n = document.querySelector('#buttons-container p')
    
    // Display first 50 monsters when page loads
    fetch(`http://localhost:3000/monsters/?_limit=50`)
    .then(response => response.json())
    .then((data) => {    
        n.textContent = (data.length / 50)
        
        for(monster of data) {
            const box = document.createElement('div');
            box.className = "box";

            const id = document.createElement('li')
            id.textContent =`ID:   ${monster.id}`;
            box.append(id);

            const name = document.createElement('li')
            name.textContent =`Name:   ${monster.name}`;
            box.append(name);

            const age = document.createElement('li')
            age.textContent = `Age:  ${monster.age}`;
            box.append(age);

            const description = document.createElement('p');
            description.textContent =`Description:  ${monster.description}`;
            box.append(description);

            document.querySelector('#monster-container').append(box);
        } 
    })

    // When 'Create monster' button is clicked;
    // Post new monster on API, take the response, and post that object (new monster) on the page
    document.getElementById('create').addEventListener('click', function(e) {
        e.preventDefault();

        const form = document.querySelector('form');
        const nameInput = form.querySelector('input#mName');
        const ageInput = form.querySelector('input#mAge');
        const descriptionInput = form.querySelector('input#mDescription');

        const bodyObj = {
            name: nameInput.value,
            age: ageInput.value,
            description: descriptionInput.value,
        }
        
        const configurationObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(bodyObj),
        }

        fetch('http://localhost:3000/monsters', configurationObj)
            .then(response => response.json())
            .then((data) => {
                console.log(data)

                //Take the object that has just been posted  on the API on the page
                const newBox = document.createElement('div');
                newBox.className = "box";

                const id = document.createElement('li')
                id.textContent =`ID:   ${data.id}`;// Here is the id of the last monster on the API
                newBox.append(id);

                const li = document.createElement('li');
                li.textContent =`Name:  ${data.name}`;
                newBox.append(li)
                
                const li2 = document.createElement('li');
                li2.textContent =`Age:  ${data.age}`;
                newBox.append(li2)
            
                const p = document.createElement('p');
                p.textContent = `Description:  ${data.description}`;
                newBox.append(p)
            
                document.querySelector('#monster-container').append(newBox);

            })
            
    })

   
    // When you click forward, the counter increases by 1
    // Remove all monsters on the page
    // Increment n.textContent and multiply by 50 to provide new limit
    // Fetch monsters with this new limit and post on page
    document.getElementById('forward').addEventListener('click', function() {

        // Remove all monsters on the page
        function removeAllChildNodes(parent) {
            while(parent.firstChild) {
                parent.removeChild(parent.firstChild);
                }
        }
        const monsterContainer = document.getElementById('monster-container');
        removeAllChildNodes(monsterContainer);

        // Increment n.textContent and multiply by 50 to provide new limit, fetch monsters with this new limit and post on page
        n.textContent++;
        const newLimit = (n.textContent * 50)
        fetch(`http://localhost:3000/monsters/?_limit=${newLimit}`)
        .then(response => response.json())
        .then(function(data) {
            for(monster of data) {
                let x = ((1 + (50 * (n.textContent - 1))));
                let y = (50 + ((n.textContent -1) * 50));
            
                if(monster.id >= x && monster.id <= y) {

                const box = document.createElement('div');
                box.className = "box";

                const id = document.createElement('li')
                id.textContent =`ID:   ${monster.id}`;
                box.append(id);
                
                const name = document.createElement('li')
                name.textContent =`Name:   ${monster.name}`;
                box.append(name);

                const age = document.createElement('li')
                age.textContent = `Age:  ${monster.age}`;
                box.append(age);

                const description = document.createElement('p');
                description.textContent =`Description:  ${monster.description}`;
                box.append(description);

                document.querySelector('#monster-container').append(box);
                    
                }    
            }
        }) 
    })

    // Similar code as above, but with 'back' button
    document.getElementById('back').addEventListener('click', function() {

        // Remove all monsters on the page
        function removeAllChildNodes(parent) {
            while(parent.firstChild) {
                parent.removeChild(parent.firstChild);
                }
        }
        const monsterContainer = document.getElementById('monster-container');
        removeAllChildNodes(monsterContainer);

        // Reduce n.textContent and multiply by 50 to provide new limit, fetch monsters with this new limit and post on page
        n.textContent--;
        const newLimit = (n.textContent * 50)
        fetch(`http://localhost:3000/monsters/?_limit=${newLimit}`)
        .then(response => response.json())
        .then(function(data) {
            for(monster of data) {
                let x = ((1 + (50 * (n.textContent - 1))));
                let y = (50 + ((n.textContent -1) * 50));
            
                if(monster.id >= x && monster.id <= y) {

                const box = document.createElement('div');
                box.className = "box";

                const id = document.createElement('li')
                id.textContent =`ID:   ${monster.id}`;
                box.append(id);
                
                const name = document.createElement('li')
                name.textContent =`Name:   ${monster.name}`;
                box.append(name);

                const age = document.createElement('li')
                age.textContent = `Age:  ${monster.age}`;
                box.append(age);

                const description = document.createElement('p');
                description.textContent =`Description:  ${monster.description}`;
                box.append(description);

                document.querySelector('#monster-container').append(box);
                    
                }    
            }
        }) 
    })
}
                    
document.addEventListener('DOMContentLoaded', init)






 



   
