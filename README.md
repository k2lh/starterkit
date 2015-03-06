# Starter Kit 

This is based on the angular-seed app, with some variations: it's using gulp to watch & compile the bootstrap files, contains no grunt, and is actually pretty stripped-down, all things considered.

### Prerequisites

Install node.js and npm. 

Clone the repo. 

### Getting Started

Everything is already set up for you. Just run:

```
npm install
```

That may take a minute or two. When that's done, run:

```
bower install
```

This will kick off bower and get all the dependencies set up. Once that's done, install a node server. Do it globally, and then you won't have to do it again. 

```
npm install -g serve
cd starterkit/app
serve
```

Now the server is running, and you can see the site at localhost:3000/app/. Next, open a second tab in your terminal/console, to fire up gulp to watch & compile your less files. 

```
cd starterkit
gulp watch
```

### More coming...
 
There are more files in there for testing, but we'll get into that after we cover the basics. 
