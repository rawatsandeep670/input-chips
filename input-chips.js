(function(){
    var app = angular.module("inputChipsApp", []);
    app.directive("inputChips", inputChipsFun);
    inputChipsFun.$inject = [];

    function inputChipsFun(){
          return{
            restrict : 'EA',
            scope : {
              chipsValue : "=",
              chipsUnique : "="
            },
            template: '<div class="chips"><div class="chips-item"></div><input type="text" ng-model="chipsModel" ng-keydown="inputKeyDown($event, false)" ng-blur="inputKeyDown($event, true)"/></div>',
            link : function(scope, elem, attr){
              scope.chipsModel = null;
              var tempChipsArr = [];
              scope.inputKeyDown = function($event, is_blur){
                if($event.keyCode==13 || is_blur){
                  if(scope.chipsModel!=null){

                    if(scope.chipsUnique){
                      if(tempChipsArr.indexOf(scope.chipsModel)!=-1){
                        scope.chipsModel = null;
                        return;
                      }
                    }

                    //******* Regular Expression for Email ID
                    var patt = new RegExp("/*\@/*");
                    if(patt.test(scope.chipsModel)==false){
                      scope.chipsModel = null;
                      return;
                    }
                    //*******End Regular Expression for Email ID

                    elem.find(".chips-item").append("<span class='chips-animation' value='"+(angular.element(".close-chip").length)+"'>"+scope.chipsModel+"<span class='close-chip ion-android-cancel'></span></span>");
                    tempChipsArr.push(scope.chipsModel);
                    scope.chipsModel = null;

                    angular.element(".close-chip").on("click", function(){
                        $(this).parent().css("display", "none");
                        tempChipsArr[$(this).parent().attr("value")] = -1;
                        chipsArrayUpdate();
                    });

                    chipsArrayUpdate();
                  }
                }

                if($event.keyCode==8 && scope.chipsValue.length>0){
                  backspaceDeleteChips(tempChipsArr.length-1);
                  function backspaceDeleteChips(chips_index){
                    if(tempChipsArr[chips_index]!=-1){
                      $(".chips-item>span").eq(chips_index).css("display", "none");
                      tempChipsArr[chips_index] = -1;
                      chipsArrayUpdate();
                      return 1;
                    }

                    chips_index--;
                    backspaceDeleteChips(chips_index);

                  }
                }
              }

              elem.bind("click", function(){
                elem.find(".chips>input").focus();
              });

              function chipsArrayUpdate(){
                scope.chipsValue = [];
                for(var i=0; i<tempChipsArr.length; i++){
                    if(tempChipsArr[i]!=-1){
                      scope.chipsValue.push(tempChipsArr[i]);
                    }
                  }

                  //console.log(scope.chipsValue);
              }


            }
          };
        }
})();