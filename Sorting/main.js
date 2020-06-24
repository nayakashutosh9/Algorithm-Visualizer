function init(){
    canvas=document.getElementById('mycanvas');
    W=canvas.width=1000;
    H=canvas.height=550;
    pen=canvas.getContext('2d');
    size=35;
    arr=[];
    generate();
    draw();
    console.log(arr);
}
function generate(){
    while(arr.length>0){
        arr.pop();
    }
    for(let i=0;i<size;i++){
        let x=Math.round(Math.floor((Math.random() * 100) + 1));
        arr.push(x);
    }
}
function draw(index1=-1,index2=-1){
    pen.clearRect(0,0,W,H);
    var x=92,y=10,csx=20,csy=5;
    for(let i=0;i<size;i++){
        var fy=y;
        if(i==index1 || i==index2){
            pen.fillStyle="#f28907";
        }
        else{
            pen.fillStyle="#ad096c";
        }
        for(let j=0;j<arr[i];j++){
            pen.fillRect(x,fy,csx,csy);
            fy+=csy;
        }
        fy+=3*csy;
        pen.fillStyle="white";
        pen.font="14px Roboto";
        pen.fillText(arr[i],x,fy);
        x+=(csx+4);
    }
}
init();
document.getElementById("gen").addEventListener("click",function(){
    generate();
    draw();
    console.log("new array generated!!!");
});
document.getElementById("bubble").addEventListener("click",function(){
    var i=0,j=0;
    var t1=setInterval(bout,200);
    function bout(){
        if(i==size){
            clearInterval(t1);
        }
        else{
            var t2=setInterval(bin,200);
            function bin(){
                if(j==(size-1)){
                    clearInterval(t2);
                    j=0;return;
                }
                else{
                    if(arr[j]>arr[j+1]){
                        let temp=arr[j];
                        arr[j]=arr[j+1];
                        arr[j+1]=temp;
                        draw(j,j+1);
                    }
                    j++;
                }
            }
            draw();
            i++;
        }
    }
    console.log("bubble sort done!!!");
});
document.getElementById("insertion").addEventListener("click",function(){
    var i=1,j=0;
    var t1=setInterval(iout,200);
    function iout(){
        if(i==size){
            clearInterval(t1);
        }
        else{
            var px=arr[i];j=i-1;
            var t2=setInterval(iin,200);
            draw();
            console.log("i=",i);
            i++;
            function iin(){
                while(j>=0 && arr[j]>px){
                    arr[j+1]=arr[j];
                    draw(j,j+1);
                    j--;
                }
                arr[j+1]=px;
                clearInterval(t2);
            }
        }
    }
    console.log("insertion sort done!!!");
});
document.getElementById("merge").addEventListener("click",function(){
    generate();
    draw();
    console.log("merge sort done!!!");
});
