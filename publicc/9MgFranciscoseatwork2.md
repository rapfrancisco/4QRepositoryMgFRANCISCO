# Seatwork #2 - Getting to know CSS Position and z-index.
### This seatwork will ask you to implement the different CSS position on a given code.
### short link to this .md file is: https://bit.ly/4c61P9K
#### Resources (also found in Khub week 5)
- [4 Minute Youtube Video on CSS Position](https://www.youtube.com/watch?v=YEmdHbQBCSQ)
- [CSS Position Tutorial](https://roycan.github.io/CssPositioningZIndexLab/)

### Instructions: 
1. This is individual submission in khub, but you can work with a partner.  When you submit in khub please place both your names in the submission bin.
2. Guided Activity (30 minutes), please follow what is being required.  

    - Make a copy of this .md file to your Q4 repository and name it as **SectionLNseatwork2.md** example **9LiCruzSeatwork2.md**. Place it in your q4 repository vscode local computer. Committing frequently to your Github repository.  
    - Copy the code below and paste it inside a new file (name it as SectionLNseatwork2.html). Place this file in the same location where the .md file is saved. 
    - Change the content values of the meta tags to your names for author/s and the date today for revised.
    - Please do the following tasks that will ask you to reposition HTML elements then answer the guided question for each task on the .md file. Commit changes to the .md file and to the .html file as well.
    **- This seatwork is worth 20pts and should be submitted by the end of the period** The link to [KHub submission bin](https://khub.mc.pshs.edu.ph/mod/assign/view.php?id=15481).
      - Submit the links to your .md file and .html file.

```html
<!DOCTYPE html>
<html>
<head>
  <meta name="author" content="<your names>" />
  <meta name="revised" content="<date today>" />
  <style>
    body { font-family: Arial, sans-serif; }
    .header, .footer {
      background: lightblue;
      padding: 10px;
    }
    .footer {
       opacity: 0.5;
       position: fixed; 
       bottom: 0; 
       width: 100%;
    }
    .sidebar {
      background: lightgreen;
      width: 150px;
      height: 200px;
      position: relative; 
      top: 20px; 
      left: 20px;
    }
    .content {
      background: lightyellow;
      width: 300px;
      height: 200px;
      position: absolute; 
      top: 66px; 
      left: 200px;
      z-index: 1;
    }
    .notice {
      position: absolute;
      top: 60px;
      left: 400px;
      background: orange;
      padding: 10px;
      z-index: 2;
    }  
  </style>
</head>
<body>
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Main Content</div>
  <div class="footer">Footer</div>
  <div class="notice">Notice!</div>
</body>
</html>
```
### Step 1 (Static vs Relative):

- Add in css ```position: relative; top: 20px; left: 20px;``` to .sidebar.

- Guided Question: What changed compared to the default static positioning? Try to give different values to top and left or you can change it to bottom, right.
- it's a part of what determines where it'll be finally positioned. It looks like it's levitating because it's on top of another box.

### Step 2 (Fixed):

- Add in css ```position: fixed; bottom: 0; width: 100%;``` to .footer.

- Guided Question: What happens when you scroll the page? Why does the footer behave differently from position relative?
- The footer stays at the bottom regardless unlike position relative which is skippable.

### Step 3 (Absolute):

- Add in css ```position: absolute; top: 66px; left: 200px;``` to .content.

- Guided Question: What is the effect of position: absolute on an element? How is it different from fixed?
- it moves beside the sidebar but with space, it's no longer behind an element. You could think of it as depending as compared to fixed which is at the bottom no matter what.
### Step 4 : (Absolute)

- Add in html ```<div class="notice">Notice!</div>``` and include the css below:

```css
.notice {
    position: absolute;
    top: 60px;
    left: 400px;
    background: orange;
    padding: 10px;
    z-index: 2;
}
```

- Give .content a z-index: 1.

- Guided Question: Why does the notice appear on top of the content? What happens if you swap the z‑index values?
- The z-index of content is 1, or layer 1, whereas notice's z-index is 2, which means it's on layer 2 and is over content. Swapping the z-index to zero puts it behind all the other boxes.

- Challenge: 
    * What changes that you have to do on the code that will position .notice box on the top right corner of the .content box? Please write the code on paper 
    as well (both html and css on the part of .notice and .content).
    
    ### .content {
    ###  background: lightyellow;
    ###  width: 300px;
    ###  height: 200px;
    ###  position: absolute; 
    ###  top: 66px; 
    ###  left: 200px;
    ###  z-index: 1;
    ### }    
    ### .notice {
    ### position: absolute;
    ### top: 85px;
    ### left: 225px;
    ### background: orange;
    ### padding: 10px;
    ### z-index: 2; 
}

    * Try to change the position of .content to relative then to fixed. What do you observed each time?
    ### Changing it to relative changed the position and sent it downwards, and notice is no longer on top of it. Changing its position to relative made it come back to notice so now it's below notice.
    
    * What do you observe on about the effect of z-index on .notice and .content boxes?
    ### They initially swap "levels", where one is on top of the other, and for notice's case, it wouldn't be visible.

3. Please answer the following reflection questions (15 minutes)

    a. Could you summarize the differences between the CSS position values (static, relative, absolute, fixed)? 
    ### Static is how it's positioning would be in the first place in regards with the flow of the webpage, the relative position moves it to another place away from the page's content. The fixed position keeps it in place, even if the webpage has a scroll feature, the object would stay wherever it is. Absolute positioning has a dependent/independent object, where the dependent's scales such as its positioning to the left or to the right OF the independent object.

    b. How does absolute positioning depend on its parent element?
      ###  The object basically is dependent on \

      

    c. How do you differentiate sticky from fixed (you can research on sticky)?

    d. If you were designing a webpage for a school event, how might you use positioning to highlight important information? Please give concrete examples.