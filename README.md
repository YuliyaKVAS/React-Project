# React-Project
## A promo site for Barbershop<br/>
This project bootstrapped with Create React App using Material UI. Local storage is used as a database.
**The following steps are required to run this project:**

```
git clone
to install all dependencies:
npm install
npm start
Open http://localhost:3000 to view it in the browser.
```

When the user is **not authorized the site displays navigation with 4 pages** (HOME, ABOUT US, SERVICES and CONTACTS).
The user has the opportunity to **register** and **log in** to the site and also **to log out** from the site. 
There are buttons for _sign up_ and _log in_ on each of these pages. If the user **is authorized the button log out is displayed**.

If user enters data in an _incorrect format_, the user will see a _notification about it_.
**The navigation menu displays the _fifth page - the user's personal account_ (called MY PROFILE) when  user is authorized**.

User can **make an appointment** in  personal account. 
Possible dates and time of appointment are relevant (past dates are not available, user sees only future dates while making an appointment). On the same day and at the same time only one user can make an appointment.
User can **cancel appointment**.







