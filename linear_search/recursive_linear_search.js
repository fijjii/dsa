// linear seaerch recursive

function linear_search_recursive(arr, target, i = 0) {
    if (i === arr.length) return -1;
    if (arr[i] === target) return i;
    return linear_search_recursive(arr, target, i + 1);
}

console.log(linear_search_recursive([1, 2, 3, 4, 5], 3)); // 2