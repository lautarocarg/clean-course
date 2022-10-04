(() =>{

    type Gender = 'M' | 'F';

    interface PersonProps{
        name: string,
        gender: Gender,
        birthdate: Date
    }

    class Person{

        public birthdate: Date;
        public gender   : Gender;
        public name     : string;

        constructor(
            {name, gender, birthdate}: PersonProps
        ){
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;

        }

    }
    
    interface UserProps{
            email  : string,
            role   : string,
    }

    class User{

        public email: string;
        public role: string;

        public lastAcces: Date;

        constructor({ email, role}: UserProps            
        ){
            this.email = email;
            this.role = role;
            this.lastAcces = new Date();
        }

        checkCredentials(){
            return true;
        }
        
    }

    interface SettingsProps{
        lastOpenFolder  : string,
        workingDirectory: string,
    }

    class Settings{
        public lastOpenFolder  : string;
        public workingDirectory: string;

        constructor(
            {workingDirectory, lastOpenFolder}: SettingsProps
        ){       
            this.lastOpenFolder = lastOpenFolder;  
            this.workingDirectory = workingDirectory;
            
        }
    }

    interface UserSettingsProps {
        birthdate        : Date;
        email            : string;
        gender           : Gender;
        lastOpenFolder   : string;
        name             : string;
        role             : string;
        workingDirectory : string;
    }

    class UserSettings{

        public person: Person;
        public user: User;
        public setting: Settings;

        constructor(
            { name, gender, birthdate, email, role, workingDirectory, lastOpenFolder}: UserSettingsProps
        ){
            this.person = new Person({name, gender, birthdate})
            this.user = new User({email, role})
            this.setting = new Settings({workingDirectory, lastOpenFolder})
        }

    }


    const userSettings = new UserSettings({
        birthdate: new Date('1985-10-21'),
        email: 'fernando@google.com',
        gender: 'M',
        lastOpenFolder: '/home',
        name: 'Fernando',
        role: 'Admin',
        workingDirectory: '/usr/home',
    });

    console.log({ userSettings });

    console.log(userSettings);



    // const newPerson = new Person('Lautaro', 'M', new Date('2000-07-22'));
    // console.log({ newPerson });



})();