# Platform Web
## Introduction :
Within this project, I am going to present to you an example of CRUD Application With Node js and Oracle database in the contexe of smart university.
### Problem:
As soon as I submitted my application to my university, I noticed that it has a sportive infrastructure, digital infrastructures and workspaces, 
but it has a limited capacity so it is possible that you go to the university and you can not find available space and therefore you have to go to the security 
agent and make the reservation before one or two days. So as a web developement student, to solve this problem I decide to create an application which allows us,
the students, to reserve the different resources of the university either the sports halls, or the sports fields, or the workspaces, or the computers, using the skills we learned in Node.js and Oracle database trainings.

### Solution 
The solution I propose is named uemf resources. which is a web application that allows uemf students to reserve any resource in one click.

Therefore, the programming of this web application will be carried out in Node js for several reasons like: run JavaScript in a single thread, and the processing is asynchronous...

For database I will use oracle because it provides a rich set of default security features to manage user accounts, authentication, privileges wich help to protect data...

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

### CRUD apps consist of three parts; the `database`, `user interface`, and `API/Backend`.

#### Database:
* IN this project I created two Users
<img width="834" alt="image" src="https://user-images.githubusercontent.com/75392302/216507896-3c6589f0-99f1-4f3b-95b9-4c2ce36f11d3.png">
<img width="627" alt="image" src="https://user-images.githubusercontent.com/75392302/216508125-d86959f4-a9ab-43d4-b3cb-410af2bfa01d.png">

The first user is an administrator with have full access, modification and management rights .

<img width="391" alt="image" src="https://user-images.githubusercontent.com/75392302/216508594-5765de1f-0c11-4fec-b110-3df32ff32da8.png">

The second user is a normal user having access only to the database and having a restriction to see certain tables 
<img width="504" alt="image" src="https://user-images.githubusercontent.com/75392302/216508826-1f1f0418-3735-4ef4-aab4-73d24586b91a.png">


* And then I will connect as privilaged user and I will create three table that I will need to manage my web app which are: 
##### Users
<img width="525" alt="image" src="https://user-images.githubusercontent.com/75392302/216517707-a2817387-2e81-49f8-a2cb-3e3b29f2ef91.png">

And I will insert to it the two users I have just created 
<img width="837" alt="image" src="https://user-images.githubusercontent.com/75392302/216517845-064bb320-6803-470f-8b49-0bdfab88f813.png">

This table will help me to control access to my web app. Login part need to get entred username and password and compare them with existing users.
And as we know Oracle database passwords are hashed so is not possible to get the original clear-text password from the hash value. 
 
<img width="379" alt="image" src="https://user-images.githubusercontent.com/75392302/216518137-cd662bd9-a39e-4ee4-a848-1c90e1446272.png">
<img width="277" alt="image" src="https://user-images.githubusercontent.com/75392302/216518216-a40f163b-db08-42e7-a2bb-a7674edda776.png">

That is why I will store users in this table.

##### Ressources
<img width="539" alt="image" src="https://user-images.githubusercontent.com/75392302/216518361-92409229-ba50-45f6-ab75-704c6449e29d.png">
In this table I will store diffrents resources added by admin .

##### Demandes
<img width="877" alt="image" src="https://user-images.githubusercontent.com/75392302/216518457-ea80b93b-2370-4c45-9bec-b6a97e9a2909.png">
In this table I will store reservations made by students.

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

* Home page:
<img width="944" alt="image" src="https://user-images.githubusercontent.com/75392302/216521288-5987ce09-f5bf-4e85-92af-39b8835d99dc.png">
<img width="929" alt="image" src="https://user-images.githubusercontent.com/75392302/216521386-6de3ddc0-1645-4e1c-92cc-b9440831b812.png">
<img width="938" alt="image" src="https://user-images.githubusercontent.com/75392302/216521469-1fb0f7d0-e034-422d-a718-14405b84c31f.png">

* Login page:
<img width="876" alt="image" src="https://user-images.githubusercontent.com/75392302/216521675-27a5233d-1f45-43ec-a2e9-7d07504f099b.png">

In the back end I get username and password entred, I connect to oracle db as privilaged user and select row in my_users table where the username and password equal to the entered ones if I got a row so login is succesful if I got any row the login is failed as following

<img width="671" alt="image" src="https://user-images.githubusercontent.com/75392302/216726126-507d4852-456f-46e0-a823-4726a0d0871e.png">


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

#### We have the following pages :

##### The admin have the right to see All Reservations and validate or reject a reservation : <img width="960" alt="image" src="https://user-images.githubusercontent.com/75392302/216604923-3a64aaf2-05b3-4c51-9649-eb893ab6d7dc.png">

To display All reservation we need to connect to the database as admin user and select all rows of Demandes table as following :

<img width="540" alt="image" src="https://user-images.githubusercontent.com/75392302/216604738-0f9a45ad-7fac-4488-b115-0dab0b01a17b.png">

* To validate a reservation we get its id and then we connect to the database always as admin user and Update Status column of the Demandes row ,where the id equal to the geted one, to "validated".

