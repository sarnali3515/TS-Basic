{
    const user = {
        id: 123,
        name: {
            firstName: 'khatuna',
            middleName: 'Jannat',
            lastName: 'Sarnali'
        },
        contactNo: 124345,
        address: 'ctg',
    }
    const { contactNo,
        name: { middleName: midName }
    } = user;

    //array destructuring

    const myFriends = ['rayma', 'saimon', 'rifa', 'mafia', 'maruf']
    const [, , bf, ...rest] = myFriends








}