function calc(nums) {
    var sum = nums[0];
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > sum) {
            sum = nums[i];
        }
    }
    console.log(sum);
}

calc([1,14,30,6,12,8,9,2]);
calc([301,12,8,9,2]);
calc([3,1,44,12,8,23,2]);