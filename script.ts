function formatString(input: string, toUpper?: boolean): string{
    if(toUpper === false){
        return  input.toLocaleLowerCase();
    }else{
        return input.toLocaleUpperCase();
    }

}


function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter((item)=>item.rating >=4);
}


function concatenateArrays<T>(...arrays: T[][]): T[]{
    let output: T[] = [];
    for(let item of arrays){
        output = output.concat(item)
    }
    return output;
}
console.log(concatenateArrays(["a", "b"], ["c"]))
console.log(concatenateArrays([1, 2], [3, 4], [5]))