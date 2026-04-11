function backtracking (root , result){
    if(root === null){
        return null; 
    }

    [root.left , root.right] = [root.right, root.left]; 

    backtracking(root.left , result); 
    backtracking(root.right , result); 

    return result;
}
var invertTree = function(root) {
   let result = []; 
   return backtracking(root , result); 
};

