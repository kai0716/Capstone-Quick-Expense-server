# kaijian-zhang-capstone-server
## For Mac only
### Step1: Clone the application
### Step2: Run `npm i` in the terminal to install the package
### Step3: Ask me for a public folder and put it into the `src` folder
### Step4: Create a `.env` file
### Step5: Inside the `.env` file, add:
* Note: FILE_PATH should be your entire path from Users to the public folder
  * PORT =5050
  * FILE_PATH='/Users/username/Desktop/.../kaijian-zhang-capstone/server/public'
### Step6: Open your MySQL workbench and create a new schema 
### Step7: Open the knexfile.js file, fill in your database information you just created.
### Step8: Run `npm run migrate` to create table
### Step9: Run `npm run seed` to create data
### Step10: Run `npm run dev` to start the server


