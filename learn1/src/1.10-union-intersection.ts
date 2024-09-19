{
    //
    //union types
    type FrontendDeveloper = 'fakeDeveloper' | 'juniorDeveloper'
    type FullStackDeveloper = 'frontendDeveloper' | 'expertDeveloper'

    type Developer = FrontendDeveloper | FullStackDeveloper
    const newDeveloper: FrontendDeveloper = 'juniorDeveloper'

    type User = {
        name: string;
        email?: string;
        gender: "male" | "female"
        bloodGroup: "O+" | "A+" | "AB+" | "B+"
    }

    const user1: User = {
        name: "sarna",
        gender: "female",
        bloodGroup: "B+"
    }


    // intersection
    type FrontendDeveloper2 = {
        skills: string[];
        designation1: 'Frontend Developer'
    }
    type BackendDeveloper = {
        skills: string[];
        designation2: 'Backend Developer'
    }

    type FullStackDeveloper2 = FrontendDeveloper2 & BackendDeveloper

    const fullstackDeveloper2: FullStackDeveloper2 = {
        skills: ['HTML', 'CSS', 'Express'],
        designation1: 'Frontend Developer',
        designation2: 'Backend Developer'
    }








    //
}