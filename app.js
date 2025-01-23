let i = 0
for(i=0; i<=10; i++){
    for(j=0; j<=10; j++){
        console.log(i*j);
    }
}

setTimeout(() => {
  console.log("this is the first message");
}, 5000);
setTimeout(() => {
  console.log("this is the second message");
}, 3000);
setTimeout(() => {
  console.log("this is the third message");
}, 1000);

// Output:

// this is the third message
// this is the second message
// this is the first message
