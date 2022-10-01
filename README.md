# kaijian-zhang-capstone-server
# For Mac only
##Step1: clone the application
##Step2: run "npm i" in the terminal to install the package
##Step3: ask me for a pulic folder and put it into the "src" folder
##Step4: create a ".env" file
##Step5: Inside the ".env" file, add:
  ##Note: FILE_PATH should be your entire path from Users to the public folder
  ###CLIENT_URL=http://localhost:8080
  ###PORT =5050
  ###FILE_PATH='/Users/username/Desktop/.../kaijian-zhang-capstone/server/public'
##Step6: Open your MySQL workbench and create a new schema 
##Step7: Open the knexfile.js file, fill in your database information you just created.
##Step8: Run "npm run migrate" to create table
##Step9: Run "npm run seed" to create data
##Step10: Run "npm run start" to start the server

