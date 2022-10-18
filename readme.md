# IS 312: Web Design and Programming

## PE01: Programming Exercise

> Revised: August 2022
_**By: Tj Scharlau**_




- [IS 312: Web Design and Programming](#is-312-web-design-and-programming)
  - [PE01: Programming Exercise](#pe01-programming-exercise)
    - [Objective:](#objective)
      - [On completion of this exercise, you should have the following documents:](#on-completion-of-this-exercise-you-should-have-the-following-documents)
    - [Task #1: Create the HTML document.](#task-1-create-the-html-document)
    - [Task #2: Create a CSS document.](#task-2-create-a-css-document)
    - [Task #3: Apply the styles](#task-3-apply-the-styles)
    - [Submission:](#submission)
  - [PE02: Programming Exercise](#pe02-programming-exercise)
    - [Objective:](#objective-1)
    - [Task #1:  Setup UI in the HTML/CSS](#task-1--setup-ui-in-the-htmlcss)

<details>
<summary>Objectives & tasks of PE01</summary>

### Objective:

1. On completion of this exercise, the student should have:
   - A foundational HTML & CSS document that allows them \
      to iterate on the project to complete the remaining PE exercises for the quarter.
1. Using your preferred IDE for `HTML` / `CSS` / `JavaScript`, you should create a new project.

#### On completion of this exercise, you should have the following documents:

1. A `.htm` ( or `.html` ) document which will provide the UI for your project.
1. A `.css` file which will contain the styling information for your project.
1. These will be the foundation for all the PE exercises for this quarter.

### Task #1: Create the HTML document.

1. Students should create a blank document with a `.htm` ( or `.html` ) extension.  Inside of this document you will build the appropriate sections:
   - Be sure to include the following at the top of the document:

    ```html
    <!DOCTYPE html>
    <HTML>
    ```
1. Next, we will create the `HEAD` block of the document.
   - The `HEAD` block of code gives details about your page.
   - Within the `HEAD` block of your document, you will need to have the following:
        - The following should be present in the `HEAD` block:
          - `TITLE tag` – You should set this to something that describes your page/project.
            - See _**pg. 6 of Collins**_, for more details on the title tag.
          - `LINK tag` - You will use this to connect the `HTML` document to the `CSS` file you will create in task 2.
            - Details of the syntax of the link tag can be found on _**pg. 9 of Collins**_.
          - `META tag` to describe the _authors name_.
            - You can find more details on `pg. 7 of Collins` about the META tag.
            - For this assignment this should look something like:

            ```html
            <meta name="author" content="<STUDENT’S NAME HERE>" />
            ```

    - Once you have the `HEAD` block done, it is time to move onto the `BODY` block of the document.  This is the part of the document that contains the viewable information that your `HTML` document is meant to display.
1. The following should be present in the `BODY block`:
   - At least _**one**_ `PARAGRAPH tag`.
   - The contents of this tag should be the following text:

    ```
    "Hello City University of Seattle!"
    ```

   - This text may change over the course of the _PE exercises_ this quarter.
   - You can find more details about the `<p> element` on `pg. 69 of Collins`.
1. You must have at least one `Anchor` tag that creates a link between your `HTML` document and the __url__: [CityU](https://www.cityu.edu/).
   > More information on the <a> tag can be found in `Collins, on pg. 115`.

1. You should be sure to close out the `HTML` document with the `</HTML>` closing tag at the bottom of the page after the closing tag for the `BODY block`.
    > You can see a simple example of a `HTML` document on `Page 4` of `Chapter 1 of Collins`.
   - Your submission should follow a similar format, but with the required tags above.

1. Now that we have the HTML, let’s move on to the CSS file.

### Task #2: Create a CSS document.

1. This document contains the styling information for your project.
2. It should at the minimum contain the following for the `HTML document`:
   1. Styling information for the page background
       - (_color_ or _image_ as you prefer).
   2. Font type
   3. Font size
   4. Font color
   5. If you are inclined, you are welcome to style the `Anchor tag` and it’s various states, but this isn’t required.
   - A good `CSS reference` that you can use is: [w3schools](https://www.w3schools.com/cssref/default.asp)

### Task #3: Apply the styles

1. Now that you have both a `HTML document` and a `CSS document`, you need to verify that those styles are being applied to the elements of the `HTML document`.

### Submission:

1. Now that you have completed the above tasks:
   1. You need to `zip` your files ( `HTML` and `CSS`) and submit them via Brightspace.

</details>

<details>
<summary>PE02 Instructions</summary>

## PE02: Programming Exercise

> Revised: Fall 2022

1. **By: Tj Scharlau**

### Objective:

### Task #1:  Setup UI in the HTML/CSS
For this task, you will be modifying the HTML and CSS files you created last week, to create a lightbulb on the page that the user can turn on and off.  You will need to use the following for this:
1)	A HTML Form, with a button. The button should start with the text set to “OFF”.
2)	Two images of a lightbulb, one in the ON state, and one in the OFF state.
3)	For the image and the button on the form, you will need to use the id=”” attribute for the HTML elements.
At this point, you should have an HTML file, with an image of a lightbulb that is off, and a button that has “Off” as it’s text. Both the image and the button should have unique IDs (such as bulb and switch respectively).
Task #2:  “Wire” the switch to turn the light on and off.
For this task, you will be “wiring” the switch to turn the light on and off.  You will accomplish this by writing a JavaScript function, that produces results  like: https://www.w3schools.com/js/js_intro.asp (Scroll down the page until you see the lightbulb image).
 Unlike that demo, you should only have one button, and the bulb image.
To “wire” the switch button, you need to write a JavaScript that will process the button and call a function.  That function should do the following:
1)	Get the State of the Button (the label of the button).
2)	Compare the returned label, and using an IF statement, determine what to do:
a.	If the label is “Off” then it should switch the image to the Lightbulb On image, and change the label on the button to “On”
b.	If the label is “On” then it should switch the image to the Lightbulb Off image and change the label on the button to “Off”.
This task is successfully completed once you can toggle the lightbulb image by clicking the button.
Some sections of your Collins Book that will help you complete this exercise:
Chapter 18 – Page 342 – 349 – Basic DOM Manipulation
You can use any public domain images for your exercise, but please remember to include them in your submission.
Submission:
Now that you have completed the above tasks, you need to zip your files (Executable and Source) and submit them via Brightspace.

</details>