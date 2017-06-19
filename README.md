# Anki themes
## Learning to code with Anki: Themes, cards, templates & syntax highlighting

Want to learn how to code? This Anki programming theme will help make your Anki development decks a little more fun to work with. Inspired by the excellent [Janki method][1], spaced repetition software is a helpful learning tool for front-end and back-end programmers, beginner to experienced.

The template is built in html and css, with [syntax highlighting][2] for inline code and code blocks using the beautiful `Monokai` and `Tomorrow` themes (I personally use these in [Sublime Text][3]). Supports developer languages such as **html**, **css**, **python**, **ruby**, **php**, **jquery**, **javascript** and whatever else you want to throw at it!

![Preview image][image-1]

*Anki Themes: 'Simple' preview image* <sup>***[1][4]***</sup>


## Card Types
There are currently two types of card, a simple card and a puzzle card. Both share the `dist/themes/assets/css/main.css` file.

1. **[Simple][5]**
  - What's the answer?
  - What does this syntax do?
2. **[Puzzle][6]**
  - What's the answer?
  - **+** Puzzle question
3. **[Cloze][7]**
  - Freeform show/hide question/answer
4. **[Selectable][8]**
  - Choose the correct answer


## Anki syntax highlighting with Markdown

- **[Anki syntax highlighting and themes][9]**

Basic syntax highlighting can be acheived simply by wrapping `<code>` with html tags, such as `<b>`, `<i>`. This works nicely with Anki's editor buttons for quick code blocks or inline code. The included *Monokai* and *Tomorrow light* themes can be easily customised with [`less`][10].

If you like pretty code blocks, you're in luck: our themes now work with [Pygments][11]; you'll need [a plugin][12], unless you're willing to get your hands dirty with terminal. Power Format Pack has really sped up my workflow,

There's some nice default colour schemes; some fields are automatically wrapped in `<code>` so all you need to do is add the symbol, class or function. The main `(code blocks ..)` need to be wrapped in `<pre><code>`. See [fields documentation][13] for more details.


#### Why use Anki Themes instead of an Anki plugin?

> ***Practicality beats purity***
> 
> Ideally, we'd use [highlight.js][14] or one of the many javascript syntax highlighters out there. In practice, however, it's proved far too difficult to make this happen with Anki, so Pygments is a far more pragmatic solution.

There's a few Anki syntax highlighting plugins around — call me old fashioned, but cramming your code with inline css feels icky to me. With **Anki themes**, you use a pure(ish) `Markdown > HTML` workflow and *easily customisable* css. It works on all platforms, too: [AnkiMobile][15], MacOS and [Android][16].

***Power format pack*** is a solid Markdown plugin for Anki — it compliments *Anki themes* and makes for a nice workflow. If you prefer using stock Anki, [see these notes][17]. I generally prefer to use supported, well documented, stable software wherever possible — minus the plugins — but **PFP** really speeds things up.

If ever Anki allows external javascript files, I can swap Pygments out for another alternative like _highlight.js_.


## Notes

### Further reading

Not sure what all the fuss is about Anki? Some great reading material below ...

- [Anki essentials][18]
- [Janki method][19]

### Installation

This is a major overhaul from the original (pre-beta), so it's not compatible with earlier versions. In future I'll try to stick to **major.minor.patch** [semantic versioning][20], so updates don't break existing cards. Unfortunately Anki makes this tricky, so view commits for any major changes to the theme. [Follow the instructions][21] for the easiest way to test the [.apkg package][22] before updating future versions.

<!-- NOTES -->

### Other notes

1. Icons courtesy of [@kompa][23]

[1]:	#further-reading
[2]:	./dist/themes/assets/css/README.md
[3]:	http://www.sublimetext.com
[4]:	#other-notes
[5]:	./dist/themes/simple/README.md
[6]:	./dist/themes/puzzle/README.md
[7]:	./dist/themes/cloze/README.md
[8]:	./dist/themes/selectable/README.md
[9]:	./dist/themes/assets/css/README.md
[10]:	http://lesscss.org
[11]:	http://pygments.org/
[12]:	https://ankiweb.net/shared/info/162313389
[13]:	./dist/themes/README.md
[14]:	https://highlightjs.org/
[15]:	http://ankisrs.net/docs/AnkiMobile.html
[16]:	https://github.com/ankidroid/Anki-Android
[17]:	./dist/themes/assets/css/README.md#automatic-syntax-highlighting-with-pygments
[18]:	http://alexvermeer.com/anki-essentials/
[19]:	http://www.jackkinsella.ie/2011/12/05/janki-method.html
[20]:	http://semver.org
[21]:	./dist/deck/README.md
[22]:	./dist/deck
[23]:	http://devicon.fr

[image-1]:	./preview.png