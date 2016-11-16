angular.module('starter.services', [])
.factory('CategoryService', function ItemsFactory($http) {
		return {
			getAll: function () {
				return $http({
					method: 'GET',
					url: 'data.json'
				});
			}
				
		}

	})

.factory('ProductService', function ItemsFactory($http) {
		return {
			getProducts: function () {
				return $http({
					method: 'GET',
					url: 'data.json'
				});
			}
				
		}

	});