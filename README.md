# electorn

1. npm init

2. npm install -g --save-dev electron

3.  npm install typescript -g    // install type script compiler

   * tsc --version
   *  Turning this Node application into an Electron application is quite simple - we merely replace the `node` runtime with the `electron` runtime. 

   <pre>
       {
         "name": "your-app",
         "version": "0.1.0",
         "main": "main.js",
         "scripts": {
           "start": "electron ."
         }
       }
   </pre>

4. npm start

5.  You can use Bower to manage these front-end dependencies. Install bower using − 

   * npm install -g bower
   * bower install bootstrap

6. tsc --version: 3.8.3