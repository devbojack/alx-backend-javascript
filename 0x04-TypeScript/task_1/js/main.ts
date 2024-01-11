interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [customKey: string]: any;
}


interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
}

interface studentInterface{
    workOnHomework() :string;
    displayName() :string;
}

interface studentConstructor{
    firstName: string;
    lastName: string;
}
class StudentClass implements studentInterface{
    firstName: string;
    lastName: string;

    constructor({firstName, lastName} :studentConstructor) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    workOnHomework() :string{
        return 'Currently working';
    }

    displayName() :string{
        return this.firstName;
    }

    
}