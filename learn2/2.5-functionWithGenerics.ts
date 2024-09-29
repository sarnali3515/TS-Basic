{
    // function with generics

    const createArray = (param: string): string[] => {
        return [param]
    }

    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param]
    }

    const res1 = createArray('Bangladesh')

    const resGeneric = createArrayWithGeneric<string>('Bangladesh')

    type User = { id: number; name: string }

    const resGenericObj = createArrayWithGeneric<User>({
        id: 22,
        name: 'sarna'
    })


    // 
    const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2]
    }

    const res2 = createArrayWithTuple<string, number>('Bangladesh', 33)

    const res3 = createArrayWithTuple<string, { name: string }>('Bangladesh', { name: 'Asia' })

    const addCourseToStudent = <T>(student: T) => {
        const course = 'Advance web Developement'
        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({
        name: 'sarnali',
        email: 'ks@gmail.com',
        devType: 'Frontend'
    })

    const student2 = addCourseToStudent({
        name: 'niha',
        email: 'niha@gmail.com',
        hasWatch: 'Apple watch'
    })







    //
}