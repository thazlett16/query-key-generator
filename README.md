# Query Key Generation a Factory Util -> WIP

The approach for this library will eventually have an api with inspiration from [this article by TkDodo](https://tkdodo.eu/blog/leveraging-the-query-function-context). The goal is to have query keys passed by context value to the query function.

Inspiration is also taken from [@lukemorales/query-key-factory](https://github.com/lukemorales/query-key-factory). While this library can be useful, my goal was to not integrate with the query functions themselves. Instead, we pass the query key as a context value as shown in the article above in a typesafe manner.

Future goals are to also build out a secondary utility from this that integrates with [@ts-rest/core](https://github.com/ts-rest/ts-rest/) as that is my preferred typesafe query library at this time.
