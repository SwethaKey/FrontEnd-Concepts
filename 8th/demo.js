

const boxDiv = document.getElementById("box");

      function handleBoxClick(e) {
          console.log("Hey, docde!");
      };

      boxDiv.addEventListener("click", handleBoxClick);


const box = document.getElementById("box");

boxDiv.addEventListener("click", function(e) {
      console.log(e);
});



 