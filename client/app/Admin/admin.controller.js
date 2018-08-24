//main controller for the admin console page
angular.module('threat').controller('AdminController', function($http, values, $routeParams, $window, $base64, ModalService, todelete, identity) {
var vm = this;
vm.users = [];
vm.threatAdversaries = [];
vm.threatAssets = [];
vm.threatAttackTypes = [];
vm.threatAttackVectors = [];
vm.threatVulnerabilities = [];
vm.productCategories= [];
vm.roles = ["Admin", "Base"]
vm.feedTypes = [];
vm.newRole = "";

// edit a row on a table
vm.editEntry = function(tableName, idFieldName, id, objArray) {
  values.set("tableName", tableName);
  values.set("idFieldname", idFieldName);
  values.set("id", id);
  values.set("objArray", objArray);
  ModalService.showModal({
    templateUrl: 'Admin/editElementModal.html',
    controller: 'EditElementController'
  }).then(function(modal) {
    modal.element.modal();
    modal.close.then(function(result) {
     //vm.message = "You said " + result;
    });
  });
 };

//opens the modal for adding a user
vm.trainModal = function() {
     ModalService.showModal({
         templateUrl: 'Admin/train.html',
         controller: 'TrainingInfoController'
     }).then(function(modal) {
         modal.element.modal({backdrop: 'static'});
         modal.element.modal();
         modal.close.then(function(result) {
             //vm.message = "You said " + result;
         });
     });
 };

//opens the modal for adding a user
vm.addUserModal = function() {
     ModalService.showModal({
         templateUrl: 'Admin/addUser.html',
         controller: 'AdduserController'
     }).then(function(modal) {
         modal.element.modal();
         modal.close.then(function(result) {
             //vm.message = "You said " + result;
         });
     });
 };

//opens the modal for adding an adversary type
  vm.addAdversaryModal = function() {
       ModalService.showModal({
           templateUrl: 'Admin/addAdversary.html',
           controller: 'AddadvController'
       }).then(function(modal) {
           modal.element.modal();
           modal.close.then(function(result) {
               //vm.message = "You said " + result;
           });
       });
   };

   //opens the modal for adding an asset type
     vm.addAssetModal = function() {
          ModalService.showModal({
              templateUrl: 'Admin/addAsset.html',
              controller: 'AddAssetController'
          }).then(function(modal) {
              modal.element.modal();
              modal.close.then(function(result) {
                  //vm.message = "You said " + result;
              });
          });
      };

      //opens the modal for adding an attack type
        vm.addAttackTypeModal = function() {
             ModalService.showModal({
                 templateUrl: 'Admin/addAttackType.html',
                 controller: 'AddAttackTypeController'
             }).then(function(modal) {
                 modal.element.modal();
                 modal.close.then(function(result) {
                     //vm.message = "You said " + result;
                 });
             });
         };

         //opens the modal for adding an attack vector
           vm.addAttackVectorModal = function() {
                ModalService.showModal({
                    templateUrl: 'Admin/addAttackVector.html',
                    controller: 'AddAttackVectorController'
                }).then(function(modal) {
                    modal.element.modal();
                    modal.close.then(function(result) {
                        //vm.message = "You said " + result;
                    });
                });
            };

            //opens the modal for adding a vulnerability type
              vm.addVulnerabilityModal = function() {
                   ModalService.showModal({
                       templateUrl: 'Admin/addVulnerability.html',
                       controller: 'AddVulnerabilityController'
                   }).then(function(modal) {
                       modal.element.modal();
                       modal.close.then(function(result) {
                           //vm.message = "You said " + result;
                       });
                   });
               };

//opens the modal for adding a product category
   vm.addProductCategoryModal = function() {
        ModalService.showModal({
            templateUrl: 'Admin/addProductCat.html',
            controller: 'AddadvController'
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {
                //vm.message = "You said " + result;
            });
        });
    };

//opens the modal for adding a new feed type
    vm.addFeedTypeModal = function() {
         ModalService.showModal({
             templateUrl: 'Admin/AddFeedType.html',
             controller: 'AddfeedtypeController'
         }).then(function(modal) {
             modal.element.modal();
             modal.close.then(function(result) {
                 //vm.message = "You said " + result;
             });
         });
     };

//opens the modal for confirming the deletion of a user
     vm.deleteUser = function(id) {
          todelete.storeID(id);
          ModalService.showModal({
              templateUrl: 'Admin/deleteUser.html',
              controller: 'DeleteuserController'
          }).then(function(modal) {
              modal.element.modal();
              modal.close.then(function(result) {
                  //vm.message = "You said " + result;
              });
          });
      };

      vm.updateRole = function(id){
        new_role = ({"user_role" : vm.newRole})
        $http.put(values.get('api') + '/users/' + id + '/role', new_role).then(function(respose){
          $window.location.reload();
        });

      }

//opens a modal for the deletion of a threat adversary
       vm.deleteThreatAdversary = function(id) {
            todelete.storeID(id);
            ModalService.showModal({
                templateUrl: 'Admin/deleteAdversaryType.html',
                controller: 'DeleteadvtypesController'
            }).then(function(modal) {
                modal.element.modal();
                modal.close.then(function(result) {
                    //vm.message = "You said " + result;
                });
            });
        };

//opens a modal for the deletion of a threat asset
       vm.deleteThreatAsset = function(id) {
            todelete.storeID(id);
            ModalService.showModal({
                templateUrl: 'Admin/deleteAssetType.html',
                controller: 'DeleteAssetTypeController'
            }).then(function(modal) {
                modal.element.modal();
                modal.close.then(function(result) {
                    //vm.message = "You said " + result;
                });
            });
        };

//opens a modal for the deletion of a threat attack type
       vm.deleteThreatAttackType = function(id) {
            todelete.storeID(id);
            ModalService.showModal({
                templateUrl: 'Admin/deleteAttackType.html',
                controller: 'DeleteAttackTypeController'
            }).then(function(modal) {
                modal.element.modal();
                modal.close.then(function(result) {
                    //vm.message = "You said " + result;
                });
            });
        };

//opens a modal for the deletion of a threat attack vector
       vm.deleteThreatAttackVector = function(id) {
            todelete.storeID(id);
            ModalService.showModal({
                templateUrl: 'Admin/deleteAttackVectorType.html',
                controller: 'DeleteAttackVectorTypeController'
            }).then(function(modal) {
                modal.element.modal();
                modal.close.then(function(result) {
                    //vm.message = "You said " + result;
                });
            });
        };

//opens a modal for the deletion of a threat vulnerability
       vm.deleteThreatVulnerability = function(id) {
            todelete.storeID(id);
            ModalService.showModal({
                templateUrl: 'Admin/deleteVulnerabilityType.html',
                controller: 'DeleteVulnerabilityTypeController'
            }).then(function(modal) {
                modal.element.modal();
                modal.close.then(function(result) {
                    //vm.message = "You said " + result;
                });
            });
        };

//opens a modal for the deletetion of a product category
        vm.deleteProductCategory = function(id) {
             todelete.storeID(id);
             ModalService.showModal({
                 templateUrl: 'Admin/deleteProductCategory.html',
                 controller: 'DeleteprodcatController'
             }).then(function(modal) {
                 modal.element.modal();
                 modal.close.then(function(result) {
                     //vm.message = "You said " + result;
                 });
             });
         };
//opens a modal for conifirming the deletion of a threat feed type
         vm.deleteThreatFeed = function(id) {
              todelete.storeID(id);
              ModalService.showModal({
                  templateUrl: 'Admin/deleteFeedType.html',
                  controller: 'DeletefeedtypeController'
              }).then(function(modal) {
                  modal.element.modal();
                  modal.close.then(function(result) {
                      //vm.message = "You said " + result;
                  });
              });
          };


//retrieves all users from the API
$http.get(values.get('api') + '/users').then(function(response){
  for(a=0; a<response.data.length; a++){

    vm.users.push({ Name: response.data[a]['user_firstName'] + " " +response.data[a]['user_lastName'],
                               WWID: response.data[a]['user_id'], Email: response.data[a]['user_email'],
                               ID: response.data[a]['user_id'], Role: response.data[a]['user_role']});
  }
});

//retrieves all feed types from the API
$http.get(values.get('api') + '/feedTypes').then(function(response){
  for(e=0; e<response.data.length; e++){

    vm.feedTypes.push({Title: response.data[e]['type_name'],
                               Desc: response.data[e]['type_desc'],
                             ID: response.data[e]['type_id']});
  }
});

//retrieves all adversaries from the API
$http.get(values.get('api') + '/adversaries').then(function(response){
  for(c=0; c<response.data.length; c++){

    vm.threatAdversaries.push({ Name: response.data[c]['adv_name'],
                               Desc: response.data[c]['adv_desc'],
                             ID: response.data[c]['adv_id']});
  }
});

//retrieves all assets from the API
$http.get(values.get('api') + '/assets').then(function(response){
  for(c=0; c<response.data.length; c++){

    vm.threatAssets.push({ Name: response.data[c]['asset_name'],
                               Desc: response.data[c]['asset_desc'],
                             ID: response.data[c]['asset_id']});
  }
});

//retrieves all attack types from the API
$http.get(values.get('api') + '/attack_types').then(function(response){
  for(c=0; c<response.data.length; c++){

    vm.threatAttackTypes.push({ Name: response.data[c]['atktyp_name'],
                               Desc: response.data[c]['atktyp_desc'],
                             ID: response.data[c]['atktyp_id']});
  }
});

//retrieves all attack vectors from the API
$http.get(values.get('api') + '/attack_vectors').then(function(response){
  for(c=0; c<response.data.length; c++) {

    vm.threatAttackVectors.push({ Name: response.data[c]['atkvtr_name'],
                               Desc: response.data[c]['atkvtr_desc'],
                             ID: response.data[c]['atkvtr_id']});
  }
});

//retrieves all vulnerabilities from the API
$http.get(values.get('api') + '/vulnerabilities').then(function(response){
  for(c=0; c<response.data.length; c++) {

    vm.threatVulnerabilities.push({ Name: response.data[c]['vuln_name'],
                               Desc: response.data[c]['vuln_desc'],
                             ID: response.data[c]['vuln_id']});
  }
});



////retrieves all product categories
$http.get(values.get('api') + '/productCategories').then(function(response){
  for(d=0; d<response.data.length; d++){

   vm.productCategories.push({ Name: response.data[d]['category_name'],
                               Desc: response.data[d]['category_desc'],
                             ID: response.data[d]['category_id']});
  }
});


});