<img width="740" alt="image" src="https://user-images.githubusercontent.com/75392302/216608157-77237229-9a33-4752-ba02-ef495a328a58.png">

* To reject a reservation we get its id and then we connect to the database always as admin user and Update Status column of the Demandes row ,where the id equal to the geted one, to "Rejected".

<img width="730" alt="image" src="https://user-images.githubusercontent.com/75392302/216608292-33fa0e5d-2b30-4e41-abde-950f824af5b5.png">

##### The admin can also see list of resources and delete or add a reource  : 
<img width="956" alt="image" src="https://user-images.githubusercontent.com/75392302/216608689-16e9bca3-507c-404b-b2bf-82a42a3711dc.png">

To get list of resources we connect again to the database as admin user and we select all rows of "Ressource" table.

<img width="518" alt="image" src="https://user-images.githubusercontent.com/75392302/216634810-7b84a20f-a751-4085-9381-0444b5363c84.png">

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

#### Now let Test if we connect as student_user and we try to do operations which are not allowed to this user in the database.

#### 1. Trying to add new User 
 First we connect to oracle database as student user 
 
 <img width="686" alt="image" src="https://user-images.githubusercontent.com/75392302/216644027-73027b35-15eb-481c-b240-9dd12700311a.png">
 
 Now going to web interface and try to add user 
 
 <img width="873" alt="image" src="https://user-images.githubusercontent.com/75392302/216644495-91fc79b0-db80-45a2-8eeb-72a22f9d73f9.png">

As we see an error occured because student_user do not have right to insert rows in my_users table.

#### 2. Trying to add new Resource 
 First we connect to oracle database as student user 
 
<img width="685" alt="image" src="https://user-images.githubusercontent.com/75392302/216644793-6f90eab3-aaeb-4b8f-9024-33d6d1fa07f9.png">
 
Now going to web interface and try to add Ressource 

<img width="878" alt="image" src="https://user-images.githubusercontent.com/75392302/216643329-75c309b5-a512-4ef5-8a17-ddd78995a69e.png">

Again an error occured because student_user do not have right to insert rows in Ressource table.

 
#### 3. Trying to Validate/reject a Resevation

 First we connect to oracle database as student user 
 
 <img width="680" alt="image" src="https://user-images.githubusercontent.com/75392302/216645488-1025bcf8-08a1-49f5-85e9-2858b34096e9.png">

Now going to web interface and try to validate Reservation

<img width="946" alt="image" src="https://user-images.githubusercontent.com/75392302/216646337-de66721b-d1dc-423d-9de8-7780a8b168bb.png">

Again an error occured because student_user do not have right to Update rows in Demandes table.

#### In the event of a database failure or in the event of a sudden server shutdown, how can we restore the data? 
#### Answer :to see all database transactions and modifications we can use Log Files

## Generate Log File For each user :

 Log file records all the INSERT, UPDATE, and DELETE query operations performed on a database.
 
 To generate a log file in an Oracle database, you can follow these steps:

#### 1.Connect to the database as admin user, using SQL*Plus tool.
<img width="443" alt="image" src="https://user-images.githubusercontent.com/75392302/216719461-3ddf5a22-605c-49f6-8d26-a408733c1f4a.png">

#### 2.Start the database in archive log mode, if it is not already running in that mode. To do this, we use the following command:
<img width="455" alt="image" src="https://user-images.githubusercontent.com/75392302/216715454-299a98a6-298a-4d4e-a794-ebe9d3b63434.png">

To solve this error we shutdown instance and startup it by running the following commands

<img width="385" alt="image" src="https://user-images.githubusercontent.com/75392302/216715851-7dd02966-0eda-4c48-acd2-145137fa6106.png">

Then retry to Start the database in archive log mode

<img width="253" alt="image" src="https://user-images.githubusercontent.com/75392302/216716023-0527d189-a839-492b-9f67-b6a38217d4bf.png">

#### 3. Enable automatic archiving of redo logs using the following command:
<img width="389" alt="image" src="https://user-images.githubusercontent.com/75392302/216716450-fc04b5df-5c0b-427c-8413-a0ba05b85776.png">

#### 4. Set the destination for the archive log files. To do this, we execute the following command:
<img width="484" alt="image" src="https://user-images.githubusercontent.com/75392302/216716688-25e99645-03a5-4a68-ac0c-7678d8a2ac54.png">

#### Now consulting the archive list and as we can see the log file is added 
<img width="369" alt="image" src="https://user-images.githubusercontent.com/75392302/216717302-0bb63865-4354-40ea-ad4f-f312bccafb69.png">

Following the same steps we add the studentFile.log 

<img width="415" alt="image" src="https://user-images.githubusercontent.com/75392302/216717757-5317dd43-4460-4310-9236-5635e84f3fbd.png">


Now My project is ready to deploy it using for example render web site, we just need to get license to migrate our database to oracle database cloud.

### conclusion:
`From a personal point of view`, this project allowed me to get new
skills and familiarize myself a little more with oracle ddatabase. This experience will be an asset for the pursuit of my studies and for my professional career.


                                             Thank you for your attention!



