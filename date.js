//jshint esversion:6

exports.getDay = function () {
     //get day 
     let today = new Date();

     let option = {
         weekday: 'long',
         day: 'numeric',
         month: 'long'
     };
     return today.toLocaleDateString('en-US', option);
};

exports.getDate = function () {
         //get date 
         let today = new Date();

         let option = {
             weekday: 'long',
         };
         return today.toLocaleDateString('en-US', option);
    
};