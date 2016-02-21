# aurelia-esri-platform
A platform for building large scale spatial Aurelia web apps using TypeScript and the ESRI JavaScript API
## Modularity
### Dependency Management - History
### Modules, dojo and esri
## Large Scale Development
### TypeScript
## Navigation Concepts
### Layout
One of the difficult problems for web app layout has been getting a behavior similar to the old html table layout where you can specify some columns (or rows) as having fixed size, some as growing to the size of the content, and some taking up the remaining (or a fraction of the remaining) content.
Here are some resources related to [the css flexbox standard](https://drafts.csswg.org/css-flexbox/):
> * Great article: [visual guide to css3 flexbox properties](https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties)
> * the [can i use for flexbox](http://caniuse.com/#feat=flexbox)
> * [bootstrap 4 alpha](http://blog.getbootstrap.com/2015/08/19/bootstrap-4-alpha/) (search for flexbox - about 1/3 the way down)
> * [css tricks guide to flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
> * [w3schools flexbox](http://www.w3schools.com/css/css3_flexbox.asp)
The following layout was created using flexbox.  As the browser window is resized, the header and footer maintain their height (which is set by their content).  The height of the body section grows to fill the remaining space.
Horizontally, the nav section maintains its fixed width, while the body section grows to fill the remaining space.
![image](https://cloud.githubusercontent.com/assets/10272832/13202646/1fee5848-d85f-11e5-9f47-387875ade7dc.png)
![image](https://cloud.githubusercontent.com/assets/10272832/13202630/7962d5bc-d85e-11e5-8062-fcb38af9b7e8.png)
![image](https://cloud.githubusercontent.com/assets/10272832/13202663/6c129e5a-d85f-11e5-949b-f3fb58342719.png)
### Traditional SPA Navigation
### Advanced Navigation
![aurelia esri platform - web app](https://cloud.githubusercontent.com/assets/10272832/12070421/351b5a3c-b031-11e5-8057-d98d406f1a57.png)
Capabilities on the left side nav panel which are outside the normal router and browser history provided by the standard nav menu capability Aurelia router.
### Persistent Navigation Model
Some routes are cached and persist navigation away and back
## Reduction
### Dynamic Routing
Routes are created and removed based on user choices
