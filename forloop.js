let i;
document.write("even numbers are:<br>");
for(i=0;i<=58;i++){
    if(i%2==0&&i>0){
       
        document.write(i+"<br>");
    }
} 
document.write("infinity for loop <br>");


let count=0;

for(;;)
    {
    document.write("infinity<br>");
    count++;
    if(count==10){
        break;
    }
}
