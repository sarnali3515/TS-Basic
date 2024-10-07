{
    // generic constraint with keyof operator
    type Vehicle = {
        bike: string;
        car: string;
        ship: string
    }

    type Owner = "bike" | "car" | "ship" //manually

    type Owner2 = keyof Vehicle

    const getPropertyValue = <X, Y extends keyof X>
        (obj: X, key: Y) => {
        return obj[key];
    }

    const user = {
        name: "Sarna",
        age: 25,
        address: 'ctg'
    }

    const car = {
        model: "Toyota 100",
        year: 200
    }
    const result1 = getPropertyValue(user, 'name')
    const result2 = getPropertyValue(car, 'model')

    //const person1: Owner = "car"

    // const user ={
    //     name:"Sarna",
    //     age:25,
    //     address:'ctg'
    // }

    // user['name']











    //
}