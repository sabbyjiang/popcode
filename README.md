# Popcode #

Popcode is a simple HTML/CSS/JavaScript editing environment for use in the
classroom. It's a lot like JSBin or JSFiddle, but with a strong emphasis on
novice users.

### Project status ###

Popcode is currently somewhere between a proof of concept and a work in
progress.

### Try it out ###

You can try out Popcode at
[`https://popcode.org`](https://popcode.org).

Try doing something wrong. The main emphasis of this project is giving feedback on code problems that novice users can understand.

## Features ##

* Edit HTML, CSS, and JavaScript in the browser; in-browser preview updates as
  you type.
* Get immediate, comprehensive, easy-to-understand feedback about problems in
  your code.
* Errors can't be ignored. If there are any errors in the code, the live
  preview is replaced by an error list.
* That's it, so far.

### About validation ###

The validation system is the main point of this project. Most syntax checkers,
linters, and style enforcers tend to provide feedback using language that is
geared toward experienced coders, not beginners. Thus, providing a translation
of error messages into plain English for students is the overriding concern of
this project.

Popcode tends toward strict enforcement of lint and code style, even when
enforced style decisions are arbitrary, under the philosophy that giving
students one right way to do it eliminates ambiguity and aids the learning
process.

### Feature roadmap ###

Check out the [Trello board](https://trello.com/b/ONaFg6wh/popcode).

## Technical details ##

Popcode uses **React** to render views, **Redux** to manage application state,
**Ace** as the code editor, and **Browserify** to package the client-side
application.

Right now, it includes **slowparse**, **htmllint**, **css**, **PrettyCSS**,
and **jshint** for error checking.

The Ace editor has a built-in system for error checking, but it's really hard
to extend, so I've disabled it. Right now the editor just synchronously runs
the validations whenever the code changes. It would be reasonably easy to move
this into a web worker, although I think a hand-rolled web worker would still
be much easier than trying to integrate with Ace's web worker framework.

## Contributing ##

Yes please. I don't think there's any way I'm going to make this a viable
product on my own. Pull requests are most welcome.

It's worth noting that I am pretty new to a lot of the technologies used in
this project, so feel free to use a pull request to set me straight.

### Running locally ###

Pretty easy. Just check out the code, then run:

```bash
$ npm install
```

That'll pull down the dependencies. Then, in one shell session, run:

```bash
$ npm run devserver
```

Now you'll have a static server, accessible at `http://localhost:8080`.
The JavaScript bundle will recompile as you edit it, and will even live-reload
in the browser.

## License ##

Popcode is distributed under the MIT license. See the attached LICENSE file
for all the sordid details.

## Contributors ##

* [Mat Brown](https://github.com/outoftime) (maintainer)
* [Alejandro AR](https://github.com/kinduff)
* [Katie Conneally](http://www.katieconneally.com/) created the name Popcode

## Contact ##

Feel free to email me at mat.a.brown@gmail.com if you have any questions.