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

The site has a modern design, is mobile responsive with a user first interface, and has a fully functional shopping cart system. Some of the key features of the site include dynamic product creation where all products are created using javaScript, an interactive shopping cart that and a pop up that asks the user if they want to go to the cart or continue shopping when an item is added to their cart and main navigation categories with dropdown menu's for subcategories. 

# 2. Link to Github Pages

[GitHub Repo for Project](https://github.com/GarryLed/Webdesign-development-Website_Project)

# 3. Installation/Usage
[Add in here any specific details that will allow the lecturer to test your work – e.g. Username/password combo to “allow” login of the prototype. Also add in any missing elements, functionality not working, etc]

I used the default login details form the project: 

User email: wmitty@email.com"
Pasword: password1


# 4. Design Decisions Made

## 4.1 Look and Feel
### Bootstrap 
**NavBar**
- The bootstrap navbar at the top of each page includes two drop down menues for additional product categories, such as PS5 games and consoles. There is a cart icon outside the hamburger menu for accessability on smaller screens. 

**Carousel**
- Homepage carosoul was created using bootstrap which displays three scrolling images and text for a clear description of what the site is about.  

**Cards** (Product cards)
- JavaScript and Bootstrap card components were used to create dynamic product cards for products throughout the site. Each card is uses an unique id that matches the
product id in a JSON file, where the product data is stored, and the cards are creted dynamically. Each product card has a nice yellow border. 

**Forms**
- Bootstrap was used for the forms on the website: login, newsletter, checkkout, and contact pages. I used form labels for a clean look to the form, and placeholder text that dissapears when the user inputs text for better usability. 

**Layout and Grid System**
- Each page uses the `container`, `row`, `col` grid system as its structure, and I used breakpoints using bootstrap: `col-md-12` `col-md-6` etc. Additioanlly columns were styled with padding and margins using bootstrap: `m-2` for margins and `p-3` for padding. 

**Buttons**
- Bootstrap buttons were used throughout the site: "Buy Now", "Learn More", "Add to Cart", "Submit", "Checkout" etc. 
Initially all these buttons were the standard Bootstrap colours, but I used SASS to override these colours to give the website less bootstrappy feel. 
**Overriding Bootstrap with scss**

**SCSS customisations**
- I used SCSS for customisiation to customise Bootstraps default variables. I created a `_variables.scss` file and assigned the followng varialbes to differenc colours: 
- $primary,
- $secondary, 
- $background, 
- $accent, 
- $text, 
- $muted. 

Once I had the colours and variables setup, I created a `_bootstrap_override` file to reassign the variables for the background, text, buttons and links on the site, like this: 

// background and text (set the background and the text of the site)
$body-bg: $background;
$body-color: $text;

// buttons primary (set the primary buttons on the site)
$btn-primary-bg: $primary;
$btn-primary-border: $primary;
$btn-primary-color: $text;

// buttons secondary (set the secondary buttons)
$btn-secondary-bg: $secondary;
$btn-secondary-border: $secondary;
$btn-secondary-color: $background;

$link-color: $primary; (set the links to a new colour and gave them a hover affect)
$link-hover-color: darken($primary, 10%);

## 4.2 Breakpoints
[List the major breakpoints in your work  and describe what  changes at the breakpoint. Did you implement any minor tweaks at these breakpoints using media query techniques? e.g. font size changes, hiding of content, responsive images using srcset, etc?]

### Extra Small Devices (XS)
 - bs-breakpoint-xs: 0; (Bootstrap)

Changes at this breakpoint: 
- Navbar collapses into hamburger menu 
- Product cards are placed vertically 
- Images shrink to fit the inside their containers 
- Form labels are placed on top of input fields so the screen looks cleaner and less cluttered 

### Small Devices (SM)
 -bs-breakpoint-sm: 576px; (bootstrap)

Changes at this breakpoint: 
- Carousel captions are hidden because the screen would look cluttered 
- Headings are made smalller to fit screen 

### Medium Devices (MD)
-bs-breakpoint-md: 768px;

 Changes at this breakpoint: 
 - Product cards are displayed in a two column layout
 - Navbar items are visable 
 - Carousel captions are displayed 

### Large Devices (LG)
  --bs-breakpoint-lg: 992px;
Changes at this breakpoint: 
- Product cards are displayed in a three coloumn layout 
- 

### Extra Large Devices (XL)
-bs-breakpoint-xl: 1200px;
Changes at this breakpoint: 

### Media Queries 

# 5. Performance
[Explain what you have done to improve the performance of your site, and any changes you could make for a production site.]

I imporved performance of the site in a few ways: 
1. Loading CSS at the top of each page, but loading JavaScript at the bottom of each page, which will help the pages load faster.
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
 5. I used aria-labels in forms 


# 8. Wireframes
[If the paper wireframes that you presented in early November are different to the finished website – explain briefly why this is so? What could you have done differently?]

In the wireframes I was had a search bar at the top of the home page to search for products, but I decided not to add it in the end because other parts of the website took me much longer to figure out that I anticipated and I was pressed for time. 

Additonally, I was going to add a light/dark mode, but after researching some gaming websites I saw they typically have a darker background, so I went with this option instead of switching between dark and light mode. 


# 9. Reflection on your work

Write briefly under the following headings:
#### What went well?
- 

#### What did not go well and if so what would you differently?
- user details 
- register page 
- search bar function 
- using JavaScript to create and display the products for the website. In the end it went well, but it took me a long time to figure out how to display the products using JavaScript. 

*scss*
I had an issue with css and scss. When I initially tried to update the css using scss, I couldnt get it to work, and when I eventually did, I also had an issue when updating a scss file, where the css did not update (I was using the VS code plugin). To solve this problem, I had to install node and run a command from the command line: 
1. Install node
2. from the command line (in the project folder) run the followng command: npx sass scss/styles.scss css/styles.css

#### Did you do anything in this project that was not covered in this module, maybe it was covered in another module? Maybe you applied something you learning from your own research?

- added a cart page before the checkout page that displays the list of items in the shopping cart, the total for all items and has a link to
the checkout page 
- On the checkout page I added an order summary (list) of purchased items at the top of the page with the total price underneath 
- used a combination of JSON and javascript to dynimically create the products 
- created drop down menus in the navigation  
- added a pop up after an item is added to the cart that gives the user an option to either continue shopping or go to the cart 




