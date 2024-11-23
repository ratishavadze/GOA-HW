function maxmin(arr) {
    if (arr.length === 0) return null;
    let max_arr = math.max(...arr)
    let min_arr = math.min(...arr)
    return [max_arr, min_arr]    
}