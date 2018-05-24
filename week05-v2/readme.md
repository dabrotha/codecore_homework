
Assignment: Blog On Rails


Create a new Rails project, blog_on_rails. Make sure to use PostgreSQL for your database and skip tests when you generate the project.

Take your time implementing every piece of code. Test your code every step of the way.
Posts Model

Create a Posts model with the following requirements:

    It must have title and body columns. The body column must be of the type text.
    It must have accompanying seeding code to generate at least 50 posts.
    The title column must be present and unique.
    The body column must be present and contain at least 50 characters.

Using a Gem to Install Boostrap

Using twbs/bootstrap-rubygem, carefully follow its instructions to install Boostrap.

Your app/assets/javascripts/application.js should look like the following:

//= require jquery3
//= require popper
//= require bootstrap
//= require rails-ujs
//= require turbolinks
//= require_tree .

Your app/assets/stylesheets/application.css must be renamed to app/assets/stylesheets/application.scss and it should look like the following:

@import "boostrap";
@import "main";

Create a file in app/assets/stylesheets/ named main.scss and write your personal CSS there.
Posts Controller

Create all CRUD actions for posts using RESTful route names. A user should be able to:

    See a listing of posts
    See individual posts
    Create new posts
    Delete posts
    Edit posts

Display the creation date of a post in a human friendly way as shown in the mockup for the posts' show page.

Make the posts#index action the root page.
Posts Have Many Comments

Add the ability to comment on a post's show page. Comments will need a new table, a new controller with the create and destroy action. Look at the mockup for the posts' show page to see how comments should be created.

Make sure to that the Delete links for comments are functional.

Like in the mockups, display a comment's creation date in human friendly way.
Mockups

The following are mockups as opposed to wireframes and should be implemented accurately:

Index

Show

New

Edit

This assignment has not been marked 