console.log('connected');
  
// for loop

for (let i = 0; i < 5; i++) {
   console.log('Package' + i);
   if(i ===3) break;
    
}

const names = ['John','Peter','Jane','Cassy']
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
    
}


for (let i = 5; i > 0; i--) {
    console.log('car' + i);
     
 }

//  for of loop
const items = ['books','Pens','Bags','Pencils']
for ( item of items) {
    console.log(items);
    
}
 

let count = 0;
while(count < 10){
    count++
    console.log(count)
}

// const Secret = 'BabyHippo'

// let guessi = prompt('Enter the secret code');
// while(guessi !== Secret){
//     guessi = prompt('Enter the secret code')
// }
// console.log('CONGRAT YOU THE SECRET')


const password = 'DoTi';
let guess = prompt('Enter passcode');
while(guess != password){
    prompt('Try one more time')
}
console.log('You gat it man')