function recBinary(num, arr, firstIndex, lastIndex, midIndex){
    let sortedArr = [...arr].sort((a,b) => a-b)

    if(sortedArr[midIndex] != num){
        if(num <= sortedArr[midIndex] ){
            lastIndex = midIndex
            
        }else{
            firstIndex = midIndex + 1
            lastIndex = arr.length -1
        }  
        midIndex = firstIndex + Math.floor((lastIndex-firstIndex)/2)  

        if(midIndex < 3){
           if(sortedArr[midIndex] == num) return true
           return false
        }

        recBinary(num,sortedArr, firstIndex, lastIndex, midIndex)
    }
    return midIndex

}

let binarySearch = (num, arr) => {
    arr = arr.sort((a,b) => a-b)

    let firstIndex = 0
    let lastIndex = arr.length-1
    let midIndex = Math.floor((lastIndex-firstIndex)/2)
    while(arr[midIndex] != num){

        if(num < arr[midIndex] ){
            lastIndex = midIndex

        }else{
            firstIndex = midIndex + 1
            lastIndex = arr.length -1
        }
        midIndex = firstIndex + Math.floor((lastIndex-firstIndex)/2)

    }
    return midIndex
}
