function PAH2()
{
    let age=18;
    let name="kiran";
    let setStatus=false;
    let userDefault=undefined;
    let responseValue=null;
    console.log(age+" "+name+" "+setStatus+" "+userDefault+" "+responseValue+" ");
    let oldage=age;
    age=25;
    let status=setStatus;
    setStatus=true;
    console.log(oldage+" "+status);
    alert("Check the console output!");
}
function Day1pah2()
{
    return(
        <div>
            <p>Primitive Data Types copy the values</p><br></br>
            <button onClick={PAH2}>Primitive Data Types</button>
        </div>
    );
}
export default Day1pah2;