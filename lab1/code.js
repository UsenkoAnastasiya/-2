function* FibonacciGenerator(){
    let prev = 0;
    let curr = 1;
while(true){
    yield prev;
const next = prev + curr;
prev = curr;
curr = next;
}
}
function  TimeoutIterator(iterator,timeout){
    const startTime= Date.now();
const timeoutMs = timeout*1000;
for( const value of iterator){
    if(Date.now()-startTime >= timeoutMs) break;
    console.log(`${value}`);
}
}
const fib = FibonacciGenerator();
TimeoutIterator(fib, 5);