function* FibbonacciGenerator(){
    let prev=0;
    let curr=1;
while(true){
    yield prev;
const next=prev+curr;
prev=curr;
curr=next;
}
}