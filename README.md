<h1 align="center">Paynau People</h1>


## Front End instructions

In order to run the basic front end application that was created in React for this project, the procedure to follow is: 

1. Clone the project repository in your local pc, with the following link: 

https://github.com/jram828/PAYNAU-technical-test.git

2. Open the repository in your preferred editor
3. Open the "Front" folder in a new terminal
4. Run the project with npm run dev
5. Use VITE_BASE_URL=http://localhost:5001/person as environmental variable
6. Open the project at http://localhost:5173 in your preferred browser
   
![image](https://github.com/user-attachments/assets/4ecc315c-5c93-4af6-bb89-80e834ceef04)


## Backend instructions

The API for this test was developed using Node JS and Express. It was contenerized using docker.

In order to run it locally, the steps to follow are:

1. Open Docker Desktop
2. Login to docker from your terminal (I use VS CODE), with docker login command.
3. Pull docker image with: docker pull jram828/finalpaynau:v1
4. From the terminal, verify that the image is stored locally
5. Pull docker image for MySQL
6. Run a container from the therminal using run -d -p mysql
7. Run a container from the therminal using run -d -p jram828/finalpaynau 5001:3001
8. In order to verify that the API is working, open http://localhost:5001/paynau-docs at your browser.

   ![image](https://github.com/user-attachments/assets/ed2c0e52-0852-450a-8607-764ccc98da82)


