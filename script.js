function btnClick(value)
{
    display.value+=value
}


function Clear()
{
    display.value=" "
}


function BackSpace()
{
    display.value= display.value.slice(0,-1)
}


function result()
{
    display.value= eval(display.value)
}

function root()
{
    display.value = Math.sqrt( display.value);

} 


