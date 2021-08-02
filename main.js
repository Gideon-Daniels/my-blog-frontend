fetch("https://cryptic-chamber-65189.herokuapp.com/auth", {
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
   });

   const accessToken = localStorage.getItem('jwt-token');
fetch('https://cryptic-chamber-65189.herokuapp.com/create-blog/', {
  method: 'post',
  headers: {
    Authorization: jwt ${accessToken}
  },

})
  .then(res => res.json())
  .then(json => console.log(json));