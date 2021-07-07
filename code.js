const loremIpsum="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse gravida ante a mi volutpat congue. Cras sit amet elementum sem. Vivamus in posuere tortor, mattis aliquet turpis. Morbi nulla magna, gravida quis tortor eu, aliquam tempus tellus. Duis quis magna purus. Ut mollis viverra nisl, non egestas arcu venenatis eu. Nunc convallis eu nibh quis posuere. Proin suscipit dictum convallis. Morbi pellentesque varius molestie.";
let body=document.getElementById('body');
let helloDiv=document.getElementById('hello');
let deleteDiv=helloDiv.querySelector('div');
for (let i=0;i<1000;i++){
    let p=document.createElement('p');
    p.innerText=loremIpsum;
    body.appendChild(p);
}
let createdOrNot=false;
const N=1000;
window.addEventListener('scroll', scrolling);
deleteDiv.addEventListener('click', deleteGreeting);
// let position=helloDiv.getBoundingClientRect();
// let y=position.top;
// let x=position.right;
function scrolling(){
    if (pageYOffset > N - 100 && pageYOffset < N + 100 && !createdOrNot){
        createdOrNot=true;
        helloDiv.style.cssText+="display: block;";

    }
}



function deleteGreeting(){
    let div=this.parentElement;
    body.removeChild(div);
}
