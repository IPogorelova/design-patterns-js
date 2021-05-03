**Proxy** - a class that functions as an interface to a particular resource. That resource may be remote, expensive to construct, or may require logging or some other added functionality.

Summary:
1. Proxy has the same interface as the underlying object.
2. To create a proxy, simply replicate the existing interface of an object.
3. Add relevant functionality to the redefined member functions.
4. Different proxies (communication, logging, caching, etc.) have completely different behaviours.