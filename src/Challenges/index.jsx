const challenges = [
  {
    title: "Reverse Linked List",
    description: "Write a function that reverses a linked list.",
    solution: `
      function reverseLinkedList(head) {
        let prev = null;
        let current = head;
        while (current !== null) {
          let next = current.next;
          current.next = prev;
          prev = current;
          current = next;
        }
        return prev;
      }
    `
  },
  {
    title: "Check Balanced Parentheses",
    description: "Write a function that checks if a string of parentheses is balanced.",
    solution: `
      function isBalanced(str) {
        let stack = [];
        for (let i = 0; i < str.length; i++) {
          let char = str.charAt(i);
          if (char === '(') {
            stack.push(char);
          } else if (char === ')') {
            if (stack.length === 0) {
              return false;
            }
            stack.pop();
          }
        }
        return stack.length === 0;
      }
    `
  },
  {
    title: "Remove Duplicates from Array",
    description: "Write a function that removes duplicates from an array.",
    solution: `
      function removeDuplicates(arr) {
        let seen = new Set();
        let result = [];
        for (let i = 0; i < arr.length; i++) {
          if (!seen.has(arr[i])) {
            seen.add(arr[i]);
            result.push(arr[i]);
          }
        }
        return result;
      }
    `
  }
];

export default challenges;