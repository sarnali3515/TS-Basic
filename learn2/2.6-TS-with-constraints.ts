{
    // constraints

    const addCourseToStudent = <
        T extends { id: number; name: string; email: string; }
    >(
        student: T
    ) => {
        const course = 'Advance web Developement'
        return {
            ...student,
            course
        };
    };

    const student1 = addCourseToStudent<{
        id: number;
        name: string;
        email: string;
        devType: string;
    }>({
        id: 11,
        name: 'sarnali',
        email: 'ks@gmail.com',
        devType: 'Frontend'
    })

    const student2 = addCourseToStudent({
        id: 12,
        name: 'niha',
        email: 'niha@gmail.com',
        hasWatch: 'Apple watch'
    })

    //  const student3 = addCourseToStudent({ 
    //     emni: 'emni'
    // })                                         //error

    const student3 = addCourseToStudent({
        id: 13,
        name: 'mihu',
        email: 'mihu@gmail.com',
        emni: 'emni'
    })




    //
}