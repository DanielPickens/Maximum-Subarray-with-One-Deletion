//Dynamic Programming 
//Time Complexity: O(n)  
//Space Complexity: O(1)


var maximumSum = (arr) => {
    let maxWithNoDeletions = arr[0],
            maxWithOneDeletion = arr[0],
            maxOverall = arr[0];
        for (let i = 1; i < arr.length; i++) {    //Essentially, if there are no deletions that occur, then the max sum at postion i is equal to max of the maximum sum at positon i - 1 or starting a new sum at position i
            let numToProcess = arr[i],     
                nextMaxWithNoDeletions =      
                    Math.max(maxWithNoDeletions + numToProcess, numToProcess),
                nextMaxWithOneDeletion =
                    Math.max(maxWithOneDeletion + numToProcess, maxWithNoDeletions);
            maxOverall =
                    Math.max(maxOverall, Math.max(nextMaxWithNoDeletions, nextMaxWithOneDeletion));
            maxWithNoDeletions = nextMaxWithNoDeletions;
            maxWithOneDeletion = nextMaxWithOneDeletion;
        }
        return maxOverall;
    }


/*
Success
Details 
Runtime: 86 ms, faster than 82.05% of JavaScript online submissions for Maximum Subarray Sum with One Deletion.
Memory Usage: 43.1 MB, less than 97.44% of JavaScript online submissions for Maximum Subarray Sum with One Deletion.
*/






//2nd solution: Using Kadanes Algorithm:

const maximumSum = (arr) => {
  if (arr.length == 1) {
			return arr[0];
		}
		
		let ans = Number.MIN_VALUE;
		let lkad = [arr.length];
		lkad[0]=arr[0];
		ans=arr[0];
		
		//finding left kadane for each index
		for (let i = 1; i < arr.length; i++) {
			lkad[i]=Math.max(lkad[i-1]+arr[i],arr[i]);
			ans=Math.max(ans,lkad[i]);
		}
		
		ans = Math.max(ans, lkad[arr.length - 2]);//if last element is deleted
		
		//finding right kadane for each index and checking if deletion updates answer
		let rkad = arr[arr.length - 1];
		for (let i = arr.length - 2; i > 0; i--) {
			ans = Math.max(ans, lkad[i - 1] + rkad);
			rkad = Math.max(arr[i], rkad + arr[i]);
		}
		
		ans = Math.max(ans, rkad);//if first element is deleted
		
		return ans;
	}
