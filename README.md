# Stuff Getter

This project (LINK) is a simple clicker/ incremental game (in the style of *Cookie Clicker* or *Tap Tycoon*). Its main aim is to provide a fun experience of interactive growth for the player. It must achieve this with only HTML, CSS, and Javascript (JQuery). 

A clicker/ incremental game is a genre in which, initially, the only avenue for interactivity offered to the player is to simply click, either a button or anywhere on the screen. Doing this accrues a resource. Different iterations of the genre choose different resources, usually for thematic reasons. *Adventure Capitalist* has dollars, *Adventure Communist* has potatoes, *Cookie Clicker* has… well... cookies. The conceit of these games is their simplicity, which almost always builds into ludicrous levels of complexity. As the games go on, they offer the player various items that they can buy with their accrued resources. These, usually, will allow the gathering of further resources. The amount of resources the player has will increase exponentially. 

You might be wondering what the goal of all this is. Why keep collecting? In many of these games there is no goal. You are just collecting for collecting's sake; watching the numbers go up is, *supposedly* its own reward. Some have argued that this goalessness makes the genre a parody of gaming in general, by exposing the essentially hollow nature of video games. After all, what other genre can truly claim to reward you outside of the context of the game itself? Aren’t all video games just another iteration of watching the numbers go up?

Whatever the answer to these questions may be, my aim is to create a simple version of one of these, with just a few avenues for higher interactivity (beyond just clicking). This project will heavily rely on an [online guide](https://www.youtube.com/watch?v=d-AbDEwpp6g&list=PLEyTwruuVAqlEvj8QxTFdVPc6_AwpgF2w&ab_channel=TanktotGames) for making this type of game. However, there are a variety of ways that I will be deviating from it, like by using JQuery.
 
## UX


This project aims to provide light distraction to anyone who might need it. That means the project doesn’t really have a target demographic for the simple reason that there isn’t any particular type of person that I wouldn’t want using it! If you want a little light amusement in your day, come on in. 

This may seem like it entails very little UX wise. However, it does suggest certain requirements. The idea is that this project is supposed to be amusing to a wide audience. That means that the theme can’t be alienating to certain sections of society. It should also be somewhat amusing. That’s why I went with the resource simply being called “stuff”. In this case, the resource is named something highly generic, which is both comedic and un-alienating. 

I also don’t want my users to have to jump through any hoops to start playing. As a result, the game is presented on one page, with an optional contact form beneath it. After all, simplicity is the name of the game with clickers.

### * User Story 1 (User new to the concept of clickers)

As a user of this site, I am looking for a brief distraction. For whatever reason I end up on Stuff Getter. I am new to clickers, so I don’t immediately know what I’m looking at. However, a large, brightly colored button invites me to click it to “get stuff”. I try this and immediately notice that my current stuff total is now 1. The more I click the more stuff I get. Wondering what the point of “getting stuff” is, I cast my eye down the page and notice several more buttons in a section called “spend stuff”. The first says that I can get an “auto stuff getter” for just 50 stuff! That sounds like a challenge, so I get clicking and buy it. Now I am getting stuff automatically. There are several more objects I can buy too. Maybe I play for a bit more and buy them. Maybe I leave the tab open for a while and allow the auto stuff getter to do its thing.  Either way, I play for a little bit longer and eventually get bored and move on with my day

### * User Story 2 (User who has played clickers before)

I go through exactly the same steps as above but faster. Essentially, I’ve seen these before and I know what is likely to happen. I probably get bored a bit faster as a result, however, I have still been lightly entertained. 

### * User Story 3 (Developer)

I play through a certain amount of the game’s progression as outlined above and eventually realise that there are some interesting features that could easily be added to the project. I want to suggest that to the developper. I notice a sentence at the bottom of the screen that is inviting me to scroll down and do just that. So I scroll down, fill in the form with my idea and maybe check out the game developer’s github and/or linkedin, which are also linked to. 
 
### Wireframe Mockups

Final design differs slightly from what is shown below: 

![Phone formatted wireframe](/assets/wireframes/phone-wireframe.png)

![Tablet formatted wireframe](/assets/wireframes/tablet-wireframe.png)

![Desktop formatted wireframe](/assets/wireframes/desktop-wireframe.png)

<!--Use this section to provide insight into your UX process, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

In particular, as part of this section we recommend that you provide a list of User Stories, with the following general structure:
- As a user type, I want to perform an action, so that I can achieve a goal.

This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. These files should themselves either be included as a pdf file in the project itself (in an separate directory), or just hosted elsewhere online and can be in any format that is viewable inside the browser.

## Features

In this section, you should go over the different parts of your project, and describe each in a sentence or so.
 
### Existing Features
- Feature 1 - allows users X to achieve Y, by having them fill out Z
- ...

For some/all of your features, you may choose to reference the specific project files that implement them, although this is entirely optional.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement
- Another feature idea

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.


## Testing

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.


## Credits

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media
- The photos used in this site were obtained from ...

### Acknowledgements

- I received inspiration for this project from X -->