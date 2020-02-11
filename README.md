# text-splitter

This is just an experiment to try and immitate [**Splitting.js**](https://splitting.js.org/)

After setting up the javascript file, to split every text of a container - add `data-split` attribute to the element and
call the function name `split()` to initialize the split.

The script then splits every characters in separate `span` container with class `char`.

Also every separate characters are stored inside their respective word container with class `word`.

Every character has an attribute named `data-char` whose value is their respective character which is stored inside that element.
Also every character has index no. which is stored in a css variable - `--char-index`

Also these similar property applies to the word container, where it keeps track of the words index no. and the word
which is stored inside the attribute `data-word`.

All the words are stored in a container which has class name `split` and `words`. It keeps track of the total no. of words and
characters stored in the container in css variable `--word-total` and `--char-total`.

**BEFORE**

![before splitting](http://i.imgur.com/XVD9aMJ.png)


**AFTER**

![after splitting](http://i.imgur.com/3tXFEzD.png)
