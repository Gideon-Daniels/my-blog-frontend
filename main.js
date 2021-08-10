fetch('https://cryptic-chamber-65189.herokuapp.com/auth', {
//fetch('http:/localhost:5001/auth', {
  method: 'post',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({"username": "thapelo", "password": "thapelo"})
}).then(res => res.json())
  .then(res => {
            console.log(res);
            myStorage = window.localStorage;
            console.log(res["access_token"]);
            myStorage.setItem("jwt-token", res["access_token"]);
//              fetch('http://localhost:5001/create-blog/', {
              fetch('https://cryptic-chamber-65189.herokuapp.com/create-blog/', {
              method: 'post',
              headers: {
                "Authorization": jwt `${myStorage.getItem("jwt-token")}`,
                "Content-Type": "application/json"
              },
              body: JSON.stringify({"title": "New Blog Post 2 Title", "content": "New Blog Post 2 Content"})
        })
          .then(res => res.json())
          .then(json => console.log(json));
   });
///////////////////////////////////END OF THAPELOS LESSON/////////////////////////
//////////////////////////////////BEGINING OF JASON LESSON////////////////////////

// function createNode(element) {
//   return document.createElement(element);  // create the type of element you pass in the parameters
// }

// function append(parent, el) {
//   return document.appendChild(element);  // Create the type of element you pass in the parameters
// }

// const ul = document.getElementById('blogs') // get the list where there will place of blogs
// const url = "https://cryptic-chamber-65189.herokuapp.com/get-blogs/"

// fetch(url) // call the fetch function passing the urll of the API as a parameter
// .then((response) => response.json) // transform data into json
// .then(function(data){
//     // your code for handling the data you get from the API
//     // create and append li to the ul
//     //
//     let blogs = data.data; // Get the results
    
//     return blogs.map(function(blogs){ // Map through the results and for each run the code below
//       let li = createNode('li'),  // Create the elements we need
//       title = createNode('h1'),
//       content = createNode('p'),
//       dateCreated = createNode('h3');

//       title.innerHTML = `${blogs.title}`; 
//       content.innerHTML = `${blogs.content}`;
//       dateCreated.innerHTML = `${dateCreated}`;

//       append(li, title);  // Append all our elements
//       append(li, content) 
//       append(li, dateCreated)
//     })
//     console.log(blogs)
// })
// .catch(function(){
//     // this is where you run code if the server returns any errors
// });