console.log("Im ready");

// Iteration 1: Names and Input//
let hacker1 = "Lorena";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Max";
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if(hacker2.length > hacker1.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}
else{
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops

let newString = "";

for (let i = 0; i < hacker1.length; i++){
  if (i === hacker1.length -1){
    newString += hacker1[i].toUpperCase()
  }else{
    newString += hacker1[i].toUpperCase() + " ";
  }
  
  
  };
  console.log(newString)


let reverseString= "";
      for (let i = hacker2.length -1; i >= 0; i--){
      reverseString += hacker2[i];
      };
    console.log(reverseString)
 


  if ( hacker1 < hacker2){
    console.log("The driver's name goes first.");
  }
  else if (hacker1 > hacker2){
    console.log("Yo, the navigator goes first definitely.")
  }
  else if (hacker1 === hacker2){
    console.log("What?! You both have the same name?")
  }


/*Bonus 1*/

let text = "Aliquam in libero eget dui tempor tincidunt. Sed eu ex a orci mattis ornare a eget est. Quisque enim ante, faucibus sit amet fermentum ac, bibendum vitae metus. Vestibulum faucibus purus lorem, viverra mattis nulla convallis vitae. Quisque ultrices ullamcorper neque, ut lacinia nunc bibendum nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet turpis vitae facilisis iaculis. Proin sit amet lacinia lacus. Suspendisse commodo leo lectus, eget faucibus tortor pulvinar quis. Sed congue quam mauris, sed suscipit ex posuere a. Vivamus sodales nunc quis ligula imperdiet condimentum. Nunc bibendum elementum odio quis posuere. Mauris dictum dolor orci, vitae pharetra ipsum iaculis in. Curabitur interdum neque vel felis cursus, in pellentesque leo tincidunt. Nullam libero lorem, efficitur sit amet lorem efficitur, dictum lacinia ante. Suspendisse et lectus at nunc pretium suscipit in in mi. Ut imperdiet elit ut elit molestie ullamcorper. Quisque suscipit tellus sem, quis condimentum odio finibus eu. Nunc suscipit suscipit tincidunt. Sed eget pharetra nibh. Suspendisse potenti. Integer dignissim accumsan porttitor. Nulla nec feugiat leo, sit amet condimentum quam. Vestibulum nec malesuada lorem. Suspendisse hendrerit ultrices laoreet. Etiam ac magna non velit aliquam suscipit et eu nibh.";

let totalWords = 1;

for (let i = 0; i < text.length; i++){
  if (text[i] == " "){
    totalWords += 1;
  }
}

let totalEt = 0;
for (let i = 0; i < text.length; i++){
  if (text[i].toLowerCase() == "e" && text[i + 1] == "t"){
    totalEt += 1;
  }
}

console.log(`The total amount of Words are: ${totalWords}`)
console.log(`The total amount of the word Et is: ${totalEt}`)

/* Bonus 2*/

let phrase= "put it up"
let newPhrase= ""
let reverse= ""
for (let i = 0; i < phrase.length; i++){
  if (phrase[i] == " " || phrase[i] == ","){
    continue
  }
  else{
    newPhrase += phrase[i].toLowerCase();
  }
}

for (let j = phrase.length -1; j > -1; j--){
  if (phrase[j] == " " || phrase[j] == ","){
    continue
  }
  else{
   reverse += phrase[j].toLowerCase(); 
  }
}

if (newPhrase === reverse){
  console.log("The phrase is a palindrome!")
}else{
  console.log("The phrase is not a palindrome")
}

console.log(newPhrase)
console.log(reverse)