# Twitter Clone

## Project Summary

This is a Twitter clone. It uses a Rails backend to persist tweets data and exposes the tweets ruby objects as JSON using ActiveModel Serializers. Angular renders it quickly without page refresh.

## Installation

To run this simply clone or fork it, run `bundle install`, `rake db:migrate` and then `rails s`.

Bower is included in the gem so if you want to add some front end dependencies, add them to the bower.json file and run `rake bower:install


## Todos
- [X] Create Tweets ... Done
- [X] Read Tweets ... Done
- [ ] Update Tweets
- [ ] Destroy Tweets