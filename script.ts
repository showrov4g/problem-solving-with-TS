function formatString(input: string, toUpper?: boolean): string{
    if(toUpper === false){
        return  input.toLocaleLowerCase();
    }else{
        return input.toLocaleUpperCase();
    }

}

console.log(formatString("hello"))