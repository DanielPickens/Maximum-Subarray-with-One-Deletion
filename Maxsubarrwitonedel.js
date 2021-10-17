//Dynamic Programming 
//Time Complexity: O(1)
var maximumSum = (arr) => {
    let maxWithNoDeletions = arr[0],
            maxWithOneDeletion = arr[0],
            maxOverall = arr[0];
        for (let i = 1; i < arr.length; i++) {
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
