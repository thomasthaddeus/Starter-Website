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
