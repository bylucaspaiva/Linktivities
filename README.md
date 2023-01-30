# Reactivities

A complete social network coded in .Net and React.

## Some important things about this project

The intuit of this project is to follow the most recomended way to build a complex system.
So it was being builded following SOLID principies and Clean Architecture, aiming to have a scalable, maintainable, and testable codebase.
The communication between layers is handled by the Mediator pattern, which centralizes requests and decouples components, leading to a better separation of concerns and more organized code.

## NuGet Packages

- Microsoft.EntityFrameworkCore.Sqlite
- MediatR
- AutoMapper.Extensions.Microsoft.DependencyInjection

## Entity Framework commands

- dotnet ef migrations add InitialCreate -s API/ -p Persistence/

## React packages
- axios
- [React.semantic-ui](https://react.semantic-ui.com)