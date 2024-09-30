class Node {
     constructor(val, left = null, right = null) {
          this.val = val;
          this.left = left;
          this.right = right;
     }
}

class BinarySearchTree {
     constructor(root = null) {
          this.root = root;
     }

     /** insert(val): insert a new node into the BST with value val.
      * Returns the tree. Uses iteration. */

     insert(val) {
          // 1: find the position to insert

          // 2: insert the value

          let currentNode = this;
          while (currentNode) {
               if (currentNode.right === null && val > currentNode.val) {
                    currentNode.right = new Node(val);
                    return this;
               }
               if (currentNode.left === null && val < currentNode.val) {
                    currentNode.left = new Node(val);
                    return this;
               }
               if (currentNode.val > val) {
                    currentNode = currentNode.left;
               }
               if (currentNode.val < val) {
                    currentNode = currentNode.right;
               }
          }
     }

     /** insertRecursively(val): insert a new node into the BST with value val.
      * Returns the tree. Uses recursion. */

     insertRecursively(val, currentNode = this.root) {
          //I had to look at the solution. I don't see the point in doing this recursively

          if (val < currentNode.val) {
               if (currentNode === null) {
                    currentNode.left = new Node(val);
                    return this;
               }
               return this.insertRecursively(val, currentNode.left);
          } else {
               if (currentNode.right === null) {
                    currentNode.right = new Node(val);
                    return this;
               }
               return this.insertRecursively(val, currentNode.right);
          }
     }
     /** find(val): search the tree for a node with value val.
      * return the node, if found; else undefined. Uses iteration. */

     find(val) {
          let currentNode = this;

          if (currentNode.val === val) {
               return currentNode;
          }
          if (currentNode.val > val) {
               currentNode = currentNode.right;
          }
          if (currentNode.val < val) {
               currentNode = currentNode.left;
          }
     }

     /** findRecursively(val): search the tree for a node with value val.
      * return the node, if found; else undefined. Uses recursion. */

     findRecursively(val, currentNode = this.root) {
          if (val < currentNode.val) {
               if (currentNode.left === null) return undefined;
               return this.findRecursively(val, currentNode.left);
          }
          if (val > currentNode.val) {
               if (currentNode.right === null) return undefined;
               return this.findRecursively(val, currentNode.right);
          }
          return currentNode;
     }

     /** dfsPreOrder(): Traverse the array using pre-order DFS.
      * Return an array of visited nodes. */

     dfsPreOrder() {
          let arr = [];

          let currentNode = this.root;

          function transverse(node) {
               arr.push(node.val);
               if (node.left) transverse(node.left);
               if (node.right) transverse(node.right);
          }
          transverse(currentNode);
          return arr;
     }

     /** dfsInOrder(): Traverse the array using in-order DFS.
      * Return an array of visited nodes. */

     dfsInOrder() {
          let arr = [];

          let currentNode = this.root;

          function transverse(node) {
               if (node.left) transverse(node.left);
               arr.push(node.val);
               if (node.right) transverse(node.right);
          }
          transverse(currentNode);
          return arr;
     }

     /** dfsPostOrder(): Traverse the array using post-order DFS.
      * Return an array of visited nodes. */

     dfsPostOrder() {
          let arr = [];

          let currentNode = this.root;

          function transverse(node) {
               if (node.left) transverse(node.left);
               if (node.right) transverse(node.right);
               arr.push(node.val);
          }
          transverse(currentNode);
          return arr;
     }

     /** bfs(): Traverse the array using BFS.
      * Return an array of visited nodes. */

     bfs() {
          let node = this.root;
          let arr = [];
          let queue = [];

          queue.push(node);

          while (queue.length) {
               node = queue.shift;
               arr.push(node.val);
               if (node.left) {
                    queue.push(node.left);
               }
               if (node.right) {
                    queue.push(node.right);
               }
          }
          return arr;
     }

     /** Further Study!
      * remove(val): Removes a node in the BST with the value val.
      * Returns the removed node. */

     remove(val) {
          let currentNode = this;

          if (currentNode.val === val) {
               //some code that I don't fully understand how to do. I know I need to remove this code and then restructure the tree. I'll look at the solution and try to understand it.
          }
          if (currentNode.val > val) {
               currentNode = currentNode.right;
          }
          if (currentNode.val < val) {
               currentNode = currentNode.left;
          }
     }

     /** Further Study!
      * isBalanced(): Returns true if the BST is balanced, false otherwise. */

     isBalanced() {
          //No idea how to do this. Will look at solution for help.
     }

     /** Further Study!
      * findSecondHighest(): Find the second highest value in the BST, if it exists.
      * Otherwise return undefined. */

     findSecondHighest() {
          // let highestValue = 0
          // let currentNode = this.root
          // if (currentNode.val > highestValue) {
          //      highestValue = currentNode.val
          // }

          //this was my original idea. Go through and find the highest value then transverse until you found the one below it.
          // But then I thought. Why don't I just use dfs and transverse, return an array. Sort that array, and return the 2nd to last value?

          let arr = [];

          let currentNode = this.root;

          function transverse(node) {
               arr.push(node.val);
               if (node.left) transverse(node.left);
               if (node.right) transverse(node.right);
          }
          transverse(currentNode);
          let sortedArray = Array.sort(arr);
          return sortedArray[sortArray.length - 1];
     }

     // definetly not the most efficient way, but I didn't really know the actual way to do this. I'll look at the solution
}

module.exports = BinarySearchTree;
