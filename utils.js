

// function BinerySearch(arr,target){
//     let left = 0
//     let right = arr.length - 1;
    
    

//     while(left > right){
//         const mid =  Math.floor((left+right)/2);
//         if (arr[mid] == target){
//             return console.log('Number is searched')
//         }
//         if(arr[mid] > target)
//             left = mid+1
//     }
//     if(arr[mid] < target){
//         right = mid - 1
        
//     }

//     return -1
// }

// BinerySearch([1,2,3,4,5,6,7,8,9],9);


function BinarySearch(arr,tar) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    

    while(leftIndex <= rightIndex){
       let midIndex = Math.floor(rightIndex + leftIndex)/2
       if(tar === arr[midIndex]){
           return console.log('number is found',midIndex)
       }

       if(tar < midIndex ){
           rightIndex = midIndex - 1
       }
       else{
           leftIndex = midIndex + 1
       }
    }
    return console.log('not found', -1)
    

}
BinarySearch([1,2,4,5,6,8],9)
