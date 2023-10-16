const arr = [2,3,5,32,1,0,12,22]

for(let i =0;i<=arr.length;i++){

    for(let j=i+1;j<arr.length;j++){
        
        if(arr[i]>arr[j]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }

    }

}
console.log(arr)