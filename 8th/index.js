<!DOCTYPE html>
<html lang="en">
<head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Js Demo</title>
      <link rel="stylesheet" href="style.css">
</head>
<body>
    /* 
    
    <button onclick="console.log('button was clicked');">Click Me!</button>

    <button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>
    <p id="demo"></p>
    
    */
    
    <button onclick="this.innerHTML = Date()">The time is?</button>



    <button ondblclick="console.log('button was clicked 2x');">Click Me 2times!</button>
    <div onmouseover="console.log('you are inside div')">
        This is Box
    </div>
    <script src="demo.js"></script>
</body>
</html>

[This is not way to write JavaScript events]

// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------

[This is the way to write JavaScript events]

let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
      console.log("btn1 was clicked");
      let a = 25;
      a++;
      console.log(a) //26
};

let div = document.querySelector("div");

div.onmouseover = () => {
      console.log("you are inside div");
};


//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------



let btn1 = document.querySelector("#btn1");

btn1.onclick = (evt) => {
      console.log(evt);

      console.log(evt.type); // [we use more]
      console.log(evt.target);// [we use more]

      console.log(evt.clientX, evt.clientY);
};



let div = document.querySelector("div");

div.onmouseover = (evt) => {
      console.log(evt);

      console.log(evt.type); // [we use more]
      console.log(evt.target);// [we use more]

      console.log(evt.clientX, evt.clientY);
};

//----------------------------------------------------------------------------


let btn1 = document.querySelector("#btn1");


 
btn1.addEventListener("click", (evt) => {
      console.log("button1 was clicked");
      console.log(evt);
      console.log(evt.type);
});


btn1.addEventListener("click", () => {
      console.log("button2 was clicked");
});


//-------------------------------------------------------------------------------

let btn1 = document.querySelector("#btn1");

const handler3 = () => {
      console.log("button1 was clicked")
};

btn1.addEventListener("click", handler3);


btn1.addEventListener("click", () => {
      console.log("button1 was clicked");
});

btn1.removeEventListener("click", handler3);


//----------------------------------------------------------------------------------

// Create a toggle button that changes the screen to dark-mode when clicked and light-mode when clicked again


let modeBtn = document.querySelector('#mode');
let body = document.querySelector("body");
let currMode = "light"; //change dark and later to go light mode


modeBtn.addEventListener("click", () => {
      if(currMode === "light") {
            currMode = "dark";
            // document.querySelector("body").style.backgroundColor = "black";
            body.classList.add("dark");
            body.classList.remove("light");

      } else {
            currMode = "light";
            // document.querySelector("body").style.backgroundColor = "white";
            body.classList.add("light");
            body.classList.remove("dark");
      }

      console.log(currMode);
});



[in html code]
 
<button id="mode">change mode</button>
<p>Welcome to my Website</p>
//--------------------------------------------------------------------------------

