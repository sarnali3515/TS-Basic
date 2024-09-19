{
    //Type Alias

    type Student = {
        name: string;
        age: number;
        contactNo?: string;
        gender: string;
        address: string
    }

    const student1: Student = {
        name: 'sarna',
        age: 25,
        gender: 'female',
        contactNo: "3236478",
        address: 'ctg'
    }

    const student2: Student = {
        name: 'rayma',
        age: 24,
        gender: 'female',
        address: 'dhk'
    }

    type UserName = string
    type IsAdmin = boolean
    const userName: UserName = 'maria'
    const isAdmin: IsAdmin = true

    type Add = (num1: number, num2: number) => number;
    const add: Add = (num1, num2) => num1 + num2;





















    //
}