var deferSrcSetters,show;deferSrcSetters=[],angular.element(document).ready(function(){var e,t,r,n,o=[];for(e=0,r=(t=deferSrcSetters).length;r>e;++e)n=t[e],o.push(n());return o}),angular.module("g0v.tw",["firebase","btford.markdown"]).factory({fireRoot:["angularFireCollection"].concat(function(){var e;return e="https://g0vsite.firebaseio.com",new Firebase(e)})}).directive("deferSrc",function(){return{restrict:"A",link:function(e,t){var r;return r=t.attr("defer-src"),deferSrcSetters.push(function(){return t.attr("src",r)})}}}).controller({EventCtrl:["$scope","angularFireCollection","fireRoot"].concat(function(e,t,r){return e.events=t(r.child("feed/events/articles").limit(2))})}).controller({BlogCtrl:["$scope","angularFireCollection","fireRoot"].concat(function(e,t,r){return e.articles=t(r.child("feed/blog/articles").limit(4))})}).controller({FeaturedCtrl:["$scope","angularFireCollection"].concat(function(e,t){var r;return r=new Firebase("https://g0vhub.firebaseio.com/projects"),e.projects=t(r),e.nextProject=function(){return void 0!==e.idx?($("#prj-img").css("opacity",0),++e.idx,e.idx%=e.featured.length):void 0},e.$watch("projects.length",function(){var t,r,n,o,a;for(t=[],r=0,o=(n=e.projects).length;o>r;++r)a=n[r],a.thumbnail&&t.push(a);return e.featured=t,e.idx=Math.floor(Math.random()*e.featured.length)}),e.$watch("idx",function(t,r){return void 0!==r?e.project=e.featured[r]:void 0})})}).controller({BuildIdCtrl:["$scope"].concat(function(e){return e.buildId=window.global.config.BUILD})}),show=function(){var e,t;return e=$("#prj-img"),e.animate({opacity:1},500),t=[40+e.height()][0],$("#prj-img-div").animate({height:t+"px"},500)},$(function(){return $(".ui.dropdown").dropdown()}),function(){var e={};e.exports={BUILD:"git-f50b382"},window.global||(window.global={}),window.global.config=e.exports}.call(this);