angular.module('starter.controllers', [])
	.controller('AppCtrl', function ($scope, $stateParams, CategoryService) {
$scope.categoryId = $stateParams.categoryId
		CategoryService.getAll()
			.then(function (response) {
				$scope.allData = response.data.categories;
			console.log($scope.allData[0]._id);
//		alert("!");
			

			});

	}, function (response) {


	})
	
	.controller('BooksCtrl', function($scope, $stateParams, ProductService){
	$scope.categoryId = $stateParams.categoryId
	ProductService.getProducts()

	.then(function (response) {
				$scope.allBooks = response.data.books;
//			console.log($scope.allBooks);
				$scope.data = $scope.allBooks.filter(x => x.cat_id[0] == [$stateParams.categoryId]);
			console.log($scope.data);
		

			});

	}, function (response) {


	})

	.controller('DetailsCtrl', function($scope, $stateParams, ProductService){
	$scope.itemid = $stateParams.itemid;
	$scope.item = {};
	ProductService.getProducts()
		.then(function (response) {
			var items = response.data.books;
			items.forEach(function (i) {
				if (i._id == $stateParams.itemid) {
					//use a foreach loop to fetch the item id for the item clicked on. 
					$scope.item = i;

					console.log($scope.item);
				}
			});

		}, function (response) {


		})



	});
