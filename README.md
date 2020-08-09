# Crib-Hound-Backend

1. install postgresql.
   Links-https://www.postgresql.org/download/

2. Check postgresql is installed in your local machine
   Links-https://chartio.com/resources/tutorials/how-to-view-which-postgres-version-is-running/

3. Then start the postgres server on your local machine
   Links-https://www.microfocus.com/documentation/idol/IDOL_12_0/MediaServer/Guides/html/English/Content/Getting_Started/Configure/_TRN_Set_up_PostgreSQL_Linux.htm
   https://www.postgresqltutorial.com/install-postgresql/

4. In our project folder go to app/config/db.config.js

5. change the username, password, and the database name with your details in app/config/db.config.js .
    USER: "postgres", // here give your local database username. 
    PASSWORD: "root", // here give your local database password. 
    DB: "crib", // here give your local database name.

4. After successfully connecting the database, initialize node modules by using the command 'npm install' and after all node modules has been installed, pls
   start our app with "npm start" command.
   
5. Run this backend server in browser(http://localhost:8080/) ,it show will show the following message ("message":"Welcome to cribs application."}).
