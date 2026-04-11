var survivedRobotsHealths = function (positions, healths, directions) {
    let ans = [];
    let stack = [];

    for (let i = 0; i < positions.length; i++) {
        ans.push({
            position: positions[i],
            health: healths[i],
            direction: directions[i],
            idx: i,
        });
    }

    ans.sort((a, b) => a.position - b.position);
    for (let j = 0; j < ans.length; j++) {
        let curr = ans[j]
        while (
            stack.length &&
            stack[stack.length - 1].direction === "R" &&
            curr.direction === "L"
        ) {
            if (stack[stack.length - 1].health < curr.health) {
               stack.pop();
               curr.health--; 
            }else if(stack[stack.length - 1].health > curr.health){
                stack[stack.length - 1].health--;
                curr = null;
                break; 
            }else {
                stack.pop();
                curr = null;
                break;
            }
        }
        if (curr) {
            stack.push(curr);
        }
    }
    stack.sort((a, b) => a.idx - b.idx);
    return stack.map(robot => robot.health);
};

console.log(
    survivedRobotsHealths([5, 4, 3, 2, 1], [2, 17, 9, 15, 10], "RRRRR")
);
