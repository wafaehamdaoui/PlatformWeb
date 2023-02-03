# Platform Web
## Introduction :
Within this project, I am going to present to you an example of CRUD Application With Node js and Oracle database in the contexe of smart university, 
and I will show you how to use it correctly.
### Problem:
As soon as I submitted my application to my university, I noticed that it has a soprtive infrastructure, digital infrastructures and workspaces, 
but it has a limited capacity so it is possible that you go to the university and you cannot find available space and therefore you have to go to the security 
agent and make the reservation before one or two days. So as a web developement student, to solve this problem I decide to create an application which allows us,
the students, to reserve the different resources of the university either the sports halls, or the sports fields, or the workspaces, or the computers, using the skills we learned in 
Node.js and Oracle database trainings.

### Solution 
The solution I propose is named uemf resources. which is a web application that allows uemf students to reserve any resource in one click.

Therefore, the programming of this web application will be carried out in Node js for several reasons like: run JavaScript in a single thread, and the processing is asynchronous...

For database i will use oracle because it provides a rich set of default security features to manage user accounts, authentication, privileges wich help to protect data...

Regarding my work environment, I work under windows, I use Visual Studio Code (and sql developer to manage database).


Before we move further let’s understand:
### 1. What is a CRUD app?
A CRUD app is a specific type of software application that consists of four basic operations;

| Lettre | Function |
| ------ | -------- |
|   C    |  Create  |
|   R    |  Read    |
|   U    |  Update  |
|   D    |  Delete  |

#### Create:
Create allows you to add new rows to a database table.
#### Read
Read is the operation that allows us to see the recipe we just created.
#### Update
Update is the operation that allows us to modify existing data and records within a table. 
#### Delete
Delete is the operation that allows us to remove records from a table.

### CRUD apps consist of three parts; the `database`, `user interface`, and `APIs/Backend`.

#### Database:
* IN this project I created two Users
<img width="834" alt="image" src="https://user-images.githubusercontent.com/75392302/216507896-3c6589f0-99f1-4f3b-95b9-4c2ce36f11d3.png">
<img width="627" alt="image" src="https://user-images.githubusercontent.com/75392302/216508125-d86959f4-a9ab-43d4-b3cb-410af2bfa01d.png">

The first user is an administrator with full access, modification and management rights <img width="257" alt="image" src="https://user-images.githubusercontent.com/75392302/216501101-e0799867-51c3-49e3-b046-d6240aeb2d88.png">
The second user is a normal user having access only to the database and having a restriction to see certain tables <img width="313" alt="image" src="https://user-images.githubusercontent.com/75392302/216501383-e2c3a877-7bd9-4995-a66f-c925ec11ef21.png">

* And then I will connect as user_admin and I will create three table that I will need to manage my web app which are: 
##### Users
<img width="337" alt="image" src="https://user-images.githubusercontent.com/75392302/216502624-eaed2029-b9d8-480f-b356-05dc26c8a24f.png">

And i will insert to it the two users I have just created 
<img width="538" alt="image" src="https://user-images.githubusercontent.com/75392302/216503008-d48c3eb4-1919-47e7-9112-8dc35f61aefa.png">

This table will help me to control access to my web app. Login part need to get entred username and password and compare them with existing users.
And as we know Oracle database passwords are hashed so is not possible to get the original clear-text password from the hash value. 
 
<img width="251" alt="image" src="https://user-images.githubusercontent.com/75392302/216503472-6313ae98-9feb-4633-b941-6e446d454aaf.png">
<img width="213" alt="image" src="https://user-images.githubusercontent.com/75392302/216504645-eb90c91b-d2b8-4996-bfaa-6a6f7fe6370c.png">

That is why I will store users in this table.

##### Ressources
<img width="268" alt="image" src="https://user-images.githubusercontent.com/75392302/216504923-52f00a79-0e6f-4d40-ad8c-13c3bd1fb433.png">
In this table i will store diffrents resources added by admin .

##### Demandes
<img width="730" alt="image" src="https://user-images.githubusercontent.com/75392302/216505266-60bb17ea-5c4b-4741-9ead-1a86d55f7369.png">
In this table i will store reservations made by students.

* Also I will create to roles:
1. admin role with all privilages associated to user_admin
<img width="196" alt="image" src="https://user-images.githubusercontent.com/75392302/216506044-9f7e589b-cf02-4e7e-be32-1a3d38c67015.png">

2. student role with limited privilages associated to user_student
<img width="299" alt="image" src="https://user-images.githubusercontent.com/75392302/216506307-3035e6c6-a87a-47c1-b4e8-2c8950d489e7.png">

Those two role will help me afterwards.












