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

.controller('BooksCtrl', function ($scope, $stateParams, ProductService) {
	$scope.categoryId = $stateParams.categoryId
	ProductService.getProducts()

	.then(function (response) {
		$scope.allBooks = response.data.books;
		//			console.log($scope.allBooks);
		$scope.data = $scope.allBooks.filter(x => x.cat_id[0] == [$stateParams.categoryId]);
		console.log($scope.data);

	}, function (response) {


	})
})


.controller('DetailsCtrl', function ($scope, $stateParams, ProductService) {
	$scope.itemid = $stateParams.itemid;
	$scope.item = {};
	ProductService.getProducts($scope.item)
		.then(function (response) {
			var items = response.data.books;
			items.forEach(function (i) {
				if (i._id == $stateParams.itemid) {
					$scope.item = i;

					console.log($scope.item);
					console.log($scope.itemid);
				}
			});

		}, function (response) {


		})
	$scope.ratingsObject = {
		iconOn: 'ion-ios-star',
		iconOff: 'ion-ios-star-outline',
		iconOnColor: 'rgb(200, 200, 100)',
		iconOffColor: 'rgb(200, 100, 100)',
		rating: localStorage.getItem($scope.itemid),
		minRating: 0,
		callback: function (rating) {
			$scope.ratingsCallback(rating);
		}
	};


	$scope.ratingsCallback = function (rating) {
			localStorage.setItem($scope.itemid, rating);

	};

});