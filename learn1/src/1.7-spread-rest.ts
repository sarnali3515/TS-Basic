{
    //spread operator
    //rest operator
    //destructuring


    //spread
    const sis1: string[] = ['saima', 'jaima', 'rayma']
    const sis2: string[] = ['rafa', 'safa', 'mita']

    // sis1.push(sis2)    //wrong
    sis1.push(...sis2)


    const mentors1 = {
        typescript: 'rafat',
        redux: 'sifat',
        dbms: 'maruf'
    }
    const mentors2 = {
        prisma: 'fahim',
        next: 'wafi',
        cloud: 'nayeem'
    }

    const mentorList = {
        ...mentors1,
        ...mentors2
    }



    // rest
    const greetFriends = (...friends: string[]) => {
        // console.log(`hi ${friend1} ${friend2} ${friend3}`);
        friends.forEach((friend: string) => console.log(`Hi ${friend}`))
    }

    greetFriends('rafan', 'safan', 'babla')





}