function formatString(input: string, toUpper?: boolean): string{
    if(toUpper === false){
        return  input.toLocaleLowerCase();
    }else{
        return input.toLocaleUpperCase();
    }

}


function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    
}
