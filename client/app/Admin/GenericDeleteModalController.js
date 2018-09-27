// controller for deleting a feed type
angular.module('threat').controller('GenericDeleteModalController', function ($http, $window, todelete, values, $element) {
    const vm = this

    const id = todelete.getID()

    vm.confirmDelete = function (type) {
        switch (type) {
        case 'feedType':
            $http.delete(`${values.get('api')}/feedTypes/${id}`).then((response) => {
                todelete.storeID(null)
                $window.location.reload()
            })
            break
        case 'attackVectorType':
            $http.delete(`${values.get('api')}/attack_vectors/${id}`).then((response) => {
                todelete.storeID(null)
                $window.location.reload()
            })
            break
        case 'attackType':
            $http.delete(`${values.get('api')}/attack_types/${id}`).then((response) => {
                todelete.storeID(null)
                $window.location.reload()
            })
            break
        case 'assetType':
            $http.delete(`${values.get('api')}/assets/${id}`).then((response) => {
                todelete.storeID(null)
                $window.location.reload()
            })
            break
        case 'advType':
            $http.delete(`${values.get('api')}/adversaries/${id}`).then((response) => {
                todelete.storeID(null)
                $window.location.reload()
            })
            break
        case 'productCat':
            $http.delete(`${values.get('api')}/productCategories/${id}`).then((response) => {
                todelete.storeID(null)
                $window.location.reload()
            })
            break
        case 'user':
            $http.delete(`${values.get('api')}/users/${id}`).then((response) => {
                todelete.storeID(null)
                $window.location.reload()
            })
            break
        case 'vulnerabilityType':
            $http.delete(`${values.get('api')}/vulnerabilities/${id}`).then((response) => {
                todelete.storeID(null)
                $window.location.reload()
            })
            break
        }
    }
})
