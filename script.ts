function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
        return input.toLocaleLowerCase();
    } else {
        return input.toLocaleUpperCase();
    }

}


function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter((item) => item.rating >= 4);
}


function concatenateArrays<T>(...arrays: T[][]): T[] {
    let output: T[] = [];
    for (let item of arrays) {
        output = output.concat(item)
    }
    return output;
}

class Vehicle {
    private make: string;
    private year: number;
    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }
    public getInfo(): string {
        return `Make: ${this.make} Year:${this.year}`
    }

}

class Car extends Vehicle {
    private model: string;
    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
    }
    public getModel(): string {
        return (`Model: ${this.model}`)
    }
}
//  -------------

function processValue(value: string | number): number {
    if (typeof value === "string") {
        return value.length;
    } else{
        return value * 2; 
    }
}

console.log(processValue("showrov kumar ghosh"))