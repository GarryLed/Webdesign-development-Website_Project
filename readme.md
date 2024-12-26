# Project Report for Web Design & Development
## Contents
1. Introduction	1
2. Link to Github Pages	1
3. Installation/Usage	1
4. Design Decisions Made	1
      - Look and Feel	1
    - Breakpoints	1
5. Performance	2
6. SEO	2
7. Accessibility	2
8. Wireframes	2
9. Reflection on your work	2

# 1. Introduction
[Briefly describe what you have designed the site for and what it does]


The website I designed for this project is an e-commerce site that sells video games, consoles, and gaming accessories. I called the site "Good Games", which is a nod to the gaming community where us gamers typically say "GG" or Good Game" after playing our favorite games online. The products on the website range form the latest video game releases, best sellers to the all time classic titles. Good Games also sells consoles, and gaming accessories. 

The site has a modern design, is mobile responsive with a user first interface, and has a fully functional shopping cart system. Some of the key features of the site include dynamic product creation where all products are created using javaScript, an interactive shopping cart that displays a pop up that asks the user if they want to go to the cart or continue shopping when an item is added to their cart.  

# 2. Link to Github Pages

[GitHub Repo for Project](https://github.com/GarryLed/Webdesign-development-Website_Project)

# 3. Installation/Usage
[Add in here any specific details that will allow the lecturer to test your work – e.g. Username/password combo to “allow” login of the prototype. Also add in any missing elements, functionality not working, etc]

*scss*
I had an issue with css and scss. When I initially tried to update the css using scss, I couldnt get it to work, and when I eventually did, I also had an issue when updating a scss file, where the css did not update (I was using the VS code plugin). To solve this problem, I had to install node and run a command from the command line: 
1. Install node
2. from the command line (in the project folder) run the followng command: npx sass scss/styles.scss css/styles.css


# 4. Design Decisions Made

## 4.1 Look and Feel
### Bootstrap 
**NavBar**
- The navbar on each page was used to create a responsive 

**Carousel**

**Cards** (Product cards)

**Forms**


**Layout and Grid System**

**Buttons**

**Overriding Bootstrap with scss**

**SCSS customisations**


## 4.2 Breakpoints
[List the major breakpoints in your work  and describe what  changes at the breakpoint. Did you implement any minor tweaks at these breakpoints using media query techniques? e.g. font size changes, hiding of content, responsive images using srcset, etc?]

### Extra Small Devices (XS)


### Small Devices (SM)


### Medium Devices (MD)

### Large Devices (LG)

### Extra Large Devices (XL)


### Media Queries 

# 5. Performance
[Explain what you have done to improve the performance of your site, and any changes you could make for a production site.]

I imporved performance of the site in a few ways: 
1. Loading CSS at the top of each page, but loading JavaScript at the bottom of each page, which will help the pages load faster.
2. Minifiying CSS/JS files 
3. Optimizing images by resizing them and makeing them smaller 
 


# 6. SEO
[Explain what you have done to improve the SEO of your site. Illustrate with screenshot examples from your code]
1. Image optimisation 
2. Meta tags 
3. Title optimisation for each page
4. Meta Description 
5. Keywords on each page 
6. Page speed 
7. Image alt text 


# 7. Accessibility
[Explain what you have done to make your site accessible. Illustrate with screenshot examples from your code]
1. Image alt text 
2. Labels on all the forms 
3. Descriptive URL's 
4. Readable text 

Add wire framces here 


# 8. Wireframes
[If the paper wireframes that you presented in early November are different to the finished website – explain briefly why this is so? What could you have done differently?]
- add wireframes here

**Differences**
1. Search bar 
2. Dark mode 


# 9. Reflection on your work

Write briefly under the following headings:
#### What went well?

#### What did not go well and if so what would you differently?

#### Did you do anything in this project that was not covered in this module, maybe it was covered in another module? Maybe you applied something you learning from your own research?

- added a cart page before the checkout page that displays the list of items in the shopping cart, the totaal for all items and has a link to
the checkout page 
- On the checkout page I added an order summary (list) of purchased items at the top of the page with the total price underneath 
- used a combination of JSON and javascript to dynimically create the products 
- created drop down menus in the navigation  
- added a pop up after an item is added to the cart that gives the user an option to either continue shopping or go to the cart 




