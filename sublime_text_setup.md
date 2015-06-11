## Sublime Text Setup (avoids the need for a web browser to run your scripts)

I've decided it's easier to write JavaScript and run it in a single program.  This is what you need to do:

1) Download Sublime Text 2
  + http://www.sublimetext.com/
  + click 'Download for OS X' at the bottom'
  + click on the DMG file to open it
  + a window will pop up indicating that you should move Sublime Text to the Applications folder.  Don't do that, just click on the Sublime Text icon instead.

2) With Sublime Text open:
  + go to 'Tools' > 'Build System' > 'New Build System'
  + copy and paste the following into the window that pops up:

````
{
"cmd": ["/System/Library/Frameworks/JavaScriptCore.framework/Versions/A/Resources/jsc", "$file"],
"selector": "source.js"
}
````
  + save that file (Apple + 'S')
  + open a new file and save it as <whatever_you_want>.js
  + type JavaScript code in and run it (Apple + B)
  
