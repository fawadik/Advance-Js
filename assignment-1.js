// Your code here


function timeDelay(number, seconds) {
    setTimeout(console.log(number), seconds);
    return
}


async function print(num) {
    for (let i = 1; i <= num; i++) {

        await timeDelay(i, 500);         
    }
}

print(1000000); 


