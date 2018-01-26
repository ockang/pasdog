# PASDOG API

This api in Nodejs - use framework expressjs - jwt - mongoose - monk - mongodb - others modules npm

## List of avaiable methods

| Route | Method | Description |
|--------|--------|--------|
| `/` | `GET` | Hello World Route |
| `1. http://46.101.73.97:3000/api/newuser/` | `POST` | Return data |
| `2. http://46.101.73.97:3000/api/access/` | `POST` | Return data and token |
| `3. http://46.101.73.97:3000/api/profile/` | `POST` | Return data user complet|

### Example: Body of the request

Method 1. newuser
```json
{
    "email": "edinsoncode@gmail.com",
    "name": "edinson carranza",
    "password": "1234567",
    "city": "Argentina"
}
```

Method 2. access
```json
{
    "email": "edinsoncode@gmail.com",
    "password": "1234567"
}
```

Method 3. access
```json
{
    "Authorization": "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVkaW5zb25jb2RlQGhvdG1haWwuY29tIiwibmFtZSI6IkVkaW5zb24gQ2FycmFuemEiLCJfaWQiOiI1YTY0YWY3Mjk0MWE0YTgzMWFlNDlhZWQiLCJpYXQiOjE1MTY1NTM1NzV9.y3ltGB-WehYZ2Ylc-yY70bCWrqf4Nqe4YwIeqGpWeWc"
    
}
```


## Tools and modules used

* [`MongoDB`](https://www.mongodb.com/) as the database.
* [`mongoose`](http://mongoosejs.com/) in order to connect the application and the database.
* [`body-parser`](https://www.npmjs.com/package/body-parser) in order to get the body of the requests.
* [`chance`](https://www.npmjs.com/package/chance) as the string auto-generator