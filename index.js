//document.getElementById("count-el").innerText=5
//printing to make sure i am getting the right element from the html
let countEl = document.getElementById("count-el")
console.log(countEl)
//Grab the save-el paragraph and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
console.log(saveEl)
//Grap the total-el and store in a variable called totalEl
let totalEl = document.getElementById("total-el")
console.log(totalEl)



//Steps for creating people counter

//1. store the count/initialize count as 0
let count = 0;


//2. listen for clicks on the increment button
//3. increment the count variable when the button is clicked (log it out)
//4. change the count-el in the HTML to reflect the new count
function increment() {
    console.log("clicked button");
    count += 1;
    countEl.textContent = count;
}

//1. Create a function, save(), which logs out the count when it's called
//2. Create the save button in the html (set the save button id to save-btn) 
//and call the save() fucntion when it is clicked
function save(){
    //3. Create a variable that contains both the count and the dash seperator, i.e. "12 - "
    let countStr = "  " + count + " - "
    //4. Render the variable in the saveEl using innerText
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

//1. Create a function total(), which logs out the total number of people in the people counter
function total(){
    //2. Create a variable that stores the total
    let total = count
    console.log(total)
    let newTotal = count
    console.log(newTotal)
    total = 0
    console.log(total, typeof(total))
    newTotal += total
    console.log(total, newTotal)
    
  
  
    // let newCount = 0 + total
    // total= 0
    // console.log(newCount)
    result = newTotal
    totalEl.textContent = result
    console.log(result)
   
}

//3. Render the variable in totalEl using innerContent

