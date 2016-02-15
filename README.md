# Angular 2.0 (beta 6) + TypeScript seed - "Goldilocks Edition"

Setting up a build for Angular 2.0 is a non-trivial task and can suck up a lot of your time. I found a few 'seed' projects, which provide a good starting point for Angular 2.0 development, however the ones I found were either [too simple](https://github.com/pkozlowski-opensource/ng2-play) or [far too complicated](https://github.com/mgechev/angular2-seed) for my needs. That's why I decided to put together a simple, yet complete, seed project that was "just right", the [Goldilocks](https://en.wikipedia.org/wiki/Goldilocks_and_the_Three_Bears) of seed projects!

This project has TypeScript compilation, source maps, linting, live reload and also packages the built output into a distribution folder.

## Usage

Clone or copy this project, then use npm to fetch the dependencies:

```
npm install
```

If you haven't used gulp before, install it as a global:

```
npm install -g gulp
```

Now build the project:

```
gulp
```

You should see something like the following:

```
$ gulp
[08:13:14] Using gulpfile ~/Projects/angular2-seed/gulpfile.js
[08:13:14] Starting 'tslint'...
[08:13:14] Starting 'clean'...
[08:13:15] Finished 'tslint' after 303 ms
[08:13:15] Finished 'clean' after 295 ms
[08:13:15] Starting 'compile'...
[08:13:15] Starting 'copy:libs'...
[08:13:15] Starting 'copy:assets'...
[08:13:18] Finished 'copy:libs' after 2.86 s
[08:13:18] Finished 'copy:assets' after 2.86 s
[08:13:18] Finished 'compile' after 2.88 s
[08:13:18] Starting 'build'...
[08:13:18] Finished 'build' after 43 μs
[08:13:18] Starting 'default'...
[08:13:18] Finished 'default' after 16 μs
```

The built output is now in the `dist` folder - you can now start up a local development server to see the results:

---

##Hello World

Your Angular 2 seed is fully functioning!

---

For faster development cycles you can run the following:

```
gulp serve
```

This command runs the build and starts up a development server pointing at the output. The `src` folder is watched for changes with the development server reloading automatically when the changes have been built.

## Folder structure

The following is a brief overview of everything in this project:

 - `dist` - this folder is constructed by the build and contains the compiled output ready to be served
 - `src` - all of the project source lives in this folder
   - `src/app/greeting/greeting.*` - the one Angular 2 component that this project contains, containing the modules TypeScript, HTML and CSS.
   - `src/app/bootstrap.ts` - the entry point of the application
   - `src/index.html` - the HTML for page which bootstraps the app. This loads Angular, SystemJS then loads the bootstrap code.
   - `src/main.css` - CSS for index page

- `gulpfile.js` - the gulp build
- `package.json` - details the nature of this project and its dependencies (as used by `npm install`)
- `tsconfig.json` - the TypeScript compiler configuration
- `tslint.json` - the TypeScript linter configuration

## Development tools

For Angular 2 / TypeScript development I am using the Atom editor with the **atom-typescript** plugin, which  together with **linter-ts**.
