# burger

![License](https://img.shields.io/badge/license-MIT-181717?style=for-the-badge) 

## Table of Contents
* [Title](#title)
* [Deployed Link](#deployed-link)
* [Site Picture](#site-picture)
* [Technologies Used](#technologies-used)
* [Description](#description)
* [Usage](#usage)
* [Work Involved](#work-involved)
* [Code Snippet](#code-snippet)
* [License](#license)
* [Authors](#authors)
* [Questions](#questions)
* [Acknowledgments](#acknowledgments)

## Deployed Link
* Click this link to view the site.
[Demo](https://burger-eater70.herokuapp.com/)

## Site Picture
[Site]()

## Technologies Used
* javascript
* CSS
* MySQL
* Express
* NodeJs
* Handlebars
* ORM
* Heroku
* Github

## Description
This application is a fun burger logger! You can add your favorite burger, and decide whether you want to devour it or if you aren't hungry you can change your mind. 


## Work Involved
In order to build this application, I utilized MySQL in order to create an employee database and connect it to my local host. I utilized InquirerJs to develop the user prompts, and console.table to print MySQL rows into the console.

## Code Snippet
* This code snippet allows for the employee table to be printed into the console.
```
function employeeTable() {
    connection.query("SELECT * FROM employee", function (err, res) {

        var table = new Table({
            head: ["ID", "First Name", "Last Name", "Role ID", "Manager ID"],
            colWidths: [10, 15, 15, 10, 15]
        });

        for (var i = 0; i < res.length; i++) {
            table.push(
                [res[i].id, res[i].first_name, res[i].last_name, res[i].role_id, res[i].manager_id],
            );
        }
        console.log(table.toString());
        restart()
    });
}
```

## License
This project is covered under MIT.

## Authors
**UC Berkeley Coding Bootcamp**

**Jessny Joseph** 

## Questions 
* [Github](https://github.com/jessnyj)
* [LinkedIn](https://www.linkedin.com/in/jessny-joseph-361515201)

## Acknowledgments
Trilogy Education Services
