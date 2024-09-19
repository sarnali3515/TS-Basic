{// Normal Function


    function add(num1: number, num2: number = 10): number {
        return num1 + num2;
    }

    add(2, 5)

    const addArrow = (num1: number, num2: number): number => num1 + num2

    // object -> function => method

    const poorUser = {
        name: 'sarna',
        balance: 0,
        addBalance(balance: number): string {
            return `My new balance is : ${this.balance + balance}`
        },
    };

    const arr: number[] = [3, 4, 5];
    const newArray: number[] = arr.map((elem: number) => elem * elem)
}