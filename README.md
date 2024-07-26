This is my submission for the system design assignment. The following deliverables were met.

### Mandatory deliverables
- [ ] A Diagram illustrating your proposed system
- [ ] What technologies/languages you would use within each component of the system. (Is the Database PostgreSQL or MongoDB? Would you use Express or Flask to develop the API?)
- [ ] A React application acting as the front page of your Youtube clone. This page must contain a scrollable list of videos with titles and thumbnails. This page does not need to actually be functional, clicking on the videos does not need to do anything.

### Bonus points
- [ ] Any functionality added to your front page React app, for example:
  * Adding the ability for a user to "favorite" a video, and persisting a list of a user's "favorited" videos.
  * Adding the ability for a user to click on a video and watch it
- [ ] An API spec for any APIs included in your proposed system. This would include:
  * A description of all available endpoints
  * The request and response types for each endpoint
 
The MERN Stack was chosen for its flexibility and development cohesiveness. Given the CMS-like nature of MongoDB, it was suitable to store assets like videos. Node.js and Express.js were chosen as the connection to MongoDB is seamless and so is the development process.

Diagram

![Mern Diagram](https://github.com/user-attachments/assets/e0082e84-ee0c-4900-a13c-7127e9d672d4)

API Specs

![API spec](https://github.com/user-attachments/assets/7caa52ab-e28a-433e-bf9f-a7555638dfe2)

To run the app you first need to the server by running the below commands:

> cd backend
> npm install (you might have to dd --legacy-peer-deps)
> npm start

Then, you need to run the react app by running the below commands (assuming you are at the root):

> cd frontend
> npm install (yoou moght have to add --legacy-peer-deps)
> npm start

You can run test in either folder by running the following command:

> npm test


Thank you!
