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

The first user is an administrator with full access, modification and management rights 

<img width="391" alt="image" src="https://user-images.githubusercontent.com/75392302/216508594-5765de1f-0c11-4fec-b110-3df32ff32da8.png">

The second user is a normal user having access only to the database and having a restriction to see certain tables 
<img width="504" alt="image" src="https://user-images.githubusercontent.com/75392302/216508826-1f1f0418-3735-4ef4-aab4-73d24586b91a.png">


* And then I will connect as user_admin and I will create three table that I will need to manage my web app which are: 
##### Users
<img width="525" alt="image" src="https://user-images.githubusercontent.com/75392302/216517707-a2817387-2e81-49f8-a2cb-3e3b29f2ef91.png">

And i will insert to it the two users I have just created 
<img width="837" alt="image" src="https://user-images.githubusercontent.com/75392302/216517845-064bb320-6803-470f-8b49-0bdfab88f813.png">

This table will help me to control access to my web app. Login part need to get entred username and password and compare them with existing users.
And as we know Oracle database passwords are hashed so is not possible to get the original clear-text password from the hash value. 
 
<img width="379" alt="image" src="https://user-images.githubusercontent.com/75392302/216518137-cd662bd9-a39e-4ee4-a848-1c90e1446272.png">
<img width="277" alt="image" src="https://user-images.githubusercontent.com/75392302/216518216-a40f163b-db08-42e7-a2bb-a7674edda776.png">

That is why I will store users in this table.

##### Ressources
<img width="539" alt="image" src="https://user-images.githubusercontent.com/75392302/216518361-92409229-ba50-45f6-ab75-704c6449e29d.png">
In this table i will store diffrents resources added by admin .

##### Demandes
<img width="877" alt="image" src="https://user-images.githubusercontent.com/75392302/216518457-ea80b93b-2370-4c45-9bec-b6a97e9a2909.png">
In this table i will store reservations made by students.

* Also I will create two roles:
1. admin role with all privilages associated to user_admin
<img width="649" alt="image" src="https://user-images.githubusercontent.com/75392302/216518804-d5cea4a5-7159-4a83-9231-bc6e91318850.png">

2. student role with limited privilages associated to user_student
<img width="664" alt="image" src="https://user-images.githubusercontent.com/75392302/216518682-1a82b761-4fef-4739-932a-db23de9f759e.png">

Those two role will help me afterwards.
##### connecxion
We can connect to Oracle Database in node js using oracledb module so we need To install it <img width="391" alt="image" src="https://user-images.githubusercontent.com/75392302/216519903-c58e6d89-dd18-4af1-b2da-6bab64caa8ce.png">

### User Interface:
UEMF resources is an application, which will be used by students and administrator so i need to have two session of connection.

* Home page:<img width="944" alt="image" src="https://user-images.githubusercontent.com/75392302/216521288-5987ce09-f5bf-4e85-92af-39b8835d99dc.png">
<img width="929" alt="image" src="https://user-images.githubusercontent.com/75392302/216521386-6de3ddc0-1645-4e1c-92cc-b9440831b812.png">
<img width="938" alt="image" src="https://user-images.githubusercontent.com/75392302/216521469-1fb0f7d0-e034-422d-a718-14405b84c31f.png">

* Login page:
<img width="876" alt="image" src="https://user-images.githubusercontent.com/75392302/216521675-27a5233d-1f45-43ec-a2e9-7d07504f099b.png">

##### If we log in as a simple user:
<img width="875" alt="image" src="https://user-images.githubusercontent.com/75392302/216522385-ec2dd4e0-cf44-4f14-9939-633b4b039dd7.png">

##### we have the following pages :

User Reservation List :<img width="956" alt="image" src="https://user-images.githubusercontent.com/75392302/216522901-bbe7ae31-f206-46a2-bc6d-9c6d240ca29e.png">













