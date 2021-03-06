const { buildTree } = require('../../scripts/problemUtils');

module.exports = [{
    input: [buildTree([1, 3, 2, 5]), buildTree([2, 1, 3, null, 4, null, 7])],
    output: buildTree([3, 4, 5, 5, 4, null, 7])
}, {
    input: [buildTree([1]), buildTree([1])],
    output: buildTree([2])
},{
    input: [buildTree([]), buildTree([1])],
    output: buildTree([1])
},{
    input: [buildTree([]), buildTree([])],
    output: buildTree([])
},{
    input: [buildTree([1]), buildTree([])],
    output: buildTree([1])
}, {
    input: [buildTree([1, 2, null, 3]), buildTree([1, null, 2, null, null, null, 3])],
    output: buildTree([2, 2, 2, 3, null, null, 3])
},{
    input: [buildTree([3,4,5,1,2]), buildTree([4,1,2,1])],
    output: buildTree([7,5,7,2,2])
},{
    input: [buildTree([3,5,null,5]), buildTree([4])],
    output: buildTree([7,5,null,5])
},{
    input: [buildTree([9,null,null]), 
            buildTree([-1,-2,0])],
    output: buildTree([8,-2,0])
}];

