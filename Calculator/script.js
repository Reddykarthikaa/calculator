function display(num){
    root.value+=num;

}
function clearscrn(){
    root.value=""
    
}
function evaluateE(){
    let current=root.value
    let result=eval(current)
    root.value=result
}
function backspace(){
    let result=root.value.slice(0,-1);
    root.value=result
}