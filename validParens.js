/*
Prompt:
Write a function that takes in a string of parentheses, brackets and curly braces and
returns a boolean representing whether their arrangment is legitimate.  Note that in
this problem, all brackets must be closed.

Approach:
Visit each character, putting all open parens in a queue.  If a character is closed and it
does not match the last parens in the queue, the arrangement is not valid.
*/
const validParens = parens => {
  const openQueue = []
  const openPairs = {
    '(': ')',
    '[': ']',
    '{': '}',
  }

  for (let i = 0; i < parens.length; i++) {
    // check whether character is open parens
    if (openPairs[parens[i]]) {
      openQueue.push(parens[i])
      // compare character with the pair of last character in openQueue
    } else if (parens[i] !== openPairs[openQueue[openQueue.length - 1]]) {
      return false
    } else {
      openQueue.pop()
    }
  }

  return openQueue.length === 0
}

module.exports = validParens
