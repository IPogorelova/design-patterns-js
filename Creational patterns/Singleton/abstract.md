**Singleton** - a component which is instantiated only once (its implementation must prevent you from instantiating that component more than once).

Summary:
1. A constructor in JS can choose what to return => we can keep returning same instance
2. Monostate (Singleton variation): many instances with shared data (not recommended by course author actually).
3. Directly depending on the Singleton is a bad idea (this approach must cause problems with testing e.g.) => introduce a dependency instead.
