// 'use strict';
//
// // Users service used for communicating with the users REST endpoint
// angular.module('orders').factory('Orders', ['$resource',
//   function ($resource) {
//     return $resource('api/orders', {}, {
//       update: {
//         method: 'PUT'
//       }
//     });
//   }
// ]);
//
// //TODO this should be Users service
// angular.module('users.admin').factory('Admin', ['$resource',
//   function ($resource) {
//     return $resource('api/users/:userId', {
//       userId: '@_id'
//     }, {
//       update: {
//         method: 'PUT'
//       }
//     });
//   }
// ]);
