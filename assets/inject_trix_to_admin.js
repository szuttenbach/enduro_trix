// inject summernote css into the admin interface
$('head').append('<link href="https://cdnjs.cloudflare.com/ajax/libs/trix/1.0.0/trix.css" rel="stylesheet">');
$('head').append('<style>.trix { margin: 10px 0; }</style>');

// * ———————————————————————————————————————————————————————— * //
// *	trix directive
// * ———————————————————————————————————————————————————————— * //
enduro_admin_app.compileProvider
	.directive('trix', function () {
		return {
      restrict: 'E',
			link: function (scope, element, attr) {
        $.getScript('https://cdnjs.cloudflare.com/ajax/libs/trix/1.0.0/trix-core.js', function () {

          
				})
			}
		}
	})
