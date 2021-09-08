# Elegy
### Deployed Link: [https://elegy-app.herokuapp.com/](https://elegy-app.herokuapp.com/)
### Deployment Status: [![CircleCI](https://circleci.com/gh/entombed-app/entombed-ui/tree/main.svg?style=svg)](https://circleci.com/gh/entombed-app/entombed-ui/tree/main)
### Link to Back-End Repo: [https://github.com/entombed-app/entombed_api](https://github.com/entombed-app/entombed_api)

### Table of Contents
- [Overview](#overview)
- [Installation & Viewing](#installation-and-viewing)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Sample Profile](#sample-profile-screenshots-and-gifs)
- [Wire Frames](#wireframes)
- [Future Additions](#future-additions)
- [Authors](#authors)

## Overview 

  The Elegy app allows users to create their own memorial pages. Users can create lasting gifts to their loved ones by curating photos and memories, and can be remembered in the way they'd like by writing their own obituary. Users select 'executors' who will be able to share the user's memorial page upon the user's death, and also select recipients who are to be notified upon the user's death. This allows the user's next of kin to notify a user-curated list of people upon the user's death with the push of a button, helping to eliminate an emotionally draining task from an already difficult time.

  The Elegy app interfaces with a custom-built REST API on the backend to store users, their photos, their executors and recipients.

## Installation and Viewing 

This application is deployed to Heroku. You may view the live application [here](https://elegy-app.herokuapp.com/)

To view this application on your local device:

- Clone down this repository
- Run `npm i` in your terminal
- Run `npm start` in your terminal
- To view Cypress tests open a separate tab in your terminal and run `npm run cypress`

### Technologies Used

<p text-align="center"> 
    <img alt="React Badge" src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat-square)" />
    <img alt="JavaScript Badge" src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat-square" />
    <img alt="HTML5 Badge" src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff&style=flat-square" />
    <img alt="CSS3 Badge" src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff&style=flat-square" />
    <img alt="Cypress Badge" src="https://img.shields.io/badge/Cypress-17202C?logo=cypress&logoColor=fff&style=flat-square" />
</p>

## Features

-  Users can login and update their own memorial page by:

   -  Adding photo highlights of their life to their gallery
   -  Updating or editing their obituary
   -  Changing their profile picture 

-  Users can view:

   -  Their chosen executor who will manage their memorial page upon the user's death
   -  A preview of what their memorial page will look like to visitors
   -  A countdown clock which estimates the longest amount of time the user might live

-  An email will be sent out to a user's recipients containing a link to their memorial page when the countdown expires

-  Elegy is also a progressive web app which gives users the ability to:
   -  Download the application to their phone or desktop
   -  View all of their most recently updated content before going offline
   -  Save updates to their application like changing their profile picture which will be completed when going online again  

---
## Sample Profile Screenshots and GIFs
  
  ![Dashboard](https://user-images.githubusercontent.com/77019930/132437538-ef6afaf3-08c5-417c-ba76-974f5d692ff9.png)

  ![Dashboard Navigation](https://media.giphy.com/media/XU0E2IuJgZlJquwp9c/giphy.gif?cid=790b76112599be0028edf2c8126347647b23b7a3a9ac34ec&rid=giphy.gif&ct=g)
  
  ![Editing Obituary](https://media.giphy.com/media/WFlWPkLONdzbMXNZjI/giphy.gif?cid=790b7611b0beef9b065fa60fc8e49c1eb785e0396c414dc6&rid=giphy.gif&ct=g)

  ![Clock](photos/clock.png)

  ![Gallery](photos/gallery.png)

  ![Executor](photos/executor.png)

  ![Obituary](photos/obituary.png)

  ![Summary](photos/summary.png)


---

## Wireframes

-  All Wireframes: [https://miro.com/app/board/o9J_l0-HNPM=/](https://miro.com/app/board/o9J_l0-HNPM=/)
-  Initial Dashboard wireframe: 
<img width="304" alt="Dashboard" src="https://user-images.githubusercontent.com/77019930/132558251-ef26f88c-3173-494d-9954-0db5178d6bc5.png">
-  Countdown Wireframe:
<img width="304" alt="Countdown" src="https://user-images.githubusercontent.com/77019930/132558533-551410e2-926b-4099-88cd-cf9c46cd8c23.png">


## Future Additions
  * Add user creation page
  * Add recipients creation/management view
  * Add executors creation/mangement view
  * Add more functions to background sync
  * Add delete gallery photos function
  * Enhance styling and add more information to obituary page
  * Add ability to change countdown 
  * Add ability to manually send memorial email
  * Add ability to send email to executor when countdown ends with user login information


### Authors
#### Front-End Team
- Taylor Galloway
  - GitHub: [https://github.com/tylrs](https://github.com/tylrs)
  - LinkedIn: [https://www.linkedin.com/in/taylor-galloway/](https://www.linkedin.com/in/taylor-galloway/)
- Ashley O'Brien
  - GitHub: [https://github.com/AshleyOh-bit](https://github.com/AshleyOh-bit)
  - LinkedIn: [https://www.linkedin.com/in/ashley-o-brien-30456a51/](https://www.linkedin.com/in/ashley-o-brien-30456a51/)

#### Back-End Team
- Noah Zinter
  - GitHub: [https://github.com/NoahZinter](https://github.com/NoahZinter)
  - LinkedIn: [https://www.linkedin.com/in/noahzinter/](https://www.linkedin.com/in/noahzinter/)
- Jermaine Braumuller
  - GitHub: [https://github.com/Jaybraum](https://github.com/Jaybraum)
  - LinkedIn: [https://www.linkedin.com/in/j-braum/](https://www.linkedin.com/in/j-braum/)
**************************************************************************

**[Back to top](#table-of-contents)**
