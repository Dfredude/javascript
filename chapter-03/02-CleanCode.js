export default function indexOf(arr, value){
    let found = -1;
    for (key in arr){
        if (arr[key] === value) {
            found =  +key;
        }
    }
    return found;
}