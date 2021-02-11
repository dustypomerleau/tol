.. meta::
  :description: Opinionated eye notes
  :keywords: ophthalmology, eye

.. once you decide on the hierarchy you need to keep the same symbol pattern

example title
=============

example section
---------------

example subsection
..................

- bullet
- bullet
- bullet paragraph
  must be aligned with top line

  continuation aligned with top indent

  + bullet
  + bullet

    * bullet
    * bullet

test subsection
...............

#. numbered
#. numbered

  (#) numbered
  (#) numbered

    #. numbered
    #. numbered


word
  definition

word 2 : classifier 2
  Definition 2.


.. field lists

:authors: - mr. author
          - someone else
          - yet another person
:date: 2020–01–01
:a very long field that means indentation is determined by the subsequent line:
  this is the value


-option  option description (2 spaces away)
--long-option  long option description


the next paragraph is a literal block ::

  literal block
    all -> whitespace preserved 'as is'

.. literal block without preceding paragraph

::

  another literal block

.. formerly code-block

.. code:: elixir
  :number-lines: 12

  defmodule MyApp.MyModule do

    def waste_a_line(_arg, arg2) do
      {:ok, data} -> data
      {:error, reason} -> reason
    end

  end

.. none of this seems to work for inline syntax highlighting...
.. waiting on: https://github.com/sphinx-doc/sphinx/issues/5157

.. role:: haskell(code)
   :language: haskell

.. highlight:: haskell

some inline code could look like ``\x => + 1``.

some inline code could look like :haskell:`\\x \=\> \+ 1`.

.. syntax_highlight is an ordinary docutils setting, which can be set in
.. docutils.conf. This file is respected by Sphinx too, if placed in the Sphinx's
.. configuration directory (where conf.py resides):

.. [restructuredtext parser] .. syntax_highlight = short
.. This is much better
.. than patching docutils or sphinx code or creating a long name CSS file.



line of preceding text before a block quote

  this is a block quote but not a literal block

  --someone

\- not a bullet because the char was escaped (works for any char)

\\ a literal backslash

``r"""a \raw \docstring (or any code) \with \untouched \backslashes"""``


.. link names of any kind are not case-sensitive
.. hyperlinks, footnotes, and citations are all handled the same under the hood
.. numbering is determined by the order of the footnotes,
.. not the references in the text
.. you can refer to the same footnote as many times as you like
.. using the named version

.. A hyperlink reference may directly embed a target URI or (since Docutils
.. 0.11) a hyperlink reference within angle brackets ("<...>") as follows:

.. See the `Python home page <http://www.python.org>`_ for info.
.. This `link <Python home page_>`_ is an alias to the link above.

.. This is exactly equivalent to:

.. See the `Python home page`_ for info.
.. This link_ is an alias to the link above.

.. .. _Python home page: http://www.python.org
.. .. _link: `Python home page`_

.. literal link:

http://python.org


if your link is multiple words you need `my link`_

if it's one word you can get away with link_

.. _my link: <target url>
.. _link: <target url>


this sentence contains a `paragraph target`_ elsewhere in the doc

.. _paragraph target:

this is the targeted paragraph


this paragraph references another `inline internal target`_.

this paragraph contains the _`inline internal target`.


my footnote [#]_ and my 2nd footnote [#]_.

.. [#] the actual text of footnote 1
.. [#] the actual text of footnote 2

.. or, name them to help you know which is which:

another footnote [#first]_ and yet another footnote [#second]_.

.. [#first] the actual text of another footnote
.. [#second] the actual text of yet another

.. or, use auto-symbols (but this prohibits naming):

symbol footnote [*]_ and yet another symbol footnote [*]_.

.. [*] the actual text of another symbol footnote
.. [*] the actual text of yet another symbol footnote

.. or use citation style (spaces aren't allowed):
.. seems best to use hyperlink style for anything that isn't a true footnote

try reading johnson [johnson-2003]_ or phillips [phillips_2001]_ or timothy
[TIMOTHY1999]_.

.. [johnson-2003] johnson citation
.. [phillips_2001] phillips citation
.. [TIMOTHY1999] timothy citation


.. transitions result in a horizontal rule
.. you need at least 4 transition characters

pre-transition

----

post-transition


.. if you get accidental list-like parsing just escape it:

\A. Einstein was smart.


.. tables
.. grid

.. Sphinx uses Latex package tabulary under the hood
.. .. tabularcolumns:: |p{0.8\linewidth}|L|R|
.. but this seems only to be the case for PDF output, not the web

+--------------------------+-------------------------+----------------------+
| umbrella                 | general                 | specific             |
+==========================+=========================+======================+
| inflammatory eye disease | periocular inflammation | preseptal cellulitis |
|                          |                         +----------------------+
|                          |                         | orbital cellulitis   |
|                          +-------------------------+----------------------+
|                          | eye wall inflammation   | episcleritis         |
|                          |                         +----------------------+
|                          |                         | scleritis            |
|                          +-------------------------+----------------------+
|                          | uveitis                 | anterior uveitis     |
|                          |                         +----------------------+
|                          |                         | intermediate uveitis |
|                          |                         +----------------------+
|                          |                         | chorioretinitis      |
|                          |                         +----------------------+
|                          |                         | retinal vasculitis   |
+--------------------------+-------------------------+----------------------+

----

=====  ======  ======
   inputs      output
-------------  ------
  A      B     A or B
=====  ======  ======
false  false   false

               with a bit more content below
true   false   true
false  - true  true

       - not
true   true    true
=====  ======  ======

.. Directives (.. code:: covered above)

.. admonitions available by default

.. attention::
  Pay attention.

.. caution::
  Be cautious.

.. danger::
  That's dangerous.

  Really.

.. error::
  That's a mistake.

.. hint::
  (hint hint)

.. important::
  This is important.

.. note::
  Take note.

.. tip:: A brief tip on the first line.

.. warning:: This is just a warning.

.. or more generically:

.. admonition:: Beware!

  This is the beware content.


.. images
.. all the specs after the image call are optional
.. pretty much all directives can take :class: and :name:

.. image:: picture.jpeg
   :scale: 50 %
   :width: 200 px
   :height: 100 px
   :align: right
   :target: https://mysite.org
   :alt: alternate text
..  :class: picture
..  :name: picName

.. :align: top | middle | bottom (only useful for inline images (substitutions
.. are a common use of little images)
.. :align: left | right | center

.. for units of length and such:
.. em (em unit, the element's font size)
.. ex (ex unit, x-height of the element’s font)
.. mm (millimeters; 1 mm = 1/1000 m)
.. cm (centimeters; 1 cm = 10 mm)
.. in (inches; 1 in = 2.54 cm = 96 px)
.. px (pixels, 1 px = 1/96 in) [17]
.. pt (points; 1 pt = 1/72 in)
.. pc (picas; 1 pc = 1/6 in = 12 pt)

.. example image substitution

Big |taco|.

.. |taco| image:: taco.png
  :width: 1 em

.. or for unicode symbols:

I |love| you.

.. |love| unicode:: U+02665 .. heart


.. figure supports all of the image options above, as well as the other below:
.. :align: is handled differently for figures
.. the other options are passed down to the image
.. but :align: applies to the whole figure

.. figure:: picture.png
  :figwidth: 20 %
  :figclass: figure
.. percentage or length allowed :figwidth: 10 em

  figure legend starts here

  can include anything you like (lists, tables) as long as the indents align


.. topic:: topic title

  a topic is like a block-quote with a title


.. sidebar:: sidebar title
  :subtitle: my (optional) subtitle

  this is a sidebar - it floats off to the side

----

.. parsed-literal::

  a literal block in monospace font allows links_, for example, but requires
  escaping all parsed characters if the literal is code.

.. _links: https://eyenotes.org


.. note that you can use inline math with the math role:

some inline math: :math:`\int_{0}^{5}`

.. or the math directive:

.. math::

  x^n + y^n = z^n

  \int_{lower}^{upper}

.. rubrics are supposed to be like special titles or headings, but your theme
.. just has them in black and they don't look interesting


.. rubric:: a rubric


.. epigraph::

  How many different types of quote do we need? In my theme, epigraphs look like
  other block quotes.

  --Dusty


.. highlights::

  yet another blockquote type thing called 'highlights'


.. pull-quote::

  pull quotes are :code:`class="pull-quote"` block quotes


.. compound::

  a compound paragraph creates a single logical paragraph from several parts::

    literal x = 80 section

  the conclusion.


.. container:: custom-class

  containers allow you to give custom classes to the items inside (``<div>``-like)


.. the table directive is used to apply options or a title to tables:
.. :widths: auto | grid | space-separated List Int
.. :width: 90% (not working in my theme)

.. table:: My Table Title
  :align: center
  :widths: 2 2 1

  +--------+--------+--------+
  |        | things |        |
  +--------+--------+--------+
  | 1      | 2      | 3      |
  +========+========+========+
  | yes    | and    | then   |
  +--------+--------+--------+
  | column | column | column |
  +--------+--------+--------+
  | one    | two    | three  |
  +--------+--------+--------+


.. header : CSV data .. Supplemental data for the table header, added
.. independently of and before any header-rows from the main CSV data. Must use the
.. same CSV format as the main CSV data.

.. file : string (newlines removed) .. The local filesystem path to a CSV data
.. file.

.. url : string (whitespace removed) .. An Internet URL reference to a CSV data
.. file.

.. encoding : name of text encoding .. The text encoding of the external CSV
.. data (file or URL). Defaults to the document's encoding (if specified).

.. delim : char | "tab" | "space" [2] .. A one-character string[3] used to
.. separate fields. Defaults to , (comma). May be specified as a Unicode code
.. point; see the unicode directive for syntax details.

.. quote : char .. A one-character string[3] used to quote elements containing
.. the delimiter or which start with the quote character. Defaults to " (quote).
.. May be specified as a Unicode code point; see the unicode directive for syntax
.. details.

.. keepspace : flag .. Treat whitespace immediately following the delimiter as
.. significant. The default is to ignore such whitespace.

.. escape : char .. A one-character[3] string used to escape the delimiter or
.. quote characters. May be specified as a Unicode code point; see the unicode
.. directive for syntax details. Used when the delimiter is used in an unquoted
.. field, or when quote characters are used within a field. The default is to
.. double-up the character, e.g. "He said, ""Hi!"""

.. align : "left", "center", or "right" .. The horizontal alignment of the
.. table. (New in Docutils 0.13)

.. definitely try this with :file: input and export them from excel to a folder
.. that's perfect .. using :header: with :header-rows: 0 (the default) is i think
.. identical to not using :header: and putting the header data in the first line of
.. your table and then setting :header-rows: 1 .. this seems to work without
.. quoting the strings - you'll have to test .. :stub-columns: will allow you to
.. use your first column as row labels

.. csv-table:: Easier with CSV!
  :header: "First", "Second", "Third"

  "something here", "something there", "something everywhere"
  "never",          "stop",            "trying"
  "you can",        "and will",        "succeed"


.. list-table takes
.. :header-rows:
.. :widths:
.. :stub-columns:
.. :align:

.. list-table:: Or a List Table!
  :header-rows: 1

  * - A
    - B
    - C

  * - this
    - that
    - the other

  * - and
    - yet
    - another


.. Document parts

.. .. contents:: takes
.. :depth:
.. :local: (just subsections of the section where you call it)
.. :backlinks: entry | top | none (generates links back to the TOC)
.. :class:

.. contents:: Explicit TOC Title
  :depth: 2

.. don't use header and footer for navigational elements of the pages - they are
.. just document headers .. header and footer appear to have no effect when using
.. rtd theme

.. header:: My header content

  more header


.. footer:: My footer content

  more footer

.. replace allows you to replace any text, but also allows you to create a
.. reference with styled text (normally prohibited because you would need to nest
.. inline markup). Just ignore the fact that the syntax highlighting doesn't handle
.. the replace line correctly.

Just stroll on over to |ms|_.

.. |ms| replace:: My Site
.. _ms: https://mysite.org


.. Unicode substitution options:
.. :ltrim:
.. :rtrim:
.. :trim:

.. |---| unicode:: U+02014 .. em dash
  :trim:


.. default format for date substitutions is ISO 8601
.. %Y-%m-%d

.. |date| date::
.. |time| date:: %H:%M

It is currently |time| on |date|.


.. usually you won't need options on include - see docs for full option list

.. include:: ./data/include-me.rst


.. see the directives docs for class:: raw:: and a couple others

.. class:: special-class


.. custom roles for interpreted text are basically what you described above
.. for code - just wrap the appropriate role
.. available roles to wrap (see https://docutils.sourceforge.io/docs/ref/rst/roles.html):
.. :emphasis: same as *this*
.. :literal: (nearly) the same as ``this`` but may require escaping (see docs linked above)
.. :code:
.. :math:
.. :pep-reference:
.. :rfc-reference:
.. :strong: same as **this**
.. :subscript: or :sub:
..   you can backslash escape mandatory whitespace around sub and superscript to get normal appearance
..   or use a substitution if it's frequent:
..   .. |H2O| replace:: H\ :sub:`2`\ O
.. :superscript: or :sup:
.. :title-reference: or :title: or :t:

.. role:: my-custom(emphasis)

this is me using my custom :my-custom:`emphasis role`.


You should read `Simpson et al.` [Sim2003]_

You should read :t:`Simpson et al.` [Sim2003]_

.. [Sim2003] The Simpson citation (or you could use hyperlink style).


Using ``:t:`` + the cite syntax yields :t:`Simpson et al.` [SIM2001]_

Without ``:t:`` + the hyperlink syntax yields `Simpson et al.`_

Or perhaps use ``:t:`` + the cite syntax, but as a hyperlink, like :t:`Simpson et al.` [SIM2000_]

Best option seems to be to just link the author's name to the pubmed and be done. The advantage of using a cite-like syntax (even if you use hyperlinks instead of citations by putting the underscore inside the braces) is that you aren't forced to modify your body text just to get unique hyperlink names.

.. _Simpson et al.: https://simpsonarticle.com

.. [SIM2001] Simpson said a lot in 2001.

.. _SIM2000: http://nytimes.com


.. directives as substitution definitions are very powerful
.. https://docutils.sourceforge.io/docs/ref/rst/restructuredtext.html#directives
.. worth revisiting the entire 'substitution definitions' section
