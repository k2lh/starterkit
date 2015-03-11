# Starter Kit 

This is based on the angular-seed app, with some variations: it's using gulp to watch & compile the bootstrap files, contains no grunt, and is actually pretty stripped-down, all things considered.

### Prerequisites

Install node.js and npm. 

Clone the repo. 

Then open the folder where you put your repo, and do the rest.

### Getting Started

Everything is already set up for you. Just run:

```
npm install
```

That may take a minute or two. When that's done, run:

```
bower install
```

If you don't already have gulp, install it, too.

```
npm install gulp
```

Once that's done, install a node server. Do it globally, and then you won't have to do it again. 

```
npm install -g serve
cd starterkit
serve
```

Now the server is running, and you can see the site at localhost:3000/app/. Next, open a second tab in your terminal/console, get into the project's top level folder, and fire up gulp to watch & compile your less files. 

```
cd starterkit
gulp watch
```

To actually see the page running, you'll need to go to:

```
localhost:/3000/app
```

### More coming...
 
There are more files in there for testing, but we'll get into that after we cover the basics. 
