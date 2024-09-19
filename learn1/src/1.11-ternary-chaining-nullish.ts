{
    //ternary
    const age: number = 18;
    if (age >= 18) {
        console.log("adult");
    }
    else {
        console.log("not adult");
    }

    const isAdult = age >= 18 ? 'adult' : 'not adult'

    console.log({ isAdult });


    // nullish coalescing operator
    //null/undefined ->decision
    const isAuthenticated = null;
    const result1 = isAuthenticated ?? 'Guest'
    const result2 = isAuthenticated ? isAuthenticated : 'Guest'
    console.log({ result1 });
    console.log({ result2 });

    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            presentAddress: string;
            permanentAddress?: string;
        }
    }

    const user: User = {
        name: 'sarna',
        address: {
            city: 'ctg',
            road: 'abc road',
            presentAddress: 'ctg town'
        }
    }

    const permanentAddress = user?.address?.permanentAddress ?? 'Np Permanent Address';
    console.log({ permanentAddress });









}