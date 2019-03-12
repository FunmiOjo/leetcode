/*
Look and say numbers
Each sequence is about (length of the one before it in digits)^1.3 long
Memoization?

Approach:
Set counter to 0
Make array to hold terms
Calculate next term from previous term and increment counter, then overwrite previous term
To calculate term, for every number at odd index push it into array m times with m being the number at
the preceding index
Sources:
https://www.youtube.com/watch?v=ea7lJkEhytA
*/

const numConsecutiveNums = (num, index, term) => {
  let counter = 0
  for (let i = index; i < term.length; i++) {
    if (term[i] === num) {
      counter++
    } else {
      return { count: counter, newIndex: index + counter }
    }
  }
  return { count: counter, newIndex: index + counter }
}

const countAndSay = n => {
  let counter = 0
  const terms = []
  while (counter < n) {
    if (terms.length) {
      let index = 0
      let currentTerm = terms[0]
      let newTerm = []
      while (index < terms[0].length) {
        let { count, newIndex } = numConsecutiveNums(
          currentTerm[index],
          index,
          currentTerm
        )

        newTerm.push(count)
        newTerm.push(currentTerm[index])

        index = newIndex
      }
      terms[0] = newTerm
    } else {
      terms.push([1])
    }
    counter++
  }
  return terms[0].join('')
}

module.exports = countAndSay
