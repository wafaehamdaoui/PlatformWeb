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

### User Interface & API:
UEMF resources is an application, which will be used by students and administrator so i need to have two session of connection.

* Home page:<img width="944" alt="image" src="https://user-images.githubusercontent.com/75392302/216521288-5987ce09-f5bf-4e85-92af-39b8835d99dc.png">
<img width="929" alt="image" src="https://user-images.githubusercontent.com/75392302/216521386-6de3ddc0-1645-4e1c-92cc-b9440831b812.png">
<img width="938" alt="image" src="https://user-images.githubusercontent.com/75392302/216521469-1fb0f7d0-e034-422d-a718-14405b84c31f.png">

* Login page:
<img width="876" alt="image" src="https://user-images.githubusercontent.com/75392302/216521675-27a5233d-1f45-43ec-a2e9-7d07504f099b.png">

##### If we log in as a simple user:

<img width="875" alt="image" src="https://user-images.githubusercontent.com/75392302/216522385-ec2dd4e0-cf44-4f14-9939-633b4b039dd7.png">

##### we have the following pages :

##### Every student have the right to see his Reservations list to consulte their status(validated or not yet) :

<img width="956" alt="image" src="https://user-images.githubusercontent.com/75392302/216522901-bbe7ae31-f206-46a2-bc6d-9c6d240ca29e.png">

To get this list we need to connect to the database with the student user and select all rows of "Demamdes" table where the student is the current user as following:

<img width="632" alt="image" src="https://user-images.githubusercontent.com/75392302/216599859-0e729aba-9d1b-4e91-a442-6c2e8eeeb229.png">

##### As he can cancel a reservation.
To cancel a reservation we get its id and then we connect to the database always as student user and then delete Demande's row where the id equal to the geted one like following:

<img width="631" alt="image" src="https://user-images.githubusercontent.com/75392302/216599236-8aa93b03-f412-4e39-8c87-7c176d7d502f.png">

##### A student can also reserve a resource : 

<img width="878" alt="image" src="https://user-images.githubusercontent.com/75392302/216593524-6679ec18-f90d-49f6-b0ab-f31fca7980bf.png">

To add a new reservation we need to connect to the database as student user and insert a new row in Demandes table :

<img width="722" alt="image" src="https://user-images.githubusercontent.com/75392302/216602855-650bdcf4-8cb8-4737-bec6-1be7a060dad7.png">

By default status reservation is "waiting" but it can be udated only by admin 

##### All students have the right to see list of resources :
<img width="934" alt="image" src="https://user-images.githubusercontent.com/75392302/216594494-19c63349-3153-4552-9acc-a64c4ac6b96e.png">

To get list fo resources we connect again to the database as student user and we select all rows of "Ressource" table.

<img width="566" alt="image" src="https://user-images.githubusercontent.com/75392302/216610558-0b6e2dcb-33d5-4511-a2d9-342c240878e4.png">

#### As we can see, a student has privileges limited in reading table contents and adding or deleting a reservation.

### Now if we log in as an admin user:<img width="877" alt="image" src="https://user-images.githubusercontent.com/75392302/216603894-512a5962-f4e8-4db5-8262-2c824e6fd755.png">

#### we have the following pages :

##### The admin have the right to see All Reservations and validate or reject a reservation : <img width="960" alt="image" src="https://user-images.githubusercontent.com/75392302/216604923-3a64aaf2-05b3-4c51-9649-eb893ab6d7dc.png">

To display All reservation we need to connect to the database as admin user and select all rows of Demandes table as following :

<img width="540" alt="image" src="https://user-images.githubusercontent.com/75392302/216604738-0f9a45ad-7fac-4488-b115-0dab0b01a17b.png">

* To validate a reservation we get its id and then we connect to the database always as admin user and Update Status column of the Demandes row ,where the id equal to the geted one, to "validated".

<img width="740" alt="image" src="https://user-images.githubusercontent.com/75392302/216608157-77237229-9a33-4752-ba02-ef495a328a58.png">

