myApp.service('ShelfService', ['$http', '$location', function ($http, $location) {
    console.log('ShelfService Loaded');
    
    var self = this;
  
    self.userObject = {};
    self.items = { list: [] };
  

    /* Add New Item */
    self.addItem = function(newItem){
        
        $http.post('/api/shelf/addItem', newItem).then(
            function(response) {
              console.log('item added: ', response);
              self.getItems();
        
            })// end POST       
    }// end add new Item



    self.getItems = function(){

        $http.get('/api/shelf/getItems')
            .then(function (response) {

                console.log('items response: ', response.data );
                self.items.list = response.data;
            })


    }// end Get Items

    //Call getItems to fetch item list
    self.getItems();



    // // ask the server if this user is logged in
    // self.getuser = function () {
    //   $http.get('/api/user')
    //     .then(function (response) {
    //       if (response.data.username) {
    //         // user has a curret session on the server
    //         self.userObject.userName = response.data.username;
    //         console.log('User Data: ', self.userObject.userName);
    //       } else {
    //         // unlikely to get here, but if we do, bounce them back to the login page
    //         $location.path("/home");
    //       }
    //     },
    //     // error response of unauthorized (403)
    //     function(response) {
    //       // user has no session, bounce them back to the login page
    //       $location.path("/home");
    //     });
    // }
  
    // self.logout = function () {
    //   $http.get('/api/user/logout')
    //     .then(function (response) {
    //       console.log('logged out');
    //       $location.path("/home");
    //     },
    //   function(response) {
    //     console.log('logged out error');
    //     $location.path("/home");
    //   });
    // }
  }]);
  