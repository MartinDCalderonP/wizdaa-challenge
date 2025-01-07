const arr = [1, [2, [3, 4], 5], 6, [7, 8]]

const flattenArray = (arr: any[]): number[] => {
  let result: number[] = []

  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item))
    } else {
      result.push(item)
    }
  })

  return result
}

console.log(flattenArray(arr)) // [1, 2, 3, 4, 5, 6, 7, 8]
