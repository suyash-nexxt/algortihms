selection_sort = (arr, res=[]) => {
  if(arr.length === 0) {
    return res
  }

  min = arr[0]
  min_indx = 0

  for(let i=0; i<arr.length; i++) {
    if(arr[i].length < min.length) {
      min = arr[i]
      min_indx = i
    }
  }

  res.push(min)
  arr.splice(min_indx, 1)
  return selection_sort(arr, res)
}