const myHerd = [5,7,300,90,24,50,75];
var time = 1;
var money = 0;


function shear(herd) {
    let theOne = Math.max(...herd)
    let profit = theOne * 2
    money += profit
    alert(`Shaving the biggest sheep, which is size ${theOne}. I made ${profit}`)
    herd[herd.indexOf(theOne)] = 8
    alert(`After shearing my herd looks like this: 
    ${herd}`)
    for (let s = 0; s < herd.length; s++) {
        herd[s] += 50;
    }
};


function sell(herd) {
    let result = 0;
    for (let num = 0; num < herd.length; num++) {
    result += parseInt(herd[num]);
    };
    money += result*2
    alert(`My flock was ${result} big when I sold them.
    I sold my herd for ${result*2}. My total is ${money}`);
};


// start
username = prompt("Hello, uhh... what's your name again?");
alert (`Ah yes! Welcome ${username} ! Have some sheep!
*You have received a herd of sheep! Here they are!*
${myHerd}`);
shear(myHerd);
// the months after

var running = true;
while (running) {
   action = prompt(`Month ${time}, this is your herd:
   ${myHerd}
   Do you want to keep raising your sheep or sell them? Y to keep, N to sell `).toLowerCase();
   if (action == "y") {
       shear(myHerd);
       time += 1;
   }
   else if (action == "n") {
       sell(myHerd);
       running = false
   }
   else {
       alert("Please enter a valid action!")
   }
}