interface DirectorInterface{
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface{
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface{
    getCoffeeBreak(): string {
        return '';
    }
    workFromHome():string{
        return 'Working from home';
    }
    getToWork(): string{
        return 'Getting a coffee break';
    }
    workDirectorTasks():string{
        return 'Getting to director tasks';
    }
}

class Teacher implements TeacherInterface{
    workFromHome():string{
        return 'Cannot work from home';
    }
    getCoffeeBreak(): string{
        return 'Cannot have a break';
    }
    workTeacherTasks(): string{
        return 'Getting to work';
    }
}

export function createEmployee(salary: string | number) : Director | Teacher{
    if (typeof salary === 'number' && salary < 500){
        return new Teacher();
    }
    return new Director();
}

export function isDirector(employee: TeacherInterface | DirectorInterface): employee is Director {
    return (employee as Director).workDirectorTasks() !== undefined;
}

export function executeWork(employee: Teacher | Director){
    let work = undefined;
    if (employee instanceof Director){
        work = employee.workDirectorTasks();
    }
    if(employee instanceof Teacher){
        work = employee.workTeacherTasks();
    }
    return work;
}

type Subjects = "Math" | "History";

export function teachClass(todayClass: Subjects): string | boolean{
    return (todayClass === 'Math') ? 'Teaching Math' : (todayClass === "History") ? 'Teaching History' : `${undefined}`;
}