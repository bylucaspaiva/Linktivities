# Reactivities

A complete social network coded in .Net and React.

The intent of this project is to follow the most recommended way to build a complex system. So it was built following SOLID principles and Clean Architecture, aiming to have a scalable, maintainable, and testable codebase. The communication between layers is handled by the Mediator pattern, which centralizes requests and decouples components, leading to a better separation of concerns and more organized code.

## NuGet Packages

- Microsoft.EntityFrameworkCore.Sqlite
- MediatR
- AutoMapper.Extensions.Microsoft.DependencyInjection
- Microsoft.EntityFrameworkCore.SqLite
- Microsoft.EntityFrameworkCore.Design
- Microsoft.EntityFrameworkCore.OpenApi
- Microsoft.EntityFrameworkCore.SqLite
- FluenValidation.AspNetCore

## Entity Framework commands

- dotnet ef migrations add InitialCreate -s API/ -p Persistence/

## React packages

- [Axios](https://axios-http.com/ptbr/docs/intro) - http requests
- [React.semantic-ui](https://react.semantic-ui.com) - semantic code
- [Formik](https://formik.org/) - better way to handle form
- [MobX](https://mobx.js.org/README.html) - to handle state between components
- [React-Router](https://reactrouter.com/en/main) - to manage pages
