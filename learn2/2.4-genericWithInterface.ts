{
    //
    //generic interface
    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number
        },
        smartWatch: T
        bike?: X
    }

    type EmilabWatch = {
        brand: 'Emilab',
        model: 'kw66',
        display: 'Oled'
    }
    //1
    const poorDeveloper: Developer<EmilabWatch> = {
        name: 'sarnali',
        computer: {
            brand: 'lenovo',
            model: 'd5',
            releaseYear: 2013
        },
        smartWatch: {
            brand: 'Emilab',
            model: 'kw66',
            display: 'Oled'
        }
    }

    interface AppleWatch {
        brand: string;
        model: string;
        heartTrack: boolean;
        sleepTrack: boolean
    }

    interface YamahaBike {
        model: string;
        engineCapacity: string
    }
    //2
    const richDeveloper: Developer<AppleWatch, YamahaBike> = {
        name: 'manaf',
        computer: {
            brand: 'Hp',
            model: 'z77',
            releaseYear: 2018
        },
        smartWatch: {
            brand: 'Apple',
            model: 'agst',
            heartTrack: true,
            sleepTrack: true
        },
        bike: {
            model: 'Yamaha',
            engineCapacity: '100cc'
        }
    }











    //
}