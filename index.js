// Return an array showing the cumulative sum at each index of an array of integers

// Return: array — integers showing the cumulative sum at each index
let arr = [1,3,5,7];const cumulativeSum = list => {
    let result = [list[0]];
    
    for(let i = 1; i < list.length; i++) {
      result.push(list[i] + result[i-1]);
        } 
    
        return result;
    }
console.log(cumulativeSum(arr)); // Returns [1, 4, 9, 16]