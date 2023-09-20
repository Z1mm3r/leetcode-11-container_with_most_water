var maxArea = function(height) {

    //Using 2 pointers we can achieve O(n) runtime, O(1) space.

    //Initialize our pointers
    let left = 0;
    let right = height.length - 1;

    let maxArea = 0;
    let val;
    while(left < right){

        //Get area of current height.
        val = Math.min(height[left],height[right]) * (right - left);

        //Update max if needed
        if(val > maxArea){
            maxArea = val;
        }

        //Whatever side has the smaller height, collapse towards other pointer. 
        if(height[left] < height[right]){
            left++;
        }
        else{
            right--;
        }
    }
    return maxArea;
};
