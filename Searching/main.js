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
function drawb(s=-1,e=-1){
    pen.clearRect(0,0,W,H);
    var x=92,y=10,csx=20,csy=5;
    for(let i=0;i<size;i++){
        var fy=y;
        if(i>=s && i<=e){
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
    document.getElementById("result").innerHTML="";
    generate();
    draw();
    console.log("new array generated!!!");
});
document.getElementById("linear").addEventListener("click",function(){
    var key=parseInt(document.getElementById("lkey").value),i=0;
    var res=document.getElementById("result");
    var found=-1;
    var t1=setInterval(lsearch,200);
    function lsearch(){
        if(i==size){
            clearInterval(t1);
            res.innerHTML="Element Not Found";
            draw();
            return;
        }
        draw(i);
        console.log(arr[i],key);
        if(arr[i]==key){
            found=i;
            clearInterval(t1);
            res.innerHTML="Element found at index "+i;
            return;
        }
        i++;
    }
    
});
document.getElementById("binary").addEventListener("click",function(){
    for(let i=0;i<size;i++){
        for(let j=0;j<size-i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    draw();
    var key=parseInt(document.getElementById("bkey").value),s=0,e=size-1,mid;
    var found=-1;
    var res=document.getElementById("result");
    var t1=setInterval(bsearch,600);
    function bsearch(){
        if(s>e){
            clearInterval(t1);
            res.innerHTML="Element Not Found";
            draw();
            return;
        }
        drawb(s,e);
        mid=Math.round(Math.floor((s+e)/2));
        if(arr[mid]==key){
            found=mid;
            clearInterval(t1);
            res.innerHTML="Element found at index "+mid;
            draw(mid);
            return;
        }
        if(arr[mid]<key){
            s=mid+1;
        }
        else{
            e=mid-1;
        }
    }
});
