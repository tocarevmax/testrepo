import Item from '../models/item';
import mongoose, { Schema } from 'mongoose';
// import moment from 'moment';

export const index = (req, res, next) => {
  Item.find().lean().exec((err, items) => res.json(
    { items }
  ));
};

export const create = (req, res, next) => {
  mongoose.model('user').create({
    id: currentUser.id,
    name: currentUser.name
  });
};





// //POST a new blob
//     .post(function(req, res) {
//         // Get values from POST request. These can be done through forms or REST calls. These rely on the "name" attributes for forms
//         var name = req.body.name;
//         var badge = req.body.badge;
//         var dob = req.body.dob;
//         var company = req.body.company;
//         var isloved = req.body.isloved;
//         //call the create function for our database
//         mongoose.model('Blob').create({
//             name : name,
//             badge : badge,
//             dob : dob,
//             isloved : isloved
//         }, function (err, blob) {
//               if (err) {
//                   res.send("There was a problem adding the information to the database.");
//               } else {
//                   //Blob has been created
//                   console.log('POST creating new blob: ' + blob);
//                   res.format({
//                       //HTML response will set the location and redirect back to the home page. You could also create a 'success' page if that's your thing
//                     html: function(){
//                         // If it worked, set the header so the address bar doesn't still say /adduser
//                         res.location("blobs");
//                         // And forward to success page
//                         res.redirect("/blobs");
//                     },
//                     //JSON response will show the newly created blob
//                     json: function(){
//                         res.json(blob);
//                     }
//                 });
//               }
//         })
//     });
