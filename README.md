# Linktivities

Linktivities is a social network application developed using .NET and React. The project is built with a focus on following best practices, including SOLID principles and Clean Architecture. This approach ensures a scalable, maintainable, and testable codebase. The communication between different layers of the application is facilitated by the Mediator pattern, enabling centralized requests and loose coupling, leading to better separation of concerns and a more organized codebase.


## Technologies and Packages Used

### Backend (C# - .NET)

- Microsoft.EntityFrameworkCore.Sqlite
- Microsoft.EntityFrameworkCore.SqLite
- Microsoft.EntityFrameworkCore.Design
- Microsoft.EntityFrameworkCore.OpenApi
- Microsoft.AspNetCore.Identity.EntityFrameworkCore
- Microsoft.AspNetCore.Authentication.JwtBearer
- Microsoft.AspNetCore.OpenApi
- FluenValidation.AspNetCore
- MediatR
- AutoMapper.Extensions.Microsoft.DependencyInjection
- CloudinaryDotNet

### Frontend (React)

- [Axios](https://axios-http.com/ptbr/docs/intro) - http requests
- [React.semantic-ui](https://react.semantic-ui.com) - semantic code
- [Formik](https://formik.org/) - better way to handle form
- [MobX](https://mobx.js.org/README.html) - to handle state between components
- [React-Router](https://reactrouter.com/en/main) - to manage pages



## How to run 

Please note that there are 2 branchs, on master the project will not work properly unless u make changes
on docker to it run the ocntainer on development mode.

***
1. clone this project:

```
git clone https://github.com/bylucaspaiva/Linktivities.git
```
2. Go to Project and change to development branch:

```
cd Linktivities
git checkout development
```

3. first create an docker image for postgress:
```
docker run --name dev -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=secret -p 5432:5432 -d postgres:latest 
```

4. Next create an image for the app:
```
docker build -t fractaldisorder/linktivities .
```

5. Now u can run the app (on the development branch!):
```
docker run --rm -it -p 8080:80 fractaldisorder/linktivities
```

Now you can go to localhost:8080 and register an account.

## You also can see an example on the link below

Live App: [https://linktivities.fly.dev/](https://linktivities.fly.dev/)
