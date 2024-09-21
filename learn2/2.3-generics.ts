{
    //
    //generic type
    type GenericArray<T> = Array<T>

    // const rollNumbers: number[] = [2,4,6]
    // const rollNumbers: Array<number> = [2,4,6]
    const rollNumbers: GenericArray<number> = [2, 4, 6]

    // const mentors: string[]=['tonu','bani','mitu']
    // const mentors: Array<string>=['tonu','bani','mitu']
    const mentors: GenericArray<string> = ['tonu', 'bani', 'mitu']

    // const boolArray:boolean[]=[true,false,true]
    // const boolArray:Array<boolean>=[true,false,true]
    const boolArray: GenericArray<boolean> = [true, false, true]

    interface user {
        name: string;
        age: number
    }

    const user: GenericArray<user> = [
        {
            name: 'sarna',
            age: 25
        },
        {
            name: 'rayma',
            age: 24
        }

    ]


    //generic tuple

    type GenericTuple<X, Y> = [X, Y]

    const man: GenericTuple<string, string> = ['rahim', 'farin']

    const UserWithID: GenericTuple<number, { name: string, email: string }> = [1234, { name: 'sarnali', email: 'kj@gmail.com' }]






    //
}