* To reject a reservation we get its id and then we connect to the database always as admin user and Update Status column of the Demandes row ,where the id equal to the geted one, to "Rejected".

<img width="730" alt="image" src="https://user-images.githubusercontent.com/75392302/216608292-33fa0e5d-2b30-4e41-abde-950f824af5b5.png">

##### The admin can also see list of resources and delete or add a reource  : 
<img width="956" alt="image" src="https://user-images.githubusercontent.com/75392302/216608689-16e9bca3-507c-404b-b2bf-82a42a3711dc.png">

* To delete a resource we get its id and then we connect to the database always as admin user and the we delete Ressource's row where the id equal to the geted one like following:

<img width="654" alt="image" src="https://user-images.githubusercontent.com/75392302/216625364-20afee55-47fe-4457-be43-bb2804f0bed2.png">

* To add a new resource we click on add icon to get following form

<img width="880" alt="image" src="https://user-images.githubusercontent.com/75392302/216611346-81c33260-c564-4fcb-bdb3-7e9abbe08a4a.png">


* We connect again to the database as admin user and we insert the entered information to the Ressource table:

<img width="782" alt="image" src="https://user-images.githubusercontent.com/75392302/216623678-79608729-1bdf-44f9-af7c-0df3257aa02b.png">

##### The admin can also see list of users and delete or add a new user  : 
<img width="930" alt="image" src="https://user-images.githubusercontent.com/75392302/216624480-1198505e-d939-4cef-a348-eef63efbdff1.png">

* To delete a user we get its id and then we connect to the database always as admin user and the we delete user's row where the id equal to the geted one like following:

<img width="632" alt="image" src="https://user-images.githubusercontent.com/75392302/216624919-40ad7a2c-0ffc-4127-9f12-43470fc09e29.png">

* To add a new user we click on add icon to get a form, here we have two type of users:
###### User with Base role is a simple user(student) wich have limited permission of access 
<img width="949" alt="image" src="https://user-images.githubusercontent.com/75392302/216626731-cd9594fe-0751-4925-b345-3e8643715616.png">

In the backend to create this user we connect to the database as admin user who has all privilages and we create a new user, we insert entered information into my_users table, and we affect student_role ,we have already created, to the new user as following :

<img width="809" alt="image" src="https://user-images.githubusercontent.com/75392302/216629476-66842c6c-9811-49b6-b14f-5d16220318e5.png">
 
When we affect student_role to new user, we automatically affect student_role privilages to this user which are : select for all tables and insert & delete for Demandes table .

Here my user is succefuly added

<img width="1080" alt="image" src="https://user-images.githubusercontent.com/75392302/216631107-a88d7b7c-d8e6-4d0f-bc9e-fe8c9597ba7d.png">

###### User with Admin role wich have all permission of access 
<img width="882" alt="image" src="https://user-images.githubusercontent.com/75392302/216631952-b64a1cff-b1ea-499a-af65-1fdeb387d0b5.png">

In the backend to create this user we connect to the database always as admin user who has all privilages and we create a new user, we insert entered information into my_users table, and we affect admin_role ,we have already created, to the new user as following :

<img width="809" alt="image" src="https://user-images.githubusercontent.com/75392302/216629476-66842c6c-9811-49b6-b14f-5d16220318e5.png">
 
When we affect admin_role to new user, we automatically affect admin_role privilages to this user which are : select,insert,update,delete for all tables.

Here my user is succefuly added

<img width="983" alt="image" src="https://user-images.githubusercontent.com/75392302/216632804-7085c59f-66d8-4ab9-8d53-838efdb60b6e.png">

##### The admin have the right to see list of resources and modify it:
<img width="934" alt="image" src="https://user-images.githubusercontent.com/75392302/216594494-19c63349-3153-4552-9acc-a64c4ac6b96e.png">

To get list fo resources we connect again to the database as admin user and we select all rows of "Ressource" table.

<img width="518" alt="image" src="https://user-images.githubusercontent.com/75392302/216634810-7b84a20f-a751-4085-9381-0444b5363c84.png">









