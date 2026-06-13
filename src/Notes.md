3.CREATING A EXPRESS SERVER
   - creating a folder/repository called devTinder
   - we gave commands like npm init , it gets project description = pacjkage.json like
   - after that we installed express = npm i express
   - we created server and wrote thhese  command, here app.use, without route should be last other wise you will not work
   - const express = require("express");

const app = express();

app.use( "/test", (req, res) => {
  res.send("server TEsT responded in &77 port ");
})
app.use( "/hello", (req, res) => {
  res.send("Hello responded in 777 port");
})
app.use( "/vishnu", (req, res) => {
  res.send("Hello VISHNU in 777 port");
})


app.use((req, res) => {
  res.send("server responded in &77 port ");
})




app.listen(7777, () => {
    console.log("app server is enabled");
})
    SEE THE ERROR CAREFULLY :
    If interviewer asks:
------------------------------
Why is /test not working even though route exists?

You say:

Because a global app.use() middleware without a path is intercepting all requests before /test route, sending a response early and preventing further route handlers from executing.
    -------------------------------------------------
  - after these we installed nodemon  npm install --save-dev nodemon, = after this we can use npm run dev
  - be careful you are writing code , w.r.to = npm start = npm run dev 
 ----------
 (^ caret)-- Allows minor + patch updates, but NOT major updates
   ✔ 4.18.3 (patch)
✔ 4.19.0 (minor)
✔ 4.99.0 (minor)
❌ 5.0.0 (major not allowed)
------------
  (~ Tilde) ✔ 4.18.3 allow only patch updates 
✔ 4.18.4
❌ 4.19.0 (minor blocked)
❌ 5.0.0 (major blocked)
-------------------------------------------------------------------------------
4.Routing and Request handlers
 - if you see, when git is installed thriugh gitinit, it will show 908 changes, but we didnt change that, but when u deleted that nodeules, u can see thages to 4(not universal), AGAIN we type command
 npm install, it installs all commands , that are there in the package.json, exprees..etc (dont panic)// that is the reason we are not in poition to push node modules to git, because we can install any time.
 -- for that u can say to git= ignore these files, 
 u can cretae file .gitignore and put node_modules
 ----- github in (remote) repository
 ----our code is in local repository(git init)
 1️⃣ git remote add origin https://github.com/vishnu1234300/vishnuTinder.git

SL:

Connects your local Git project to a GitHub repository.

Meaning:

Local project = on your laptop
Origin = nickname for GitHub repository
Now Git knows where to push code
2️⃣ git branch -M main

SL:

Renames the current branch to main.

Meaning:

Your branch may be master or something else
GitHub's standard branch name is main
This makes both sides use the same branch name
3️⃣ git push -u origin main

SL:

Uploads local commits to GitHub and links local main with GitHub main.

Meaning:

push → send code to GitHub
origin → GitHub repository
main → branch name
-u → remember this connection for future pushes
-m = mesage 
-M = master = main
-u = remember and maintain relationship with remote and local 
-- cluster have multiple databases
--------------------------------------------
INSTALLED postman for api testing and http methods, workspace, collection,
7.dive deep into the api
.. here we added ms dhoni into the database,here we have some more concepts invoved