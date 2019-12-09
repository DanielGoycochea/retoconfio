function consecutivo (num) {
  const arr = []

  for (let i = 0; i < num.length; i++) {

    arr.push(num.slice(i, i + 5))
    // console.log (arr[i])

  }
  const  order = arr.sort((a, b) => {
    return b - a
     })
    // console.log (order)
    return Number(order[0])
}

consecutivo("1234567890")