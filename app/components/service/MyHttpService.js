(function(angular) {
    "use strict";
    angular.module('moviecatApp.httpService', [])
        .service('MyHttpService', ['$window','$document',
            function($window,$document) {
                // console.log('window',$window);
                // console.log('document',$document);
                this.myJsonp = function(url, data, callback) {
                    //1、将我们自定义的jsonp回调函数挂载在window上
                    //定义函数名
                    var funcName = 'class11_jsonp_cb_' + Math.random().toString().replace('.', '') + '_' + new Date().getTime();
                    //索引器
                    $window[funcName] = callback; //挂载在window上
                    //2、处理参数，将json对象转为参数形式
                    var queryString = url.indexOf('?') == -1 ? "?" : '&';
                    for (var key in data) {
                        queryString += key + '=' + data[key] + '&';
                    }
                    //3、url处理
                    queryString += 'callback=' + funcName;
                    var myUrl = url + queryString;
                    //4、创建script标签
                    var scriptEle = $document[0].createElement('script');
                    scriptEle.src = myUrl;
                    //5、插入body的后面
                    $document[0].body.appendChild(scriptEle);
                }
                $window.myJsonp = this.myJsonp; //将自己的方法挂载在window上
            }
    ]);
})(angular)