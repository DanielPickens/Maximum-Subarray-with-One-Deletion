//Dynamic Programming 
//Time Complexity: O(n)  

/*
dp[i][0] represents the maximum sum at position i with 0 deletions
           dp[i][1] represents the maximum sum at position i with 1 deletions 
*/
var maximumSum = (arr) => {
    let maxWithNoDeletions = arr[0],
            maxWithOneDeletion = arr[0],
            maxOverall = arr[0];
        for (let i = 1; i < arr.length; i++) {    //Essentially, if there are no deletions that occur, then the max sum at postion i is equal to max of the maximum sum at positon i - 1 or starting a new sum at position i
            let numToProcess = arr[i],     //Notice that dp is subscripted from 1 to n, hence we take arr[i-1] in the for loop
                nextMaxWithNoDeletions =      //If there is 1 deletion we have 2 choices either delete the element at position i or not delete the element at position i. If we delete the element at position i , dp[i][1] = dp[i-1][0] . If we don't delete the element at position i we add the value of the element at position i 
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
