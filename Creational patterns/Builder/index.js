class ClassExample {

    constructor(name) {
        this.name = name;
        this.fields = [];
    }

    toString() {
        let code = [];
        code.push(
            `class ${this.name} {\n`
        );
        if (this.fields.length !==0) {
            code.push(`  constructor(${this.fields.join(', ')}) {\n`);
            this.fields.forEach(field => {
                code.push(
                    `    this.${field} = ${field};\n`
                );
            });
            code.push(`  }\n`);
        }
        code.push(`}`);
        return code.join('');
    }
}

class CodeBuilder
{
    constructor(className)
    {
        // todo
        this.classExample = new ClassExample(className);
        this.className = className;
    }

    addField(name)
    {
        // todo
        // reminder: we want a fluent interface
        let field = name;
        this.classExample.fields.push(field);
        return this;
    }

    toString()
    {
        // todo
        return this.classExample.toString();
    }

    build()
    {
        return this.classExample;
    }
}


let builder = new CodeBuilder('Person');
builder.addField('name').addField('age');

console.log(builder.build())
