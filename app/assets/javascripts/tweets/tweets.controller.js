(function() {
  'use strict';

  function TweetsController(){
    var vm = this;

    //callable methods on the VM

    vm.name = "You are in the Tweets app"
    vm.getTweet = getTweet;
    vm.createTweet = createTweet;
    vm.updateTweet = updateTweet;
    vm.deleteTweet = deleteTweet;

    // instantiated info
    activate();


    //defined methods
    function activate(){
      getTweets()
    }

    function getTweets(){

    }

    function getTweet(){

    }

    function createTweet(){

    }

    function updateTweet(){

    }

    function deleteTweet(){

    } 
  }


  angular
    .module('app')
    .controller('TweetsController', TweetsController);

}());