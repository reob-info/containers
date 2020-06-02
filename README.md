# Containers
## Easily Create Mobile or Desktop Web UIs.

Containers have two parts:

- The HTML Container structure
- The CSS file that format the HTML structure

The HTML structure is:

<pre>
&lt;div class="container"&gt;
    &lt;div class="header"&gt;&lt;/div&gt;
    &lt;div class="left"&gt;&lt;/div&gt;
    &lt;div class="middle"&gt;&lt;/div&gt;
    &lt;div class="right"&gt;&lt;/div&gt;
    &lt;div class="footer"&gt;&lt;/div&gt;
&lt;/div&gt;
</pre>

And the CSS should be download from here.

Each Container section can contain another Container or any HTML tag, form or component.

You should avoid to put components inside the Container but out of a Container section.

The default size of each Container section is:

<pre>
- header: width: 100%, height: 10%
- left:   width:  10%, height: 80%
- middle: width:  80%, height: 80%
- right:  width:  10%, height: 80%
- footer: width: 100%, height: 10%
</pre>

Use our classes to change these default sizes or even make any section not be displayed.

To don't show any section use one of these classes: **none**, **w00**, **h00**.

To define another width use these classes:
**w05**, **w10**, **w15**, **w20**, **w25**, **w30**, **w35**, **w40**, **w45**, **w50**, 
**w55**, **w60**, **w65**, **w70**, **w75**, **w80**, **w85**, **w90**, **w95**, **w100**.

To define another height use these classes:
**h05**, **h10**, **h15**, **h20**, **h25**, **h30**, **h35**, **h40**, **h45**, **h50**, 
**h55**, **h60**, **h65**, **h70**, **h75**, **h80**, **h85**, **h90**, **h95**, **h100**.

The number in class is the percentage that will be applied to the Container section or div.

Using Containers is possible to create any layout desired.

Have a look at our examples to understand how to use Containers.

Containers has many components to be used too. Some of them only uses CSS to be formatted, others uses Javascript to implement actions over themselves.

The icons used at our components was taken from <a href="https://fontawesome.com/">Font Awesome</a> Desktop Version and are included to download.

These icons was manually renamed to have their names starting with "fa-" as an attribution to their proprietary: Font Awesome.

**You can contribute to Containers creating amazing themes and commiting to our repository, <br>
donating (<a href="https://www.patreon.com/reob">Patreon</a>) or with suggestions.**

<pre>
=====================================================================================================
- SUPPORTED BROWSERS (MINIMUM VERSION) [COMPATIBILITY: 92.73% OF GLOBAL USED BROWSERS at 2020-06-02]:
  ---------------------------------------------------
   BROWSER   : VERSION : PLATFORM
  ---------------------------------------------------
 - CHROME    : 49      : PC/MAC
 - CHROME    : 81      : ANDROID
 - EDGE      : 16      : PC
 - FIREFOX   : 34      : PC/MAC
 - FIREFOX   : 68      : ANDROID
 - OPERA     : 36      : PC/MAC
 - OPERA     : 46      : iOS, ANDROID (OPERA MOBILE)
 - SAFARI    : 13.1    : MAC
 - SAFARI    : 13.4    : iOS
 - SAMSUNG   : 11.1    : ANDROID
  ---------------------------------------------------

- SUPPORTED BROWSERS? [UNKNOWN COMPATIBILITY: 1.98% at 2020-06-02]:
 - UC BROWSER: 12.12   : ANDROID

- NOT SUPPORTED BROWSERS [NOT COMPATIBLE: 2.70% at 2020-06-02]:
 - IE
 - OPERA MINI
 - QQ

NOTE: MINIMUM VERSION WAS TAKEN FROM <a href="https://caniuse.com">https://caniuse.com</a>
LOOKING FOR CSS FEATURES THAT WE USE.
=====================================================================================================
</pre>
