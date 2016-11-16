(function() {
  'use strict';

  function TweetFactory($http){
    return {
      getTweets: getTweets,
      getTweet: getTweet,
      createTweet: createTweet,
      updateTweet: updateTweet,
      deleteTweet: deleteTweet
    }

    function getTweets(){
      return $http.get('/tweets')
        .then(handleResponse)
        .catch(handleError)
    }

    function getTweet(){
      return $http.get('/tweet/:id')
    }

    function createTweet(tweet){
      var req = {
        method: 'POST',
        url: '/tweets',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
          tweet: tweet
        }
      };
      return $http(req)
        .catch(handleError)
    }

    function updateTweet(tweet_id){
      console.log("FROM INSIDE TweetFactory.UPDATETWEET")
      var req = {
        method: 'PATCH',
        url: '/tweets',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        data: {
          id: tweet_id
        }
      };

      return $http(req)
        .catch(handleError)
    }

    function deleteTweet(){

    }

    function handleResponse(response){
      console.log(response)
      return response.data
    }

    function handleError(error){
      console.log(error)
    }
  }

  TweetFactory.$inject = ['$http']

  angular
    .module('app')
    .factory('TweetFactory', TweetFactory);

}());