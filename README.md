Documentation for the loc8r project.

used the following documentation to install Bootstrap:

    https://community.c9.io/t/using-bootstrap/1603
    
    https://www.youtube.com/watch?v=MqsiIp_M7lw
    
    
PUSH TO GITHUB USING SCRIPT FILE
*create a github.sh file:
#!/bin/bash
# helpful: http://stackoverflow.com/questions/8482843/git-commit-bash-script

git add .
read -p "Commit description: " desc
git commit -m "$desc"
git push -u origin master
        
*Run
sudo chmod 775 github.sh

*to push to github run $ 
./github.sh

*TO RUN PROGRAM
npm start
https://loc8r-rregalado.c9users.io/

*PUSH TO HEROKU
git push heroku master
    
*MONGOLAB URI:
mongodb://ronaldr93:72c084d218@ds011389.mlab.com:11389/loc8r

*Restoring data to live database
mongorestore -h ds011389.mlab.com:11389 -d loc8r -u ronaldr93 -p 72c084d218 ~/tmp/mongodump/Loc8r

*testing Live Database
mongo ds011389.mlab.com:11389/loc8r -u ronaldr93 -p 72c084d218

*Ensure Heroku uses production mode
heroku config:set NODE_ENV=production

*Adding the request module to our project
npm install --save request



