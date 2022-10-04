(() =>{



    type Gender = 'M' | 'F';

    class Person{
        constructor(
            public name: string,
            public  gender: Gender,
            public  birthdate: Date
        ){}

    }

    class User extends Person {

        public lastAcces: Date;

        constructor(
            public email: string,
            public role: string,
            
            name: string,
            gender: Gender,
            birthdate: Date,
        ){
            super(name, gender, birthdate)
            this.lastAcces = new Date();
        }

        checkCredentials(){
            return true;
        }
        
    }
    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            public email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date,
        ){
            super(email, role, name, gender, birthdate, )
        }
    }


    const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'lau@gamil.com',
        'Admin',
        'Lautaro',
        'M', 
        new Date('2000-07-22')
    );

    console.log(userSettings);



    // const newPerson = new Person('Lautaro', 'M', new Date('2000-07-22'));
    // console.log({ newPerson });



})();