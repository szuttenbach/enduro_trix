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

          element.on('trix-initialize', function() {
            console.log(2222);
            element[0].editor.loadHTML(ngModel.$modelValue);
          });
        
          registerEvents('trix-initialize', 'trixInitialize');
          // $(element[0]).summernote(brick_admin_settings.enduro_summernote);

          // $(element[0]).on('summernote.change', function(_, contents) {
          //   scope.context[scope.terminatedkey] = contents;
          // });

					// scope.$watch('current_culture', function () {
          //   $(element[0]).summernote('code', scope.context[scope.terminatedkey] || '');
					// })

          // $(element[0]).summernote('code', scope.context[scope.terminatedkey]);
				})
			}
		}
	})
