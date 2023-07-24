FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build-env
WORKDIR /app

# copy .csproj ans restore as distinct layers
COPY "Linktivities.sln" "Linktivities.sln"
COPY "API/API.csproj" "API/API.csproj"
COPY "Application/Application.csproj" "Application/Application.csproj"
COPY "Persistence/Persistence.csproj" "Persistence/Persistence.csproj"
COPY "Domain/Domain.csproj" "Domain/Domain.csproj"
COPY "Insfrastructure/Insfrastructure.csproj" "Insfrastructure/Insfrastructure.csproj"

RUN dotnet restore "Linktivities.sln"

# copy everything else
COPY . .
RUN dotnet publish -c Release -o out 

# build a runtime image 
FROM mcr.microsoft.com/dotnet/aspnet:7.0
COPY --from=build-env /app/out .
ENTRYPOINT [ "dotnet", "API.dll" ]


