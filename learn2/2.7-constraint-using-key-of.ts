{
    // generic constraint with keyof operator
    type Vehicle = {
        bike: string;
        car: string;
        ship: string
    }

    type Owner = "bike" | "car" | "ship" //manually

    type Owner2 = keyof Vehicle

    //const person1: Owner = "car"

    // const user ={
    //     name:"Sarna",
    //     age:25,
    //     address:'ctg'
    // }

    // user['name']











    //
}