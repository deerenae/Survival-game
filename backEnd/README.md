# README

This README includes the necessary steps to get the
application up and running.

* Survival Game: Year 2020
    This project is a game in which the user, or 'survivor' must choose a shelter and then a tool to help them survive the year of 2020. If the survivor chooses wisely they survive, if not they do not survive.

* In backEnd Directory
   * Within the terminal run:
    > bundle install
    <!-- to install gems in Gemfile -->
    > rails db:migrate
    <!-- to migrate database -->
    > rails db:seed
    <!-- to seed data -->
    > rails s
    <!-- to start backend server -->

* In frontEnd Directory
   * Within the terminal run:
   > lite-server
   <!-- to start frontend server -->

* How to run the test suite
    *Call 'byebug' anywhere in the backend code to stop execution and get a debugger console
    gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]

    *To test in the frontend use console.log() in the code in Javascript files then go to the developer console within the application's browser

* Created by Katie Belanger and Matt Mrozewski

* Ruby 2.6.1

