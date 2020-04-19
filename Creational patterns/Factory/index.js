class Person
{
    constructor(id, name)
    {
        this.id = id;
        this.name = name;
    }
}

let id = 0;

class PersonFactory
{
    createPerson(name)
    {
        // todo
        let person = new Person(id, name);
        id++;
        return person;
    }
}