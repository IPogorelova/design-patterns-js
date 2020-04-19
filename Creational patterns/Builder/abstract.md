**Builder** - pattern, which is using to provide an API for piecewise object construction succinctly, whet creational process becomes too much complicated.

Summary of the course piece:
1. Builder is a separate component for building an object.
2. We can either give builder an initializer or return it via static function.
3. To make builder fluent, add ``return this`` at the end of the method. It allows to create an object this way: 
    ```js
        builder
            .addFirstOption
            .addSecondOption
            .addThirdOption
            // and etc.
    ```
4. Different facets of the object can be built by different builders working together via a base class.
