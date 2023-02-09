let screen=document.getElementById('screen');
buttons=document.querySelectorAll("button");
let ScreenValue='';
for(item of buttons)
{
    item.addEventListener("click",(e)=>{
        buttonText=e.target.innerText;
        console.log("Button text is: ",buttonText);
        if(buttonText=="x")
        {
            buttonText="*";
            ScreenValue+= buttonText;
            screen.value=ScreenValue;
        }
        else if(buttonText=="C")
        {
            ScreenValue='';
            screen.value=ScreenValue;
        }
        else if(buttonText=="=")
        {
            screen.value=eval(ScreenValue);
        }
        else{
            ScreenValue+= buttonText;
            screen.value=ScreenValue;
        }

    }) 
 }