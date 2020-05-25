**Adapter** - a construct which adapts an existing interface X to conform to the required interface Y.

Summary:
1. Implementing an Adapter is easy actually (huh)
2. Determine the API you have and then the API you need
3. Create a component which aggregates (has a reference to) the adaptee.
4. Intermediate representations can pile up: use caching and other optimisations.