/*
 * 
 *                  xxxxxxx      xxxxxxx
 *                   x:::::x    x:::::x 
 *                    x:::::x  x:::::x  
 *                     x:::::xx:::::x   
 *                      x::::::::::x    
 *                       x::::::::x     
 *                       x::::::::x     
 *                      x::::::::::x    
 *                     x:::::xx:::::x   
 *                    x:::::x  x:::::x  
 *                   x:::::x    x:::::x 
 *              THE xxxxxxx      xxxxxxx TOOLKIT
 *                    
 *                  http://www.goXTK.com
 *                   
 * Copyright (c) 2012 The X Toolkit Developers <dev@goXTK.com>
 *                   
 *    The X Toolkit (XTK) is licensed under the MIT License:
 *      http://www.opensource.org/licenses/mit-license.php
 * 
 *      "Free software" is a matter of liberty, not price.
 *      "Free" as in "free speech", not as in "free beer".
 *                                         - Richard M. Stallman
 * 
 * 
 */
function $JSCompiler_alias_THROW$$($jscomp_throw_param$$) {
  throw $jscomp_throw_param$$;
}
var $JSCompiler_alias_VOID$$ = void 0, $JSCompiler_alias_TRUE$$ = !0, $JSCompiler_alias_NULL$$ = null, $JSCompiler_alias_FALSE$$ = !1;
function $JSCompiler_set$$($JSCompiler_set_name$$) {
  return function($JSCompiler_set_value$$) {
    this[$JSCompiler_set_name$$] = $JSCompiler_set_value$$
  }
}
function $JSCompiler_get$$($JSCompiler_get_name$$) {
  return function() {
    return this[$JSCompiler_get_name$$]
  }
}
var $JSCompiler_prototypeAlias$$, $goog$global$$ = this;
function $goog$nullFunction$$() {
}
function $goog$typeOf$$($value$$38$$) {
  var $s$$2$$ = typeof $value$$38$$;
  if("object" == $s$$2$$) {
    if($value$$38$$) {
      if($value$$38$$ instanceof Array) {
        return"array"
      }
      if($value$$38$$ instanceof Object) {
        return $s$$2$$
      }
      var $className$$1$$ = Object.prototype.toString.call($value$$38$$);
      if("[object Window]" == $className$$1$$) {
        return"object"
      }
      if("[object Array]" == $className$$1$$ || "number" == typeof $value$$38$$.length && "undefined" != typeof $value$$38$$.splice && "undefined" != typeof $value$$38$$.propertyIsEnumerable && !$value$$38$$.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == $className$$1$$ || "undefined" != typeof $value$$38$$.call && "undefined" != typeof $value$$38$$.propertyIsEnumerable && !$value$$38$$.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == $s$$2$$ && "undefined" == typeof $value$$38$$.call) {
      return"object"
    }
  }
  return $s$$2$$
}
function $goog$isDef$$($val$$) {
  return $val$$ !== $JSCompiler_alias_VOID$$
}
function $goog$isDefAndNotNull$$($val$$2$$) {
  return $val$$2$$ != $JSCompiler_alias_NULL$$
}
function $goog$isArray$$($val$$3$$) {
  return"array" == $goog$typeOf$$($val$$3$$)
}
function $goog$isArrayLike$$($val$$4$$) {
  var $type$$46$$ = $goog$typeOf$$($val$$4$$);
  return"array" == $type$$46$$ || "object" == $type$$46$$ && "number" == typeof $val$$4$$.length
}
function $goog$isString$$($val$$6$$) {
  return"string" == typeof $val$$6$$
}
function $goog$isNumber$$($val$$8$$) {
  return"number" == typeof $val$$8$$
}
function $goog$isFunction$$($val$$9$$) {
  return"function" == $goog$typeOf$$($val$$9$$)
}
function $goog$isObject$$($type$$47_val$$10$$) {
  $type$$47_val$$10$$ = $goog$typeOf$$($type$$47_val$$10$$);
  return"object" == $type$$47_val$$10$$ || "array" == $type$$47_val$$10$$ || "function" == $type$$47_val$$10$$
}
function $goog$getUid$$($obj$$17$$) {
  return $obj$$17$$[$goog$UID_PROPERTY_$$] || ($obj$$17$$[$goog$UID_PROPERTY_$$] = ++$goog$uidCounter_$$)
}
var $goog$UID_PROPERTY_$$ = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), $goog$uidCounter_$$ = 0;
function $goog$bindNative_$$($fn$$, $selfObj$$1$$, $var_args$$17$$) {
  return $fn$$.call.apply($fn$$.bind, arguments)
}
function $goog$bindJs_$$($fn$$1$$, $selfObj$$2$$, $var_args$$18$$) {
  $fn$$1$$ || $JSCompiler_alias_THROW$$(Error());
  if(2 < arguments.length) {
    var $boundArgs$$ = Array.prototype.slice.call(arguments, 2);
    return function() {
      var $newArgs$$ = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply($newArgs$$, $boundArgs$$);
      return $fn$$1$$.apply($selfObj$$2$$, $newArgs$$)
    }
  }
  return function() {
    return $fn$$1$$.apply($selfObj$$2$$, arguments)
  }
}
function $goog$bind$$($fn$$2$$, $selfObj$$3$$, $var_args$$19$$) {
  $goog$bind$$ = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? $goog$bindNative_$$ : $goog$bindJs_$$;
  return $goog$bind$$.apply($JSCompiler_alias_NULL$$, arguments)
}
function $goog$partial$$($fn$$3$$, $var_args$$20$$) {
  var $args$$ = Array.prototype.slice.call(arguments, 1);
  return function() {
    var $newArgs$$1$$ = Array.prototype.slice.call(arguments);
    $newArgs$$1$$.unshift.apply($newArgs$$1$$, $args$$);
    return $fn$$3$$.apply(this, $newArgs$$1$$)
  }
}
var $goog$now$$ = Date.now || function() {
  return+new Date
};
function $goog$exportSymbol$$($publicPath$$, $object$$2$$) {
  var $parts$$inline_49$$ = $publicPath$$.split("."), $cur$$inline_50$$ = $goog$global$$;
  !($parts$$inline_49$$[0] in $cur$$inline_50$$) && $cur$$inline_50$$.execScript && $cur$$inline_50$$.execScript("var " + $parts$$inline_49$$[0]);
  for(var $part$$inline_51$$;$parts$$inline_49$$.length && ($part$$inline_51$$ = $parts$$inline_49$$.shift());) {
    !$parts$$inline_49$$.length && $goog$isDef$$($object$$2$$) ? $cur$$inline_50$$[$part$$inline_51$$] = $object$$2$$ : $cur$$inline_50$$ = $cur$$inline_50$$[$part$$inline_51$$] ? $cur$$inline_50$$[$part$$inline_51$$] : $cur$$inline_50$$[$part$$inline_51$$] = {}
  }
}
function $goog$inherits$$($childCtor$$, $parentCtor$$) {
  function $tempCtor$$() {
  }
  $tempCtor$$.prototype = $parentCtor$$.prototype;
  $childCtor$$.$superClass_$ = $parentCtor$$.prototype;
  $childCtor$$.prototype = new $tempCtor$$
}
;window["X.Counter"] = function() {
  var $privateCounter$$ = 0;
  return{$increment$:function() {
    $privateCounter$$ += 1
  }, $decrement$:function() {
    $privateCounter$$ += -1
  }, value:function() {
    return $privateCounter$$
  }}
}();
if(!Function.prototype.bind) {
  Function.prototype.bind = function $Function$$bind$($oThis$$) {
    function $fBound$$() {
      return $fToBind$$.apply(this instanceof $fNOP$$ ? this : $oThis$$ || window, $aArgs$$.concat($fSlice$$.call(arguments)))
    }
    function $fNOP$$() {
    }
    "function" !== typeof this && $JSCompiler_alias_THROW$$(new TypeError("Function.prototype.bind - what is trying to be bound is not callable"));
    var $fSlice$$ = Array.prototype.slice, $aArgs$$ = $fSlice$$.call(arguments, 1), $fToBind$$ = this;
    $fNOP$$.prototype = this.prototype;
    $fBound$$.prototype = new $fNOP$$;
    return $fBound$$
  }
}
$goog$exportSymbol$$("Function.prototype.bind", Function.prototype.bind);
function $goog$string$subs$$($str$$12$$, $var_args$$22$$) {
  for(var $i$$5$$ = 1;$i$$5$$ < arguments.length;$i$$5$$++) {
    var $replacement$$ = ("" + arguments[$i$$5$$]).replace(/\$/g, "$$$$"), $str$$12$$ = $str$$12$$.replace(/\%s/, $replacement$$)
  }
  return $str$$12$$
}
function $goog$string$htmlEscape$$($str$$31$$) {
  if(!$goog$string$allRe_$$.test($str$$31$$)) {
    return $str$$31$$
  }
  -1 != $str$$31$$.indexOf("&") && ($str$$31$$ = $str$$31$$.replace($goog$string$amperRe_$$, "&amp;"));
  -1 != $str$$31$$.indexOf("<") && ($str$$31$$ = $str$$31$$.replace($goog$string$ltRe_$$, "&lt;"));
  -1 != $str$$31$$.indexOf(">") && ($str$$31$$ = $str$$31$$.replace($goog$string$gtRe_$$, "&gt;"));
  -1 != $str$$31$$.indexOf('"') && ($str$$31$$ = $str$$31$$.replace($goog$string$quotRe_$$, "&quot;"));
  return $str$$31$$
}
var $goog$string$amperRe_$$ = /&/g, $goog$string$ltRe_$$ = /</g, $goog$string$gtRe_$$ = />/g, $goog$string$quotRe_$$ = /\"/g, $goog$string$allRe_$$ = /[&<>\"]/;
var $goog$userAgent$detectedOpera_$$, $goog$userAgent$detectedIe_$$, $goog$userAgent$detectedWebkit_$$, $goog$userAgent$detectedMobile_$$, $goog$userAgent$detectedGecko_$$, $goog$userAgent$detectedMac_$$, $goog$userAgent$detectedWindows_$$;
function $goog$userAgent$getUserAgentString$$() {
  return $goog$global$$.navigator ? $goog$global$$.navigator.userAgent : $JSCompiler_alias_NULL$$
}
function $goog$userAgent$getNavigator$$() {
  return $goog$global$$.navigator
}
$goog$userAgent$detectedGecko_$$ = $goog$userAgent$detectedMobile_$$ = $goog$userAgent$detectedWebkit_$$ = $goog$userAgent$detectedIe_$$ = $goog$userAgent$detectedOpera_$$ = $JSCompiler_alias_FALSE$$;
var $ua$$inline_57$$;
if($ua$$inline_57$$ = $goog$userAgent$getUserAgentString$$()) {
  var $navigator$$inline_58$$ = $goog$userAgent$getNavigator$$();
  $goog$userAgent$detectedOpera_$$ = 0 == $ua$$inline_57$$.indexOf("Opera");
  $goog$userAgent$detectedIe_$$ = !$goog$userAgent$detectedOpera_$$ && -1 != $ua$$inline_57$$.indexOf("MSIE");
  $goog$userAgent$detectedMobile_$$ = ($goog$userAgent$detectedWebkit_$$ = !$goog$userAgent$detectedOpera_$$ && -1 != $ua$$inline_57$$.indexOf("WebKit")) && -1 != $ua$$inline_57$$.indexOf("Mobile");
  $goog$userAgent$detectedGecko_$$ = !$goog$userAgent$detectedOpera_$$ && !$goog$userAgent$detectedWebkit_$$ && "Gecko" == $navigator$$inline_58$$.product
}
var $goog$userAgent$OPERA$$ = $goog$userAgent$detectedOpera_$$, $goog$userAgent$IE$$ = $goog$userAgent$detectedIe_$$, $goog$userAgent$GECKO$$ = $goog$userAgent$detectedGecko_$$, $goog$userAgent$WEBKIT$$ = $goog$userAgent$detectedWebkit_$$, $goog$userAgent$MOBILE$$ = $goog$userAgent$detectedMobile_$$, $goog$userAgent$PLATFORM$$, $navigator$$inline_60$$ = $goog$userAgent$getNavigator$$();
$goog$userAgent$PLATFORM$$ = $navigator$$inline_60$$ && $navigator$$inline_60$$.platform || "";
$goog$userAgent$detectedMac_$$ = -1 != $goog$userAgent$PLATFORM$$.indexOf("Mac");
$goog$userAgent$detectedWindows_$$ = -1 != $goog$userAgent$PLATFORM$$.indexOf("Win");
var $goog$userAgent$X11$$ = !!$goog$userAgent$getNavigator$$() && -1 != ($goog$userAgent$getNavigator$$().appVersion || "").indexOf("X11"), $goog$userAgent$VERSION$$;
a: {
  var $version$$inline_63$$ = "", $re$$inline_64$$;
  if($goog$userAgent$OPERA$$ && $goog$global$$.opera) {
    var $operaVersion$$inline_65$$ = $goog$global$$.opera.version, $version$$inline_63$$ = "function" == typeof $operaVersion$$inline_65$$ ? $operaVersion$$inline_65$$() : $operaVersion$$inline_65$$
  }else {
    if($goog$userAgent$GECKO$$ ? $re$$inline_64$$ = /rv\:([^\);]+)(\)|;)/ : $goog$userAgent$IE$$ ? $re$$inline_64$$ = /MSIE\s+([^\);]+)(\)|;)/ : $goog$userAgent$WEBKIT$$ && ($re$$inline_64$$ = /WebKit\/(\S+)/), $re$$inline_64$$) {
      var $arr$$inline_66$$ = $re$$inline_64$$.exec($goog$userAgent$getUserAgentString$$()), $version$$inline_63$$ = $arr$$inline_66$$ ? $arr$$inline_66$$[1] : ""
    }
  }
  if($goog$userAgent$IE$$) {
    var $docMode$$inline_67$$, $doc$$inline_402$$ = $goog$global$$.document;
    $docMode$$inline_67$$ = $doc$$inline_402$$ ? $doc$$inline_402$$.documentMode : $JSCompiler_alias_VOID$$;
    if($docMode$$inline_67$$ > parseFloat($version$$inline_63$$)) {
      $goog$userAgent$VERSION$$ = "" + $docMode$$inline_67$$;
      break a
    }
  }
  $goog$userAgent$VERSION$$ = $version$$inline_63$$
}
var $goog$userAgent$isVersionCache_$$ = {};
function $goog$userAgent$isVersion$$($version$$8$$) {
  var $JSCompiler_temp$$41_order$$inline_71$$;
  if(!($JSCompiler_temp$$41_order$$inline_71$$ = $goog$userAgent$isVersionCache_$$[$version$$8$$])) {
    $JSCompiler_temp$$41_order$$inline_71$$ = 0;
    for(var $v1Subs$$inline_72$$ = ("" + $goog$userAgent$VERSION$$).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), $v2Subs$$inline_73$$ = ("" + $version$$8$$).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), $subCount$$inline_74$$ = Math.max($v1Subs$$inline_72$$.length, $v2Subs$$inline_73$$.length), $subIdx$$inline_75$$ = 0;0 == $JSCompiler_temp$$41_order$$inline_71$$ && $subIdx$$inline_75$$ < $subCount$$inline_74$$;$subIdx$$inline_75$$++) {
      var $v1Sub$$inline_76$$ = $v1Subs$$inline_72$$[$subIdx$$inline_75$$] || "", $v2Sub$$inline_77$$ = $v2Subs$$inline_73$$[$subIdx$$inline_75$$] || "", $v1CompParser$$inline_78$$ = RegExp("(\\d*)(\\D*)", "g"), $v2CompParser$$inline_79$$ = RegExp("(\\d*)(\\D*)", "g");
      do {
        var $v1Comp$$inline_80$$ = $v1CompParser$$inline_78$$.exec($v1Sub$$inline_76$$) || ["", "", ""], $v2Comp$$inline_81$$ = $v2CompParser$$inline_79$$.exec($v2Sub$$inline_77$$) || ["", "", ""];
        if(0 == $v1Comp$$inline_80$$[0].length && 0 == $v2Comp$$inline_81$$[0].length) {
          break
        }
        $JSCompiler_temp$$41_order$$inline_71$$ = ((0 == $v1Comp$$inline_80$$[1].length ? 0 : parseInt($v1Comp$$inline_80$$[1], 10)) < (0 == $v2Comp$$inline_81$$[1].length ? 0 : parseInt($v2Comp$$inline_81$$[1], 10)) ? -1 : (0 == $v1Comp$$inline_80$$[1].length ? 0 : parseInt($v1Comp$$inline_80$$[1], 10)) > (0 == $v2Comp$$inline_81$$[1].length ? 0 : parseInt($v2Comp$$inline_81$$[1], 10)) ? 1 : 0) || ((0 == $v1Comp$$inline_80$$[2].length) < (0 == $v2Comp$$inline_81$$[2].length) ? -1 : (0 == $v1Comp$$inline_80$$[2].length) > 
        (0 == $v2Comp$$inline_81$$[2].length) ? 1 : 0) || ($v1Comp$$inline_80$$[2] < $v2Comp$$inline_81$$[2] ? -1 : $v1Comp$$inline_80$$[2] > $v2Comp$$inline_81$$[2] ? 1 : 0)
      }while(0 == $JSCompiler_temp$$41_order$$inline_71$$)
    }
    $JSCompiler_temp$$41_order$$inline_71$$ = $goog$userAgent$isVersionCache_$$[$version$$8$$] = 0 <= $JSCompiler_temp$$41_order$$inline_71$$
  }
  return $JSCompiler_temp$$41_order$$inline_71$$
}
var $goog$userAgent$isDocumentModeCache_$$ = {};
function $goog$userAgent$isDocumentMode$$($documentMode$$) {
  return $goog$userAgent$isDocumentModeCache_$$[$documentMode$$] || ($goog$userAgent$isDocumentModeCache_$$[$documentMode$$] = $goog$userAgent$IE$$ && document.documentMode && document.documentMode >= $documentMode$$)
}
;function $goog$object$forEach$$($obj$$21$$, $f$$) {
  for(var $key$$16$$ in $obj$$21$$) {
    $f$$.call($JSCompiler_alias_VOID$$, $obj$$21$$[$key$$16$$], $key$$16$$, $obj$$21$$)
  }
}
function $goog$object$getValues$$($obj$$30$$) {
  var $res$$2$$ = [], $i$$12$$ = 0, $key$$24$$;
  for($key$$24$$ in $obj$$30$$) {
    $res$$2$$[$i$$12$$++] = $obj$$30$$[$key$$24$$]
  }
  return $res$$2$$
}
function $goog$object$getKeys$$($obj$$31$$) {
  var $res$$3$$ = [], $i$$13$$ = 0, $key$$25$$;
  for($key$$25$$ in $obj$$31$$) {
    $res$$3$$[$i$$13$$++] = $key$$25$$
  }
  return $res$$3$$
}
var $goog$object$PROTOTYPE_FIELDS_$$ = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
function $goog$object$extend$$($target$$35$$, $var_args$$25$$) {
  for(var $key$$39$$, $source$$2$$, $i$$16$$ = 1;$i$$16$$ < arguments.length;$i$$16$$++) {
    $source$$2$$ = arguments[$i$$16$$];
    for($key$$39$$ in $source$$2$$) {
      $target$$35$$[$key$$39$$] = $source$$2$$[$key$$39$$]
    }
    for(var $j$$1$$ = 0;$j$$1$$ < $goog$object$PROTOTYPE_FIELDS_$$.length;$j$$1$$++) {
      $key$$39$$ = $goog$object$PROTOTYPE_FIELDS_$$[$j$$1$$], Object.prototype.hasOwnProperty.call($source$$2$$, $key$$39$$) && ($target$$35$$[$key$$39$$] = $source$$2$$[$key$$39$$])
    }
  }
}
;function $goog$debug$Error$$($opt_msg$$) {
  this.stack = Error().stack || "";
  if($opt_msg$$) {
    this.message = "" + $opt_msg$$
  }
}
$goog$inherits$$($goog$debug$Error$$, Error);
$goog$debug$Error$$.prototype.name = "CustomError";
function $goog$asserts$AssertionError$$($messagePattern$$, $messageArgs$$) {
  $messageArgs$$.unshift($messagePattern$$);
  $goog$debug$Error$$.call(this, $goog$string$subs$$.apply($JSCompiler_alias_NULL$$, $messageArgs$$));
  $messageArgs$$.shift();
  this.$messagePattern$ = $messagePattern$$
}
$goog$inherits$$($goog$asserts$AssertionError$$, $goog$debug$Error$$);
$goog$asserts$AssertionError$$.prototype.name = "AssertionError";
function $goog$asserts$assert$$($condition$$, $opt_message$$8$$, $var_args$$28$$) {
  if(!$condition$$) {
    var $givenArgs$$inline_84$$ = Array.prototype.slice.call(arguments, 2), $message$$inline_85$$ = "Assertion failed";
    if($opt_message$$8$$) {
      var $message$$inline_85$$ = $message$$inline_85$$ + (": " + $opt_message$$8$$), $args$$inline_86$$ = $givenArgs$$inline_84$$
    }
    $JSCompiler_alias_THROW$$(new $goog$asserts$AssertionError$$("" + $message$$inline_85$$, $args$$inline_86$$ || []))
  }
}
;var $goog$array$ARRAY_PROTOTYPE_$$ = Array.prototype, $goog$array$indexOf$$ = $goog$array$ARRAY_PROTOTYPE_$$.indexOf ? function($arr$$11$$, $obj$$47$$, $opt_fromIndex$$6$$) {
  $goog$asserts$assert$$($arr$$11$$.length != $JSCompiler_alias_NULL$$);
  return $goog$array$ARRAY_PROTOTYPE_$$.indexOf.call($arr$$11$$, $obj$$47$$, $opt_fromIndex$$6$$)
} : function($arr$$12$$, $obj$$48$$, $fromIndex_i$$19_opt_fromIndex$$7$$) {
  $fromIndex_i$$19_opt_fromIndex$$7$$ = $fromIndex_i$$19_opt_fromIndex$$7$$ == $JSCompiler_alias_NULL$$ ? 0 : 0 > $fromIndex_i$$19_opt_fromIndex$$7$$ ? Math.max(0, $arr$$12$$.length + $fromIndex_i$$19_opt_fromIndex$$7$$) : $fromIndex_i$$19_opt_fromIndex$$7$$;
  if($goog$isString$$($arr$$12$$)) {
    return!$goog$isString$$($obj$$48$$) || 1 != $obj$$48$$.length ? -1 : $arr$$12$$.indexOf($obj$$48$$, $fromIndex_i$$19_opt_fromIndex$$7$$)
  }
  for(;$fromIndex_i$$19_opt_fromIndex$$7$$ < $arr$$12$$.length;$fromIndex_i$$19_opt_fromIndex$$7$$++) {
    if($fromIndex_i$$19_opt_fromIndex$$7$$ in $arr$$12$$ && $arr$$12$$[$fromIndex_i$$19_opt_fromIndex$$7$$] === $obj$$48$$) {
      return $fromIndex_i$$19_opt_fromIndex$$7$$
    }
  }
  return-1
}, $goog$array$forEach$$ = $goog$array$ARRAY_PROTOTYPE_$$.forEach ? function($arr$$15$$, $f$$7$$, $opt_obj$$6$$) {
  $goog$asserts$assert$$($arr$$15$$.length != $JSCompiler_alias_NULL$$);
  $goog$array$ARRAY_PROTOTYPE_$$.forEach.call($arr$$15$$, $f$$7$$, $opt_obj$$6$$)
} : function($arr$$16$$, $f$$8$$, $opt_obj$$7$$) {
  for(var $l$$2$$ = $arr$$16$$.length, $arr2$$ = $goog$isString$$($arr$$16$$) ? $arr$$16$$.split("") : $arr$$16$$, $i$$21$$ = 0;$i$$21$$ < $l$$2$$;$i$$21$$++) {
    $i$$21$$ in $arr2$$ && $f$$8$$.call($opt_obj$$7$$, $arr2$$[$i$$21$$], $i$$21$$, $arr$$16$$)
  }
}, $goog$array$map$$ = $goog$array$ARRAY_PROTOTYPE_$$.map ? function($arr$$20$$, $f$$12$$, $opt_obj$$11$$) {
  $goog$asserts$assert$$($arr$$20$$.length != $JSCompiler_alias_NULL$$);
  return $goog$array$ARRAY_PROTOTYPE_$$.map.call($arr$$20$$, $f$$12$$, $opt_obj$$11$$)
} : function($arr$$21$$, $f$$13$$, $opt_obj$$12$$) {
  for(var $l$$5$$ = $arr$$21$$.length, $res$$6$$ = Array($l$$5$$), $arr2$$3$$ = $goog$isString$$($arr$$21$$) ? $arr$$21$$.split("") : $arr$$21$$, $i$$24$$ = 0;$i$$24$$ < $l$$5$$;$i$$24$$++) {
    $i$$24$$ in $arr2$$3$$ && ($res$$6$$[$i$$24$$] = $f$$13$$.call($opt_obj$$12$$, $arr2$$3$$[$i$$24$$], $i$$24$$, $arr$$21$$))
  }
  return $res$$6$$
}, $goog$array$every$$ = $goog$array$ARRAY_PROTOTYPE_$$.every ? function($arr$$26$$, $f$$18$$, $opt_obj$$17$$) {
  $goog$asserts$assert$$($arr$$26$$.length != $JSCompiler_alias_NULL$$);
  return $goog$array$ARRAY_PROTOTYPE_$$.every.call($arr$$26$$, $f$$18$$, $opt_obj$$17$$)
} : function($arr$$27$$, $f$$19$$, $opt_obj$$18$$) {
  for(var $l$$7$$ = $arr$$27$$.length, $arr2$$5$$ = $goog$isString$$($arr$$27$$) ? $arr$$27$$.split("") : $arr$$27$$, $i$$26$$ = 0;$i$$26$$ < $l$$7$$;$i$$26$$++) {
    if($i$$26$$ in $arr2$$5$$ && !$f$$19$$.call($opt_obj$$18$$, $arr2$$5$$[$i$$26$$], $i$$26$$, $arr$$27$$)) {
      return $JSCompiler_alias_FALSE$$
    }
  }
  return $JSCompiler_alias_TRUE$$
};
function $goog$array$remove$$($arr$$39$$, $obj$$55$$) {
  var $i$$33$$ = $goog$array$indexOf$$($arr$$39$$, $obj$$55$$);
  0 <= $i$$33$$ && ($goog$asserts$assert$$($arr$$39$$.length != $JSCompiler_alias_NULL$$), $goog$array$ARRAY_PROTOTYPE_$$.splice.call($arr$$39$$, $i$$33$$, 1))
}
function $goog$array$concat$$($var_args$$37$$) {
  return $goog$array$ARRAY_PROTOTYPE_$$.concat.apply($goog$array$ARRAY_PROTOTYPE_$$, arguments)
}
function $goog$array$clone$$($arr$$42$$) {
  if($goog$isArray$$($arr$$42$$)) {
    return $goog$array$concat$$($arr$$42$$)
  }
  for(var $rv$$7$$ = [], $i$$36$$ = 0, $len$$ = $arr$$42$$.length;$i$$36$$ < $len$$;$i$$36$$++) {
    $rv$$7$$[$i$$36$$] = $arr$$42$$[$i$$36$$]
  }
  return $rv$$7$$
}
function $goog$array$slice$$($arr$$44$$, $start$$5$$, $opt_end$$5$$) {
  $goog$asserts$assert$$($arr$$44$$.length != $JSCompiler_alias_NULL$$);
  return 2 >= arguments.length ? $goog$array$ARRAY_PROTOTYPE_$$.slice.call($arr$$44$$, $start$$5$$) : $goog$array$ARRAY_PROTOTYPE_$$.slice.call($arr$$44$$, $start$$5$$, $opt_end$$5$$)
}
;function $goog$structs$getCount$$($JSCompiler_temp$$37_JSCompiler_temp$$38_col$$) {
  if("function" == typeof $JSCompiler_temp$$37_JSCompiler_temp$$38_col$$.$getCount$) {
    $JSCompiler_temp$$37_JSCompiler_temp$$38_col$$ = $JSCompiler_temp$$37_JSCompiler_temp$$38_col$$.$getCount$()
  }else {
    if($goog$isArrayLike$$($JSCompiler_temp$$37_JSCompiler_temp$$38_col$$) || $goog$isString$$($JSCompiler_temp$$37_JSCompiler_temp$$38_col$$)) {
      $JSCompiler_temp$$37_JSCompiler_temp$$38_col$$ = $JSCompiler_temp$$37_JSCompiler_temp$$38_col$$.length
    }else {
      var $rv$$inline_92$$ = 0, $key$$inline_93$$;
      for($key$$inline_93$$ in $JSCompiler_temp$$37_JSCompiler_temp$$38_col$$) {
        $rv$$inline_92$$++
      }
      $JSCompiler_temp$$37_JSCompiler_temp$$38_col$$ = $rv$$inline_92$$
    }
  }
  return $JSCompiler_temp$$37_JSCompiler_temp$$38_col$$
}
function $goog$structs$getValues$$($col$$1$$) {
  if("function" == typeof $col$$1$$.$getValues$) {
    return $col$$1$$.$getValues$()
  }
  if($goog$isString$$($col$$1$$)) {
    return $col$$1$$.split("")
  }
  if($goog$isArrayLike$$($col$$1$$)) {
    for(var $rv$$8$$ = [], $l$$12$$ = $col$$1$$.length, $i$$47$$ = 0;$i$$47$$ < $l$$12$$;$i$$47$$++) {
      $rv$$8$$.push($col$$1$$[$i$$47$$])
    }
    return $rv$$8$$
  }
  return $goog$object$getValues$$($col$$1$$)
}
function $goog$structs$getKeys$$($col$$2_l$$13$$) {
  if("function" == typeof $col$$2_l$$13$$.$getKeys$) {
    return $col$$2_l$$13$$.$getKeys$()
  }
  if("function" != typeof $col$$2_l$$13$$.$getValues$) {
    if($goog$isArrayLike$$($col$$2_l$$13$$) || $goog$isString$$($col$$2_l$$13$$)) {
      for(var $rv$$9$$ = [], $col$$2_l$$13$$ = $col$$2_l$$13$$.length, $i$$48$$ = 0;$i$$48$$ < $col$$2_l$$13$$;$i$$48$$++) {
        $rv$$9$$.push($i$$48$$)
      }
      return $rv$$9$$
    }
    return $goog$object$getKeys$$($col$$2_l$$13$$)
  }
}
function $goog$structs$forEach$$($col$$6$$, $f$$25$$, $opt_obj$$25$$) {
  if("function" == typeof $col$$6$$.forEach) {
    $col$$6$$.forEach($f$$25$$, $opt_obj$$25$$)
  }else {
    if($goog$isArrayLike$$($col$$6$$) || $goog$isString$$($col$$6$$)) {
      $goog$array$forEach$$($col$$6$$, $f$$25$$, $opt_obj$$25$$)
    }else {
      for(var $keys$$1$$ = $goog$structs$getKeys$$($col$$6$$), $values$$5$$ = $goog$structs$getValues$$($col$$6$$), $l$$14$$ = $values$$5$$.length, $i$$49$$ = 0;$i$$49$$ < $l$$14$$;$i$$49$$++) {
        $f$$25$$.call($opt_obj$$25$$, $values$$5$$[$i$$49$$], $keys$$1$$ && $keys$$1$$[$i$$49$$], $col$$6$$)
      }
    }
  }
}
function $goog$structs$every$$($col$$10$$, $f$$29$$) {
  if("function" == typeof $col$$10$$.every) {
    return $col$$10$$.every($f$$29$$, $JSCompiler_alias_VOID$$)
  }
  if($goog$isArrayLike$$($col$$10$$) || $goog$isString$$($col$$10$$)) {
    return $goog$array$every$$($col$$10$$, $f$$29$$, $JSCompiler_alias_VOID$$)
  }
  for(var $keys$$5$$ = $goog$structs$getKeys$$($col$$10$$), $values$$9$$ = $goog$structs$getValues$$($col$$10$$), $l$$18$$ = $values$$9$$.length, $i$$53$$ = 0;$i$$53$$ < $l$$18$$;$i$$53$$++) {
    if(!$f$$29$$.call($JSCompiler_alias_VOID$$, $values$$9$$[$i$$53$$], $keys$$5$$ && $keys$$5$$[$i$$53$$], $col$$10$$)) {
      return $JSCompiler_alias_FALSE$$
    }
  }
  return $JSCompiler_alias_TRUE$$
}
;var $goog$iter$StopIteration$$ = "StopIteration" in $goog$global$$ ? $goog$global$$.StopIteration : Error("StopIteration");
function $goog$iter$Iterator$$() {
}
$goog$iter$Iterator$$.prototype.next = function $$goog$iter$Iterator$$$$next$() {
  $JSCompiler_alias_THROW$$($goog$iter$StopIteration$$)
};
$goog$iter$Iterator$$.prototype.$__iterator__$ = function $$goog$iter$Iterator$$$$$__iterator__$$() {
  return this
};
function $goog$iter$toIterator$$($iterable$$) {
  if($iterable$$ instanceof $goog$iter$Iterator$$) {
    return $iterable$$
  }
  if("function" == typeof $iterable$$.$__iterator__$) {
    return $iterable$$.$__iterator__$($JSCompiler_alias_FALSE$$)
  }
  if($goog$isArrayLike$$($iterable$$)) {
    var $i$$54$$ = 0, $newIter$$ = new $goog$iter$Iterator$$;
    $newIter$$.next = function $$newIter$$$next$() {
      for(;;) {
        $i$$54$$ >= $iterable$$.length && $JSCompiler_alias_THROW$$($goog$iter$StopIteration$$);
        if($i$$54$$ in $iterable$$) {
          return $iterable$$[$i$$54$$++]
        }
        $i$$54$$++
      }
    };
    return $newIter$$
  }
  $JSCompiler_alias_THROW$$(Error("Not implemented"))
}
function $goog$iter$forEach$$($iterable$$1$$, $f$$30$$) {
  if($goog$isArrayLike$$($iterable$$1$$)) {
    try {
      $goog$array$forEach$$($iterable$$1$$, $f$$30$$, $JSCompiler_alias_VOID$$)
    }catch($ex$$1$$) {
      $ex$$1$$ !== $goog$iter$StopIteration$$ && $JSCompiler_alias_THROW$$($ex$$1$$)
    }
  }else {
    $iterable$$1$$ = $goog$iter$toIterator$$($iterable$$1$$);
    try {
      for(;;) {
        $f$$30$$.call($JSCompiler_alias_VOID$$, $iterable$$1$$.next(), $JSCompiler_alias_VOID$$, $iterable$$1$$)
      }
    }catch($ex$$2$$) {
      $ex$$2$$ !== $goog$iter$StopIteration$$ && $JSCompiler_alias_THROW$$($ex$$2$$)
    }
  }
}
;function $goog$structs$Map$$($opt_map$$, $var_args$$44$$) {
  this.$map_$ = {};
  this.$keys_$ = [];
  var $argLength$$2$$ = arguments.length;
  if(1 < $argLength$$2$$) {
    $argLength$$2$$ % 2 && $JSCompiler_alias_THROW$$(Error("Uneven number of arguments"));
    for(var $i$$57$$ = 0;$i$$57$$ < $argLength$$2$$;$i$$57$$ += 2) {
      this.set(arguments[$i$$57$$], arguments[$i$$57$$ + 1])
    }
  }else {
    $opt_map$$ && this.$addAll$($opt_map$$)
  }
}
$JSCompiler_prototypeAlias$$ = $goog$structs$Map$$.prototype;
$JSCompiler_prototypeAlias$$.$count_$ = 0;
$JSCompiler_prototypeAlias$$.$version_$ = 0;
$JSCompiler_prototypeAlias$$.$getCount$ = $JSCompiler_get$$("$count_$");
$JSCompiler_prototypeAlias$$.$getValues$ = function $$JSCompiler_prototypeAlias$$$$getValues$$() {
  $JSCompiler_StaticMethods_cleanupKeysArray_$$(this);
  for(var $rv$$13$$ = [], $i$$58$$ = 0;$i$$58$$ < this.$keys_$.length;$i$$58$$++) {
    $rv$$13$$.push(this.$map_$[this.$keys_$[$i$$58$$]])
  }
  return $rv$$13$$
};
$JSCompiler_prototypeAlias$$.$getKeys$ = function $$JSCompiler_prototypeAlias$$$$getKeys$$() {
  $JSCompiler_StaticMethods_cleanupKeysArray_$$(this);
  return this.$keys_$.concat()
};
$JSCompiler_prototypeAlias$$.$containsValue$ = function $$JSCompiler_prototypeAlias$$$$containsValue$$($val$$28$$) {
  for(var $i$$59$$ = 0;$i$$59$$ < this.$keys_$.length;$i$$59$$++) {
    var $key$$45$$ = this.$keys_$[$i$$59$$];
    if($goog$structs$Map$hasKey_$$(this.$map_$, $key$$45$$) && this.$map_$[$key$$45$$] == $val$$28$$) {
      return $JSCompiler_alias_TRUE$$
    }
  }
  return $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$equals$ = function $$JSCompiler_prototypeAlias$$$$equals$$($otherMap$$, $opt_equalityFn$$) {
  if(this === $otherMap$$) {
    return $JSCompiler_alias_TRUE$$
  }
  if(this.$count_$ != $otherMap$$.$getCount$()) {
    return $JSCompiler_alias_FALSE$$
  }
  var $equalityFn$$ = $opt_equalityFn$$ || $goog$structs$Map$defaultEquals$$;
  $JSCompiler_StaticMethods_cleanupKeysArray_$$(this);
  for(var $key$$46$$, $i$$60$$ = 0;$key$$46$$ = this.$keys_$[$i$$60$$];$i$$60$$++) {
    if(!$equalityFn$$(this.get($key$$46$$), $otherMap$$.get($key$$46$$))) {
      return $JSCompiler_alias_FALSE$$
    }
  }
  return $JSCompiler_alias_TRUE$$
};
function $goog$structs$Map$defaultEquals$$($a$$5$$, $b$$4$$) {
  return $a$$5$$ === $b$$4$$
}
$JSCompiler_prototypeAlias$$.clear = function $$JSCompiler_prototypeAlias$$$clear$() {
  this.$map_$ = {};
  this.$version_$ = this.$count_$ = this.$keys_$.length = 0
};
$JSCompiler_prototypeAlias$$.remove = function $$JSCompiler_prototypeAlias$$$remove$($key$$47$$) {
  return $goog$structs$Map$hasKey_$$(this.$map_$, $key$$47$$) ? (delete this.$map_$[$key$$47$$], this.$count_$--, this.$version_$++, this.$keys_$.length > 2 * this.$count_$ && $JSCompiler_StaticMethods_cleanupKeysArray_$$(this), $JSCompiler_alias_TRUE$$) : $JSCompiler_alias_FALSE$$
};
function $JSCompiler_StaticMethods_cleanupKeysArray_$$($JSCompiler_StaticMethods_cleanupKeysArray_$self$$) {
  if($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$count_$ != $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length) {
    for(var $srcIndex$$ = 0, $destIndex$$ = 0;$srcIndex$$ < $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length;) {
      var $key$$48$$ = $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$[$srcIndex$$];
      $goog$structs$Map$hasKey_$$($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$map_$, $key$$48$$) && ($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$[$destIndex$$++] = $key$$48$$);
      $srcIndex$$++
    }
    $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length = $destIndex$$
  }
  if($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$count_$ != $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length) {
    for(var $seen$$2$$ = {}, $destIndex$$ = $srcIndex$$ = 0;$srcIndex$$ < $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length;) {
      $key$$48$$ = $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$[$srcIndex$$], $goog$structs$Map$hasKey_$$($seen$$2$$, $key$$48$$) || ($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$[$destIndex$$++] = $key$$48$$, $seen$$2$$[$key$$48$$] = 1), $srcIndex$$++
    }
    $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length = $destIndex$$
  }
}
$JSCompiler_prototypeAlias$$.get = function $$JSCompiler_prototypeAlias$$$get$($key$$49$$, $opt_val$$1$$) {
  return $goog$structs$Map$hasKey_$$(this.$map_$, $key$$49$$) ? this.$map_$[$key$$49$$] : $opt_val$$1$$
};
$JSCompiler_prototypeAlias$$.set = function $$JSCompiler_prototypeAlias$$$set$($key$$50$$, $value$$55$$) {
  $goog$structs$Map$hasKey_$$(this.$map_$, $key$$50$$) || (this.$count_$++, this.$keys_$.push($key$$50$$), this.$version_$++);
  this.$map_$[$key$$50$$] = $value$$55$$
};
$JSCompiler_prototypeAlias$$.$addAll$ = function $$JSCompiler_prototypeAlias$$$$addAll$$($map_values$$10$$) {
  var $keys$$6$$;
  $map_values$$10$$ instanceof $goog$structs$Map$$ ? ($keys$$6$$ = $map_values$$10$$.$getKeys$(), $map_values$$10$$ = $map_values$$10$$.$getValues$()) : ($keys$$6$$ = $goog$object$getKeys$$($map_values$$10$$), $map_values$$10$$ = $goog$object$getValues$$($map_values$$10$$));
  for(var $i$$61$$ = 0;$i$$61$$ < $keys$$6$$.length;$i$$61$$++) {
    this.set($keys$$6$$[$i$$61$$], $map_values$$10$$[$i$$61$$])
  }
};
$JSCompiler_prototypeAlias$$.$clone$ = function $$JSCompiler_prototypeAlias$$$$clone$$() {
  return new $goog$structs$Map$$(this)
};
$JSCompiler_prototypeAlias$$.$__iterator__$ = function $$JSCompiler_prototypeAlias$$$$__iterator__$$($opt_keys$$1$$) {
  $JSCompiler_StaticMethods_cleanupKeysArray_$$(this);
  var $i$$64$$ = 0, $keys$$7$$ = this.$keys_$, $map$$1$$ = this.$map_$, $version$$9$$ = this.$version_$, $selfObj$$4$$ = this, $newIter$$7$$ = new $goog$iter$Iterator$$;
  $newIter$$7$$.next = function $$newIter$$7$$$next$() {
    for(;;) {
      $version$$9$$ != $selfObj$$4$$.$version_$ && $JSCompiler_alias_THROW$$(Error("The map has changed since the iterator was created"));
      $i$$64$$ >= $keys$$7$$.length && $JSCompiler_alias_THROW$$($goog$iter$StopIteration$$);
      var $key$$53$$ = $keys$$7$$[$i$$64$$++];
      return $opt_keys$$1$$ ? $key$$53$$ : $map$$1$$[$key$$53$$]
    }
  };
  return $newIter$$7$$
};
function $goog$structs$Map$hasKey_$$($obj$$57$$, $key$$54$$) {
  return Object.prototype.hasOwnProperty.call($obj$$57$$, $key$$54$$)
}
;function $goog$structs$Set$$($opt_values$$1$$) {
  this.$map_$ = new $goog$structs$Map$$;
  $opt_values$$1$$ && this.$addAll$($opt_values$$1$$)
}
function $goog$structs$Set$getKey_$$($val$$29$$) {
  var $type$$51$$ = typeof $val$$29$$;
  return"object" == $type$$51$$ && $val$$29$$ || "function" == $type$$51$$ ? "o" + $goog$getUid$$($val$$29$$) : $type$$51$$.substr(0, 1) + $val$$29$$
}
$JSCompiler_prototypeAlias$$ = $goog$structs$Set$$.prototype;
$JSCompiler_prototypeAlias$$.$getCount$ = function $$JSCompiler_prototypeAlias$$$$getCount$$() {
  return this.$map_$.$getCount$()
};
$JSCompiler_prototypeAlias$$.add = function $$JSCompiler_prototypeAlias$$$add$($element$$8$$) {
  this.$map_$.set($goog$structs$Set$getKey_$$($element$$8$$), $element$$8$$)
};
$JSCompiler_prototypeAlias$$.$addAll$ = function $$JSCompiler_prototypeAlias$$$$addAll$$($col$$11_values$$11$$) {
  for(var $col$$11_values$$11$$ = $goog$structs$getValues$$($col$$11_values$$11$$), $l$$19$$ = $col$$11_values$$11$$.length, $i$$65$$ = 0;$i$$65$$ < $l$$19$$;$i$$65$$++) {
    this.add($col$$11_values$$11$$[$i$$65$$])
  }
};
$JSCompiler_prototypeAlias$$.$removeAll$ = function $$JSCompiler_prototypeAlias$$$$removeAll$$($col$$12_values$$12$$) {
  for(var $col$$12_values$$12$$ = $goog$structs$getValues$$($col$$12_values$$12$$), $l$$20$$ = $col$$12_values$$12$$.length, $i$$66$$ = 0;$i$$66$$ < $l$$20$$;$i$$66$$++) {
    this.remove($col$$12_values$$12$$[$i$$66$$])
  }
};
$JSCompiler_prototypeAlias$$.remove = function $$JSCompiler_prototypeAlias$$$remove$($element$$9$$) {
  return this.$map_$.remove($goog$structs$Set$getKey_$$($element$$9$$))
};
$JSCompiler_prototypeAlias$$.clear = function $$JSCompiler_prototypeAlias$$$clear$() {
  this.$map_$.clear()
};
$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($element$$10_key$$inline_97$$) {
  $element$$10_key$$inline_97$$ = $goog$structs$Set$getKey_$$($element$$10_key$$inline_97$$);
  return $goog$structs$Map$hasKey_$$(this.$map_$.$map_$, $element$$10_key$$inline_97$$)
};
$JSCompiler_prototypeAlias$$.$intersection$ = function $$JSCompiler_prototypeAlias$$$$intersection$$($col$$14_values$$13$$) {
  for(var $result$$4$$ = new $goog$structs$Set$$, $col$$14_values$$13$$ = $goog$structs$getValues$$($col$$14_values$$13$$), $i$$67$$ = 0;$i$$67$$ < $col$$14_values$$13$$.length;$i$$67$$++) {
    var $value$$57$$ = $col$$14_values$$13$$[$i$$67$$];
    this.contains($value$$57$$) && $result$$4$$.add($value$$57$$)
  }
  return $result$$4$$
};
$JSCompiler_prototypeAlias$$.$getValues$ = function $$JSCompiler_prototypeAlias$$$$getValues$$() {
  return this.$map_$.$getValues$()
};
$JSCompiler_prototypeAlias$$.$clone$ = function $$JSCompiler_prototypeAlias$$$$clone$$() {
  return new $goog$structs$Set$$(this)
};
$JSCompiler_prototypeAlias$$.$equals$ = function $$JSCompiler_prototypeAlias$$$$equals$$($col$$16$$) {
  return this.$getCount$() == $goog$structs$getCount$$($col$$16$$) && $JSCompiler_StaticMethods_isSubsetOf$$(this, $col$$16$$)
};
function $JSCompiler_StaticMethods_isSubsetOf$$($JSCompiler_StaticMethods_isSubsetOf$self$$, $col$$17$$) {
  var $colCount$$ = $goog$structs$getCount$$($col$$17$$);
  if($JSCompiler_StaticMethods_isSubsetOf$self$$.$getCount$() > $colCount$$) {
    return $JSCompiler_alias_FALSE$$
  }
  !($col$$17$$ instanceof $goog$structs$Set$$) && 5 < $colCount$$ && ($col$$17$$ = new $goog$structs$Set$$($col$$17$$));
  return $goog$structs$every$$($JSCompiler_StaticMethods_isSubsetOf$self$$, function($JSCompiler_temp$$398_JSCompiler_temp$$399_JSCompiler_temp$$400_value$$58$$) {
    if("function" == typeof $col$$17$$.contains) {
      $JSCompiler_temp$$398_JSCompiler_temp$$399_JSCompiler_temp$$400_value$$58$$ = $col$$17$$.contains($JSCompiler_temp$$398_JSCompiler_temp$$399_JSCompiler_temp$$400_value$$58$$)
    }else {
      if("function" == typeof $col$$17$$.$containsValue$) {
        $JSCompiler_temp$$398_JSCompiler_temp$$399_JSCompiler_temp$$400_value$$58$$ = $col$$17$$.$containsValue$($JSCompiler_temp$$398_JSCompiler_temp$$399_JSCompiler_temp$$400_value$$58$$)
      }else {
        if($goog$isArrayLike$$($col$$17$$) || $goog$isString$$($col$$17$$)) {
          $JSCompiler_temp$$398_JSCompiler_temp$$399_JSCompiler_temp$$400_value$$58$$ = 0 <= $goog$array$indexOf$$($col$$17$$, $JSCompiler_temp$$398_JSCompiler_temp$$399_JSCompiler_temp$$400_value$$58$$)
        }else {
          a: {
            for(var $key$$inline_406$$ in $col$$17$$) {
              if($col$$17$$[$key$$inline_406$$] == $JSCompiler_temp$$398_JSCompiler_temp$$399_JSCompiler_temp$$400_value$$58$$) {
                $JSCompiler_temp$$398_JSCompiler_temp$$399_JSCompiler_temp$$400_value$$58$$ = $JSCompiler_alias_TRUE$$;
                break a
              }
            }
            $JSCompiler_temp$$398_JSCompiler_temp$$399_JSCompiler_temp$$400_value$$58$$ = $JSCompiler_alias_FALSE$$
          }
        }
      }
    }
    return $JSCompiler_temp$$398_JSCompiler_temp$$399_JSCompiler_temp$$400_value$$58$$
  })
}
$JSCompiler_prototypeAlias$$.$__iterator__$ = function $$JSCompiler_prototypeAlias$$$$__iterator__$$() {
  return this.$map_$.$__iterator__$($JSCompiler_alias_FALSE$$)
};
function $goog$Disposable$$() {
}
$goog$Disposable$$.prototype.$disposed_$ = $JSCompiler_alias_FALSE$$;
$goog$Disposable$$.prototype.$dispose$ = function $$goog$Disposable$$$$$dispose$$() {
  if(!this.$disposed_$) {
    this.$disposed_$ = $JSCompiler_alias_TRUE$$, this.$disposeInternal$()
  }
};
$goog$Disposable$$.prototype.$disposeInternal$ = function $$goog$Disposable$$$$$disposeInternal$$() {
  this.$dependentDisposables_$ && $goog$disposeAll$$.apply($JSCompiler_alias_NULL$$, this.$dependentDisposables_$)
};
function $goog$dispose$$($obj$$61$$) {
  $obj$$61$$ && "function" == typeof $obj$$61$$.$dispose$ && $obj$$61$$.$dispose$()
}
function $goog$disposeAll$$($var_args$$45$$) {
  for(var $i$$70$$ = 0, $len$$1$$ = arguments.length;$i$$70$$ < $len$$1$$;++$i$$70$$) {
    var $disposable$$1$$ = arguments[$i$$70$$];
    $goog$isArrayLike$$($disposable$$1$$) ? $goog$disposeAll$$.apply($JSCompiler_alias_NULL$$, $disposable$$1$$) : $goog$dispose$$($disposable$$1$$)
  }
}
;function $goog$structs$SimplePool$$($initialCount$$, $maxCount$$) {
  this.$maxCount_$ = $maxCount$$;
  this.$freeQueue_$ = [];
  $initialCount$$ > this.$maxCount_$ && $JSCompiler_alias_THROW$$(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
  for(var $i$$inline_101$$ = 0;$i$$inline_101$$ < $initialCount$$;$i$$inline_101$$++) {
    this.$freeQueue_$.push(this.$createObject$())
  }
}
$goog$inherits$$($goog$structs$SimplePool$$, $goog$Disposable$$);
$JSCompiler_prototypeAlias$$ = $goog$structs$SimplePool$$.prototype;
$JSCompiler_prototypeAlias$$.$createObjectFn_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$disposeObjectFn_$ = $JSCompiler_alias_NULL$$;
function $JSCompiler_StaticMethods_releaseObject$$($JSCompiler_StaticMethods_releaseObject$self$$, $obj$$62$$) {
  $JSCompiler_StaticMethods_releaseObject$self$$.$freeQueue_$.length < $JSCompiler_StaticMethods_releaseObject$self$$.$maxCount_$ ? $JSCompiler_StaticMethods_releaseObject$self$$.$freeQueue_$.push($obj$$62$$) : $JSCompiler_StaticMethods_releaseObject$self$$.$disposeObject$($obj$$62$$)
}
$JSCompiler_prototypeAlias$$.$createObject$ = function $$JSCompiler_prototypeAlias$$$$createObject$$() {
  return this.$createObjectFn_$ ? this.$createObjectFn_$() : {}
};
$JSCompiler_prototypeAlias$$.$disposeObject$ = function $$JSCompiler_prototypeAlias$$$$disposeObject$$($obj$$63$$) {
  if(this.$disposeObjectFn_$) {
    this.$disposeObjectFn_$($obj$$63$$)
  }else {
    if($goog$isObject$$($obj$$63$$)) {
      if($goog$isFunction$$($obj$$63$$.$dispose$)) {
        $obj$$63$$.$dispose$()
      }else {
        for(var $i$$72$$ in $obj$$63$$) {
          delete $obj$$63$$[$i$$72$$]
        }
      }
    }
  }
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$structs$SimplePool$$.$superClass_$.$disposeInternal$.call(this);
  for(var $freeQueue$$ = this.$freeQueue_$;$freeQueue$$.length;) {
    this.$disposeObject$($freeQueue$$.pop())
  }
  delete this.$freeQueue_$
};
function $goog$debug$Trace_$$() {
  this.$events_$ = [];
  this.$outstandingEvents_$ = new $goog$structs$Map$$;
  this.$tracerOverheadComment_$ = this.$tracerOverheadEnd_$ = this.$tracerOverheadStart_$ = this.$startTime_$ = 0;
  this.$stats_$ = new $goog$structs$Map$$;
  this.$commentCount_$ = this.$tracerCount_$ = 0;
  this.$nextId_$ = 1;
  this.$eventPool_$ = new $goog$structs$SimplePool$$(0, 4E3);
  this.$eventPool_$.$createObject$ = function $this$$eventPool_$$$createObject$$() {
    return new $goog$debug$Trace_$Event_$$
  };
  this.$statPool_$ = new $goog$structs$SimplePool$$(0, 50);
  this.$statPool_$.$createObject$ = function $this$$statPool_$$$createObject$$() {
    return new $goog$debug$Trace_$Stat_$$
  };
  var $that$$ = this;
  this.$idPool_$ = new $goog$structs$SimplePool$$(0, 2E3);
  this.$idPool_$.$createObject$ = function $this$$idPool_$$$createObject$$() {
    return"" + $that$$.$nextId_$++
  };
  this.$idPool_$.$disposeObject$ = function $this$$idPool_$$$disposeObject$$() {
  };
  this.$defaultThreshold_$ = 3
}
function $goog$debug$Trace_$Stat_$$() {
  this.$varAlloc$ = this.$time$ = this.$count$ = 0
}
$goog$debug$Trace_$Stat_$$.prototype.toString = function $$goog$debug$Trace_$Stat_$$$$toString$() {
  var $sb$$4$$ = [];
  $sb$$4$$.push(this.type, " ", this.$count$, " (", Math.round(10 * this.$time$) / 10, " ms)");
  this.$varAlloc$ && $sb$$4$$.push(" [VarAlloc = ", this.$varAlloc$, "]");
  return $sb$$4$$.join("")
};
function $goog$debug$Trace_$Event_$$() {
}
function $JSCompiler_StaticMethods_toTraceString$$($JSCompiler_StaticMethods_toTraceString$self$$, $startTime$$, $prevTime$$, $indent$$) {
  var $sb$$5$$ = [];
  -1 == $prevTime$$ ? $sb$$5$$.push("    ") : $sb$$5$$.push($goog$debug$Trace_$longToPaddedString_$$($JSCompiler_StaticMethods_toTraceString$self$$.$eventTime$ - $prevTime$$));
  $sb$$5$$.push(" ", $goog$debug$Trace_$formatTime_$$($JSCompiler_StaticMethods_toTraceString$self$$.$eventTime$ - $startTime$$));
  0 == $JSCompiler_StaticMethods_toTraceString$self$$.$eventType$ ? $sb$$5$$.push(" Start        ") : 1 == $JSCompiler_StaticMethods_toTraceString$self$$.$eventType$ ? ($sb$$5$$.push(" Done "), $sb$$5$$.push($goog$debug$Trace_$longToPaddedString_$$($JSCompiler_StaticMethods_toTraceString$self$$.$stopTime$ - $JSCompiler_StaticMethods_toTraceString$self$$.startTime), " ms ")) : $sb$$5$$.push(" Comment      ");
  $sb$$5$$.push($indent$$, $JSCompiler_StaticMethods_toTraceString$self$$);
  0 < $JSCompiler_StaticMethods_toTraceString$self$$.$totalVarAlloc$ && $sb$$5$$.push("[VarAlloc ", $JSCompiler_StaticMethods_toTraceString$self$$.$totalVarAlloc$, "] ");
  return $sb$$5$$.join("")
}
$goog$debug$Trace_$Event_$$.prototype.toString = function $$goog$debug$Trace_$Event_$$$$toString$() {
  return this.type == $JSCompiler_alias_NULL$$ ? this.$comment$ : "[" + this.type + "] " + this.$comment$
};
$goog$debug$Trace_$$.prototype.reset = function $$goog$debug$Trace_$$$$reset$($defaultThreshold$$1_i$$78$$) {
  this.$defaultThreshold_$ = $defaultThreshold$$1_i$$78$$;
  for($defaultThreshold$$1_i$$78$$ = 0;$defaultThreshold$$1_i$$78$$ < this.$events_$.length;$defaultThreshold$$1_i$$78$$++) {
    var $id$$2_keys$$8$$ = this.$eventPool_$.id;
    $id$$2_keys$$8$$ && $JSCompiler_StaticMethods_releaseObject$$(this.$idPool_$, $id$$2_keys$$8$$);
    $JSCompiler_StaticMethods_releaseObject$$(this.$eventPool_$, this.$events_$[$defaultThreshold$$1_i$$78$$])
  }
  this.$events_$.length = 0;
  this.$outstandingEvents_$.clear();
  this.$startTime_$ = $goog$now$$();
  this.$commentCount_$ = this.$tracerCount_$ = this.$tracerOverheadComment_$ = this.$tracerOverheadEnd_$ = this.$tracerOverheadStart_$ = 0;
  $id$$2_keys$$8$$ = this.$stats_$.$getKeys$();
  for($defaultThreshold$$1_i$$78$$ = 0;$defaultThreshold$$1_i$$78$$ < $id$$2_keys$$8$$.length;$defaultThreshold$$1_i$$78$$++) {
    var $stat$$ = this.$stats_$.get($id$$2_keys$$8$$[$defaultThreshold$$1_i$$78$$]);
    $stat$$.$count$ = 0;
    $stat$$.$time$ = 0;
    $stat$$.$varAlloc$ = 0;
    $JSCompiler_StaticMethods_releaseObject$$(this.$statPool_$, $stat$$)
  }
  this.$stats_$.clear()
};
$goog$debug$Trace_$$.prototype.toString = function $$goog$debug$Trace_$$$$toString$() {
  for(var $sb$$6$$ = [], $etime_statKeys$$ = -1, $indent$$1_stat$$4$$ = [], $i$$82$$ = 0;$i$$82$$ < this.$events_$.length;$i$$82$$++) {
    var $e$$14$$ = this.$events_$[$i$$82$$];
    1 == $e$$14$$.$eventType$ && $indent$$1_stat$$4$$.pop();
    $sb$$6$$.push(" ", $JSCompiler_StaticMethods_toTraceString$$($e$$14$$, this.$startTime_$, $etime_statKeys$$, $indent$$1_stat$$4$$.join("")));
    $etime_statKeys$$ = $e$$14$$.$eventTime$;
    $sb$$6$$.push("\n");
    0 == $e$$14$$.$eventType$ && $indent$$1_stat$$4$$.push("|  ")
  }
  if(0 != this.$outstandingEvents_$.$getCount$()) {
    var $now$$3$$ = $goog$now$$();
    $sb$$6$$.push(" Unstopped timers:\n");
    $goog$iter$forEach$$(this.$outstandingEvents_$, function($startEvent$$1$$) {
      $sb$$6$$.push("  ", $startEvent$$1$$, " (", $now$$3$$ - $startEvent$$1$$.startTime, " ms, started at ", $goog$debug$Trace_$formatTime_$$($startEvent$$1$$.startTime), ")\n")
    })
  }
  $etime_statKeys$$ = this.$stats_$.$getKeys$();
  for($i$$82$$ = 0;$i$$82$$ < $etime_statKeys$$.length;$i$$82$$++) {
    $indent$$1_stat$$4$$ = this.$stats_$.get($etime_statKeys$$[$i$$82$$]), 1 < $indent$$1_stat$$4$$.$count$ && $sb$$6$$.push(" TOTAL ", $indent$$1_stat$$4$$, "\n")
  }
  $sb$$6$$.push("Total tracers created ", this.$tracerCount_$, "\n", "Total comments created ", this.$commentCount_$, "\n", "Overhead start: ", this.$tracerOverheadStart_$, " ms\n", "Overhead end: ", this.$tracerOverheadEnd_$, " ms\n", "Overhead comment: ", this.$tracerOverheadComment_$, " ms\n");
  return $sb$$6$$.join("")
};
function $goog$debug$Trace_$longToPaddedString_$$($v$$) {
  var $v$$ = Math.round($v$$), $space$$1$$ = "";
  1E3 > $v$$ && ($space$$1$$ = " ");
  100 > $v$$ && ($space$$1$$ = "  ");
  10 > $v$$ && ($space$$1$$ = "   ");
  return $space$$1$$ + $v$$
}
function $goog$debug$Trace_$formatTime_$$($time$$1$$) {
  $time$$1$$ = Math.round($time$$1$$);
  return("" + (100 + $time$$1$$ / 1E3 % 60)).substring(1, 3) + "." + ("" + (1E3 + $time$$1$$ % 1E3)).substring(1, 4)
}
new $goog$debug$Trace_$$;
function $goog$events$Listener$$() {
}
var $goog$events$Listener$counter_$$ = 0;
$JSCompiler_prototypeAlias$$ = $goog$events$Listener$$.prototype;
$JSCompiler_prototypeAlias$$.key = 0;
$JSCompiler_prototypeAlias$$.$removed$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$callOnce$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$init$ = function $$JSCompiler_prototypeAlias$$$$init$$($listener$$26$$, $proxy$$, $src$$4$$, $type$$55$$, $capture$$, $opt_handler$$) {
  $goog$isFunction$$($listener$$26$$) ? this.$isFunctionListener_$ = $JSCompiler_alias_TRUE$$ : $listener$$26$$ && $listener$$26$$.handleEvent && $goog$isFunction$$($listener$$26$$.handleEvent) ? this.$isFunctionListener_$ = $JSCompiler_alias_FALSE$$ : $JSCompiler_alias_THROW$$(Error("Invalid listener argument"));
  this.$listener$ = $listener$$26$$;
  this.$proxy$ = $proxy$$;
  this.src = $src$$4$$;
  this.type = $type$$55$$;
  this.capture = !!$capture$$;
  this.$handler$ = $opt_handler$$;
  this.$callOnce$ = $JSCompiler_alias_FALSE$$;
  this.key = ++$goog$events$Listener$counter_$$;
  this.$removed$ = $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.handleEvent = function $$JSCompiler_prototypeAlias$$$handleEvent$($eventObject$$) {
  return this.$isFunctionListener_$ ? this.$listener$.call(this.$handler$ || this.src, $eventObject$$) : this.$listener$.handleEvent.call(this.$listener$, $eventObject$$)
};
!$goog$userAgent$IE$$ || $goog$userAgent$isDocumentMode$$(9);
var $goog$events$BrowserFeature$HAS_W3C_EVENT_SUPPORT$$ = !$goog$userAgent$IE$$ || $goog$userAgent$isDocumentMode$$(9), $goog$events$BrowserFeature$SET_KEY_CODE_TO_PREVENT_DEFAULT$$ = $goog$userAgent$IE$$ && !$goog$userAgent$isVersion$$("8");
!$goog$userAgent$WEBKIT$$ || $goog$userAgent$isVersion$$("528");
$goog$userAgent$GECKO$$ && $goog$userAgent$isVersion$$("1.9b") || $goog$userAgent$IE$$ && $goog$userAgent$isVersion$$("8") || $goog$userAgent$OPERA$$ && $goog$userAgent$isVersion$$("9.5") || $goog$userAgent$WEBKIT$$ && $goog$userAgent$isVersion$$("528");
!$goog$userAgent$GECKO$$ || $goog$userAgent$isVersion$$("8");
function $goog$events$Event$$($type$$56$$, $opt_target$$2$$) {
  this.type = $type$$56$$;
  this.currentTarget = this.target = $opt_target$$2$$
}
$goog$inherits$$($goog$events$Event$$, $goog$Disposable$$);
$JSCompiler_prototypeAlias$$ = $goog$events$Event$$.prototype;
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
$JSCompiler_prototypeAlias$$.$propagationStopped_$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$returnValue_$ = $JSCompiler_alias_TRUE$$;
$JSCompiler_prototypeAlias$$.stopPropagation = function $$JSCompiler_prototypeAlias$$$stopPropagation$() {
  this.$propagationStopped_$ = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.preventDefault = function $$JSCompiler_prototypeAlias$$$preventDefault$() {
  this.$returnValue_$ = $JSCompiler_alias_FALSE$$
};
function $goog$reflect$sinkValue$$($x$$54$$) {
  $goog$reflect$sinkValue$$[" "]($x$$54$$);
  return $x$$54$$
}
$goog$reflect$sinkValue$$[" "] = $goog$nullFunction$$;
function $goog$events$BrowserEvent$$($opt_e$$, $opt_currentTarget$$) {
  $opt_e$$ && this.$init$($opt_e$$, $opt_currentTarget$$)
}
$goog$inherits$$($goog$events$BrowserEvent$$, $goog$events$Event$$);
$JSCompiler_prototypeAlias$$ = $goog$events$BrowserEvent$$.prototype;
$JSCompiler_prototypeAlias$$.target = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.relatedTarget = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.offsetX = 0;
$JSCompiler_prototypeAlias$$.offsetY = 0;
$JSCompiler_prototypeAlias$$.clientX = 0;
$JSCompiler_prototypeAlias$$.clientY = 0;
$JSCompiler_prototypeAlias$$.screenX = 0;
$JSCompiler_prototypeAlias$$.screenY = 0;
$JSCompiler_prototypeAlias$$.button = 0;
$JSCompiler_prototypeAlias$$.keyCode = 0;
$JSCompiler_prototypeAlias$$.charCode = 0;
$JSCompiler_prototypeAlias$$.ctrlKey = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.altKey = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.shiftKey = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.metaKey = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$platformModifierKey$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$event_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$init$ = function $$JSCompiler_prototypeAlias$$$$init$$($e$$19$$, $opt_currentTarget$$1$$) {
  var $type$$58$$ = this.type = $e$$19$$.type;
  $goog$events$Event$$.call(this, $type$$58$$);
  this.target = $e$$19$$.target || $e$$19$$.srcElement;
  this.currentTarget = $opt_currentTarget$$1$$;
  var $relatedTarget$$ = $e$$19$$.relatedTarget;
  if($relatedTarget$$) {
    if($goog$userAgent$GECKO$$) {
      var $JSCompiler_inline_result$$103$$;
      a: {
        try {
          $goog$reflect$sinkValue$$($relatedTarget$$.nodeName);
          $JSCompiler_inline_result$$103$$ = $JSCompiler_alias_TRUE$$;
          break a
        }catch($e$$inline_105$$) {
        }
        $JSCompiler_inline_result$$103$$ = $JSCompiler_alias_FALSE$$
      }
      $JSCompiler_inline_result$$103$$ || ($relatedTarget$$ = $JSCompiler_alias_NULL$$)
    }
  }else {
    if("mouseover" == $type$$58$$) {
      $relatedTarget$$ = $e$$19$$.fromElement
    }else {
      if("mouseout" == $type$$58$$) {
        $relatedTarget$$ = $e$$19$$.toElement
      }
    }
  }
  this.relatedTarget = $relatedTarget$$;
  this.offsetX = $goog$userAgent$WEBKIT$$ || $e$$19$$.offsetX !== $JSCompiler_alias_VOID$$ ? $e$$19$$.offsetX : $e$$19$$.layerX;
  this.offsetY = $goog$userAgent$WEBKIT$$ || $e$$19$$.offsetY !== $JSCompiler_alias_VOID$$ ? $e$$19$$.offsetY : $e$$19$$.layerY;
  this.clientX = $e$$19$$.clientX !== $JSCompiler_alias_VOID$$ ? $e$$19$$.clientX : $e$$19$$.pageX;
  this.clientY = $e$$19$$.clientY !== $JSCompiler_alias_VOID$$ ? $e$$19$$.clientY : $e$$19$$.pageY;
  this.screenX = $e$$19$$.screenX || 0;
  this.screenY = $e$$19$$.screenY || 0;
  this.button = $e$$19$$.button;
  this.keyCode = $e$$19$$.keyCode || 0;
  this.charCode = $e$$19$$.charCode || ("keypress" == $type$$58$$ ? $e$$19$$.keyCode : 0);
  this.ctrlKey = $e$$19$$.ctrlKey;
  this.altKey = $e$$19$$.altKey;
  this.shiftKey = $e$$19$$.shiftKey;
  this.metaKey = $e$$19$$.metaKey;
  this.$platformModifierKey$ = $goog$userAgent$detectedMac_$$ ? $e$$19$$.metaKey : $e$$19$$.ctrlKey;
  this.state = $e$$19$$.state;
  this.$event_$ = $e$$19$$;
  delete this.$returnValue_$;
  delete this.$propagationStopped_$
};
$JSCompiler_prototypeAlias$$.stopPropagation = function $$JSCompiler_prototypeAlias$$$stopPropagation$() {
  $goog$events$BrowserEvent$$.$superClass_$.stopPropagation.call(this);
  this.$event_$.stopPropagation ? this.$event_$.stopPropagation() : this.$event_$.cancelBubble = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.preventDefault = function $$JSCompiler_prototypeAlias$$$preventDefault$() {
  $goog$events$BrowserEvent$$.$superClass_$.preventDefault.call(this);
  var $be$$ = this.$event_$;
  if($be$$.preventDefault) {
    $be$$.preventDefault()
  }else {
    if($be$$.returnValue = $JSCompiler_alias_FALSE$$, $goog$events$BrowserFeature$SET_KEY_CODE_TO_PREVENT_DEFAULT$$) {
      try {
        if($be$$.ctrlKey || 112 <= $be$$.keyCode && 123 >= $be$$.keyCode) {
          $be$$.keyCode = -1
        }
      }catch($ex$$7$$) {
      }
    }
  }
};
$JSCompiler_prototypeAlias$$.$getBrowserEvent$ = $JSCompiler_get$$("$event_$");
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$events$BrowserEvent$$.$superClass_$.$disposeInternal$.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.$event_$ = $JSCompiler_alias_NULL$$
};
var $goog$events$listeners_$$ = {}, $goog$events$listenerTree_$$ = {}, $goog$events$sources_$$ = {}, $goog$events$onStringMap_$$ = {};
function $goog$events$listen$$($src$$7$$, $type$$59$$, $key$$56_listener$$29$$, $capture$$1_opt_capt$$2$$, $opt_handler$$1$$) {
  if($type$$59$$) {
    if($goog$isArray$$($type$$59$$)) {
      for(var $i$$86_proxy$$1$$ = 0;$i$$86_proxy$$1$$ < $type$$59$$.length;$i$$86_proxy$$1$$++) {
        $goog$events$listen$$($src$$7$$, $type$$59$$[$i$$86_proxy$$1$$], $key$$56_listener$$29$$, $capture$$1_opt_capt$$2$$, $opt_handler$$1$$)
      }
      return $JSCompiler_alias_NULL$$
    }
    var $capture$$1_opt_capt$$2$$ = !!$capture$$1_opt_capt$$2$$, $listenerObj_map$$2$$ = $goog$events$listenerTree_$$;
    $type$$59$$ in $listenerObj_map$$2$$ || ($listenerObj_map$$2$$[$type$$59$$] = {$count_$:0, $remaining_$:0});
    $listenerObj_map$$2$$ = $listenerObj_map$$2$$[$type$$59$$];
    $capture$$1_opt_capt$$2$$ in $listenerObj_map$$2$$ || ($listenerObj_map$$2$$[$capture$$1_opt_capt$$2$$] = {$count_$:0, $remaining_$:0}, $listenerObj_map$$2$$.$count_$++);
    var $listenerObj_map$$2$$ = $listenerObj_map$$2$$[$capture$$1_opt_capt$$2$$], $srcUid$$ = $goog$getUid$$($src$$7$$), $listenerArray$$;
    $listenerObj_map$$2$$.$remaining_$++;
    if($listenerObj_map$$2$$[$srcUid$$]) {
      $listenerArray$$ = $listenerObj_map$$2$$[$srcUid$$];
      for($i$$86_proxy$$1$$ = 0;$i$$86_proxy$$1$$ < $listenerArray$$.length;$i$$86_proxy$$1$$++) {
        if($listenerObj_map$$2$$ = $listenerArray$$[$i$$86_proxy$$1$$], $listenerObj_map$$2$$.$listener$ == $key$$56_listener$$29$$ && $listenerObj_map$$2$$.$handler$ == $opt_handler$$1$$) {
          if($listenerObj_map$$2$$.$removed$) {
            break
          }
          return $listenerArray$$[$i$$86_proxy$$1$$].key
        }
      }
    }else {
      $listenerArray$$ = $listenerObj_map$$2$$[$srcUid$$] = [], $listenerObj_map$$2$$.$count_$++
    }
    $i$$86_proxy$$1$$ = $goog$events$getProxy$$();
    $i$$86_proxy$$1$$.src = $src$$7$$;
    $listenerObj_map$$2$$ = new $goog$events$Listener$$;
    $listenerObj_map$$2$$.$init$($key$$56_listener$$29$$, $i$$86_proxy$$1$$, $src$$7$$, $type$$59$$, $capture$$1_opt_capt$$2$$, $opt_handler$$1$$);
    $key$$56_listener$$29$$ = $listenerObj_map$$2$$.key;
    $i$$86_proxy$$1$$.key = $key$$56_listener$$29$$;
    $listenerArray$$.push($listenerObj_map$$2$$);
    $goog$events$listeners_$$[$key$$56_listener$$29$$] = $listenerObj_map$$2$$;
    $goog$events$sources_$$[$srcUid$$] || ($goog$events$sources_$$[$srcUid$$] = []);
    $goog$events$sources_$$[$srcUid$$].push($listenerObj_map$$2$$);
    $src$$7$$.addEventListener ? ($src$$7$$ == $goog$global$$ || !$src$$7$$.$customEvent_$) && $src$$7$$.addEventListener($type$$59$$, $i$$86_proxy$$1$$, $capture$$1_opt_capt$$2$$) : $src$$7$$.attachEvent($type$$59$$ in $goog$events$onStringMap_$$ ? $goog$events$onStringMap_$$[$type$$59$$] : $goog$events$onStringMap_$$[$type$$59$$] = "on" + $type$$59$$, $i$$86_proxy$$1$$);
    return $key$$56_listener$$29$$
  }
  $JSCompiler_alias_THROW$$(Error("Invalid event type"))
}
function $goog$events$getProxy$$() {
  var $proxyCallbackFunction$$ = $goog$events$handleBrowserEvent_$$, $f$$38$$ = $goog$events$BrowserFeature$HAS_W3C_EVENT_SUPPORT$$ ? function($eventObject$$1$$) {
    return $proxyCallbackFunction$$.call($f$$38$$.src, $f$$38$$.key, $eventObject$$1$$)
  } : function($eventObject$$2_v$$1$$) {
    $eventObject$$2_v$$1$$ = $proxyCallbackFunction$$.call($f$$38$$.src, $f$$38$$.key, $eventObject$$2_v$$1$$);
    if(!$eventObject$$2_v$$1$$) {
      return $eventObject$$2_v$$1$$
    }
  };
  return $f$$38$$
}
function $goog$events$listenOnce$$($key$$57_src$$8$$, $type$$60$$, $listener$$30$$, $opt_capt$$3$$, $opt_handler$$2$$) {
  if($goog$isArray$$($type$$60$$)) {
    for(var $i$$87$$ = 0;$i$$87$$ < $type$$60$$.length;$i$$87$$++) {
      $goog$events$listenOnce$$($key$$57_src$$8$$, $type$$60$$[$i$$87$$], $listener$$30$$, $opt_capt$$3$$, $opt_handler$$2$$)
    }
  }else {
    $key$$57_src$$8$$ = $goog$events$listen$$($key$$57_src$$8$$, $type$$60$$, $listener$$30$$, $opt_capt$$3$$, $opt_handler$$2$$), $goog$events$listeners_$$[$key$$57_src$$8$$].$callOnce$ = $JSCompiler_alias_TRUE$$
  }
}
function $goog$events$unlisten$$($listenerArray$$1_objUid$$inline_111_src$$10$$, $type$$61$$, $listener$$32$$, $capture$$2_opt_capt$$5$$, $opt_handler$$4$$) {
  if($goog$isArray$$($type$$61$$)) {
    for(var $i$$88_map$$inline_110$$ = 0;$i$$88_map$$inline_110$$ < $type$$61$$.length;$i$$88_map$$inline_110$$++) {
      $goog$events$unlisten$$($listenerArray$$1_objUid$$inline_111_src$$10$$, $type$$61$$[$i$$88_map$$inline_110$$], $listener$$32$$, $capture$$2_opt_capt$$5$$, $opt_handler$$4$$)
    }
  }else {
    $capture$$2_opt_capt$$5$$ = !!$capture$$2_opt_capt$$5$$;
    a: {
      $i$$88_map$$inline_110$$ = $goog$events$listenerTree_$$;
      if($type$$61$$ in $i$$88_map$$inline_110$$ && ($i$$88_map$$inline_110$$ = $i$$88_map$$inline_110$$[$type$$61$$], $capture$$2_opt_capt$$5$$ in $i$$88_map$$inline_110$$ && ($i$$88_map$$inline_110$$ = $i$$88_map$$inline_110$$[$capture$$2_opt_capt$$5$$], $listenerArray$$1_objUid$$inline_111_src$$10$$ = $goog$getUid$$($listenerArray$$1_objUid$$inline_111_src$$10$$), $i$$88_map$$inline_110$$[$listenerArray$$1_objUid$$inline_111_src$$10$$]))) {
        $listenerArray$$1_objUid$$inline_111_src$$10$$ = $i$$88_map$$inline_110$$[$listenerArray$$1_objUid$$inline_111_src$$10$$];
        break a
      }
      $listenerArray$$1_objUid$$inline_111_src$$10$$ = $JSCompiler_alias_NULL$$
    }
    if($listenerArray$$1_objUid$$inline_111_src$$10$$) {
      for($i$$88_map$$inline_110$$ = 0;$i$$88_map$$inline_110$$ < $listenerArray$$1_objUid$$inline_111_src$$10$$.length;$i$$88_map$$inline_110$$++) {
        if($listenerArray$$1_objUid$$inline_111_src$$10$$[$i$$88_map$$inline_110$$].$listener$ == $listener$$32$$ && $listenerArray$$1_objUid$$inline_111_src$$10$$[$i$$88_map$$inline_110$$].capture == $capture$$2_opt_capt$$5$$ && $listenerArray$$1_objUid$$inline_111_src$$10$$[$i$$88_map$$inline_110$$].$handler$ == $opt_handler$$4$$) {
          $goog$events$unlistenByKey$$($listenerArray$$1_objUid$$inline_111_src$$10$$[$i$$88_map$$inline_110$$].key);
          break
        }
      }
    }
  }
}
function $goog$events$unlistenByKey$$($key$$58$$) {
  if(!$goog$events$listeners_$$[$key$$58$$]) {
    return $JSCompiler_alias_FALSE$$
  }
  var $listener$$33$$ = $goog$events$listeners_$$[$key$$58$$];
  if($listener$$33$$.$removed$) {
    return $JSCompiler_alias_FALSE$$
  }
  var $src$$11_srcUid$$1$$ = $listener$$33$$.src, $type$$62$$ = $listener$$33$$.type, $listenerArray$$2_proxy$$2$$ = $listener$$33$$.$proxy$, $capture$$3$$ = $listener$$33$$.capture;
  $src$$11_srcUid$$1$$.removeEventListener ? ($src$$11_srcUid$$1$$ == $goog$global$$ || !$src$$11_srcUid$$1$$.$customEvent_$) && $src$$11_srcUid$$1$$.removeEventListener($type$$62$$, $listenerArray$$2_proxy$$2$$, $capture$$3$$) : $src$$11_srcUid$$1$$.detachEvent && $src$$11_srcUid$$1$$.detachEvent($type$$62$$ in $goog$events$onStringMap_$$ ? $goog$events$onStringMap_$$[$type$$62$$] : $goog$events$onStringMap_$$[$type$$62$$] = "on" + $type$$62$$, $listenerArray$$2_proxy$$2$$);
  $src$$11_srcUid$$1$$ = $goog$getUid$$($src$$11_srcUid$$1$$);
  $listenerArray$$2_proxy$$2$$ = $goog$events$listenerTree_$$[$type$$62$$][$capture$$3$$][$src$$11_srcUid$$1$$];
  if($goog$events$sources_$$[$src$$11_srcUid$$1$$]) {
    var $sourcesArray$$ = $goog$events$sources_$$[$src$$11_srcUid$$1$$];
    $goog$array$remove$$($sourcesArray$$, $listener$$33$$);
    0 == $sourcesArray$$.length && delete $goog$events$sources_$$[$src$$11_srcUid$$1$$]
  }
  $listener$$33$$.$removed$ = $JSCompiler_alias_TRUE$$;
  $listenerArray$$2_proxy$$2$$.$needsCleanup_$ = $JSCompiler_alias_TRUE$$;
  $goog$events$cleanUp_$$($type$$62$$, $capture$$3$$, $src$$11_srcUid$$1$$, $listenerArray$$2_proxy$$2$$);
  delete $goog$events$listeners_$$[$key$$58$$];
  return $JSCompiler_alias_TRUE$$
}
function $goog$events$cleanUp_$$($type$$63$$, $capture$$4$$, $srcUid$$2$$, $listenerArray$$3$$) {
  if(!$listenerArray$$3$$.$locked_$ && $listenerArray$$3$$.$needsCleanup_$) {
    for(var $oldIndex$$ = 0, $newIndex$$ = 0;$oldIndex$$ < $listenerArray$$3$$.length;$oldIndex$$++) {
      $listenerArray$$3$$[$oldIndex$$].$removed$ ? $listenerArray$$3$$[$oldIndex$$].$proxy$.src = $JSCompiler_alias_NULL$$ : ($oldIndex$$ != $newIndex$$ && ($listenerArray$$3$$[$newIndex$$] = $listenerArray$$3$$[$oldIndex$$]), $newIndex$$++)
    }
    $listenerArray$$3$$.length = $newIndex$$;
    $listenerArray$$3$$.$needsCleanup_$ = $JSCompiler_alias_FALSE$$;
    0 == $newIndex$$ && (delete $goog$events$listenerTree_$$[$type$$63$$][$capture$$4$$][$srcUid$$2$$], $goog$events$listenerTree_$$[$type$$63$$][$capture$$4$$].$count_$--, 0 == $goog$events$listenerTree_$$[$type$$63$$][$capture$$4$$].$count_$ && (delete $goog$events$listenerTree_$$[$type$$63$$][$capture$$4$$], $goog$events$listenerTree_$$[$type$$63$$].$count_$--), 0 == $goog$events$listenerTree_$$[$type$$63$$].$count_$ && delete $goog$events$listenerTree_$$[$type$$63$$])
  }
}
function $goog$events$removeAll$$($opt_obj$$38_sourcesArray$$1_srcUid$$3$$) {
  var $opt_capt$$7$$, $count$$8$$ = 0, $noCapt$$ = $opt_capt$$7$$ == $JSCompiler_alias_NULL$$;
  $opt_capt$$7$$ = !!$opt_capt$$7$$;
  if($opt_obj$$38_sourcesArray$$1_srcUid$$3$$ == $JSCompiler_alias_NULL$$) {
    $goog$object$forEach$$($goog$events$sources_$$, function($listeners$$) {
      for(var $i$$90$$ = $listeners$$.length - 1;0 <= $i$$90$$;$i$$90$$--) {
        var $listener$$36$$ = $listeners$$[$i$$90$$];
        if($noCapt$$ || $opt_capt$$7$$ == $listener$$36$$.capture) {
          $goog$events$unlistenByKey$$($listener$$36$$.key), $count$$8$$++
        }
      }
    })
  }else {
    if($opt_obj$$38_sourcesArray$$1_srcUid$$3$$ = $goog$getUid$$($opt_obj$$38_sourcesArray$$1_srcUid$$3$$), $goog$events$sources_$$[$opt_obj$$38_sourcesArray$$1_srcUid$$3$$]) {
      for(var $opt_obj$$38_sourcesArray$$1_srcUid$$3$$ = $goog$events$sources_$$[$opt_obj$$38_sourcesArray$$1_srcUid$$3$$], $i$$89$$ = $opt_obj$$38_sourcesArray$$1_srcUid$$3$$.length - 1;0 <= $i$$89$$;$i$$89$$--) {
        var $listener$$35$$ = $opt_obj$$38_sourcesArray$$1_srcUid$$3$$[$i$$89$$];
        if($noCapt$$ || $opt_capt$$7$$ == $listener$$35$$.capture) {
          $goog$events$unlistenByKey$$($listener$$35$$.key), $count$$8$$++
        }
      }
    }
  }
}
function $goog$events$fireListeners_$$($listenerArray$$5_map$$6$$, $obj$$70_objUid$$2$$, $type$$69$$, $capture$$9$$, $eventObject$$4$$) {
  var $retval$$ = 1, $obj$$70_objUid$$2$$ = $goog$getUid$$($obj$$70_objUid$$2$$);
  if($listenerArray$$5_map$$6$$[$obj$$70_objUid$$2$$]) {
    $listenerArray$$5_map$$6$$.$remaining_$--;
    $listenerArray$$5_map$$6$$ = $listenerArray$$5_map$$6$$[$obj$$70_objUid$$2$$];
    $listenerArray$$5_map$$6$$.$locked_$ ? $listenerArray$$5_map$$6$$.$locked_$++ : $listenerArray$$5_map$$6$$.$locked_$ = 1;
    try {
      for(var $length$$17$$ = $listenerArray$$5_map$$6$$.length, $i$$92$$ = 0;$i$$92$$ < $length$$17$$;$i$$92$$++) {
        var $listener$$39$$ = $listenerArray$$5_map$$6$$[$i$$92$$];
        $listener$$39$$ && !$listener$$39$$.$removed$ && ($retval$$ &= $goog$events$fireListener$$($listener$$39$$, $eventObject$$4$$) !== $JSCompiler_alias_FALSE$$)
      }
    }finally {
      $listenerArray$$5_map$$6$$.$locked_$--, $goog$events$cleanUp_$$($type$$69$$, $capture$$9$$, $obj$$70_objUid$$2$$, $listenerArray$$5_map$$6$$)
    }
  }
  return Boolean($retval$$)
}
function $goog$events$fireListener$$($listener$$40$$, $eventObject$$5$$) {
  var $rv$$14$$ = $listener$$40$$.handleEvent($eventObject$$5$$);
  $listener$$40$$.$callOnce$ && $goog$events$unlistenByKey$$($listener$$40$$.key);
  return $rv$$14$$
}
function $goog$events$handleBrowserEvent_$$($key$$60$$, $opt_evt$$) {
  if(!$goog$events$listeners_$$[$key$$60$$]) {
    return $JSCompiler_alias_TRUE$$
  }
  var $listener$$41$$ = $goog$events$listeners_$$[$key$$60$$], $be$$1_type$$71$$ = $listener$$41$$.type, $map$$8$$ = $goog$events$listenerTree_$$;
  if(!($be$$1_type$$71$$ in $map$$8$$)) {
    return $JSCompiler_alias_TRUE$$
  }
  var $map$$8$$ = $map$$8$$[$be$$1_type$$71$$], $ieEvent_part$$inline_115_retval$$1$$, $targetsMap$$1$$;
  if(!$goog$events$BrowserFeature$HAS_W3C_EVENT_SUPPORT$$) {
    var $JSCompiler_temp$$31_hasCapture$$2_parts$$inline_113$$;
    if(!($JSCompiler_temp$$31_hasCapture$$2_parts$$inline_113$$ = $opt_evt$$)) {
      a: {
        $JSCompiler_temp$$31_hasCapture$$2_parts$$inline_113$$ = "window.event".split(".");
        for(var $cur$$inline_114_hasBubble$$1$$ = $goog$global$$;$ieEvent_part$$inline_115_retval$$1$$ = $JSCompiler_temp$$31_hasCapture$$2_parts$$inline_113$$.shift();) {
          if($goog$isDefAndNotNull$$($cur$$inline_114_hasBubble$$1$$[$ieEvent_part$$inline_115_retval$$1$$])) {
            $cur$$inline_114_hasBubble$$1$$ = $cur$$inline_114_hasBubble$$1$$[$ieEvent_part$$inline_115_retval$$1$$]
          }else {
            $JSCompiler_temp$$31_hasCapture$$2_parts$$inline_113$$ = $JSCompiler_alias_NULL$$;
            break a
          }
        }
        $JSCompiler_temp$$31_hasCapture$$2_parts$$inline_113$$ = $cur$$inline_114_hasBubble$$1$$
      }
    }
    $ieEvent_part$$inline_115_retval$$1$$ = $JSCompiler_temp$$31_hasCapture$$2_parts$$inline_113$$;
    $JSCompiler_temp$$31_hasCapture$$2_parts$$inline_113$$ = $JSCompiler_alias_TRUE$$ in $map$$8$$;
    $cur$$inline_114_hasBubble$$1$$ = $JSCompiler_alias_FALSE$$ in $map$$8$$;
    if($JSCompiler_temp$$31_hasCapture$$2_parts$$inline_113$$) {
      if(0 > $ieEvent_part$$inline_115_retval$$1$$.keyCode || $ieEvent_part$$inline_115_retval$$1$$.returnValue != $JSCompiler_alias_VOID$$) {
        return $JSCompiler_alias_TRUE$$
      }
      a: {
        var $evt$$14_useReturnValue$$inline_118$$ = $JSCompiler_alias_FALSE$$;
        if(0 == $ieEvent_part$$inline_115_retval$$1$$.keyCode) {
          try {
            $ieEvent_part$$inline_115_retval$$1$$.keyCode = -1;
            break a
          }catch($ex$$inline_119$$) {
            $evt$$14_useReturnValue$$inline_118$$ = $JSCompiler_alias_TRUE$$
          }
        }
        if($evt$$14_useReturnValue$$inline_118$$ || $ieEvent_part$$inline_115_retval$$1$$.returnValue == $JSCompiler_alias_VOID$$) {
          $ieEvent_part$$inline_115_retval$$1$$.returnValue = $JSCompiler_alias_TRUE$$
        }
      }
    }
    $evt$$14_useReturnValue$$inline_118$$ = new $goog$events$BrowserEvent$$;
    $evt$$14_useReturnValue$$inline_118$$.$init$($ieEvent_part$$inline_115_retval$$1$$, this);
    $ieEvent_part$$inline_115_retval$$1$$ = $JSCompiler_alias_TRUE$$;
    try {
      if($JSCompiler_temp$$31_hasCapture$$2_parts$$inline_113$$) {
        for(var $ancestors$$1$$ = [], $parent$$4$$ = $evt$$14_useReturnValue$$inline_118$$.currentTarget;$parent$$4$$;$parent$$4$$ = $parent$$4$$.parentNode) {
          $ancestors$$1$$.push($parent$$4$$)
        }
        $targetsMap$$1$$ = $map$$8$$[$JSCompiler_alias_TRUE$$];
        $targetsMap$$1$$.$remaining_$ = $targetsMap$$1$$.$count_$;
        for(var $i$$94$$ = $ancestors$$1$$.length - 1;!$evt$$14_useReturnValue$$inline_118$$.$propagationStopped_$ && 0 <= $i$$94$$ && $targetsMap$$1$$.$remaining_$;$i$$94$$--) {
          $evt$$14_useReturnValue$$inline_118$$.currentTarget = $ancestors$$1$$[$i$$94$$], $ieEvent_part$$inline_115_retval$$1$$ &= $goog$events$fireListeners_$$($targetsMap$$1$$, $ancestors$$1$$[$i$$94$$], $be$$1_type$$71$$, $JSCompiler_alias_TRUE$$, $evt$$14_useReturnValue$$inline_118$$)
        }
        if($cur$$inline_114_hasBubble$$1$$) {
          $targetsMap$$1$$ = $map$$8$$[$JSCompiler_alias_FALSE$$];
          $targetsMap$$1$$.$remaining_$ = $targetsMap$$1$$.$count_$;
          for($i$$94$$ = 0;!$evt$$14_useReturnValue$$inline_118$$.$propagationStopped_$ && $i$$94$$ < $ancestors$$1$$.length && $targetsMap$$1$$.$remaining_$;$i$$94$$++) {
            $evt$$14_useReturnValue$$inline_118$$.currentTarget = $ancestors$$1$$[$i$$94$$], $ieEvent_part$$inline_115_retval$$1$$ &= $goog$events$fireListeners_$$($targetsMap$$1$$, $ancestors$$1$$[$i$$94$$], $be$$1_type$$71$$, $JSCompiler_alias_FALSE$$, $evt$$14_useReturnValue$$inline_118$$)
          }
        }
      }else {
        $ieEvent_part$$inline_115_retval$$1$$ = $goog$events$fireListener$$($listener$$41$$, $evt$$14_useReturnValue$$inline_118$$)
      }
    }finally {
      if($ancestors$$1$$) {
        $ancestors$$1$$.length = 0
      }
      $evt$$14_useReturnValue$$inline_118$$.$dispose$()
    }
    return $ieEvent_part$$inline_115_retval$$1$$
  }
  $be$$1_type$$71$$ = new $goog$events$BrowserEvent$$($opt_evt$$, this);
  try {
    $ieEvent_part$$inline_115_retval$$1$$ = $goog$events$fireListener$$($listener$$41$$, $be$$1_type$$71$$)
  }finally {
    $be$$1_type$$71$$.$dispose$()
  }
  return $ieEvent_part$$inline_115_retval$$1$$
}
var $goog$events$uniqueIdCounter_$$ = 0;
function $goog$events$getUniqueId$$($identifier$$) {
  return $identifier$$ + "_" + $goog$events$uniqueIdCounter_$$++
}
;function $X$event$$($type$$72$$) {
  $goog$events$Event$$.call(this, $type$$72$$);
  this.$_className$ = "event"
}
$goog$inherits$$($X$event$$, $goog$events$Event$$);
var $X$event$events$PAN$$ = $goog$events$getUniqueId$$("pan"), $X$event$events$ROTATE$$ = $goog$events$getUniqueId$$("rotate"), $X$event$events$ZOOM$$ = $goog$events$getUniqueId$$("zoom"), $X$event$events$RENDER$$ = $goog$events$getUniqueId$$("render"), $X$event$events$RESETVIEW$$ = $goog$events$getUniqueId$$("resetview"), $X$event$events$MODIFIED$$ = $goog$events$getUniqueId$$("modified"), $X$event$events$PROGRESS$$ = $goog$events$getUniqueId$$("progress"), $X$event$events$HOVER$$ = $goog$events$getUniqueId$$("hover"), 
$X$event$events$HOVER_END$$ = $goog$events$getUniqueId$$("hover_end"), $X$event$events$$ = {$PAN$:$X$event$events$PAN$$, $ROTATE$:$X$event$events$ROTATE$$, $ZOOM$:$X$event$events$ZOOM$$, $RENDER$:$X$event$events$RENDER$$, $RESETVIEW$:$X$event$events$RESETVIEW$$, $MODIFIED$:$X$event$events$MODIFIED$$, $PROGRESS$:$X$event$events$PROGRESS$$, $HOVER$:$X$event$events$HOVER$$, $HOVER_END$:$X$event$events$HOVER_END$$};
function $X$event$PanEvent$$() {
  $X$event$$.call(this, $X$event$events$PAN$$);
  this.$_distance$ = new $goog$math$Vec2$$(0, 0)
}
$goog$inherits$$($X$event$PanEvent$$, $X$event$$);
function $X$event$RotateEvent$$() {
  $X$event$$.call(this, $X$event$events$ROTATE$$);
  this.$_distance$ = new $goog$math$Vec2$$(0, 0);
  this.$_angle$ = 0
}
$goog$inherits$$($X$event$RotateEvent$$, $X$event$$);
function $X$event$ZoomEvent$$() {
  $X$event$$.call(this, $X$event$events$ZOOM$$);
  this.$_fast$ = this.$_in$ = $JSCompiler_alias_FALSE$$
}
$goog$inherits$$($X$event$ZoomEvent$$, $X$event$$);
function $X$event$RenderEvent$$() {
  $X$event$$.call(this, $X$event$events$RENDER$$);
  this.$_timestamp$ = Date.now()
}
$goog$inherits$$($X$event$RenderEvent$$, $X$event$$);
function $X$event$HoverEvent$$() {
  $X$event$$.call(this, $X$event$events$HOVER$$);
  this.$_y$ = this.$_x$ = 0
}
$goog$inherits$$($X$event$HoverEvent$$, $X$event$$);
function $X$event$HoverEndEvent$$() {
  $X$event$$.call(this, $X$event$events$HOVER_END$$)
}
$goog$inherits$$($X$event$HoverEndEvent$$, $X$event$$);
function $X$event$ResetViewEvent$$() {
  $X$event$$.call(this, $X$event$events$RESETVIEW$$)
}
$goog$inherits$$($X$event$ResetViewEvent$$, $X$event$$);
function $X$event$ModifiedEvent$$() {
  $X$event$$.call(this, $X$event$events$MODIFIED$$);
  this.$_object$ = new $X$object$$
}
$goog$inherits$$($X$event$ModifiedEvent$$, $X$event$$);
function $X$event$ProgressEvent$$() {
  $X$event$$.call(this, $X$event$events$PROGRESS$$);
  this.$_value$ = 0
}
$goog$inherits$$($X$event$ProgressEvent$$, $X$event$$);
$goog$exportSymbol$$("X.event", $X$event$$);
$goog$exportSymbol$$("X.event.events", $X$event$events$$);
$goog$exportSymbol$$("X.event.uniqueId", function($id$$4$$) {
  return $goog$events$getUniqueId$$($id$$4$$)
});
$goog$exportSymbol$$("X.event.PanEvent", $X$event$PanEvent$$);
$goog$exportSymbol$$("X.event.RotateEvent", $X$event$RotateEvent$$);
$goog$exportSymbol$$("X.event.ZoomEvent", $X$event$ZoomEvent$$);
$goog$exportSymbol$$("X.event.RenderEvent", $X$event$RenderEvent$$);
$goog$exportSymbol$$("X.event.ResetViewEvent", $X$event$ResetViewEvent$$);
$goog$exportSymbol$$("X.event.ModifiedEvent", $X$event$ModifiedEvent$$);
$goog$exportSymbol$$("X.event.HoverEvent", $X$event$HoverEvent$$);
$goog$exportSymbol$$("X.event.ProgressEvent", $X$event$ProgressEvent$$);
function $goog$math$Coordinate3$$($opt_x$$, $opt_y$$, $opt_z$$) {
  this.x = $goog$isDef$$($opt_x$$) ? $opt_x$$ : 0;
  this.y = $goog$isDef$$($opt_y$$) ? $opt_y$$ : 0;
  this.$z$ = $goog$isDef$$($opt_z$$) ? $opt_z$$ : 0
}
$goog$math$Coordinate3$$.prototype.$clone$ = function $$goog$math$Coordinate3$$$$$clone$$() {
  return new $goog$math$Coordinate3$$(this.x, this.y, this.$z$)
};
$goog$math$Coordinate3$$.prototype.toString = function $$goog$math$Coordinate3$$$$toString$() {
  return"(" + this.x + ", " + this.y + ", " + this.$z$ + ")"
};
$goog$math$Coordinate3$$.prototype.$toArray$ = function $$goog$math$Coordinate3$$$$$toArray$$() {
  return[this.x, this.y, this.$z$]
};
function $goog$math$Vec3$$($x$$57$$, $y$$32$$, $z$$2$$) {
  this.x = $x$$57$$;
  this.y = $y$$32$$;
  this.$z$ = $z$$2$$
}
$goog$inherits$$($goog$math$Vec3$$, $goog$math$Coordinate3$$);
$JSCompiler_prototypeAlias$$ = $goog$math$Vec3$$.prototype;
$JSCompiler_prototypeAlias$$.$clone$ = function $$JSCompiler_prototypeAlias$$$$clone$$() {
  return new $goog$math$Vec3$$(this.x, this.y, this.$z$)
};
$JSCompiler_prototypeAlias$$.$magnitude$ = function $$JSCompiler_prototypeAlias$$$$magnitude$$() {
  return Math.sqrt(this.x * this.x + this.y * this.y + this.$z$ * this.$z$)
};
$JSCompiler_prototypeAlias$$.scale = function $$JSCompiler_prototypeAlias$$$scale$($s$$15$$) {
  this.x *= $s$$15$$;
  this.y *= $s$$15$$;
  this.$z$ *= $s$$15$$;
  return this
};
$JSCompiler_prototypeAlias$$.$invert$ = function $$JSCompiler_prototypeAlias$$$$invert$$() {
  this.x = -this.x;
  this.y = -this.y;
  this.$z$ = -this.$z$;
  return this
};
$JSCompiler_prototypeAlias$$.normalize = function $$JSCompiler_prototypeAlias$$$normalize$() {
  return this.scale(1 / this.$magnitude$())
};
$JSCompiler_prototypeAlias$$.add = function $$JSCompiler_prototypeAlias$$$add$($b$$14$$) {
  this.x += $b$$14$$.x;
  this.y += $b$$14$$.y;
  this.$z$ += $b$$14$$.$z$;
  return this
};
$JSCompiler_prototypeAlias$$.$subtract$ = function $$JSCompiler_prototypeAlias$$$$subtract$$($b$$15$$) {
  this.x -= $b$$15$$.x;
  this.y -= $b$$15$$.y;
  this.$z$ -= $b$$15$$.$z$;
  return this
};
$JSCompiler_prototypeAlias$$.$equals$ = function $$JSCompiler_prototypeAlias$$$$equals$$($b$$16$$) {
  return this == $b$$16$$ || !!$b$$16$$ && this.x == $b$$16$$.x && this.y == $b$$16$$.y && this.$z$ == $b$$16$$.$z$
};
function $goog$math$Vec3$cross$$($a$$21$$, $b$$20$$) {
  return new $goog$math$Vec3$$($a$$21$$.y * $b$$20$$.$z$ - $a$$21$$.$z$ * $b$$20$$.y, $a$$21$$.$z$ * $b$$20$$.x - $a$$21$$.x * $b$$20$$.$z$, $a$$21$$.x * $b$$20$$.y - $a$$21$$.y * $b$$20$$.x)
}
;function $goog$events$EventTarget$$() {
}
$goog$inherits$$($goog$events$EventTarget$$, $goog$Disposable$$);
$JSCompiler_prototypeAlias$$ = $goog$events$EventTarget$$.prototype;
$JSCompiler_prototypeAlias$$.$customEvent_$ = $JSCompiler_alias_TRUE$$;
$JSCompiler_prototypeAlias$$.$parentEventTarget_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$setParentEventTarget$ = $JSCompiler_set$$("$parentEventTarget_$");
$JSCompiler_prototypeAlias$$.addEventListener = function $$JSCompiler_prototypeAlias$$$addEventListener$($type$$73$$, $handler$$8$$, $opt_capture$$1$$, $opt_handlerScope$$) {
  $goog$events$listen$$(this, $type$$73$$, $handler$$8$$, $opt_capture$$1$$, $opt_handlerScope$$)
};
$JSCompiler_prototypeAlias$$.removeEventListener = function $$JSCompiler_prototypeAlias$$$removeEventListener$($type$$74$$, $handler$$9$$, $opt_capture$$2$$, $opt_handlerScope$$1$$) {
  $goog$events$unlisten$$(this, $type$$74$$, $handler$$9$$, $opt_capture$$2$$, $opt_handlerScope$$1$$)
};
$JSCompiler_prototypeAlias$$.dispatchEvent = function $$JSCompiler_prototypeAlias$$$dispatchEvent$($JSCompiler_inline_result$$122_e$$24_e$$inline_124$$) {
  var $hasCapture$$inline_130_type$$inline_125$$ = $JSCompiler_inline_result$$122_e$$24_e$$inline_124$$.type || $JSCompiler_inline_result$$122_e$$24_e$$inline_124$$, $map$$inline_126$$ = $goog$events$listenerTree_$$;
  if($hasCapture$$inline_130_type$$inline_125$$ in $map$$inline_126$$) {
    if($goog$isString$$($JSCompiler_inline_result$$122_e$$24_e$$inline_124$$)) {
      $JSCompiler_inline_result$$122_e$$24_e$$inline_124$$ = new $goog$events$Event$$($JSCompiler_inline_result$$122_e$$24_e$$inline_124$$, this)
    }else {
      if($JSCompiler_inline_result$$122_e$$24_e$$inline_124$$ instanceof $goog$events$Event$$) {
        $JSCompiler_inline_result$$122_e$$24_e$$inline_124$$.target = $JSCompiler_inline_result$$122_e$$24_e$$inline_124$$.target || this
      }else {
        var $oldEvent$$inline_127_rv$$inline_128$$ = $JSCompiler_inline_result$$122_e$$24_e$$inline_124$$, $JSCompiler_inline_result$$122_e$$24_e$$inline_124$$ = new $goog$events$Event$$($hasCapture$$inline_130_type$$inline_125$$, this);
        $goog$object$extend$$($JSCompiler_inline_result$$122_e$$24_e$$inline_124$$, $oldEvent$$inline_127_rv$$inline_128$$)
      }
    }
    var $oldEvent$$inline_127_rv$$inline_128$$ = 1, $ancestors$$inline_129_current$$inline_134$$, $map$$inline_126$$ = $map$$inline_126$$[$hasCapture$$inline_130_type$$inline_125$$], $hasCapture$$inline_130_type$$inline_125$$ = $JSCompiler_alias_TRUE$$ in $map$$inline_126$$, $parent$$inline_132_targetsMap$$inline_131$$;
    if($hasCapture$$inline_130_type$$inline_125$$) {
      $ancestors$$inline_129_current$$inline_134$$ = [];
      for($parent$$inline_132_targetsMap$$inline_131$$ = this;$parent$$inline_132_targetsMap$$inline_131$$;$parent$$inline_132_targetsMap$$inline_131$$ = $parent$$inline_132_targetsMap$$inline_131$$.$parentEventTarget_$) {
        $ancestors$$inline_129_current$$inline_134$$.push($parent$$inline_132_targetsMap$$inline_131$$)
      }
      $parent$$inline_132_targetsMap$$inline_131$$ = $map$$inline_126$$[$JSCompiler_alias_TRUE$$];
      $parent$$inline_132_targetsMap$$inline_131$$.$remaining_$ = $parent$$inline_132_targetsMap$$inline_131$$.$count_$;
      for(var $i$$inline_133$$ = $ancestors$$inline_129_current$$inline_134$$.length - 1;!$JSCompiler_inline_result$$122_e$$24_e$$inline_124$$.$propagationStopped_$ && 0 <= $i$$inline_133$$ && $parent$$inline_132_targetsMap$$inline_131$$.$remaining_$;$i$$inline_133$$--) {
        $JSCompiler_inline_result$$122_e$$24_e$$inline_124$$.currentTarget = $ancestors$$inline_129_current$$inline_134$$[$i$$inline_133$$], $oldEvent$$inline_127_rv$$inline_128$$ &= $goog$events$fireListeners_$$($parent$$inline_132_targetsMap$$inline_131$$, $ancestors$$inline_129_current$$inline_134$$[$i$$inline_133$$], $JSCompiler_inline_result$$122_e$$24_e$$inline_124$$.type, $JSCompiler_alias_TRUE$$, $JSCompiler_inline_result$$122_e$$24_e$$inline_124$$) && $JSCompiler_inline_result$$122_e$$24_e$$inline_124$$.$returnValue_$ != 
        $JSCompiler_alias_FALSE$$
      }
    }
    if($JSCompiler_alias_FALSE$$ in $map$$inline_126$$) {
      if($parent$$inline_132_targetsMap$$inline_131$$ = $map$$inline_126$$[$JSCompiler_alias_FALSE$$], $parent$$inline_132_targetsMap$$inline_131$$.$remaining_$ = $parent$$inline_132_targetsMap$$inline_131$$.$count_$, $hasCapture$$inline_130_type$$inline_125$$) {
        for($i$$inline_133$$ = 0;!$JSCompiler_inline_result$$122_e$$24_e$$inline_124$$.$propagationStopped_$ && $i$$inline_133$$ < $ancestors$$inline_129_current$$inline_134$$.length && $parent$$inline_132_targetsMap$$inline_131$$.$remaining_$;$i$$inline_133$$++) {
          $JSCompiler_inline_result$$122_e$$24_e$$inline_124$$.currentTarget = $ancestors$$inline_129_current$$inline_134$$[$i$$inline_133$$], $oldEvent$$inline_127_rv$$inline_128$$ &= $goog$events$fireListeners_$$($parent$$inline_132_targetsMap$$inline_131$$, $ancestors$$inline_129_current$$inline_134$$[$i$$inline_133$$], $JSCompiler_inline_result$$122_e$$24_e$$inline_124$$.type, $JSCompiler_alias_FALSE$$, $JSCompiler_inline_result$$122_e$$24_e$$inline_124$$) && $JSCompiler_inline_result$$122_e$$24_e$$inline_124$$.$returnValue_$ != 
          $JSCompiler_alias_FALSE$$
        }
      }else {
        for($ancestors$$inline_129_current$$inline_134$$ = this;!$JSCompiler_inline_result$$122_e$$24_e$$inline_124$$.$propagationStopped_$ && $ancestors$$inline_129_current$$inline_134$$ && $parent$$inline_132_targetsMap$$inline_131$$.$remaining_$;$ancestors$$inline_129_current$$inline_134$$ = $ancestors$$inline_129_current$$inline_134$$.$parentEventTarget_$) {
          $JSCompiler_inline_result$$122_e$$24_e$$inline_124$$.currentTarget = $ancestors$$inline_129_current$$inline_134$$, $oldEvent$$inline_127_rv$$inline_128$$ &= $goog$events$fireListeners_$$($parent$$inline_132_targetsMap$$inline_131$$, $ancestors$$inline_129_current$$inline_134$$, $JSCompiler_inline_result$$122_e$$24_e$$inline_124$$.type, $JSCompiler_alias_FALSE$$, $JSCompiler_inline_result$$122_e$$24_e$$inline_124$$) && $JSCompiler_inline_result$$122_e$$24_e$$inline_124$$.$returnValue_$ != 
          $JSCompiler_alias_FALSE$$
        }
      }
    }
    $JSCompiler_inline_result$$122_e$$24_e$$inline_124$$ = Boolean($oldEvent$$inline_127_rv$$inline_128$$)
  }else {
    $JSCompiler_inline_result$$122_e$$24_e$$inline_124$$ = $JSCompiler_alias_TRUE$$
  }
  return $JSCompiler_inline_result$$122_e$$24_e$$inline_124$$
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$events$EventTarget$$.$superClass_$.$disposeInternal$.call(this);
  $goog$events$removeAll$$(this);
  this.$parentEventTarget_$ = $JSCompiler_alias_NULL$$
};
function $X$base$$() {
  this.$_className$ = "base";
  this.$_dirty$ = $JSCompiler_alias_FALSE$$
}
$goog$inherits$$($X$base$$, $goog$events$EventTarget$$);
$JSCompiler_prototypeAlias$$ = $X$base$$.prototype;
$JSCompiler_prototypeAlias$$.className = $JSCompiler_get$$("$_className$");
$JSCompiler_prototypeAlias$$.id = $JSCompiler_get$$("$_id$");
$JSCompiler_prototypeAlias$$.print = function $$JSCompiler_prototypeAlias$$$print$() {
  var $attributes$$ = Object.keys(this), $attributesStringList$$ = "", $className$$3$$ = "<unknown>", $a$$23$$ = 0;
  for($a$$23$$ in $attributes$$) {
    var $aName$$ = "this." + $attributes$$[$a$$23$$], $aValue$$ = eval($aName$$);
    "this._className" == $aName$$ ? $className$$3$$ = $aValue$$ : $attributesStringList$$ += $aName$$ + ": " + $aValue$$ + "\n"
  }
  return"== X." + $className$$3$$ + " ==\n" + $attributesStringList$$
};
$JSCompiler_prototypeAlias$$.$dirty$ = $JSCompiler_get$$("$_dirty$");
$JSCompiler_prototypeAlias$$.$setClean$ = function $$JSCompiler_prototypeAlias$$$$setClean$$() {
  this.$_dirty$ = $JSCompiler_alias_FALSE$$
};
$goog$exportSymbol$$("X.base", $X$base$$);
$goog$exportSymbol$$("X.base.prototype.className", $X$base$$.prototype.className);
$goog$exportSymbol$$("X.base.prototype.print", $X$base$$.prototype.print);
$goog$exportSymbol$$("X.base.prototype.dirty", $X$base$$.prototype.$dirty$);
$goog$exportSymbol$$("X.base.prototype.setClean", $X$base$$.prototype.$setClean$);
function $X$exception$$($message$$13$$) {
  var $validMessage$$ = "Unknown error!";
  $goog$isDefAndNotNull$$($message$$13$$) && ($validMessage$$ = $message$$13$$);
  $X$base$$.call(this);
  this.$_className$ = "exception";
  this.$_message$ = "Fatal: " + $validMessage$$;
  this.$_stackTrace_$ = Error().stack
}
$goog$inherits$$($X$exception$$, $X$base$$);
$goog$exportSymbol$$("X.exception", $X$exception$$);
function $X$triplets$$($data$$19$$) {
  $X$base$$.call(this);
  this.$_className$ = "triplets";
  this.$_maxC$ = this.$_minC$ = this.$_maxB$ = this.$_minB$ = this.$_maxA$ = this.$_minA$ = $JSCompiler_alias_NULL$$;
  this.$_triplets_$ = [];
  if($goog$isDefAndNotNull$$($data$$19$$)) {
    this.$_triplets_$ = $data$$19$$
  }
}
$goog$inherits$$($X$triplets$$, $X$base$$);
$JSCompiler_prototypeAlias$$ = $X$triplets$$.prototype;
$JSCompiler_prototypeAlias$$.add = function $$JSCompiler_prototypeAlias$$$add$($a$$24$$, $b$$22$$, $c$$1$$) {
  (!$goog$isNumber$$($a$$24$$) || !$goog$isNumber$$($b$$22$$) || !$goog$isNumber$$($c$$1$$)) && $JSCompiler_alias_THROW$$(new $X$exception$$("Invalid triplet."));
  if(!this.$_minA$ || $a$$24$$ < this.$_minA$) {
    this.$_minA$ = $a$$24$$
  }
  if(!this.$_maxA$ || $a$$24$$ > this.$_maxA$) {
    this.$_maxA$ = $a$$24$$
  }
  if(!this.$_minB$ || $b$$22$$ < this.$_minB$) {
    this.$_minB$ = $b$$22$$
  }
  if(!this.$_maxB$ || $b$$22$$ > this.$_maxB$) {
    this.$_maxB$ = $b$$22$$
  }
  if(!this.$_minC$ || $c$$1$$ < this.$_minC$) {
    this.$_minC$ = $c$$1$$
  }
  if(!this.$_maxC$ || $c$$1$$ > this.$_maxC$) {
    this.$_maxC$ = $c$$1$$
  }
  this.$_dirty$ = $JSCompiler_alias_TRUE$$;
  return this.$_triplets_$.push($a$$24$$, $b$$22$$, $c$$1$$) / 3
};
$JSCompiler_prototypeAlias$$.get = function $$JSCompiler_prototypeAlias$$$get$($id$$5$$) {
  (!$goog$isNumber$$($id$$5$$) || 3 * $id$$5$$ > this.$_triplets_$.length) && $JSCompiler_alias_THROW$$(new $X$exception$$("Invalid id."));
  $id$$5$$ *= 3;
  return[this.$_triplets_$[$id$$5$$], this.$_triplets_$[$id$$5$$ + 1], this.$_triplets_$[$id$$5$$ + 2]]
};
$JSCompiler_prototypeAlias$$.remove = function $$JSCompiler_prototypeAlias$$$remove$($id$$6$$) {
  (!$goog$isNumber$$($id$$6$$) || 3 * $id$$6$$ > this.$_triplets_$.length) && $JSCompiler_alias_THROW$$(new $X$exception$$("Invalid id."));
  this.$_triplets_$.splice($id$$6$$, 3);
  this.$_dirty$ = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.all = $JSCompiler_get$$("$_triplets_$");
$JSCompiler_prototypeAlias$$.clear = function $$JSCompiler_prototypeAlias$$$clear$() {
  this.$_triplets_$ = [];
  this.$_dirty$ = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.$count$ = function $$JSCompiler_prototypeAlias$$$$count$$() {
  return this.$_triplets_$.length / 3
};
$JSCompiler_prototypeAlias$$.length = function $$JSCompiler_prototypeAlias$$$length$() {
  return this.$_triplets_$.length
};
$goog$exportSymbol$$("X.triplets", $X$triplets$$);
$goog$exportSymbol$$("X.triplets.prototype.add", $X$triplets$$.prototype.add);
$goog$exportSymbol$$("X.triplets.prototype.get", $X$triplets$$.prototype.get);
$goog$exportSymbol$$("X.triplets.prototype.remove", $X$triplets$$.prototype.remove);
$goog$exportSymbol$$("X.triplets.prototype.all", $X$triplets$$.prototype.all);
$goog$exportSymbol$$("X.triplets.prototype.clear", $X$triplets$$.prototype.clear);
$goog$exportSymbol$$("X.triplets.prototype.count", $X$triplets$$.prototype.$count$);
$goog$exportSymbol$$("X.triplets.prototype.length", $X$triplets$$.prototype.length);
function $X$parser$$() {
  $X$base$$.call(this);
  this.$_className$ = "parser"
}
$goog$inherits$$($X$parser$$, $X$base$$);
var $X$parser$extensions$$ = {$STL$:"STL", $VTK$:"VTK", $TRK$:"TRK"};
$X$parser$$.prototype.parse = function $$X$parser$$$$parse$() {
  $JSCompiler_alias_THROW$$(new $X$exception$$("The function parse() should be overloaded!"))
};
function $JSCompiler_StaticMethods_parseFloat32$$($data$$22$$, $offset$$16$$) {
  var $b1$$1_mantissa$$ = $JSCompiler_StaticMethods_parseUChar8$$($data$$22$$, $offset$$16$$ + 2), $b0$$ = $JSCompiler_StaticMethods_parseUChar8$$($data$$22$$, $offset$$16$$ + 3), $exponent$$ = ($b0$$ << 1 & 255 | $b1$$1_mantissa$$ >> 7) - 127, $b1$$1_mantissa$$ = ($b1$$1_mantissa$$ & 127) << 16 | $JSCompiler_StaticMethods_parseUChar8$$($data$$22$$, $offset$$16$$ + 1) << 8 | $JSCompiler_StaticMethods_parseUChar8$$($data$$22$$, $offset$$16$$);
  return 0 == $b1$$1_mantissa$$ && -127 == $exponent$$ ? 0 : (1 - 2 * ($b0$$ >> 7)) * (1 + $b1$$1_mantissa$$ * Math.pow(2, -23)) * Math.pow(2, $exponent$$)
}
function $JSCompiler_StaticMethods_parseFloat32Array$$($data$$24$$, $offset$$18$$, $elements$$) {
  var $arr$$58$$ = [], $i$$96$$;
  for($i$$96$$ = 0;$i$$96$$ < $elements$$;$i$$96$$++) {
    $arr$$58$$[$i$$96$$] = $JSCompiler_StaticMethods_parseFloat32$$($data$$24$$, $offset$$18$$ + 4 * $i$$96$$)
  }
  return $arr$$58$$
}
function $JSCompiler_StaticMethods_parseUInt32$$($data$$25$$, $offset$$19$$) {
  return($JSCompiler_StaticMethods_parseUChar8$$($data$$25$$, $offset$$19$$ + 3) << 24) + ($JSCompiler_StaticMethods_parseUChar8$$($data$$25$$, $offset$$19$$ + 2) << 16) + ($JSCompiler_StaticMethods_parseUChar8$$($data$$25$$, $offset$$19$$ + 1) << 8) + $JSCompiler_StaticMethods_parseUChar8$$($data$$25$$, $offset$$19$$)
}
function $JSCompiler_StaticMethods_parseUChar8$$($data$$31$$, $offset$$25$$) {
  return $data$$31$$.charCodeAt($offset$$25$$) & 255
}
$goog$exportSymbol$$("X.parser", $X$parser$$);
$goog$exportSymbol$$("X.parser.extensions", $X$parser$extensions$$);
$goog$exportSymbol$$("X.parser.prototype.parse", $X$parser$$.prototype.parse);
function $X$parserTRK$$() {
  $X$parser$$.call(this);
  this.$_className$ = "parserTRK"
}
$goog$inherits$$($X$parserTRK$$, $X$parser$$);
$X$parserTRK$$.prototype.parse = function $$X$parserTRK$$$$parse$($object$$7$$, $data$$32$$) {
  var $modifiedEvent_p$$ = $object$$7$$.$_points$, $n$$5$$ = $object$$7$$.$_normals$, $c$$2$$ = $object$$7$$.$_colors$, $centerX_offset$$26$$ = 0, $JSCompiler_object_inline_n_count_20_i$$inline_141$$;
  for($JSCompiler_object_inline_n_count_20_i$$inline_141$$ = 0;3 > $JSCompiler_object_inline_n_count_20_i$$inline_141$$;$JSCompiler_object_inline_n_count_20_i$$inline_141$$++) {
  }
  var $JSCompiler_object_inline_voxel_size_2_diff_end$$2_nextPoint$$ = $JSCompiler_StaticMethods_parseFloat32Array$$($data$$32$$, $centerX_offset$$26$$ + 12, 3);
  $JSCompiler_StaticMethods_parseFloat32Array$$($data$$32$$, $centerX_offset$$26$$ + 24, 3);
  var $JSCompiler_object_inline_n_scalars_4_currentPoint_distance_start$$7$$ = ($JSCompiler_StaticMethods_parseUChar8$$($data$$32$$, $centerX_offset$$26$$ + 36 + 1) << 8) + $JSCompiler_StaticMethods_parseUChar8$$($data$$32$$, $centerX_offset$$26$$ + 36), $JSCompiler_object_inline_n_properties_6_nCurrentPointX$$ = ($JSCompiler_StaticMethods_parseUChar8$$($data$$32$$, $centerX_offset$$26$$ + 238 + 1) << 8) + $JSCompiler_StaticMethods_parseUChar8$$($data$$32$$, $centerX_offset$$26$$ + 238);
  $JSCompiler_StaticMethods_parseFloat32Array$$($data$$32$$, $centerX_offset$$26$$ + 440, 16);
  $JSCompiler_StaticMethods_parseFloat32Array$$($data$$32$$, $centerX_offset$$26$$ + 956, 6);
  $JSCompiler_object_inline_n_count_20_i$$inline_141$$ = $JSCompiler_StaticMethods_parseUInt32$$($data$$32$$, $centerX_offset$$26$$ + 988);
  var $centerX_offset$$26$$ = $JSCompiler_StaticMethods_parseUInt32$$($data$$32$$, $centerX_offset$$26$$ + 996), $fibers$$ = [], $minX_nCurrentPointY$$ = $JSCompiler_alias_NULL$$, $maxX_nCurrentPointZ$$ = $JSCompiler_alias_NULL$$, $centerY_minY$$ = $JSCompiler_alias_NULL$$, $maxY_numberOfPoints$$ = $JSCompiler_alias_NULL$$, $centerZ_minZ$$ = $JSCompiler_alias_NULL$$, $maxZ_points$$ = $JSCompiler_alias_NULL$$, $i$$98$$;
  for($i$$98$$ = 0;$i$$98$$ < $JSCompiler_object_inline_n_count_20_i$$inline_141$$;$i$$98$$++) {
    for(var $cMaxX_nNextPointX_numPoints$$ = $JSCompiler_StaticMethods_parseUInt32$$($data$$32$$, $centerX_offset$$26$$), $currentPoints_nCurrentPointLength$$ = new $X$triplets$$, $centerX_offset$$26$$ = $centerX_offset$$26$$ + 4, $cMinX_j$$6$$ = 0;$cMinX_j$$6$$ < $cMaxX_nNextPointX_numPoints$$;$cMinX_j$$6$$++) {
      var $cMinY_nNextPointY_x$$60$$ = $JSCompiler_StaticMethods_parseFloat32$$($data$$32$$, $centerX_offset$$26$$), $centerX_offset$$26$$ = $centerX_offset$$26$$ + 4, $cMaxY_nNextPointZ_y$$34$$ = $JSCompiler_StaticMethods_parseFloat32$$($data$$32$$, $centerX_offset$$26$$), $centerX_offset$$26$$ = $centerX_offset$$26$$ + 4, $cMinZ_nNextPointLength_z$$4$$ = $JSCompiler_StaticMethods_parseFloat32$$($data$$32$$, $centerX_offset$$26$$), $centerX_offset$$26$$ = $centerX_offset$$26$$ + 4;
      0 < $JSCompiler_object_inline_n_scalars_4_currentPoint_distance_start$$7$$ && ($JSCompiler_StaticMethods_parseFloat32Array$$($data$$32$$, $centerX_offset$$26$$, $JSCompiler_object_inline_n_scalars_4_currentPoint_distance_start$$7$$), $centerX_offset$$26$$ += 4 * $JSCompiler_object_inline_n_scalars_4_currentPoint_distance_start$$7$$);
      $cMinY_nNextPointY_x$$60$$ /= $JSCompiler_object_inline_voxel_size_2_diff_end$$2_nextPoint$$[0];
      $cMaxY_nNextPointZ_y$$34$$ /= $JSCompiler_object_inline_voxel_size_2_diff_end$$2_nextPoint$$[1];
      $cMinZ_nNextPointLength_z$$4$$ /= $JSCompiler_object_inline_voxel_size_2_diff_end$$2_nextPoint$$[2];
      $currentPoints_nCurrentPointLength$$.add($cMinY_nNextPointY_x$$60$$, $cMaxY_nNextPointZ_y$$34$$, $cMinZ_nNextPointLength_z$$4$$)
    }
    0 < $JSCompiler_object_inline_n_properties_6_nCurrentPointX$$ && ($centerX_offset$$26$$ += 4 * $JSCompiler_object_inline_n_properties_6_nCurrentPointX$$);
    var $cMinX_j$$6$$ = $currentPoints_nCurrentPointLength$$.$_minA$, $cMaxX_nNextPointX_numPoints$$ = $currentPoints_nCurrentPointLength$$.$_maxA$, $cMinY_nNextPointY_x$$60$$ = $currentPoints_nCurrentPointLength$$.$_minB$, $cMaxY_nNextPointZ_y$$34$$ = $currentPoints_nCurrentPointLength$$.$_maxB$, $cMinZ_nNextPointLength_z$$4$$ = $currentPoints_nCurrentPointLength$$.$_minC$, $cMaxZ$$ = $currentPoints_nCurrentPointLength$$.$_maxC$;
    if(!$minX_nCurrentPointY$$ || $cMinX_j$$6$$ < $minX_nCurrentPointY$$) {
      $minX_nCurrentPointY$$ = $cMinX_j$$6$$
    }
    if(!$maxX_nCurrentPointZ$$ || $cMaxX_nNextPointX_numPoints$$ > $maxX_nCurrentPointZ$$) {
      $maxX_nCurrentPointZ$$ = $cMaxX_nNextPointX_numPoints$$
    }
    if(!$centerY_minY$$ || $cMinY_nNextPointY_x$$60$$ < $centerY_minY$$) {
      $centerY_minY$$ = $cMinY_nNextPointY_x$$60$$
    }
    if(!$maxY_numberOfPoints$$ || $cMaxY_nNextPointZ_y$$34$$ > $maxY_numberOfPoints$$) {
      $maxY_numberOfPoints$$ = $cMaxY_nNextPointZ_y$$34$$
    }
    if(!$centerZ_minZ$$ || $cMinZ_nNextPointLength_z$$4$$ < $centerZ_minZ$$) {
      $centerZ_minZ$$ = $cMinZ_nNextPointLength_z$$4$$
    }
    if(!$maxZ_points$$ || $cMaxZ$$ > $maxZ_points$$) {
      $maxZ_points$$ = $cMaxZ$$
    }
    $fibers$$.push($currentPoints_nCurrentPointLength$$)
  }
  $centerX_offset$$26$$ = ($minX_nCurrentPointY$$ + $maxX_nCurrentPointZ$$) / 2;
  $centerY_minY$$ = ($centerY_minY$$ + $maxY_numberOfPoints$$) / 2;
  $centerZ_minZ$$ = ($centerZ_minZ$$ + $maxZ_points$$) / 2;
  for($i$$98$$ = 0;$i$$98$$ < $JSCompiler_object_inline_n_count_20_i$$inline_141$$;$i$$98$$++) {
    $maxZ_points$$ = $fibers$$[$i$$98$$];
    $maxY_numberOfPoints$$ = $maxZ_points$$.$count$();
    for($cMinX_j$$6$$ = 0;$cMinX_j$$6$$ < $maxY_numberOfPoints$$ - 1;$cMinX_j$$6$$++) {
      $JSCompiler_object_inline_n_scalars_4_currentPoint_distance_start$$7$$ = $maxZ_points$$.get($cMinX_j$$6$$), $JSCompiler_object_inline_voxel_size_2_diff_end$$2_nextPoint$$ = $maxZ_points$$.get($cMinX_j$$6$$ + 1), $modifiedEvent_p$$.add($JSCompiler_object_inline_n_scalars_4_currentPoint_distance_start$$7$$[0], $JSCompiler_object_inline_n_scalars_4_currentPoint_distance_start$$7$$[1], $JSCompiler_object_inline_n_scalars_4_currentPoint_distance_start$$7$$[2]), $modifiedEvent_p$$.add($JSCompiler_object_inline_voxel_size_2_diff_end$$2_nextPoint$$[0], 
      $JSCompiler_object_inline_voxel_size_2_diff_end$$2_nextPoint$$[1], $JSCompiler_object_inline_voxel_size_2_diff_end$$2_nextPoint$$[2]), $JSCompiler_object_inline_n_properties_6_nCurrentPointX$$ = $JSCompiler_object_inline_n_scalars_4_currentPoint_distance_start$$7$$[0] - $centerX_offset$$26$$, $minX_nCurrentPointY$$ = $JSCompiler_object_inline_n_scalars_4_currentPoint_distance_start$$7$$[1] - $centerY_minY$$, $maxX_nCurrentPointZ$$ = $JSCompiler_object_inline_n_scalars_4_currentPoint_distance_start$$7$$[2] - 
      $centerZ_minZ$$, $currentPoints_nCurrentPointLength$$ = Math.sqrt($JSCompiler_object_inline_n_properties_6_nCurrentPointX$$ * $JSCompiler_object_inline_n_properties_6_nCurrentPointX$$ + $minX_nCurrentPointY$$ * $minX_nCurrentPointY$$ + $maxX_nCurrentPointZ$$ * $maxX_nCurrentPointZ$$), $cMaxX_nNextPointX_numPoints$$ = $JSCompiler_object_inline_voxel_size_2_diff_end$$2_nextPoint$$[0] - $centerX_offset$$26$$, $cMinY_nNextPointY_x$$60$$ = $JSCompiler_object_inline_voxel_size_2_diff_end$$2_nextPoint$$[1] - 
      $centerY_minY$$, $cMaxY_nNextPointZ_y$$34$$ = $JSCompiler_object_inline_voxel_size_2_diff_end$$2_nextPoint$$[2] - $centerZ_minZ$$, $cMinZ_nNextPointLength_z$$4$$ = Math.sqrt($cMaxX_nNextPointX_numPoints$$ * $cMaxX_nNextPointX_numPoints$$ + $cMinY_nNextPointY_x$$60$$ * $cMinY_nNextPointY_x$$60$$ + $cMaxY_nNextPointZ_y$$34$$ * $cMaxY_nNextPointZ_y$$34$$), $n$$5$$.add($JSCompiler_object_inline_n_properties_6_nCurrentPointX$$ / $currentPoints_nCurrentPointLength$$, $minX_nCurrentPointY$$ / $currentPoints_nCurrentPointLength$$, 
      $maxX_nCurrentPointZ$$ / $currentPoints_nCurrentPointLength$$), $n$$5$$.add($cMaxX_nNextPointX_numPoints$$ / $cMinZ_nNextPointLength_z$$4$$, $cMinY_nNextPointY_x$$60$$ / $cMinZ_nNextPointLength_z$$4$$, $cMaxY_nNextPointZ_y$$34$$ / $cMinZ_nNextPointLength_z$$4$$), $JSCompiler_object_inline_voxel_size_2_diff_end$$2_nextPoint$$ = [Math.abs($JSCompiler_object_inline_voxel_size_2_diff_end$$2_nextPoint$$[0] - $JSCompiler_object_inline_n_scalars_4_currentPoint_distance_start$$7$$[0]), Math.abs($JSCompiler_object_inline_voxel_size_2_diff_end$$2_nextPoint$$[1] - 
      $JSCompiler_object_inline_n_scalars_4_currentPoint_distance_start$$7$$[1]), Math.abs($JSCompiler_object_inline_voxel_size_2_diff_end$$2_nextPoint$$[2] - $JSCompiler_object_inline_n_scalars_4_currentPoint_distance_start$$7$$[2])], $JSCompiler_object_inline_n_scalars_4_currentPoint_distance_start$$7$$ = Math.sqrt($JSCompiler_object_inline_voxel_size_2_diff_end$$2_nextPoint$$[0] * $JSCompiler_object_inline_voxel_size_2_diff_end$$2_nextPoint$$[0] + $JSCompiler_object_inline_voxel_size_2_diff_end$$2_nextPoint$$[1] * 
      $JSCompiler_object_inline_voxel_size_2_diff_end$$2_nextPoint$$[1] + $JSCompiler_object_inline_voxel_size_2_diff_end$$2_nextPoint$$[2] * $JSCompiler_object_inline_voxel_size_2_diff_end$$2_nextPoint$$[2]), $JSCompiler_object_inline_voxel_size_2_diff_end$$2_nextPoint$$[0] /= $JSCompiler_object_inline_n_scalars_4_currentPoint_distance_start$$7$$, $JSCompiler_object_inline_voxel_size_2_diff_end$$2_nextPoint$$[1] /= $JSCompiler_object_inline_n_scalars_4_currentPoint_distance_start$$7$$, $JSCompiler_object_inline_voxel_size_2_diff_end$$2_nextPoint$$[2] /= 
      $JSCompiler_object_inline_n_scalars_4_currentPoint_distance_start$$7$$, $c$$2$$.add($JSCompiler_object_inline_voxel_size_2_diff_end$$2_nextPoint$$[0], $JSCompiler_object_inline_voxel_size_2_diff_end$$2_nextPoint$$[1], $JSCompiler_object_inline_voxel_size_2_diff_end$$2_nextPoint$$[2]), $c$$2$$.add($JSCompiler_object_inline_voxel_size_2_diff_end$$2_nextPoint$$[0], $JSCompiler_object_inline_voxel_size_2_diff_end$$2_nextPoint$$[1], $JSCompiler_object_inline_voxel_size_2_diff_end$$2_nextPoint$$[2])
    }
  }
  $object$$7$$.$setType$($X$object$types$LINES$$);
  $modifiedEvent_p$$ = new $X$event$ModifiedEvent$$;
  $modifiedEvent_p$$.$_object$ = $object$$7$$;
  this.dispatchEvent($modifiedEvent_p$$)
};
$goog$exportSymbol$$("X.parserTRK", $X$parserTRK$$);
$goog$exportSymbol$$("X.parserTRK.prototype.parse", $X$parserTRK$$.prototype.parse);
function $X$parserSTL$$() {
  $X$parser$$.call(this);
  this.$_className$ = "parserSTL"
}
$goog$inherits$$($X$parserSTL$$, $X$parser$$);
$X$parserSTL$$.prototype.parse = function $$X$parserSTL$$$$parse$($object$$8$$, $data$$33$$) {
  for(var $dataAsArray_modifiedEvent$$1$$ = $data$$33$$.split("\n"), $numberOfLines$$ = $dataAsArray_modifiedEvent$$1$$.length, $p$$1$$ = $object$$8$$.$_points$, $n$$6$$ = $object$$8$$.$_normals$, $i$$99$$ = 0, $n2$$ = $numberOfLines$$ % 8;$n2$$--;) {
    this.$parseLine$($p$$1$$, $n$$6$$, $dataAsArray_modifiedEvent$$1$$[$i$$99$$]), $i$$99$$++
  }
  for($n2$$ = 0.125 * $numberOfLines$$ ^ 0;$n2$$--;) {
    this.$parseLine$($p$$1$$, $n$$6$$, $dataAsArray_modifiedEvent$$1$$[$i$$99$$]), $i$$99$$++, this.$parseLine$($p$$1$$, $n$$6$$, $dataAsArray_modifiedEvent$$1$$[$i$$99$$]), $i$$99$$++, this.$parseLine$($p$$1$$, $n$$6$$, $dataAsArray_modifiedEvent$$1$$[$i$$99$$]), $i$$99$$++, this.$parseLine$($p$$1$$, $n$$6$$, $dataAsArray_modifiedEvent$$1$$[$i$$99$$]), $i$$99$$++, this.$parseLine$($p$$1$$, $n$$6$$, $dataAsArray_modifiedEvent$$1$$[$i$$99$$]), $i$$99$$++, this.$parseLine$($p$$1$$, $n$$6$$, $dataAsArray_modifiedEvent$$1$$[$i$$99$$]), 
    $i$$99$$++, this.$parseLine$($p$$1$$, $n$$6$$, $dataAsArray_modifiedEvent$$1$$[$i$$99$$]), $i$$99$$++, this.$parseLine$($p$$1$$, $n$$6$$, $dataAsArray_modifiedEvent$$1$$[$i$$99$$]), $i$$99$$++
  }
  $dataAsArray_modifiedEvent$$1$$ = new $X$event$ModifiedEvent$$;
  $dataAsArray_modifiedEvent$$1$$.$_object$ = $object$$8$$;
  this.dispatchEvent($dataAsArray_modifiedEvent$$1$$)
};
$X$parserSTL$$.prototype.$parseLine$ = function $$X$parserSTL$$$$$parseLine$$($p$$2$$, $n$$7$$, $line$$1_x$$61$$) {
  var $line$$1_x$$61$$ = $line$$1_x$$61$$.replace(/^\s+|\s+$/g, ""), $lineFields_z$$5$$ = $line$$1_x$$61$$.split(" ");
  if("vertex" == $lineFields_z$$5$$[0]) {
    var $line$$1_x$$61$$ = parseFloat($lineFields_z$$5$$[1]), $y$$35$$ = parseFloat($lineFields_z$$5$$[2]), $lineFields_z$$5$$ = parseFloat($lineFields_z$$5$$[3]);
    $p$$2$$.add($line$$1_x$$61$$, $y$$35$$, $lineFields_z$$5$$)
  }else {
    "facet" == $lineFields_z$$5$$[0] && ($line$$1_x$$61$$ = parseFloat($lineFields_z$$5$$[2]), $y$$35$$ = parseFloat($lineFields_z$$5$$[3]), $lineFields_z$$5$$ = parseFloat($lineFields_z$$5$$[4]), $n$$7$$.add($line$$1_x$$61$$, $y$$35$$, $lineFields_z$$5$$), $n$$7$$.add($line$$1_x$$61$$, $y$$35$$, $lineFields_z$$5$$), $n$$7$$.add($line$$1_x$$61$$, $y$$35$$, $lineFields_z$$5$$))
  }
};
$goog$exportSymbol$$("X.parserSTL", $X$parserSTL$$);
$goog$exportSymbol$$("X.parserSTL.prototype.parse", $X$parserSTL$$.prototype.parse);
$goog$exportSymbol$$("X.parserSTL.prototype.parseLine", $X$parserSTL$$.prototype.$parseLine$);
function $csgVector$$($ix$$, $iy$$, $iz$$) {
  this.$z_$ = this.$y_$ = this.$x_$ = 0;
  3 == arguments.length ? (this.$x_$ = Number($ix$$), this.$y_$ = Number($iy$$), this.$z_$ = Number($iz$$)) : "x" in $ix$$ && "y" in $ix$$ && "z" in $ix$$ ? (this.$x_$ = Number($ix$$.x()), this.$y_$ = Number($ix$$.y()), this.$z_$ = Number($ix$$.$z$())) : (this.$x_$ = Number($ix$$[0]), window.console.log("x: " + this.$x_$), this.$y_$ = Number($ix$$[1]), this.$z_$ = Number($ix$$[2]))
}
$csgVector$$.prototype = {$clone$:function $$csgVector$$$$$clone$$() {
  return new $csgVector$$(this.$x_$, this.$y_$, this.$z_$)
}, $negated$:function $$csgVector$$$$$negated$$() {
  return new $csgVector$$(-this.$x_$, -this.$y_$, -this.$z_$)
}, $plus$:function $$csgVector$$$$$plus$$($a$$25$$) {
  return new $csgVector$$(this.$x_$ + $a$$25$$.x(), this.$y_$ + $a$$25$$.y(), this.$z_$ + $a$$25$$.$z$())
}, $minus$:function $$csgVector$$$$$minus$$($a$$26$$) {
  return new $csgVector$$(this.$x_$ - $a$$26$$.x(), this.$y_$ - $a$$26$$.y(), this.$z_$ - $a$$26$$.$z$())
}, $times$:function $$csgVector$$$$$times$$($a$$27$$) {
  return new $csgVector$$(this.$x_$ * $a$$27$$, this.$y_$ * $a$$27$$, this.$z_$ * $a$$27$$)
}, $dividedBy$:function $$csgVector$$$$$dividedBy$$($a$$28$$) {
  return new $csgVector$$(this.$x_$ / $a$$28$$, this.$y_$ / $a$$28$$, this.$z_$ / $a$$28$$)
}, $dot$:function $$csgVector$$$$$dot$$($a$$29$$) {
  return this.$x_$ * $a$$29$$.x() + this.$y_$ * $a$$29$$.y() + this.$z_$ * $a$$29$$.$z$()
}, $lerp$:function $$csgVector$$$$$lerp$$($a$$30$$, $t$$) {
  return this.$plus$($a$$30$$.$minus$(this).$times$($t$$))
}, length:function $$csgVector$$$$length$() {
  return Math.sqrt(this.$dot$(this))
}, $unit$:function $$csgVector$$$$$unit$$() {
  return this.$dividedBy$(this.length())
}, $cross$:function $$csgVector$$$$$cross$$($a$$31$$) {
  return new $csgVector$$(this.$y_$ * $a$$31$$.$z$() - this.$z_$ * $a$$31$$.y(), this.$z_$ * $a$$31$$.x() - this.$x_$ * $a$$31$$.$z$(), this.$x_$ * $a$$31$$.y() - this.$y_$ * $a$$31$$.x())
}, x:$JSCompiler_get$$("$x_$"), y:$JSCompiler_get$$("$y_$"), $z$:$JSCompiler_get$$("$z_$")};
$goog$exportSymbol$$("csgVector", $csgVector$$);
$goog$exportSymbol$$("csgVector.prototype.clone", $csgVector$$.prototype.$clone$);
$goog$exportSymbol$$("csgVector.prototype.plus", $csgVector$$.prototype.$plus$);
$goog$exportSymbol$$("csgVector.prototype.minus", $csgVector$$.prototype.$minus$);
$goog$exportSymbol$$("csgVector.prototype.dividedBy", $csgVector$$.prototype.$dividedBy$);
$goog$exportSymbol$$("csgVector.prototype.times", $csgVector$$.prototype.$times$);
$goog$exportSymbol$$("csgVector.prototype.dot", $csgVector$$.prototype.$dot$);
$goog$exportSymbol$$("csgVector.prototype.lerp", $csgVector$$.prototype.$lerp$);
$goog$exportSymbol$$("csgVector.prototype.length", $csgVector$$.prototype.length);
$goog$exportSymbol$$("csgVector.prototype.unit", $csgVector$$.prototype.$unit$);
$goog$exportSymbol$$("csgVector.prototype.cross", $csgVector$$.prototype.$cross$);
$goog$exportSymbol$$("csgVector.prototype.negated", $csgVector$$.prototype.$negated$);
$goog$exportSymbol$$("csgVector.prototype.x", $csgVector$$.prototype.x);
$goog$exportSymbol$$("csgVector.prototype.y", $csgVector$$.prototype.y);
$goog$exportSymbol$$("csgVector.prototype.z", $csgVector$$.prototype.$z$);
function $goog$json$Serializer$$() {
  this.$replacer_$ = $JSCompiler_alias_VOID$$
}
function $JSCompiler_StaticMethods_serialize_$$($JSCompiler_StaticMethods_serialize_$self$$, $object$$11$$, $sb$$8$$) {
  switch(typeof $object$$11$$) {
    case "string":
      $JSCompiler_StaticMethods_serializeString_$$($object$$11$$, $sb$$8$$);
      break;
    case "number":
      $sb$$8$$.push(isFinite($object$$11$$) && !isNaN($object$$11$$) ? $object$$11$$ : "null");
      break;
    case "boolean":
      $sb$$8$$.push($object$$11$$);
      break;
    case "undefined":
      $sb$$8$$.push("null");
      break;
    case "object":
      if($object$$11$$ == $JSCompiler_alias_NULL$$) {
        $sb$$8$$.push("null");
        break
      }
      if($goog$isArray$$($object$$11$$)) {
        var $l$$inline_149_sep$$inline_157$$ = $object$$11$$.length;
        $sb$$8$$.push("[");
        for(var $sep$$inline_150_value$$inline_152_value$$inline_159$$ = "", $i$$inline_151_key$$inline_158$$ = 0;$i$$inline_151_key$$inline_158$$ < $l$$inline_149_sep$$inline_157$$;$i$$inline_151_key$$inline_158$$++) {
          $sb$$8$$.push($sep$$inline_150_value$$inline_152_value$$inline_159$$), $sep$$inline_150_value$$inline_152_value$$inline_159$$ = $object$$11$$[$i$$inline_151_key$$inline_158$$], $JSCompiler_StaticMethods_serialize_$$($JSCompiler_StaticMethods_serialize_$self$$, $JSCompiler_StaticMethods_serialize_$self$$.$replacer_$ ? $JSCompiler_StaticMethods_serialize_$self$$.$replacer_$.call($object$$11$$, "" + $i$$inline_151_key$$inline_158$$, $sep$$inline_150_value$$inline_152_value$$inline_159$$) : 
          $sep$$inline_150_value$$inline_152_value$$inline_159$$, $sb$$8$$), $sep$$inline_150_value$$inline_152_value$$inline_159$$ = ","
        }
        $sb$$8$$.push("]");
        break
      }
      $sb$$8$$.push("{");
      $l$$inline_149_sep$$inline_157$$ = "";
      for($i$$inline_151_key$$inline_158$$ in $object$$11$$) {
        Object.prototype.hasOwnProperty.call($object$$11$$, $i$$inline_151_key$$inline_158$$) && ($sep$$inline_150_value$$inline_152_value$$inline_159$$ = $object$$11$$[$i$$inline_151_key$$inline_158$$], "function" != typeof $sep$$inline_150_value$$inline_152_value$$inline_159$$ && ($sb$$8$$.push($l$$inline_149_sep$$inline_157$$), $JSCompiler_StaticMethods_serializeString_$$($i$$inline_151_key$$inline_158$$, $sb$$8$$), $sb$$8$$.push(":"), $JSCompiler_StaticMethods_serialize_$$($JSCompiler_StaticMethods_serialize_$self$$, 
        $JSCompiler_StaticMethods_serialize_$self$$.$replacer_$ ? $JSCompiler_StaticMethods_serialize_$self$$.$replacer_$.call($object$$11$$, $i$$inline_151_key$$inline_158$$, $sep$$inline_150_value$$inline_152_value$$inline_159$$) : $sep$$inline_150_value$$inline_152_value$$inline_159$$, $sb$$8$$), $l$$inline_149_sep$$inline_157$$ = ","))
      }
      $sb$$8$$.push("}");
      break;
    case "function":
      break;
    default:
      $JSCompiler_alias_THROW$$(Error("Unknown type: " + typeof $object$$11$$))
  }
}
var $goog$json$Serializer$charToJsonCharCache_$$ = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\u000b":"\\u000b"}, $goog$json$Serializer$charsToReplace_$$ = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function $JSCompiler_StaticMethods_serializeString_$$($s$$19$$, $sb$$9$$) {
  $sb$$9$$.push('"', $s$$19$$.replace($goog$json$Serializer$charsToReplace_$$, function($c$$3$$) {
    if($c$$3$$ in $goog$json$Serializer$charToJsonCharCache_$$) {
      return $goog$json$Serializer$charToJsonCharCache_$$[$c$$3$$]
    }
    var $cc$$2$$ = $c$$3$$.charCodeAt(0), $rv$$16$$ = "\\u";
    16 > $cc$$2$$ ? $rv$$16$$ += "000" : 256 > $cc$$2$$ ? $rv$$16$$ += "00" : 4096 > $cc$$2$$ && ($rv$$16$$ += "0");
    return $goog$json$Serializer$charToJsonCharCache_$$[$c$$3$$] = $rv$$16$$ + $cc$$2$$.toString(16)
  }), '"')
}
;function $X$indexer$$() {
  $X$base$$.call(this);
  this.$_className$ = "indexer";
  this.$_unique$ = [];
  this.$_indices$ = [];
  this.$_map$ = {}
}
$goog$inherits$$($X$indexer$$, $X$base$$);
$X$indexer$$.prototype.add = function $$X$indexer$$$$add$($object$$12$$) {
  $goog$isDefAndNotNull$$($object$$12$$) || $JSCompiler_alias_THROW$$(new $X$exception$$("Invalid object."));
  var $key$$62_sb$$inline_409$$;
  $key$$62_sb$$inline_409$$ = [];
  $JSCompiler_StaticMethods_serialize_$$(new $goog$json$Serializer$$, $object$$12$$, $key$$62_sb$$inline_409$$);
  $key$$62_sb$$inline_409$$ = $key$$62_sb$$inline_409$$.join("");
  if(!($key$$62_sb$$inline_409$$ in this.$_map$)) {
    this.$_map$[$key$$62_sb$$inline_409$$] = this.$_unique$.length, this.$_unique$.push($object$$12$$)
  }
  return this.$_map$[$key$$62_sb$$inline_409$$]
};
$X$indexer$$.prototype.unique = $JSCompiler_get$$("$_unique$");
$goog$exportSymbol$$("X.indexer", $X$indexer$$);
$goog$exportSymbol$$("X.indexer.prototype.add", $X$indexer$$.prototype.add);
$goog$exportSymbol$$("X.indexer.prototype.unique", $X$indexer$$.prototype.unique);
function $csgVertex$$($pos$$, $normal$$) {
  this.$pos_$ = new $csgVector$$($pos$$);
  this.$normal_$ = new $csgVector$$($normal$$)
}
$csgVertex$$.prototype = {$clone$:function $$csgVertex$$$$$clone$$() {
  return new $csgVertex$$(this.$pos_$.$clone$(), this.$normal_$.$clone$())
}, $flip$:function $$csgVertex$$$$$flip$$() {
  this.$normal_$ = this.$normal_$.$negated$()
}, $interpolate$:function $$csgVertex$$$$$interpolate$$($other$$4$$, $t$$1$$) {
  return new $csgVertex$$(this.$pos_$.$lerp$($other$$4$$.$pos_$, $t$$1$$), this.$normal_$.$lerp$($other$$4$$.$normal_$, $t$$1$$))
}, $pos$:$JSCompiler_get$$("$pos_$"), $normal$:$JSCompiler_get$$("$normal_$")};
$goog$exportSymbol$$("csgVertex", $csgVertex$$);
$goog$exportSymbol$$("csgVertex.prototype.clone", $csgVertex$$.prototype.$clone$);
$goog$exportSymbol$$("csgVertex.prototype.flip", $csgVertex$$.prototype.$flip$);
$goog$exportSymbol$$("csgVertex.prototype.interpolate", $csgVertex$$.prototype.$interpolate$);
$goog$exportSymbol$$("csgVertex.prototype.pos", $csgVertex$$.prototype.$pos$);
$goog$exportSymbol$$("csgVertex.prototype.normal", $csgVertex$$.prototype.$normal$);
function $csgPlane$$($normal$$1$$, $w$$4$$) {
  this.$normal_$ = $normal$$1$$;
  this.$w$ = $w$$4$$
}
$csgPlane$$.prototype = {$clone$:function $$csgPlane$$$$$clone$$() {
  return new $csgPlane$$(this.$normal_$.$clone$(), this.$w$)
}, $flip$:function $$csgPlane$$$$$flip$$() {
  this.$normal_$ = this.$normal_$.$negated$();
  this.$w$ = -this.$w$
}, $splitPolygon$:function $$csgPlane$$$$$splitPolygon$$($polygon$$, $coplanarFront_polygonType$$, $coplanarBack_types$$, $front$$, $back$$) {
  for(var $coplanarFront_polygonType$$ = 0, $coplanarBack_types$$ = [], $i$$101$$ = 0;$i$$101$$ < $polygon$$.$vertices$.length;$i$$101$$++) {
    var $t$$2_type$$75$$ = this.$normal_$.$dot$($polygon$$.$vertices$[$i$$101$$].$pos$) - this.$w$, $t$$2_type$$75$$ = -1.0E-5 > $t$$2_type$$75$$ ? 2 : 1.0E-5 < $t$$2_type$$75$$ ? 1 : 0, $coplanarFront_polygonType$$ = $coplanarFront_polygonType$$ | $t$$2_type$$75$$;
    $coplanarBack_types$$.push($t$$2_type$$75$$)
  }
  switch($coplanarFront_polygonType$$) {
    case 0:
      window.console.log("COPLANAR");
      break;
    case 1:
      $front$$.push($polygon$$);
      break;
    case 2:
      $back$$.push($polygon$$);
      break;
    case 3:
      window.console.log("SPANNING")
  }
}};
function $csgPolygon$$($vertices$$, $shared$$) {
  this.$vertices_$ = $vertices$$;
  this.$shared_$ = $shared$$;
  var $a$$inline_162$$ = $vertices$$[0].$pos_$, $c$$inline_164_n$$inline_165$$ = $vertices$$[2].$pos_$, $c$$inline_164_n$$inline_165$$ = $vertices$$[1].$pos_$.$minus$($a$$inline_162$$).$cross$($c$$inline_164_n$$inline_165$$.$minus$($a$$inline_162$$)).$unit$();
  this.$plane_$ = new $csgPlane$$($c$$inline_164_n$$inline_165$$, $c$$inline_164_n$$inline_165$$.$dot$($a$$inline_162$$))
}
$csgPolygon$$.prototype = {$clone$:function $$csgPolygon$$$$$clone$$() {
  var $vertices$$1$$ = this.$vertices_$.map(function($v$$2$$) {
    return $v$$2$$.$clone$()
  });
  return new $csgPolygon$$($vertices$$1$$, this.$shared_$)
}, $flip$:function $$csgPolygon$$$$$flip$$() {
  this.$vertices_$.reverse().map(function($v$$3$$) {
    $v$$3$$.$flip$()
  });
  this.$plane_$.$flip$()
}, $vertices$:$JSCompiler_get$$("$vertices_$"), $shared$:$JSCompiler_get$$("$shared_$")};
$goog$exportSymbol$$("csgPolygon", $csgPolygon$$);
$goog$exportSymbol$$("csgPolygon.prototype.clone", $csgPolygon$$.prototype.$clone$);
$goog$exportSymbol$$("csgPolygon.prototype.flip", $csgPolygon$$.prototype.$flip$);
$goog$exportSymbol$$("csgPolygon.prototype.vertices", $csgPolygon$$.prototype.$vertices$);
$goog$exportSymbol$$("csgPolygon.prototype.shared", $csgPolygon$$.prototype.$shared$);
function $csgNode$$($polygons$$) {
  this.$back_$ = this.$front_$ = this.$plane_$ = $JSCompiler_alias_NULL$$;
  this.$polygons_$ = [];
  $polygons$$ && this.$build$($polygons$$)
}
$csgNode$$.prototype = {$clone$:function $$csgNode$$$$$clone$$() {
  var $node$$2$$ = new $csgNode$$;
  $node$$2$$.$setPlane$(this.$plane_$ && this.$plane_$.$clone$());
  $node$$2$$.$setFront$(this.$front_$ && this.$front_$.$clone$());
  $node$$2$$.$setBack$(this.$back_$ && this.$back_$.$clone$());
  $node$$2$$.$setPolygons$(this.$polygons_$.map(function($p$$3$$) {
    return $p$$3$$.$clone$()
  }));
  return $node$$2$$
}, $invert$:function $$csgNode$$$$$invert$$() {
  for(var $i$$102_temp$$ = 0;$i$$102_temp$$ < this.$polygons_$.length;$i$$102_temp$$++) {
    this.$polygons_$[$i$$102_temp$$].$flip$()
  }
  this.$plane_$.$flip$();
  this.$front_$ && this.$front_$.$invert$();
  this.$back_$ && this.$back_$.$invert$();
  $i$$102_temp$$ = this.$front_$;
  this.$front_$ = this.$back_$;
  this.$back_$ = $i$$102_temp$$
}, $clipPolygons$:function $$csgNode$$$$$clipPolygons$$($polygons$$1$$) {
  if(!this.$plane_$) {
    return $polygons$$1$$.slice()
  }
  for(var $front$$1$$ = [], $back$$1$$ = [], $i$$103$$ = 0;$i$$103$$ < $polygons$$1$$.length;$i$$103$$++) {
    this.$plane_$.$splitPolygon$($polygons$$1$$[$i$$103$$], $front$$1$$, $back$$1$$, $front$$1$$, $back$$1$$)
  }
  this.$front_$ && ($front$$1$$ = this.$front_$.$clipPolygons$($front$$1$$));
  $back$$1$$ = this.$back_$ ? this.$back_$.$clipPolygons$($back$$1$$) : [];
  return $front$$1$$.concat($back$$1$$)
}, $clipTo$:function $$csgNode$$$$$clipTo$$($bsp$$) {
  this.$polygons_$ = $bsp$$.$clipPolygons$(this.$polygons_$);
  this.$front_$ && this.$front_$.$clipTo$($bsp$$);
  this.$back_$ && this.$back_$.$clipTo$($bsp$$)
}, $allPolygons$:function $$csgNode$$$$$allPolygons$$() {
  var $polygons$$2$$ = this.$polygons_$.slice();
  this.$front_$ && ($polygons$$2$$ = $polygons$$2$$.concat(this.$front_$.$allPolygons$()));
  this.$back_$ && ($polygons$$2$$ = $polygons$$2$$.concat(this.$back_$.$allPolygons$()));
  return $polygons$$2$$
}, $build$:function $$csgNode$$$$$build$$($polygons$$3$$) {
  if($polygons$$3$$.length) {
    if(!this.$plane_$) {
      this.$plane_$ = $polygons$$3$$[0].$plane_$.$clone$()
    }
    for(var $front$$2$$ = [], $back$$2$$ = [], $i$$104$$ = 0;$i$$104$$ < $polygons$$3$$.length;$i$$104$$++) {
      this.$plane_$.$splitPolygon$($polygons$$3$$[$i$$104$$], this.$polygons_$, this.$polygons_$, $front$$2$$, $back$$2$$)
    }
    if($front$$2$$.length) {
      if(!this.$front_$) {
        this.$front_$ = new $csgNode$$
      }
      this.$front_$.$build$($front$$2$$)
    }
    if($back$$2$$.length) {
      if(!this.$back_$) {
        this.$back_$ = new $csgNode$$
      }
      this.$back_$.$build$($back$$2$$)
    }
  }
}, $setPlane$:$JSCompiler_set$$("$plane_$"), $setFront$:$JSCompiler_set$$("$front_$"), $setBack$:$JSCompiler_set$$("$back_$"), $polygons$:$JSCompiler_get$$("$polygons_$"), $setPolygons$:$JSCompiler_set$$("$polygons_$")};
function $CSG$$() {
  this.$polygons_$ = []
}
function $CSG$fromPolygons$$($polygons$$4$$) {
  var $csg$$ = new $CSG$$;
  $csg$$.$setPolygons$($polygons$$4$$);
  return $csg$$
}
$CSG$$.prototype = {$clone$:function $$CSG$$$$$clone$$() {
  var $csg$$1$$ = new $CSG$$;
  $csg$$1$$.$setPolygons$(this.$polygons_$.map(function($p$$4$$) {
    return $p$$4$$.$clone$()
  }));
  return $csg$$1$$
}, $toPolygons$:$JSCompiler_get$$("$polygons_$"), $union$:function $$CSG$$$$$union$$($b$$25_csg$$2$$) {
  var $a$$33$$ = new $csgNode$$(this.$clone$().$polygons_$), $b$$25_csg$$2$$ = new $csgNode$$($b$$25_csg$$2$$.$clone$().$polygons_$);
  $a$$33$$.$clipTo$($b$$25_csg$$2$$);
  $b$$25_csg$$2$$.$clipTo$($a$$33$$);
  $b$$25_csg$$2$$.$invert$();
  $b$$25_csg$$2$$.$clipTo$($a$$33$$);
  $b$$25_csg$$2$$.$invert$();
  $a$$33$$.$build$($b$$25_csg$$2$$.$allPolygons$());
  return $CSG$fromPolygons$$($a$$33$$.$allPolygons$())
}, $subtract$:function $$CSG$$$$$subtract$$($b$$26_csg$$3$$) {
  var $a$$34$$ = new $csgNode$$(this.$clone$().$polygons_$), $b$$26_csg$$3$$ = new $csgNode$$($b$$26_csg$$3$$.$clone$().$polygons_$);
  $a$$34$$.$invert$();
  $a$$34$$.$clipTo$($b$$26_csg$$3$$);
  $b$$26_csg$$3$$.$clipTo$($a$$34$$);
  $b$$26_csg$$3$$.$invert$();
  $b$$26_csg$$3$$.$clipTo$($a$$34$$);
  $b$$26_csg$$3$$.$invert$();
  $a$$34$$.$build$($b$$26_csg$$3$$.$allPolygons$());
  $a$$34$$.$invert$();
  return $CSG$fromPolygons$$($a$$34$$.$allPolygons$())
}, $intersect$:function $$CSG$$$$$intersect$$($b$$27_csg$$4$$) {
  window.console.log("first clone");
  var $a$$35$$ = new $csgNode$$(this.$clone$().$polygons_$);
  window.console.log("second clone");
  $b$$27_csg$$4$$ = new $csgNode$$($b$$27_csg$$4$$.$clone$().$polygons_$);
  $a$$35$$.$invert$();
  $b$$27_csg$$4$$.$clipTo$($a$$35$$);
  $b$$27_csg$$4$$.$invert$();
  $a$$35$$.$clipTo$($b$$27_csg$$4$$);
  $b$$27_csg$$4$$.$clipTo$($a$$35$$);
  $a$$35$$.$build$($b$$27_csg$$4$$.$allPolygons$());
  $a$$35$$.$invert$();
  window.console.log("return");
  return $CSG$fromPolygons$$($a$$35$$.$allPolygons$())
}, inverse:function $$CSG$$$$inverse$() {
  var $csg$$5$$ = this.$clone$();
  $csg$$5$$.$polygons_$.map(function($p$$5$$) {
    $p$$5$$.$flip$()
  });
  return $csg$$5$$
}, $polygons$:$JSCompiler_get$$("$polygons_$"), $setPolygons$:$JSCompiler_set$$("$polygons_$")};
$goog$exportSymbol$$("CSG", $CSG$$);
$goog$exportSymbol$$("CSG.fromPolygons", $CSG$fromPolygons$$);
$goog$exportSymbol$$("CSG.prototype.toPolygons", $CSG$$.prototype.$toPolygons$);
$goog$exportSymbol$$("CSG.prototype.union", $CSG$$.prototype.$union$);
$goog$exportSymbol$$("CSG.prototype.subtract", $CSG$$.prototype.$subtract$);
$goog$exportSymbol$$("CSG.prototype.intersect", $CSG$$.prototype.$intersect$);
$goog$exportSymbol$$("CSG.prototype.inverse", $CSG$$.prototype.inverse);
$goog$exportSymbol$$("CSG.prototype.polygons", $CSG$$.prototype.$polygons$);
$goog$exportSymbol$$("CSG.prototype.setPolygons", $CSG$$.prototype.$setPolygons$);
function $goog$math$Coordinate$$($opt_x$$1$$, $opt_y$$1$$) {
  this.x = $goog$isDef$$($opt_x$$1$$) ? $opt_x$$1$$ : 0;
  this.y = $goog$isDef$$($opt_y$$1$$) ? $opt_y$$1$$ : 0
}
$goog$math$Coordinate$$.prototype.$clone$ = function $$goog$math$Coordinate$$$$$clone$$() {
  return new $goog$math$Coordinate$$(this.x, this.y)
};
$goog$math$Coordinate$$.prototype.toString = function $$goog$math$Coordinate$$$$toString$() {
  return"(" + this.x + ", " + this.y + ")"
};
function $goog$math$Coordinate$difference$$($a$$39$$, $b$$31$$) {
  return new $goog$math$Coordinate$$($a$$39$$.x - $b$$31$$.x, $a$$39$$.y - $b$$31$$.y)
}
;function $goog$math$Vec2$$($x$$62$$, $y$$36$$) {
  this.x = $x$$62$$;
  this.y = $y$$36$$
}
$goog$inherits$$($goog$math$Vec2$$, $goog$math$Coordinate$$);
$JSCompiler_prototypeAlias$$ = $goog$math$Vec2$$.prototype;
$JSCompiler_prototypeAlias$$.$clone$ = function $$JSCompiler_prototypeAlias$$$$clone$$() {
  return new $goog$math$Vec2$$(this.x, this.y)
};
$JSCompiler_prototypeAlias$$.$magnitude$ = function $$JSCompiler_prototypeAlias$$$$magnitude$$() {
  return Math.sqrt(this.x * this.x + this.y * this.y)
};
$JSCompiler_prototypeAlias$$.scale = function $$JSCompiler_prototypeAlias$$$scale$($s$$20$$) {
  this.x *= $s$$20$$;
  this.y *= $s$$20$$;
  return this
};
$JSCompiler_prototypeAlias$$.$invert$ = function $$JSCompiler_prototypeAlias$$$$invert$$() {
  this.x = -this.x;
  this.y = -this.y;
  return this
};
$JSCompiler_prototypeAlias$$.normalize = function $$JSCompiler_prototypeAlias$$$normalize$() {
  return this.scale(1 / this.$magnitude$())
};
$JSCompiler_prototypeAlias$$.add = function $$JSCompiler_prototypeAlias$$$add$($b$$33$$) {
  this.x += $b$$33$$.x;
  this.y += $b$$33$$.y;
  return this
};
$JSCompiler_prototypeAlias$$.$subtract$ = function $$JSCompiler_prototypeAlias$$$$subtract$$($b$$34$$) {
  this.x -= $b$$34$$.x;
  this.y -= $b$$34$$.y;
  return this
};
$JSCompiler_prototypeAlias$$.rotate = function $$JSCompiler_prototypeAlias$$$rotate$($angle$$5_sin$$) {
  var $cos$$ = Math.cos($angle$$5_sin$$), $angle$$5_sin$$ = Math.sin($angle$$5_sin$$), $newY$$ = this.y * $cos$$ + this.x * $angle$$5_sin$$;
  this.x = this.x * $cos$$ - this.y * $angle$$5_sin$$;
  this.y = $newY$$;
  return this
};
$JSCompiler_prototypeAlias$$.$equals$ = function $$JSCompiler_prototypeAlias$$$$equals$$($b$$35$$) {
  return this == $b$$35$$ || !!$b$$35$$ && this.x == $b$$35$$.x && this.y == $b$$35$$.y
};
function $goog$math$Size$$($width$$10$$, $height$$9$$) {
  this.width = $width$$10$$;
  this.height = $height$$9$$
}
function $goog$math$Size$equals$$($a$$46$$, $b$$40$$) {
  return $a$$46$$ == $b$$40$$ ? $JSCompiler_alias_TRUE$$ : !$a$$46$$ || !$b$$40$$ ? $JSCompiler_alias_FALSE$$ : $a$$46$$.width == $b$$40$$.width && $a$$46$$.height == $b$$40$$.height
}
$JSCompiler_prototypeAlias$$ = $goog$math$Size$$.prototype;
$JSCompiler_prototypeAlias$$.$clone$ = function $$JSCompiler_prototypeAlias$$$$clone$$() {
  return new $goog$math$Size$$(this.width, this.height)
};
$JSCompiler_prototypeAlias$$.toString = function $$JSCompiler_prototypeAlias$$$toString$() {
  return"(" + this.width + " x " + this.height + ")"
};
$JSCompiler_prototypeAlias$$.floor = function $$JSCompiler_prototypeAlias$$$floor$() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
$JSCompiler_prototypeAlias$$.round = function $$JSCompiler_prototypeAlias$$$round$() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
$JSCompiler_prototypeAlias$$.scale = function $$JSCompiler_prototypeAlias$$$scale$($s$$21$$) {
  this.width *= $s$$21$$;
  this.height *= $s$$21$$;
  return this
};
function $goog$math$Matrix$$($m$$, $opt_n$$) {
  if($m$$ instanceof $goog$math$Matrix$$) {
    this.$array_$ = $m$$.$toArray$()
  }else {
    var $JSCompiler_temp$$32_len$$inline_168$$;
    if($JSCompiler_temp$$32_len$$inline_168$$ = $goog$isArrayLike$$($m$$)) {
      a: {
        for(var $i$$inline_169$$ = $JSCompiler_temp$$32_len$$inline_168$$ = 0;$i$$inline_169$$ < $m$$.length;$i$$inline_169$$++) {
          if(!$goog$isArrayLike$$($m$$[$i$$inline_169$$]) || 0 < $JSCompiler_temp$$32_len$$inline_168$$ && $m$$[$i$$inline_169$$].length != $JSCompiler_temp$$32_len$$inline_168$$) {
            $JSCompiler_temp$$32_len$$inline_168$$ = $JSCompiler_alias_FALSE$$;
            break a
          }
          for(var $j$$inline_170$$ = 0;$j$$inline_170$$ < $m$$[$i$$inline_169$$].length;$j$$inline_170$$++) {
            if(!$goog$isNumber$$($m$$[$i$$inline_169$$][$j$$inline_170$$])) {
              $JSCompiler_temp$$32_len$$inline_168$$ = $JSCompiler_alias_FALSE$$;
              break a
            }
          }
          if(0 == $JSCompiler_temp$$32_len$$inline_168$$) {
            $JSCompiler_temp$$32_len$$inline_168$$ = $m$$[$i$$inline_169$$].length
          }
        }
        $JSCompiler_temp$$32_len$$inline_168$$ = 0 != $JSCompiler_temp$$32_len$$inline_168$$
      }
    }
    $JSCompiler_temp$$32_len$$inline_168$$ ? this.$array_$ = $goog$array$clone$$($m$$) : $m$$ instanceof $goog$math$Size$$ ? this.$array_$ = $goog$math$Matrix$createZeroPaddedArray_$$($m$$.height, $m$$.width) : $goog$isNumber$$($m$$) && $goog$isNumber$$($opt_n$$) && 0 < $m$$ && 0 < $opt_n$$ ? this.$array_$ = $goog$math$Matrix$createZeroPaddedArray_$$($m$$, $opt_n$$) : $JSCompiler_alias_THROW$$(Error("Invalid argument(s) for Matrix contructor"))
  }
  this.$size_$ = new $goog$math$Size$$(this.$array_$[0].length, this.$array_$.length)
}
function $goog$math$Matrix$createIdentityMatrix$$($n$$10$$) {
  for(var $rv$$17$$ = [], $i$$105$$ = 0;$i$$105$$ < $n$$10$$;$i$$105$$++) {
    $rv$$17$$[$i$$105$$] = [];
    for(var $j$$7$$ = 0;$j$$7$$ < $n$$10$$;$j$$7$$++) {
      $rv$$17$$[$i$$105$$][$j$$7$$] = $i$$105$$ == $j$$7$$ ? 1 : 0
    }
  }
  return new $goog$math$Matrix$$($rv$$17$$)
}
function $goog$math$Matrix$forEach$$($matrix$$2$$, $fn$$14$$, $opt_obj$$39$$) {
  for(var $i$$106$$ = 0;$i$$106$$ < $matrix$$2$$.$getSize$().height;$i$$106$$++) {
    for(var $j$$8$$ = 0;$j$$8$$ < $matrix$$2$$.$getSize$().width;$j$$8$$++) {
      $fn$$14$$.call($opt_obj$$39$$, $matrix$$2$$.$array_$[$i$$106$$][$j$$8$$], $i$$106$$, $j$$8$$, $matrix$$2$$)
    }
  }
}
function $goog$math$Matrix$map$$($matrix$$3$$, $fn$$15$$) {
  var $m$$1$$ = new $goog$math$Matrix$$($matrix$$3$$.$getSize$());
  $goog$math$Matrix$forEach$$($matrix$$3$$, function($value$$65$$, $i$$108$$, $j$$10$$) {
    $m$$1$$.$array_$[$i$$108$$][$j$$10$$] = $fn$$15$$.call($JSCompiler_alias_VOID$$, $value$$65$$, $i$$108$$, $j$$10$$, $matrix$$3$$)
  });
  return $m$$1$$
}
function $goog$math$Matrix$createZeroPaddedArray_$$($m$$2$$, $n$$11$$) {
  for(var $rv$$18$$ = [], $i$$109$$ = 0;$i$$109$$ < $m$$2$$;$i$$109$$++) {
    $rv$$18$$[$i$$109$$] = [];
    for(var $j$$11$$ = 0;$j$$11$$ < $n$$11$$;$j$$11$$++) {
      $rv$$18$$[$i$$109$$][$j$$11$$] = 0
    }
  }
  return $rv$$18$$
}
$JSCompiler_prototypeAlias$$ = $goog$math$Matrix$$.prototype;
$JSCompiler_prototypeAlias$$.add = function $$JSCompiler_prototypeAlias$$$add$($m$$3$$) {
  $goog$math$Size$equals$$(this.$size_$, $m$$3$$.$getSize$()) || $JSCompiler_alias_THROW$$(Error("Matrix summation is only supported on arrays of equal size"));
  return $goog$math$Matrix$map$$(this, function($val$$33$$, $i$$110$$, $j$$12$$) {
    return $val$$33$$ + $m$$3$$.$array_$[$i$$110$$][$j$$12$$]
  })
};
$JSCompiler_prototypeAlias$$.$equals$ = function $$JSCompiler_prototypeAlias$$$$equals$$($m$$6$$, $opt_tolerance$$1$$) {
  if(this.$size_$.width != $m$$6$$.$size_$.width || this.$size_$.height != $m$$6$$.$size_$.height) {
    return $JSCompiler_alias_FALSE$$
  }
  for(var $tolerance$$ = $opt_tolerance$$1$$ || 0, $i$$115$$ = 0;$i$$115$$ < this.$size_$.height;$i$$115$$++) {
    for(var $j$$17$$ = 0;$j$$17$$ < this.$size_$.width;$j$$17$$++) {
      if(!(Math.abs(this.$array_$[$i$$115$$][$j$$17$$] - $m$$6$$.$array_$[$i$$115$$][$j$$17$$]) <= ($tolerance$$ || 1.0E-6))) {
        return $JSCompiler_alias_FALSE$$
      }
    }
  }
  return $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.$getSize$ = $JSCompiler_get$$("$size_$");
function $JSCompiler_StaticMethods_getValueAt$$($JSCompiler_StaticMethods_getValueAt$self$$, $i$$119$$, $j$$20$$) {
  return!(0 <= $i$$119$$ && $i$$119$$ < $JSCompiler_StaticMethods_getValueAt$self$$.$size_$.height && 0 <= $j$$20$$ && $j$$20$$ < $JSCompiler_StaticMethods_getValueAt$self$$.$size_$.width) ? $JSCompiler_alias_NULL$$ : $JSCompiler_StaticMethods_getValueAt$self$$.$array_$[$i$$119$$][$j$$20$$]
}
function $JSCompiler_StaticMethods_setValueAt$$($JSCompiler_StaticMethods_setValueAt$self$$, $i$$120$$, $j$$21$$, $value$$71$$) {
  0 <= $i$$120$$ && $i$$120$$ < $JSCompiler_StaticMethods_setValueAt$self$$.$size_$.height && 0 <= $j$$21$$ && $j$$21$$ < $JSCompiler_StaticMethods_setValueAt$self$$.$size_$.width || $JSCompiler_alias_THROW$$(Error("Index out of bounds when setting matrix value, (" + $i$$120$$ + "," + $j$$21$$ + ") in size (" + $JSCompiler_StaticMethods_setValueAt$self$$.$size_$.height + "," + $JSCompiler_StaticMethods_setValueAt$self$$.$size_$.width + ")"));
  $JSCompiler_StaticMethods_setValueAt$self$$.$array_$[$i$$120$$][$j$$21$$] = $value$$71$$
}
$JSCompiler_prototypeAlias$$.multiply = function $$JSCompiler_prototypeAlias$$$multiply$($m$$8$$) {
  if($m$$8$$ instanceof $goog$math$Matrix$$) {
    return this.$size_$.width != $m$$8$$.$getSize$().height && $JSCompiler_alias_THROW$$(Error("Invalid matrices for multiplication. Second matrix should have the same number of rows as the first has columns.")), $JSCompiler_StaticMethods_matrixMultiply_$$(this, $m$$8$$)
  }
  if($goog$isNumber$$($m$$8$$)) {
    return $JSCompiler_StaticMethods_scalarMultiply_$$(this, $m$$8$$)
  }
  $JSCompiler_alias_THROW$$(Error("A matrix can only be multiplied by a number or another matrix."))
};
$JSCompiler_prototypeAlias$$.$subtract$ = function $$JSCompiler_prototypeAlias$$$$subtract$$($m$$9$$) {
  $goog$math$Size$equals$$(this.$size_$, $m$$9$$.$getSize$()) || $JSCompiler_alias_THROW$$(Error("Matrix subtraction is only supported on arrays of equal size."));
  return $goog$math$Matrix$map$$(this, function($val$$34$$, $i$$121$$, $j$$22$$) {
    return $val$$34$$ - $m$$9$$.$array_$[$i$$121$$][$j$$22$$]
  })
};
$JSCompiler_prototypeAlias$$.$toArray$ = $JSCompiler_get$$("$array_$");
$JSCompiler_prototypeAlias$$.toString = function $$JSCompiler_prototypeAlias$$$toString$() {
  var $maxLen$$ = 0;
  $goog$math$Matrix$forEach$$(this, function($len$$3_val$$35$$) {
    $len$$3_val$$35$$ = ("" + $len$$3_val$$35$$).length;
    $len$$3_val$$35$$ > $maxLen$$ && ($maxLen$$ = $len$$3_val$$35$$)
  });
  var $sb$$13$$ = [];
  $goog$array$forEach$$(this.$array_$, function($row$$1$$) {
    $sb$$13$$.push("[ ");
    $goog$array$forEach$$($row$$1$$, function($val$$36$$) {
      $val$$36$$ = "" + $val$$36$$;
      $sb$$13$$.push(Array($maxLen$$ - $val$$36$$.length + 1).join(" ") + $val$$36$$ + " ")
    });
    $sb$$13$$.push("]\n")
  });
  return $sb$$13$$.join("")
};
function $JSCompiler_StaticMethods_matrixMultiply_$$($JSCompiler_StaticMethods_matrixMultiply_$self$$, $m$$11$$) {
  var $resultMatrix$$ = new $goog$math$Matrix$$($JSCompiler_StaticMethods_matrixMultiply_$self$$.$size_$.height, $m$$11$$.$getSize$().width);
  $goog$math$Matrix$forEach$$($resultMatrix$$, function($newVal$$1_val$$37$$, $x$$66$$, $y$$39$$) {
    for(var $i$$127$$ = $newVal$$1_val$$37$$ = 0;$i$$127$$ < this.$size_$.width;$i$$127$$++) {
      $newVal$$1_val$$37$$ += $JSCompiler_StaticMethods_getValueAt$$(this, $x$$66$$, $i$$127$$) * $JSCompiler_StaticMethods_getValueAt$$($m$$11$$, $i$$127$$, $y$$39$$)
    }
    $JSCompiler_StaticMethods_setValueAt$$($resultMatrix$$, $x$$66$$, $y$$39$$, $newVal$$1_val$$37$$)
  }, $JSCompiler_StaticMethods_matrixMultiply_$self$$);
  return $resultMatrix$$
}
function $JSCompiler_StaticMethods_scalarMultiply_$$($JSCompiler_StaticMethods_scalarMultiply_$self$$, $m$$12$$) {
  return $goog$math$Matrix$map$$($JSCompiler_StaticMethods_scalarMultiply_$self$$, function($val$$38$$) {
    return $val$$38$$ * $m$$12$$
  })
}
;function $X$matrix$$($m$$13$$, $opt_n$$1$$) {
  $goog$math$Matrix$$.call(this, $m$$13$$, $opt_n$$1$$);
  this.$_className$ = "matrix"
}
$goog$inherits$$($X$matrix$$, $goog$math$Matrix$$);
function $X$matrix$createIdentityMatrix$$($n$$12$$) {
  for(var $rv$$19$$ = [], $i$$128$$ = 0;$i$$128$$ < $n$$12$$;$i$$128$$++) {
    $rv$$19$$[$i$$128$$] = [];
    for(var $j$$29$$ = 0;$j$$29$$ < $n$$12$$;$j$$29$$++) {
      $rv$$19$$[$i$$128$$][$j$$29$$] = $i$$128$$ == $j$$29$$ ? 1 : 0
    }
  }
  return new $X$matrix$$($rv$$19$$)
}
$X$matrix$$.prototype.$flatten$ = function $$X$matrix$$$$$flatten$$() {
  var $result$$13$$ = [], $dimensions$$ = this.$getSize$();
  if(0 == $dimensions$$.height || 0 == $dimensions$$.width) {
    return[]
  }
  var $i$$129$$, $j$$30$$;
  for($j$$30$$ = 0;$j$$30$$ < $dimensions$$.height;$j$$30$$++) {
    for($i$$129$$ = 0;$i$$129$$ < $dimensions$$.width;$i$$129$$++) {
      $result$$13$$.push($JSCompiler_StaticMethods_getValueAt$$(this, $i$$129$$, $j$$30$$))
    }
  }
  return $result$$13$$
};
$X$matrix$$.prototype.translate = function $$X$matrix$$$$translate$($vector$$) {
  this.$size_$.width != this.$size_$.height && $JSCompiler_alias_THROW$$(new $X$exception$$("Can not translate non-square matrix!"));
  var $dimensions$$1$$ = this.$getSize$(), $transformationMatrix$$ = $goog$math$Matrix$createIdentityMatrix$$($dimensions$$1$$.height);
  $vector$$ instanceof $goog$math$Vec2$$ && 3 == $dimensions$$1$$.height ? ($JSCompiler_StaticMethods_setValueAt$$($transformationMatrix$$, 0, 2, $vector$$.x), $JSCompiler_StaticMethods_setValueAt$$($transformationMatrix$$, 1, 2, $vector$$.y)) : $vector$$ instanceof $goog$math$Vec3$$ && 4 == $dimensions$$1$$.height ? ($JSCompiler_StaticMethods_setValueAt$$($transformationMatrix$$, 0, 3, $vector$$.x), $JSCompiler_StaticMethods_setValueAt$$($transformationMatrix$$, 1, 3, $vector$$.y), $JSCompiler_StaticMethods_setValueAt$$($transformationMatrix$$, 
  2, 3, $vector$$.$z$)) : $JSCompiler_alias_THROW$$(new $X$exception$$("Translation failed!"));
  return new $X$matrix$$(this.multiply($transformationMatrix$$))
};
$X$matrix$$.prototype.rotate = function $$X$matrix$$$$rotate$($angle$$7$$, $iaxis$$) {
  (4 != this.$getSize$().height || this.$size_$.width != this.$size_$.height) && $JSCompiler_alias_THROW$$(new $X$exception$$("Only 4x4 matrices can be rotated!"));
  (!$goog$isDefAndNotNull$$($iaxis$$) || !($iaxis$$ instanceof $goog$math$Vec3$$)) && $JSCompiler_alias_THROW$$(new $X$exception$$("Invalid axis vector!"));
  $goog$isNumber$$($angle$$7$$) || $JSCompiler_alias_THROW$$(new $X$exception$$("Invalid angle!"));
  var $axis$$ = $iaxis$$.normalize(), $cos$$1$$ = Math.cos($angle$$7$$), $sin$$1$$ = Math.sin($angle$$7$$), $rotationMatrix$$ = $goog$math$Matrix$createIdentityMatrix$$(4);
  $JSCompiler_StaticMethods_setValueAt$$($rotationMatrix$$, 0, 0, $cos$$1$$ + $axis$$.x * $axis$$.x * (1 - $cos$$1$$));
  $JSCompiler_StaticMethods_setValueAt$$($rotationMatrix$$, 0, 1, $axis$$.x * $axis$$.y * (1 - $cos$$1$$) - $axis$$.$z$ * $sin$$1$$);
  $JSCompiler_StaticMethods_setValueAt$$($rotationMatrix$$, 0, 2, $axis$$.x * $axis$$.$z$ * (1 - $cos$$1$$) + $axis$$.y * $sin$$1$$);
  $JSCompiler_StaticMethods_setValueAt$$($rotationMatrix$$, 1, 0, $axis$$.y * $axis$$.x * (1 - $cos$$1$$) + $axis$$.$z$ * $sin$$1$$);
  $JSCompiler_StaticMethods_setValueAt$$($rotationMatrix$$, 1, 1, $cos$$1$$ + $axis$$.y * $axis$$.y * (1 - $cos$$1$$));
  $JSCompiler_StaticMethods_setValueAt$$($rotationMatrix$$, 1, 2, $axis$$.y * $axis$$.$z$ * (1 - $cos$$1$$) - $axis$$.x * $sin$$1$$);
  $JSCompiler_StaticMethods_setValueAt$$($rotationMatrix$$, 2, 0, $axis$$.$z$ * $axis$$.x * (1 - $cos$$1$$) - $axis$$.y * $sin$$1$$);
  $JSCompiler_StaticMethods_setValueAt$$($rotationMatrix$$, 2, 1, $axis$$.$z$ * $axis$$.y * (1 - $cos$$1$$) + $axis$$.x * $sin$$1$$);
  $JSCompiler_StaticMethods_setValueAt$$($rotationMatrix$$, 2, 2, $cos$$1$$ + $axis$$.$z$ * $axis$$.$z$ * (1 - $cos$$1$$));
  return new $X$matrix$$(this.multiply($rotationMatrix$$))
};
$X$matrix$$.prototype.$multiplyByVector$ = function $$X$matrix$$$$$multiplyByVector$$($resultMatrix$$1_vector$$1$$) {
  var $dimensions$$3$$ = this.$getSize$(), $vectorAsArray$$ = Array($dimensions$$3$$.width), $i$$130$$;
  for($i$$130$$ = 0;$i$$130$$ < $vectorAsArray$$.length;$i$$130$$++) {
    $vectorAsArray$$[$i$$130$$] = Array(1), $vectorAsArray$$[$i$$130$$][0] = 1
  }
  $resultMatrix$$1_vector$$1$$ instanceof $goog$math$Vec2$$ && 2 <= $dimensions$$3$$.width ? ($vectorAsArray$$[0][0] = $resultMatrix$$1_vector$$1$$.x, $vectorAsArray$$[1][0] = $resultMatrix$$1_vector$$1$$.y) : $resultMatrix$$1_vector$$1$$ instanceof $goog$math$Vec3$$ && 3 <= $dimensions$$3$$.width ? ($vectorAsArray$$[0][0] = $resultMatrix$$1_vector$$1$$.x, $vectorAsArray$$[1][0] = $resultMatrix$$1_vector$$1$$.y, $vectorAsArray$$[2][0] = $resultMatrix$$1_vector$$1$$.$z$) : $JSCompiler_alias_THROW$$(new $X$exception$$("Multiplication by vector failed!"));
  $resultMatrix$$1_vector$$1$$ = this.multiply(new $goog$math$Matrix$$($vectorAsArray$$));
  return 3 <= $resultMatrix$$1_vector$$1$$.$getSize$().height ? new $goog$math$Vec3$$(parseFloat($JSCompiler_StaticMethods_getValueAt$$($resultMatrix$$1_vector$$1$$, 0, 0)), parseFloat($JSCompiler_StaticMethods_getValueAt$$($resultMatrix$$1_vector$$1$$, 1, 0)), parseFloat($JSCompiler_StaticMethods_getValueAt$$($resultMatrix$$1_vector$$1$$, 2, 0))) : new $goog$math$Vec2$$(parseFloat($JSCompiler_StaticMethods_getValueAt$$($resultMatrix$$1_vector$$1$$, 0, 0)), parseFloat($JSCompiler_StaticMethods_getValueAt$$($resultMatrix$$1_vector$$1$$, 
  1, 0)))
};
$goog$exportSymbol$$("X.matrix", $X$matrix$$);
$goog$exportSymbol$$("X.matrix.createIdentityMatrix", $X$matrix$createIdentityMatrix$$);
$goog$exportSymbol$$("X.matrix.prototype.flatten", $X$matrix$$.prototype.$flatten$);
$goog$exportSymbol$$("X.matrix.prototype.translate", $X$matrix$$.prototype.translate);
$goog$exportSymbol$$("X.matrix.prototype.rotate", $X$matrix$$.prototype.rotate);
$goog$exportSymbol$$("X.matrix.prototype.multiplyByVector", $X$matrix$$.prototype.$multiplyByVector$);
function $X$transform$$() {
  $X$base$$.call(this);
  this.$_className$ = "transform";
  this.$_matrix$ = $X$matrix$createIdentityMatrix$$(4);
  this.$_glMatrix$ = new Float32Array(this.$_matrix$.$flatten$())
}
$goog$inherits$$($X$transform$$, $X$base$$);
$JSCompiler_prototypeAlias$$ = $X$transform$$.prototype;
$JSCompiler_prototypeAlias$$.$rotateX$ = function $$JSCompiler_prototypeAlias$$$$rotateX$$($angle$$8$$) {
  (!$goog$isNumber$$($angle$$8$$) || -360 > $angle$$8$$ || 360 < $angle$$8$$) && $JSCompiler_alias_THROW$$(new $X$exception$$("Invalid angle!"));
  this.$_matrix$ = this.$_matrix$.rotate($angle$$8$$ * Math.PI / 180, new $goog$math$Vec3$$(0, 1, 0));
  this.$_glMatrix$ = new Float32Array(this.$_matrix$.$flatten$());
  this.$_dirty$ = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.$rotateY$ = function $$JSCompiler_prototypeAlias$$$$rotateY$$($angle$$9$$) {
  (!$goog$isNumber$$($angle$$9$$) || -360 > $angle$$9$$ || 360 < $angle$$9$$) && $JSCompiler_alias_THROW$$(new $X$exception$$("Invalid angle!"));
  this.$_matrix$ = this.$_matrix$.rotate($angle$$9$$ * Math.PI / 180, new $goog$math$Vec3$$(1, 0, 0));
  this.$_glMatrix$ = new Float32Array(this.$_matrix$.$flatten$());
  this.$_dirty$ = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.$rotateZ$ = function $$JSCompiler_prototypeAlias$$$$rotateZ$$($angle$$10$$) {
  (!$goog$isNumber$$($angle$$10$$) || -360 > $angle$$10$$ || 360 < $angle$$10$$) && $JSCompiler_alias_THROW$$(new $X$exception$$("Invalid angle!"));
  this.$_matrix$ = this.$_matrix$.rotate($angle$$10$$ * Math.PI / 180, new $goog$math$Vec3$$(0, 0, 1));
  this.$_glMatrix$ = new Float32Array(this.$_matrix$.$flatten$());
  this.$_dirty$ = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.$translateX$ = function $$JSCompiler_prototypeAlias$$$$translateX$$($distance$$1$$) {
  $goog$isNumber$$($distance$$1$$) || $JSCompiler_alias_THROW$$(new $X$exception$$("Invalid distance!"));
  this.$_matrix$ = this.$_matrix$.translate(new $goog$math$Vec3$$($distance$$1$$, 0, 0));
  this.$_glMatrix$ = new Float32Array(this.$_matrix$.$flatten$());
  this.$_dirty$ = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.$translateY$ = function $$JSCompiler_prototypeAlias$$$$translateY$$($distance$$2$$) {
  $goog$isNumber$$($distance$$2$$) || $JSCompiler_alias_THROW$$(new $X$exception$$("Invalid distance!"));
  this.$_matrix$ = this.$_matrix$.translate(new $goog$math$Vec3$$(0, $distance$$2$$, 0));
  this.$_glMatrix$ = new Float32Array(this.$_matrix$.$flatten$());
  this.$_dirty$ = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.$translateZ$ = function $$JSCompiler_prototypeAlias$$$$translateZ$$($distance$$3$$) {
  $goog$isNumber$$($distance$$3$$) || $JSCompiler_alias_THROW$$(new $X$exception$$("Invalid distance!"));
  this.$_matrix$ = this.$_matrix$.translate(new $goog$math$Vec3$$(0, 0, $distance$$3$$));
  this.$_glMatrix$ = new Float32Array(this.$_matrix$.$flatten$());
  this.$_dirty$ = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.$matrix$ = $JSCompiler_get$$("$_matrix$");
function $JSCompiler_StaticMethods_glMatrix$$($JSCompiler_StaticMethods_glMatrix$self$$) {
  return $JSCompiler_StaticMethods_glMatrix$self$$.$_glMatrix$
}
$goog$exportSymbol$$("X.transform", $X$transform$$);
$goog$exportSymbol$$("X.transform.prototype.rotateX", $X$transform$$.prototype.$rotateX$);
$goog$exportSymbol$$("X.transform.prototype.rotateY", $X$transform$$.prototype.$rotateY$);
$goog$exportSymbol$$("X.transform.prototype.rotateZ", $X$transform$$.prototype.$rotateZ$);
$goog$exportSymbol$$("X.transform.prototype.translateX", $X$transform$$.prototype.$translateX$);
$goog$exportSymbol$$("X.transform.prototype.translateY", $X$transform$$.prototype.$translateY$);
$goog$exportSymbol$$("X.transform.prototype.translateZ", $X$transform$$.prototype.$translateZ$);
$goog$exportSymbol$$("X.transform.prototype.matrix", $X$transform$$.prototype.$matrix$);
function $X$file$$() {
  $X$base$$.call(this);
  this.$_className$ = "file";
  this.$_path$ = $JSCompiler_alias_NULL$$
}
$goog$inherits$$($X$file$$, $X$base$$);
$X$file$$.prototype.path = $JSCompiler_get$$("$_path$");
$X$file$$.prototype.$setPath$ = function $$X$file$$$$$setPath$$($path$$6$$) {
  this.$_path$ = $path$$6$$;
  this.$_dirty$ = $JSCompiler_alias_TRUE$$
};
$goog$exportSymbol$$("X.file", $X$file$$);
$goog$exportSymbol$$("X.file.prototype.path", $X$file$$.prototype.path);
$goog$exportSymbol$$("X.file.prototype.setPath", $X$file$$.prototype.$setPath$);
function $X$texture$$($file$$) {
  $goog$isDefAndNotNull$$($file$$) || $JSCompiler_alias_THROW$$(new $X$exception$$("Missing image file for the texture."));
  $X$base$$.call(this);
  this.$_className$ = "texture";
  this.$_file$ = $file$$;
  this.$_filter$ = $X$texture$filters$SHARP$$;
  this.$_image$ = $JSCompiler_alias_NULL$$;
  this.$_dirty$ = $JSCompiler_alias_TRUE$$
}
$goog$inherits$$($X$texture$$, $X$base$$);
var $X$texture$filters$SHARP$$ = "SHARP", $X$texture$filters$$ = {$SHARP$:$X$texture$filters$SHARP$$, $SMOOTH$:"SMOOTH"};
$X$texture$$.prototype.file = $JSCompiler_get$$("$_file$");
$X$texture$$.prototype.$image$ = $JSCompiler_get$$("$_image$");
$goog$exportSymbol$$("X.texture", $X$texture$$);
$goog$exportSymbol$$("X.texture.filters", $X$texture$filters$$);
$goog$exportSymbol$$("X.texture.prototype.file", $X$texture$$.prototype.file);
function $X$object$$() {
  $X$base$$.call(this);
  this.$_className$ = "object";
  var $counter$$ = window["X.Counter"];
  $counter$$.$increment$();
  this.$_id$ = $counter$$.value();
  this.$_type$ = $X$object$types$TRIANGLES$$;
  this.$_transform$ = new $X$transform$$;
  this.$_color$ = [1, 1, 1];
  this.$_points$ = new $X$triplets$$;
  this.$_normals$ = new $X$triplets$$;
  this.$_colors$ = new $X$triplets$$;
  this.$_file$ = this.$_textureCoordinateMap$ = this.$_texture$ = $JSCompiler_alias_NULL$$;
  this.$_opacity$ = 1;
  this.$_children$ = $JSCompiler_alias_NULL$$;
  this.$_visible$ = $JSCompiler_alias_TRUE$$;
  this.$_lineWidth$ = 1;
  this.$_caption$ = $JSCompiler_alias_NULL$$;
  this.$_magicMode$ = $JSCompiler_alias_FALSE$$
}
$goog$inherits$$($X$object$$, $X$base$$);
var $X$object$types$TRIANGLES$$ = "TRIANGLES", $X$object$types$LINES$$ = "LINES";
$JSCompiler_prototypeAlias$$ = $X$object$$.prototype;
$JSCompiler_prototypeAlias$$.id = $JSCompiler_get$$("$_id$");
function $JSCompiler_StaticMethods_toCSG$$($JSCompiler_StaticMethods_toCSG$self$$) {
  for(var $numberOfPoints$$1$$ = $JSCompiler_StaticMethods_toCSG$self$$.$_points$.$count$(), $polygons$$6$$ = [], $p$$6$$ = 0, $p$$6$$ = 0;$p$$6$$ < $numberOfPoints$$1$$;$p$$6$$ += 3) {
    var $point1$$ = $JSCompiler_StaticMethods_toCSG$self$$.$_points$.get($p$$6$$), $point2$$ = $JSCompiler_StaticMethods_toCSG$self$$.$_points$.get($p$$6$$ + 1), $point3$$ = $JSCompiler_StaticMethods_toCSG$self$$.$_points$.get($p$$6$$ + 2), $normal1$$ = $JSCompiler_StaticMethods_toCSG$self$$.$_normals$.get($p$$6$$), $normal2$$ = $JSCompiler_StaticMethods_toCSG$self$$.$_normals$.get($p$$6$$ + 1), $normal3$$ = $JSCompiler_StaticMethods_toCSG$self$$.$_normals$.get($p$$6$$ + 2), $color$$2$$ = $JSCompiler_StaticMethods_toCSG$self$$.$_color$;
    0 < $JSCompiler_StaticMethods_toCSG$self$$.$_colors$.length() && ($color$$2$$ = $JSCompiler_StaticMethods_toCSG$self$$.$_colors$.get($p$$6$$));
    var $vertices$$2$$ = [];
    $vertices$$2$$.push(new $csgVertex$$($point1$$, $normal1$$));
    $vertices$$2$$.push(new $csgVertex$$($point2$$, $normal2$$));
    $vertices$$2$$.push(new $csgVertex$$($point3$$, $normal3$$));
    $polygons$$6$$.push(new $csgPolygon$$($vertices$$2$$, $color$$2$$))
  }
  return $CSG$fromPolygons$$($polygons$$6$$)
}
function $JSCompiler_StaticMethods_fromCSG$$($JSCompiler_StaticMethods_fromCSG$self$$, $csg$$6$$) {
  (!$goog$isDefAndNotNull$$($csg$$6$$) || !($csg$$6$$ instanceof $CSG$$)) && $JSCompiler_alias_THROW$$(new $X$exception$$("Invalid CSG object."));
  $JSCompiler_StaticMethods_fromCSG$self$$.$_points$.clear();
  $JSCompiler_StaticMethods_fromCSG$self$$.$_normals$.clear();
  $JSCompiler_StaticMethods_fromCSG$self$$.$_colors$.clear();
  var $indexer$$ = new $X$indexer$$, $triangles$$ = [];
  $goog$array$map$$($csg$$6$$.$polygons_$, function($i$$131_p$$7$$) {
    for(var $indices$$ = [], $shared$$1$$ = $i$$131_p$$7$$.$shared_$, $indices$$ = $goog$array$map$$($i$$131_p$$7$$.$vertices_$, function($vertex$$) {
      $vertex$$.color = $shared$$1$$;
      return $indexer$$.add($vertex$$)
    }), $i$$131_p$$7$$ = $i$$131_p$$7$$ = 2;$i$$131_p$$7$$ < $indices$$.length;$i$$131_p$$7$$++) {
      $triangles$$.push([$indices$$[0], $indices$$[$i$$131_p$$7$$ - 1], $indices$$[$i$$131_p$$7$$]])
    }
  }.bind($JSCompiler_StaticMethods_fromCSG$self$$));
  $JSCompiler_StaticMethods_fromCSG$self$$.$__vertices$ = $goog$array$map$$($indexer$$.unique(), function($v$$5$$) {
    return[$v$$5$$.$pos_$.x(), $v$$5$$.$pos_$.y(), $v$$5$$.$pos_$.$z$()]
  });
  $JSCompiler_StaticMethods_fromCSG$self$$.$__normals$ = $goog$array$map$$($indexer$$.unique(), function($v$$6$$) {
    return[$v$$6$$.$normal_$.x(), $v$$6$$.$normal_$.y(), $v$$6$$.$normal_$.$z$()]
  });
  $JSCompiler_StaticMethods_fromCSG$self$$.$__colors$ = $goog$array$map$$($indexer$$.unique(), function($v$$7$$) {
    return!$v$$7$$.color ? $JSCompiler_alias_NULL$$ : [$v$$7$$.color[0], $v$$7$$.color[1], $v$$7$$.color[2]]
  });
  $goog$array$map$$($triangles$$, function($i$$132_i2$$3$$) {
    var $i0$$ = $i$$132_i2$$3$$[0], $i1$$3$$ = $i$$132_i2$$3$$[1], $i$$132_i2$$3$$ = $i$$132_i2$$3$$[2], $vertices$$3$$ = this.$__vertices$, $normals$$ = this.$__normals$, $colors$$ = this.$__colors$;
    this.$_points$.add($vertices$$3$$[$i0$$][0], $vertices$$3$$[$i0$$][1], $vertices$$3$$[$i0$$][2]);
    this.$_points$.add($vertices$$3$$[$i1$$3$$][0], $vertices$$3$$[$i1$$3$$][1], $vertices$$3$$[$i1$$3$$][2]);
    this.$_points$.add($vertices$$3$$[$i$$132_i2$$3$$][0], $vertices$$3$$[$i$$132_i2$$3$$][1], $vertices$$3$$[$i$$132_i2$$3$$][2]);
    this.$_normals$.add($normals$$[$i0$$][0], $normals$$[$i0$$][1], $normals$$[$i0$$][2]);
    this.$_normals$.add($normals$$[$i1$$3$$][0], $normals$$[$i1$$3$$][1], $normals$$[$i1$$3$$][2]);
    this.$_normals$.add($normals$$[$i$$132_i2$$3$$][0], $normals$$[$i$$132_i2$$3$$][1], $normals$$[$i$$132_i2$$3$$][2]);
    $colors$$[$i0$$] && this.$_colors$.add($colors$$[$i0$$][0], $colors$$[$i0$$][1], $colors$$[$i0$$][2]);
    $colors$$[$i1$$3$$] && this.$_colors$.add($colors$$[$i1$$3$$][0], $colors$$[$i1$$3$$][1], $colors$$[$i1$$3$$][2]);
    $colors$$[$i$$132_i2$$3$$] && this.$_colors$.add($colors$$[$i$$132_i2$$3$$][0], $colors$$[$i$$132_i2$$3$$][1], $colors$$[$i$$132_i2$$3$$][2])
  }.bind($JSCompiler_StaticMethods_fromCSG$self$$));
  $JSCompiler_StaticMethods_fromCSG$self$$.$setType$($X$object$types$TRIANGLES$$)
}
$JSCompiler_prototypeAlias$$.type = $JSCompiler_get$$("$_type$");
$JSCompiler_prototypeAlias$$.$setType$ = $JSCompiler_set$$("$_type$");
$JSCompiler_prototypeAlias$$.transform = $JSCompiler_get$$("$_transform$");
$JSCompiler_prototypeAlias$$.$points$ = $JSCompiler_get$$("$_points$");
$JSCompiler_prototypeAlias$$.$normals$ = $JSCompiler_get$$("$_normals$");
$JSCompiler_prototypeAlias$$.$colors$ = $JSCompiler_get$$("$_colors$");
$JSCompiler_prototypeAlias$$.color = $JSCompiler_get$$("$_color$");
$JSCompiler_prototypeAlias$$.$texture$ = $JSCompiler_get$$("$_texture$");
$JSCompiler_prototypeAlias$$.$setTexture$ = function $$JSCompiler_prototypeAlias$$$$setTexture$$($texture$$5$$) {
  $goog$isDefAndNotNull$$($texture$$5$$) ? ($goog$isString$$($texture$$5$$) && ($texture$$5$$ = new $X$texture$$($texture$$5$$)), $texture$$5$$ instanceof $X$texture$$ || $JSCompiler_alias_THROW$$(new $X$exception$$("Invalid texture.")), this.$_texture$ = $texture$$5$$) : this.$_texture$ = $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$setColor$ = function $$JSCompiler_prototypeAlias$$$$setColor$$($r$$1$$, $g$$, $b$$41$$) {
  (!$goog$isNumber$$($r$$1$$) && 0 > $r$$1$$ && 1 < $r$$1$$ || !$goog$isNumber$$($g$$) && 0 > $g$$ && 1 < $g$$ || !$goog$isNumber$$($b$$41$$) && 0 > $b$$41$$ && 1 < $b$$41$$) && $JSCompiler_alias_THROW$$(new $X$exception$$("Invalid color."));
  if(this.$hasChildren$()) {
    for(var $children$$ = this.children(), $numberOfChildren$$ = $children$$.length, $c$$5$$ = 0, $c$$5$$ = 0;$c$$5$$ < $numberOfChildren$$;$c$$5$$++) {
      $children$$[$c$$5$$].$setColor$($r$$1$$, $g$$, $b$$41$$)
    }
  }
  this.$_color$[0] = $r$$1$$;
  this.$_color$[1] = $g$$;
  this.$_color$[2] = $b$$41$$;
  this.$_dirty$ = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.$union$ = function $$JSCompiler_prototypeAlias$$$$union$$($object$$13_result$$14$$) {
  (!$goog$isDefAndNotNull$$($object$$13_result$$14$$) || !($object$$13_result$$14$$ instanceof $CSG$$) && !($object$$13_result$$14$$ instanceof $X$object$$)) && $JSCompiler_alias_THROW$$(new $X$exception$$("Invalid object."));
  var $csg$$7$$ = $object$$13_result$$14$$;
  $object$$13_result$$14$$ instanceof $X$object$$ && ($csg$$7$$ = $JSCompiler_StaticMethods_toCSG$$($csg$$7$$));
  $object$$13_result$$14$$ = new $X$object$$;
  $JSCompiler_StaticMethods_fromCSG$$($object$$13_result$$14$$, $JSCompiler_StaticMethods_toCSG$$(this).$union$($csg$$7$$));
  return $object$$13_result$$14$$
};
$JSCompiler_prototypeAlias$$.$subtract$ = function $$JSCompiler_prototypeAlias$$$$subtract$$($object$$14_result$$15$$) {
  (!$goog$isDefAndNotNull$$($object$$14_result$$15$$) || !($object$$14_result$$15$$ instanceof $CSG$$) && !($object$$14_result$$15$$ instanceof $X$object$$)) && $JSCompiler_alias_THROW$$(new $X$exception$$("Invalid object."));
  var $csg$$8$$ = $object$$14_result$$15$$;
  $object$$14_result$$15$$ instanceof $X$object$$ && ($csg$$8$$ = $JSCompiler_StaticMethods_toCSG$$($csg$$8$$));
  $object$$14_result$$15$$ = new $X$object$$;
  $JSCompiler_StaticMethods_fromCSG$$($object$$14_result$$15$$, $JSCompiler_StaticMethods_toCSG$$(this).$subtract$($csg$$8$$));
  return $object$$14_result$$15$$
};
$JSCompiler_prototypeAlias$$.$intersect$ = function $$JSCompiler_prototypeAlias$$$$intersect$$($object$$15_result$$16$$) {
  (!$goog$isDefAndNotNull$$($object$$15_result$$16$$) || !($object$$15_result$$16$$ instanceof $CSG$$) && !($object$$15_result$$16$$ instanceof $X$object$$)) && $JSCompiler_alias_THROW$$(new $X$exception$$("Invalid object."));
  var $csg$$9$$ = $object$$15_result$$16$$;
  $object$$15_result$$16$$ instanceof $X$object$$ && ($csg$$9$$ = $JSCompiler_StaticMethods_toCSG$$($csg$$9$$));
  $object$$15_result$$16$$ = new $X$object$$;
  $JSCompiler_StaticMethods_fromCSG$$($object$$15_result$$16$$, $JSCompiler_StaticMethods_toCSG$$(this).$intersect$($csg$$9$$));
  return $object$$15_result$$16$$
};
$JSCompiler_prototypeAlias$$.inverse = function $$JSCompiler_prototypeAlias$$$inverse$($object$$16_result$$17$$) {
  (!$goog$isDefAndNotNull$$($object$$16_result$$17$$) || !($object$$16_result$$17$$ instanceof $CSG$$) && !($object$$16_result$$17$$ instanceof $X$object$$)) && $JSCompiler_alias_THROW$$(new $X$exception$$("Invalid object."));
  var $csg$$10$$ = $object$$16_result$$17$$;
  $object$$16_result$$17$$ instanceof $X$object$$ && ($csg$$10$$ = $JSCompiler_StaticMethods_toCSG$$($csg$$10$$));
  $object$$16_result$$17$$ = new $X$object$$;
  $JSCompiler_StaticMethods_fromCSG$$($object$$16_result$$17$$, $JSCompiler_StaticMethods_toCSG$$(this).inverse($csg$$10$$));
  return $object$$16_result$$17$$
};
$JSCompiler_prototypeAlias$$.opacity = $JSCompiler_get$$("$_opacity$");
$JSCompiler_prototypeAlias$$.caption = $JSCompiler_get$$("$_caption$");
$JSCompiler_prototypeAlias$$.$setCaption$ = function $$JSCompiler_prototypeAlias$$$$setCaption$$($caption$$) {
  this.$_caption$ = $caption$$;
  this.$_dirty$ = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.$setVisible$ = function $$JSCompiler_prototypeAlias$$$$setVisible$$($visible$$) {
  if(this.$hasChildren$()) {
    for(var $children$$1$$ = this.children(), $numberOfChildren$$1$$ = $children$$1$$.length, $c$$6$$ = 0, $c$$6$$ = 0;$c$$6$$ < $numberOfChildren$$1$$;$c$$6$$++) {
      $children$$1$$[$c$$6$$].$setVisible$($visible$$)
    }
  }
  this.$_visible$ = $visible$$;
  this.$_dirty$ = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.$setOpacity$ = function $$JSCompiler_prototypeAlias$$$$setOpacity$$($opacity$$) {
  (!$goog$isNumber$$($opacity$$) || 1 < $opacity$$ || 0 > $opacity$$) && $JSCompiler_alias_THROW$$(new $X$exception$$("Invalid opacity."));
  this.$_opacity$ = $opacity$$;
  this.$_dirty$ = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.load = function $$JSCompiler_prototypeAlias$$$load$($filepath$$) {
  if($goog$isDefAndNotNull$$($filepath$$)) {
    if(!this.$_file$) {
      this.$_file$ = new $X$file$$
    }
    this.$_file$.$setPath$($filepath$$)
  }else {
    this.$_file$ = $JSCompiler_alias_NULL$$
  }
};
$JSCompiler_prototypeAlias$$.file = $JSCompiler_get$$("$_file$");
function $JSCompiler_StaticMethods_modified$$($JSCompiler_StaticMethods_modified$self$$) {
  var $modifiedEvent$$2$$ = new $X$event$ModifiedEvent$$;
  $modifiedEvent$$2$$.$_object$ = $JSCompiler_StaticMethods_modified$self$$;
  $JSCompiler_StaticMethods_modified$self$$.dispatchEvent($modifiedEvent$$2$$)
}
$JSCompiler_prototypeAlias$$.children = function $$JSCompiler_prototypeAlias$$$children$() {
  if(!this.$_children$) {
    this.$_children$ = []
  }
  return this.$_children$
};
$JSCompiler_prototypeAlias$$.$hasChildren$ = function $$JSCompiler_prototypeAlias$$$$hasChildren$$() {
  return!this.$_children$ ? $JSCompiler_alias_FALSE$$ : 0 < this.$_children$.length
};
$JSCompiler_prototypeAlias$$.lineWidth = $JSCompiler_get$$("$_lineWidth$");
$JSCompiler_prototypeAlias$$.$magicMode$ = $JSCompiler_get$$("$_magicMode$");
$JSCompiler_prototypeAlias$$.$setMagicMode$ = function $$JSCompiler_prototypeAlias$$$$setMagicMode$$($magicMode$$) {
  "boolean" != typeof $magicMode$$ && $JSCompiler_alias_THROW$$(new $X$exception$$("Invalid magicMode setting."));
  this.$_magicMode$ = $magicMode$$
};
$goog$exportSymbol$$("X.object", $X$object$$);
$goog$exportSymbol$$("X.object.prototype.id", $X$object$$.prototype.id);
$goog$exportSymbol$$("X.object.prototype.type", $X$object$$.prototype.type);
$goog$exportSymbol$$("X.object.prototype.transform", $X$object$$.prototype.transform);
$goog$exportSymbol$$("X.object.prototype.points", $X$object$$.prototype.$points$);
$goog$exportSymbol$$("X.object.prototype.normals", $X$object$$.prototype.$normals$);
$goog$exportSymbol$$("X.object.prototype.texture", $X$object$$.prototype.$texture$);
$goog$exportSymbol$$("X.object.prototype.setTexture", $X$object$$.prototype.$setTexture$);
$goog$exportSymbol$$("X.object.prototype.colors", $X$object$$.prototype.$colors$);
$goog$exportSymbol$$("X.object.prototype.color", $X$object$$.prototype.color);
$goog$exportSymbol$$("X.object.prototype.setColor", $X$object$$.prototype.$setColor$);
$goog$exportSymbol$$("X.object.prototype.opacity", $X$object$$.prototype.opacity);
$goog$exportSymbol$$("X.object.prototype.setOpacity", $X$object$$.prototype.$setOpacity$);
$goog$exportSymbol$$("X.object.prototype.load", $X$object$$.prototype.load);
$goog$exportSymbol$$("X.object.prototype.file", $X$object$$.prototype.file);
$goog$exportSymbol$$("X.object.prototype.setCaption", $X$object$$.prototype.$setCaption$);
$goog$exportSymbol$$("X.object.prototype.setVisible", $X$object$$.prototype.$setVisible$);
$goog$exportSymbol$$("X.object.prototype.magicMode", $X$object$$.prototype.$magicMode$);
$goog$exportSymbol$$("X.object.prototype.setMagicMode", $X$object$$.prototype.$setMagicMode$);
$goog$exportSymbol$$("X.object.prototype.intersect", $X$object$$.prototype.$intersect$);
$goog$exportSymbol$$("X.object.prototype.inverse", $X$object$$.prototype.inverse);
$goog$exportSymbol$$("X.object.prototype.subtract", $X$object$$.prototype.$subtract$);
$goog$exportSymbol$$("X.object.prototype.union", $X$object$$.prototype.$union$);
function $X$parserVTK$$() {
  $X$parser$$.call(this);
  this.$_className$ = "parserVTK"
}
$goog$inherits$$($X$parserVTK$$, $X$parser$$);
$X$parserVTK$$.prototype.parse = function $$X$parserVTK$$$$parse$($object$$17$$, $data$$34$$) {
  var $modifiedEvent$$3_p$$8$$ = $object$$17$$.$_points$, $n$$13$$ = $object$$17$$.$_normals$, $dataAsArray$$1_numberOfUnorderedNormals$$inline_177_numberOfUnorderedNormals$$inline_192_numberOfUnorderedNormals$$inline_207_numberOfUnorderedNormals$$inline_225$$ = $data$$34$$.split("\n"), $numberOfGeometries$$inline_178_numberOfGeometries$$inline_193_numberOfGeometries$$inline_208_numberOfGeometries$$inline_226_numberOfLines$$1$$ = $dataAsArray$$1_numberOfUnorderedNormals$$inline_177_numberOfUnorderedNormals$$inline_192_numberOfUnorderedNormals$$inline_207_numberOfUnorderedNormals$$inline_225$$.length, 
  $unorderedPoints$$ = new $X$triplets$$, $unorderedNormals$$ = new $X$triplets$$;
  this.$_geometries$ = [];
  this.$_objectType$ = $X$object$types$TRIANGLES$$;
  this.$_normalsMode$ = this.$_pointDataMode$ = this.$_geometryMode$ = this.$_pointsMode$ = $JSCompiler_alias_FALSE$$;
  for(var $i$$133_i$$inline_179_i$$inline_194_i$$inline_209_i$$inline_227$$ = 0, $currentGeometry$$inline_180_currentGeometry$$inline_195_currentGeometry$$inline_210_currentGeometry$$inline_228_n2$$1$$ = $numberOfGeometries$$inline_178_numberOfGeometries$$inline_193_numberOfGeometries$$inline_208_numberOfGeometries$$inline_226_numberOfLines$$1$$ % 8;$currentGeometry$$inline_180_currentGeometry$$inline_195_currentGeometry$$inline_210_currentGeometry$$inline_228_n2$$1$$--;) {
    this.$parseLine$($unorderedPoints$$, $unorderedNormals$$, $dataAsArray$$1_numberOfUnorderedNormals$$inline_177_numberOfUnorderedNormals$$inline_192_numberOfUnorderedNormals$$inline_207_numberOfUnorderedNormals$$inline_225$$[$i$$133_i$$inline_179_i$$inline_194_i$$inline_209_i$$inline_227$$]), $i$$133_i$$inline_179_i$$inline_194_i$$inline_209_i$$inline_227$$++
  }
  for($currentGeometry$$inline_180_currentGeometry$$inline_195_currentGeometry$$inline_210_currentGeometry$$inline_228_n2$$1$$ = 0.125 * $numberOfGeometries$$inline_178_numberOfGeometries$$inline_193_numberOfGeometries$$inline_208_numberOfGeometries$$inline_226_numberOfLines$$1$$ ^ 0;$currentGeometry$$inline_180_currentGeometry$$inline_195_currentGeometry$$inline_210_currentGeometry$$inline_228_n2$$1$$--;) {
    this.$parseLine$($unorderedPoints$$, $unorderedNormals$$, $dataAsArray$$1_numberOfUnorderedNormals$$inline_177_numberOfUnorderedNormals$$inline_192_numberOfUnorderedNormals$$inline_207_numberOfUnorderedNormals$$inline_225$$[$i$$133_i$$inline_179_i$$inline_194_i$$inline_209_i$$inline_227$$]), $i$$133_i$$inline_179_i$$inline_194_i$$inline_209_i$$inline_227$$++, this.$parseLine$($unorderedPoints$$, $unorderedNormals$$, $dataAsArray$$1_numberOfUnorderedNormals$$inline_177_numberOfUnorderedNormals$$inline_192_numberOfUnorderedNormals$$inline_207_numberOfUnorderedNormals$$inline_225$$[$i$$133_i$$inline_179_i$$inline_194_i$$inline_209_i$$inline_227$$]), 
    $i$$133_i$$inline_179_i$$inline_194_i$$inline_209_i$$inline_227$$++, this.$parseLine$($unorderedPoints$$, $unorderedNormals$$, $dataAsArray$$1_numberOfUnorderedNormals$$inline_177_numberOfUnorderedNormals$$inline_192_numberOfUnorderedNormals$$inline_207_numberOfUnorderedNormals$$inline_225$$[$i$$133_i$$inline_179_i$$inline_194_i$$inline_209_i$$inline_227$$]), $i$$133_i$$inline_179_i$$inline_194_i$$inline_209_i$$inline_227$$++, this.$parseLine$($unorderedPoints$$, $unorderedNormals$$, $dataAsArray$$1_numberOfUnorderedNormals$$inline_177_numberOfUnorderedNormals$$inline_192_numberOfUnorderedNormals$$inline_207_numberOfUnorderedNormals$$inline_225$$[$i$$133_i$$inline_179_i$$inline_194_i$$inline_209_i$$inline_227$$]), 
    $i$$133_i$$inline_179_i$$inline_194_i$$inline_209_i$$inline_227$$++, this.$parseLine$($unorderedPoints$$, $unorderedNormals$$, $dataAsArray$$1_numberOfUnorderedNormals$$inline_177_numberOfUnorderedNormals$$inline_192_numberOfUnorderedNormals$$inline_207_numberOfUnorderedNormals$$inline_225$$[$i$$133_i$$inline_179_i$$inline_194_i$$inline_209_i$$inline_227$$]), $i$$133_i$$inline_179_i$$inline_194_i$$inline_209_i$$inline_227$$++, this.$parseLine$($unorderedPoints$$, $unorderedNormals$$, $dataAsArray$$1_numberOfUnorderedNormals$$inline_177_numberOfUnorderedNormals$$inline_192_numberOfUnorderedNormals$$inline_207_numberOfUnorderedNormals$$inline_225$$[$i$$133_i$$inline_179_i$$inline_194_i$$inline_209_i$$inline_227$$]), 
    $i$$133_i$$inline_179_i$$inline_194_i$$inline_209_i$$inline_227$$++, this.$parseLine$($unorderedPoints$$, $unorderedNormals$$, $dataAsArray$$1_numberOfUnorderedNormals$$inline_177_numberOfUnorderedNormals$$inline_192_numberOfUnorderedNormals$$inline_207_numberOfUnorderedNormals$$inline_225$$[$i$$133_i$$inline_179_i$$inline_194_i$$inline_209_i$$inline_227$$]), $i$$133_i$$inline_179_i$$inline_194_i$$inline_209_i$$inline_227$$++, this.$parseLine$($unorderedPoints$$, $unorderedNormals$$, $dataAsArray$$1_numberOfUnorderedNormals$$inline_177_numberOfUnorderedNormals$$inline_192_numberOfUnorderedNormals$$inline_207_numberOfUnorderedNormals$$inline_225$$[$i$$133_i$$inline_179_i$$inline_194_i$$inline_209_i$$inline_227$$]), 
    $i$$133_i$$inline_179_i$$inline_194_i$$inline_209_i$$inline_227$$++
  }
  if(this.$_objectType$ == $X$object$types$TRIANGLES$$) {
    $dataAsArray$$1_numberOfUnorderedNormals$$inline_177_numberOfUnorderedNormals$$inline_192_numberOfUnorderedNormals$$inline_207_numberOfUnorderedNormals$$inline_225$$ = $unorderedNormals$$.length();
    $i$$133_i$$inline_179_i$$inline_194_i$$inline_209_i$$inline_227$$ = $numberOfGeometries$$inline_178_numberOfGeometries$$inline_193_numberOfGeometries$$inline_208_numberOfGeometries$$inline_226_numberOfLines$$1$$ = this.$_geometries$.length;
    do {
      var $currentGeometry$$inline_180_currentGeometry$$inline_195_currentGeometry$$inline_210_currentGeometry$$inline_228_n2$$1$$ = this.$_geometries$[$numberOfGeometries$$inline_178_numberOfGeometries$$inline_193_numberOfGeometries$$inline_208_numberOfGeometries$$inline_226_numberOfLines$$1$$ - $i$$133_i$$inline_179_i$$inline_194_i$$inline_209_i$$inline_227$$], $currentGeometryLength$$inline_181_currentGeometryLength$$inline_196_currentGeometryLength$$inline_211_currentGeometryLength$$inline_229$$ = 
      $currentGeometry$$inline_180_currentGeometry$$inline_195_currentGeometry$$inline_210_currentGeometry$$inline_228_n2$$1$$.length, $k$$inline_182_k$$inline_197_k$$inline_212_k$$inline_230$$;
      for($k$$inline_182_k$$inline_197_k$$inline_212_k$$inline_230$$ = 0;$k$$inline_182_k$$inline_197_k$$inline_212_k$$inline_230$$ < $currentGeometryLength$$inline_181_currentGeometryLength$$inline_196_currentGeometryLength$$inline_211_currentGeometryLength$$inline_229$$;$k$$inline_182_k$$inline_197_k$$inline_212_k$$inline_230$$++) {
        var $currentIndex$$inline_183_currentIndex$$inline_198_currentIndex$$inline_231_currentNormals$$inline_185_currentNormals$$inline_200_currentNormals$$inline_233_nextIndex$$inline_214_nextNormals$$inline_218$$ = parseInt($currentGeometry$$inline_180_currentGeometry$$inline_195_currentGeometry$$inline_210_currentGeometry$$inline_228_n2$$1$$[$k$$inline_182_k$$inline_197_k$$inline_212_k$$inline_230$$], 10), $currentIndex$$inline_213_currentNormals$$inline_217_currentPoint$$inline_184_currentPoint$$inline_199_currentPoint$$inline_232$$ = 
        $unorderedPoints$$.get($currentIndex$$inline_183_currentIndex$$inline_198_currentIndex$$inline_231_currentNormals$$inline_185_currentNormals$$inline_200_currentNormals$$inline_233_nextIndex$$inline_214_nextNormals$$inline_218$$);
        $modifiedEvent$$3_p$$8$$.add($currentIndex$$inline_213_currentNormals$$inline_217_currentPoint$$inline_184_currentPoint$$inline_199_currentPoint$$inline_232$$[0], $currentIndex$$inline_213_currentNormals$$inline_217_currentPoint$$inline_184_currentPoint$$inline_199_currentPoint$$inline_232$$[1], $currentIndex$$inline_213_currentNormals$$inline_217_currentPoint$$inline_184_currentPoint$$inline_199_currentPoint$$inline_232$$[2]);
        $currentIndex$$inline_183_currentIndex$$inline_198_currentIndex$$inline_231_currentNormals$$inline_185_currentNormals$$inline_200_currentNormals$$inline_233_nextIndex$$inline_214_nextNormals$$inline_218$$ < $dataAsArray$$1_numberOfUnorderedNormals$$inline_177_numberOfUnorderedNormals$$inline_192_numberOfUnorderedNormals$$inline_207_numberOfUnorderedNormals$$inline_225$$ ? ($currentIndex$$inline_183_currentIndex$$inline_198_currentIndex$$inline_231_currentNormals$$inline_185_currentNormals$$inline_200_currentNormals$$inline_233_nextIndex$$inline_214_nextNormals$$inline_218$$ = 
        $unorderedNormals$$.get($currentIndex$$inline_183_currentIndex$$inline_198_currentIndex$$inline_231_currentNormals$$inline_185_currentNormals$$inline_200_currentNormals$$inline_233_nextIndex$$inline_214_nextNormals$$inline_218$$), $n$$13$$.add($currentIndex$$inline_183_currentIndex$$inline_198_currentIndex$$inline_231_currentNormals$$inline_185_currentNormals$$inline_200_currentNormals$$inline_233_nextIndex$$inline_214_nextNormals$$inline_218$$[0], $currentIndex$$inline_183_currentIndex$$inline_198_currentIndex$$inline_231_currentNormals$$inline_185_currentNormals$$inline_200_currentNormals$$inline_233_nextIndex$$inline_214_nextNormals$$inline_218$$[1], 
        $currentIndex$$inline_183_currentIndex$$inline_198_currentIndex$$inline_231_currentNormals$$inline_185_currentNormals$$inline_200_currentNormals$$inline_233_nextIndex$$inline_214_nextNormals$$inline_218$$[2])) : $n$$13$$.add(1, 1, 1)
      }
      $i$$133_i$$inline_179_i$$inline_194_i$$inline_209_i$$inline_227$$--
    }while(0 < $i$$133_i$$inline_179_i$$inline_194_i$$inline_209_i$$inline_227$$)
  }else {
    if("TRIANGLE_STRIPS" == this.$_objectType$) {
      $dataAsArray$$1_numberOfUnorderedNormals$$inline_177_numberOfUnorderedNormals$$inline_192_numberOfUnorderedNormals$$inline_207_numberOfUnorderedNormals$$inline_225$$ = $unorderedNormals$$.length();
      $i$$133_i$$inline_179_i$$inline_194_i$$inline_209_i$$inline_227$$ = $numberOfGeometries$$inline_178_numberOfGeometries$$inline_193_numberOfGeometries$$inline_208_numberOfGeometries$$inline_226_numberOfLines$$1$$ = this.$_geometries$.length;
      do {
        $currentGeometry$$inline_180_currentGeometry$$inline_195_currentGeometry$$inline_210_currentGeometry$$inline_228_n2$$1$$ = this.$_geometries$[$numberOfGeometries$$inline_178_numberOfGeometries$$inline_193_numberOfGeometries$$inline_208_numberOfGeometries$$inline_226_numberOfLines$$1$$ - $i$$133_i$$inline_179_i$$inline_194_i$$inline_209_i$$inline_227$$];
        $currentGeometryLength$$inline_181_currentGeometryLength$$inline_196_currentGeometryLength$$inline_211_currentGeometryLength$$inline_229$$ = $currentGeometry$$inline_180_currentGeometry$$inline_195_currentGeometry$$inline_210_currentGeometry$$inline_228_n2$$1$$.length;
        for($k$$inline_182_k$$inline_197_k$$inline_212_k$$inline_230$$ = 0;$k$$inline_182_k$$inline_197_k$$inline_212_k$$inline_230$$ < $currentGeometryLength$$inline_181_currentGeometryLength$$inline_196_currentGeometryLength$$inline_211_currentGeometryLength$$inline_229$$;$k$$inline_182_k$$inline_197_k$$inline_212_k$$inline_230$$++) {
          $currentIndex$$inline_183_currentIndex$$inline_198_currentIndex$$inline_231_currentNormals$$inline_185_currentNormals$$inline_200_currentNormals$$inline_233_nextIndex$$inline_214_nextNormals$$inline_218$$ = parseInt($currentGeometry$$inline_180_currentGeometry$$inline_195_currentGeometry$$inline_210_currentGeometry$$inline_228_n2$$1$$[$k$$inline_182_k$$inline_197_k$$inline_212_k$$inline_230$$], 10), $currentIndex$$inline_213_currentNormals$$inline_217_currentPoint$$inline_184_currentPoint$$inline_199_currentPoint$$inline_232$$ = 
          $unorderedPoints$$.get($currentIndex$$inline_183_currentIndex$$inline_198_currentIndex$$inline_231_currentNormals$$inline_185_currentNormals$$inline_200_currentNormals$$inline_233_nextIndex$$inline_214_nextNormals$$inline_218$$), $modifiedEvent$$3_p$$8$$.add($currentIndex$$inline_213_currentNormals$$inline_217_currentPoint$$inline_184_currentPoint$$inline_199_currentPoint$$inline_232$$[0], $currentIndex$$inline_213_currentNormals$$inline_217_currentPoint$$inline_184_currentPoint$$inline_199_currentPoint$$inline_232$$[1], 
          $currentIndex$$inline_213_currentNormals$$inline_217_currentPoint$$inline_184_currentPoint$$inline_199_currentPoint$$inline_232$$[2]), (0 == $k$$inline_182_k$$inline_197_k$$inline_212_k$$inline_230$$ || $k$$inline_182_k$$inline_197_k$$inline_212_k$$inline_230$$ == $currentGeometryLength$$inline_181_currentGeometryLength$$inline_196_currentGeometryLength$$inline_211_currentGeometryLength$$inline_229$$ - 1) && $modifiedEvent$$3_p$$8$$.add($currentIndex$$inline_213_currentNormals$$inline_217_currentPoint$$inline_184_currentPoint$$inline_199_currentPoint$$inline_232$$[0], 
          $currentIndex$$inline_213_currentNormals$$inline_217_currentPoint$$inline_184_currentPoint$$inline_199_currentPoint$$inline_232$$[1], $currentIndex$$inline_213_currentNormals$$inline_217_currentPoint$$inline_184_currentPoint$$inline_199_currentPoint$$inline_232$$[2]), $currentIndex$$inline_183_currentIndex$$inline_198_currentIndex$$inline_231_currentNormals$$inline_185_currentNormals$$inline_200_currentNormals$$inline_233_nextIndex$$inline_214_nextNormals$$inline_218$$ < $dataAsArray$$1_numberOfUnorderedNormals$$inline_177_numberOfUnorderedNormals$$inline_192_numberOfUnorderedNormals$$inline_207_numberOfUnorderedNormals$$inline_225$$ ? 
          ($currentIndex$$inline_183_currentIndex$$inline_198_currentIndex$$inline_231_currentNormals$$inline_185_currentNormals$$inline_200_currentNormals$$inline_233_nextIndex$$inline_214_nextNormals$$inline_218$$ = $unorderedNormals$$.get($currentIndex$$inline_183_currentIndex$$inline_198_currentIndex$$inline_231_currentNormals$$inline_185_currentNormals$$inline_200_currentNormals$$inline_233_nextIndex$$inline_214_nextNormals$$inline_218$$), $n$$13$$.add($currentIndex$$inline_183_currentIndex$$inline_198_currentIndex$$inline_231_currentNormals$$inline_185_currentNormals$$inline_200_currentNormals$$inline_233_nextIndex$$inline_214_nextNormals$$inline_218$$[0], 
          $currentIndex$$inline_183_currentIndex$$inline_198_currentIndex$$inline_231_currentNormals$$inline_185_currentNormals$$inline_200_currentNormals$$inline_233_nextIndex$$inline_214_nextNormals$$inline_218$$[1], $currentIndex$$inline_183_currentIndex$$inline_198_currentIndex$$inline_231_currentNormals$$inline_185_currentNormals$$inline_200_currentNormals$$inline_233_nextIndex$$inline_214_nextNormals$$inline_218$$[2]), (0 == $k$$inline_182_k$$inline_197_k$$inline_212_k$$inline_230$$ || $k$$inline_182_k$$inline_197_k$$inline_212_k$$inline_230$$ == 
          $currentGeometryLength$$inline_181_currentGeometryLength$$inline_196_currentGeometryLength$$inline_211_currentGeometryLength$$inline_229$$ - 1) && $n$$13$$.add($currentIndex$$inline_183_currentIndex$$inline_198_currentIndex$$inline_231_currentNormals$$inline_185_currentNormals$$inline_200_currentNormals$$inline_233_nextIndex$$inline_214_nextNormals$$inline_218$$[0], $currentIndex$$inline_183_currentIndex$$inline_198_currentIndex$$inline_231_currentNormals$$inline_185_currentNormals$$inline_200_currentNormals$$inline_233_nextIndex$$inline_214_nextNormals$$inline_218$$[1], 
          $currentIndex$$inline_183_currentIndex$$inline_198_currentIndex$$inline_231_currentNormals$$inline_185_currentNormals$$inline_200_currentNormals$$inline_233_nextIndex$$inline_214_nextNormals$$inline_218$$[2])) : ($n$$13$$.add(1, 1, 1), (0 == $k$$inline_182_k$$inline_197_k$$inline_212_k$$inline_230$$ || $k$$inline_182_k$$inline_197_k$$inline_212_k$$inline_230$$ == $currentGeometryLength$$inline_181_currentGeometryLength$$inline_196_currentGeometryLength$$inline_211_currentGeometryLength$$inline_229$$ - 
          1) && $n$$13$$.add(1, 1, 1))
        }
        $i$$133_i$$inline_179_i$$inline_194_i$$inline_209_i$$inline_227$$--
      }while(0 < $i$$133_i$$inline_179_i$$inline_194_i$$inline_209_i$$inline_227$$)
    }else {
      if(this.$_objectType$ == $X$object$types$LINES$$) {
        $dataAsArray$$1_numberOfUnorderedNormals$$inline_177_numberOfUnorderedNormals$$inline_192_numberOfUnorderedNormals$$inline_207_numberOfUnorderedNormals$$inline_225$$ = $unorderedNormals$$.length();
        $i$$133_i$$inline_179_i$$inline_194_i$$inline_209_i$$inline_227$$ = $numberOfGeometries$$inline_178_numberOfGeometries$$inline_193_numberOfGeometries$$inline_208_numberOfGeometries$$inline_226_numberOfLines$$1$$ = this.$_geometries$.length;
        do {
          $currentGeometry$$inline_180_currentGeometry$$inline_195_currentGeometry$$inline_210_currentGeometry$$inline_228_n2$$1$$ = this.$_geometries$[$numberOfGeometries$$inline_178_numberOfGeometries$$inline_193_numberOfGeometries$$inline_208_numberOfGeometries$$inline_226_numberOfLines$$1$$ - $i$$133_i$$inline_179_i$$inline_194_i$$inline_209_i$$inline_227$$];
          $currentGeometryLength$$inline_181_currentGeometryLength$$inline_196_currentGeometryLength$$inline_211_currentGeometryLength$$inline_229$$ = $currentGeometry$$inline_180_currentGeometry$$inline_195_currentGeometry$$inline_210_currentGeometry$$inline_228_n2$$1$$.length;
          for($k$$inline_182_k$$inline_197_k$$inline_212_k$$inline_230$$ = 0;$k$$inline_182_k$$inline_197_k$$inline_212_k$$inline_230$$ < $currentGeometryLength$$inline_181_currentGeometryLength$$inline_196_currentGeometryLength$$inline_211_currentGeometryLength$$inline_229$$ - 1;$k$$inline_182_k$$inline_197_k$$inline_212_k$$inline_230$$++) {
            var $currentIndex$$inline_213_currentNormals$$inline_217_currentPoint$$inline_184_currentPoint$$inline_199_currentPoint$$inline_232$$ = parseInt($currentGeometry$$inline_180_currentGeometry$$inline_195_currentGeometry$$inline_210_currentGeometry$$inline_228_n2$$1$$[$k$$inline_182_k$$inline_197_k$$inline_212_k$$inline_230$$], 10), $currentIndex$$inline_183_currentIndex$$inline_198_currentIndex$$inline_231_currentNormals$$inline_185_currentNormals$$inline_200_currentNormals$$inline_233_nextIndex$$inline_214_nextNormals$$inline_218$$ = 
            parseInt($currentGeometry$$inline_180_currentGeometry$$inline_195_currentGeometry$$inline_210_currentGeometry$$inline_228_n2$$1$$[$k$$inline_182_k$$inline_197_k$$inline_212_k$$inline_230$$ + 1], 10), $currentPoint$$inline_215$$ = $unorderedPoints$$.get($currentIndex$$inline_213_currentNormals$$inline_217_currentPoint$$inline_184_currentPoint$$inline_199_currentPoint$$inline_232$$), $nextPoint$$inline_216$$ = $unorderedPoints$$.get($currentIndex$$inline_183_currentIndex$$inline_198_currentIndex$$inline_231_currentNormals$$inline_185_currentNormals$$inline_200_currentNormals$$inline_233_nextIndex$$inline_214_nextNormals$$inline_218$$);
            $modifiedEvent$$3_p$$8$$.add($currentPoint$$inline_215$$[0], $currentPoint$$inline_215$$[1], $currentPoint$$inline_215$$[2]);
            $modifiedEvent$$3_p$$8$$.add($nextPoint$$inline_216$$[0], $nextPoint$$inline_216$$[1], $nextPoint$$inline_216$$[2]);
            $currentIndex$$inline_213_currentNormals$$inline_217_currentPoint$$inline_184_currentPoint$$inline_199_currentPoint$$inline_232$$ < $dataAsArray$$1_numberOfUnorderedNormals$$inline_177_numberOfUnorderedNormals$$inline_192_numberOfUnorderedNormals$$inline_207_numberOfUnorderedNormals$$inline_225$$ - 1 ? ($currentIndex$$inline_213_currentNormals$$inline_217_currentPoint$$inline_184_currentPoint$$inline_199_currentPoint$$inline_232$$ = $unorderedNormals$$.get($currentIndex$$inline_213_currentNormals$$inline_217_currentPoint$$inline_184_currentPoint$$inline_199_currentPoint$$inline_232$$), 
            $currentIndex$$inline_183_currentIndex$$inline_198_currentIndex$$inline_231_currentNormals$$inline_185_currentNormals$$inline_200_currentNormals$$inline_233_nextIndex$$inline_214_nextNormals$$inline_218$$ = $unorderedNormals$$.get($currentIndex$$inline_183_currentIndex$$inline_198_currentIndex$$inline_231_currentNormals$$inline_185_currentNormals$$inline_200_currentNormals$$inline_233_nextIndex$$inline_214_nextNormals$$inline_218$$), $n$$13$$.add($currentIndex$$inline_213_currentNormals$$inline_217_currentPoint$$inline_184_currentPoint$$inline_199_currentPoint$$inline_232$$[0], 
            $currentIndex$$inline_213_currentNormals$$inline_217_currentPoint$$inline_184_currentPoint$$inline_199_currentPoint$$inline_232$$[1], $currentIndex$$inline_213_currentNormals$$inline_217_currentPoint$$inline_184_currentPoint$$inline_199_currentPoint$$inline_232$$[2]), $n$$13$$.add($currentIndex$$inline_183_currentIndex$$inline_198_currentIndex$$inline_231_currentNormals$$inline_185_currentNormals$$inline_200_currentNormals$$inline_233_nextIndex$$inline_214_nextNormals$$inline_218$$[0], 
            $currentIndex$$inline_183_currentIndex$$inline_198_currentIndex$$inline_231_currentNormals$$inline_185_currentNormals$$inline_200_currentNormals$$inline_233_nextIndex$$inline_214_nextNormals$$inline_218$$[1], $currentIndex$$inline_183_currentIndex$$inline_198_currentIndex$$inline_231_currentNormals$$inline_185_currentNormals$$inline_200_currentNormals$$inline_233_nextIndex$$inline_214_nextNormals$$inline_218$$[2])) : ($n$$13$$.add(1, 1, 1), $n$$13$$.add(1, 1, 1))
          }
          $i$$133_i$$inline_179_i$$inline_194_i$$inline_209_i$$inline_227$$--
        }while(0 < $i$$133_i$$inline_179_i$$inline_194_i$$inline_209_i$$inline_227$$)
      }else {
        if("POLYGONS" == this.$_objectType$) {
          $dataAsArray$$1_numberOfUnorderedNormals$$inline_177_numberOfUnorderedNormals$$inline_192_numberOfUnorderedNormals$$inline_207_numberOfUnorderedNormals$$inline_225$$ = $unorderedNormals$$.length();
          $i$$133_i$$inline_179_i$$inline_194_i$$inline_209_i$$inline_227$$ = $numberOfGeometries$$inline_178_numberOfGeometries$$inline_193_numberOfGeometries$$inline_208_numberOfGeometries$$inline_226_numberOfLines$$1$$ = this.$_geometries$.length;
          do {
            $currentGeometry$$inline_180_currentGeometry$$inline_195_currentGeometry$$inline_210_currentGeometry$$inline_228_n2$$1$$ = this.$_geometries$[$numberOfGeometries$$inline_178_numberOfGeometries$$inline_193_numberOfGeometries$$inline_208_numberOfGeometries$$inline_226_numberOfLines$$1$$ - $i$$133_i$$inline_179_i$$inline_194_i$$inline_209_i$$inline_227$$];
            $currentGeometryLength$$inline_181_currentGeometryLength$$inline_196_currentGeometryLength$$inline_211_currentGeometryLength$$inline_229$$ = $currentGeometry$$inline_180_currentGeometry$$inline_195_currentGeometry$$inline_210_currentGeometry$$inline_228_n2$$1$$.length;
            for($k$$inline_182_k$$inline_197_k$$inline_212_k$$inline_230$$ = 0;$k$$inline_182_k$$inline_197_k$$inline_212_k$$inline_230$$ < $currentGeometryLength$$inline_181_currentGeometryLength$$inline_196_currentGeometryLength$$inline_211_currentGeometryLength$$inline_229$$;$k$$inline_182_k$$inline_197_k$$inline_212_k$$inline_230$$++) {
              $currentIndex$$inline_183_currentIndex$$inline_198_currentIndex$$inline_231_currentNormals$$inline_185_currentNormals$$inline_200_currentNormals$$inline_233_nextIndex$$inline_214_nextNormals$$inline_218$$ = parseInt($currentGeometry$$inline_180_currentGeometry$$inline_195_currentGeometry$$inline_210_currentGeometry$$inline_228_n2$$1$$[$k$$inline_182_k$$inline_197_k$$inline_212_k$$inline_230$$], 10), $currentIndex$$inline_213_currentNormals$$inline_217_currentPoint$$inline_184_currentPoint$$inline_199_currentPoint$$inline_232$$ = 
              $unorderedPoints$$.get($currentIndex$$inline_183_currentIndex$$inline_198_currentIndex$$inline_231_currentNormals$$inline_185_currentNormals$$inline_200_currentNormals$$inline_233_nextIndex$$inline_214_nextNormals$$inline_218$$), $modifiedEvent$$3_p$$8$$.add($currentIndex$$inline_213_currentNormals$$inline_217_currentPoint$$inline_184_currentPoint$$inline_199_currentPoint$$inline_232$$[0], $currentIndex$$inline_213_currentNormals$$inline_217_currentPoint$$inline_184_currentPoint$$inline_199_currentPoint$$inline_232$$[1], 
              $currentIndex$$inline_213_currentNormals$$inline_217_currentPoint$$inline_184_currentPoint$$inline_199_currentPoint$$inline_232$$[2]), $currentIndex$$inline_183_currentIndex$$inline_198_currentIndex$$inline_231_currentNormals$$inline_185_currentNormals$$inline_200_currentNormals$$inline_233_nextIndex$$inline_214_nextNormals$$inline_218$$ < $dataAsArray$$1_numberOfUnorderedNormals$$inline_177_numberOfUnorderedNormals$$inline_192_numberOfUnorderedNormals$$inline_207_numberOfUnorderedNormals$$inline_225$$ ? 
              ($currentIndex$$inline_183_currentIndex$$inline_198_currentIndex$$inline_231_currentNormals$$inline_185_currentNormals$$inline_200_currentNormals$$inline_233_nextIndex$$inline_214_nextNormals$$inline_218$$ = $unorderedNormals$$.get($currentIndex$$inline_183_currentIndex$$inline_198_currentIndex$$inline_231_currentNormals$$inline_185_currentNormals$$inline_200_currentNormals$$inline_233_nextIndex$$inline_214_nextNormals$$inline_218$$), $n$$13$$.add($currentIndex$$inline_183_currentIndex$$inline_198_currentIndex$$inline_231_currentNormals$$inline_185_currentNormals$$inline_200_currentNormals$$inline_233_nextIndex$$inline_214_nextNormals$$inline_218$$[0], 
              $currentIndex$$inline_183_currentIndex$$inline_198_currentIndex$$inline_231_currentNormals$$inline_185_currentNormals$$inline_200_currentNormals$$inline_233_nextIndex$$inline_214_nextNormals$$inline_218$$[1], $currentIndex$$inline_183_currentIndex$$inline_198_currentIndex$$inline_231_currentNormals$$inline_185_currentNormals$$inline_200_currentNormals$$inline_233_nextIndex$$inline_214_nextNormals$$inline_218$$[2])) : $n$$13$$.add(1, 1, 1)
            }
            $i$$133_i$$inline_179_i$$inline_194_i$$inline_209_i$$inline_227$$--
          }while(0 < $i$$133_i$$inline_179_i$$inline_194_i$$inline_209_i$$inline_227$$)
        }
      }
    }
  }
  $object$$17$$.$setType$(this.$_objectType$);
  $modifiedEvent$$3_p$$8$$ = new $X$event$ModifiedEvent$$;
  $modifiedEvent$$3_p$$8$$.$_object$ = $object$$17$$;
  this.dispatchEvent($modifiedEvent$$3_p$$8$$)
};
$X$parserVTK$$.prototype.$parseLine$ = function $$X$parserVTK$$$$$parseLine$$($unorderedPoints$$1$$, $unorderedNormals$$1$$, $line$$2_lineFields$$1_z2$$) {
  var $line$$2_lineFields$$1_z2$$ = $line$$2_lineFields$$1_z2$$.replace(/^\s+|\s+$/g, ""), $line$$2_lineFields$$1_z2$$ = $line$$2_lineFields$$1_z2$$.split(" "), $numberOfLineFields_x2$$2$$ = $line$$2_lineFields$$1_z2$$.length, $firstLineField_x0$$2_x1$$4_y2$$2$$ = $line$$2_lineFields$$1_z2$$[0];
  if("POINTS" == $firstLineField_x0$$2_x1$$4_y2$$2$$) {
    this.$_pointsMode$ = $JSCompiler_alias_TRUE$$, this.$_pointDataMode$ = this.$_geometryMode$ = $JSCompiler_alias_FALSE$$
  }else {
    if("VERTICES" == $firstLineField_x0$$2_x1$$4_y2$$2$$) {
      this.$_geometryMode$ = $JSCompiler_alias_TRUE$$, this.$_pointDataMode$ = this.$_pointsMode$ = $JSCompiler_alias_FALSE$$, this.$_objectType$ = $X$object$types$TRIANGLES$$, this.$_geometries$ = []
    }else {
      if("TRIANGLE_STRIPS" == $firstLineField_x0$$2_x1$$4_y2$$2$$) {
        this.$_geometryMode$ = $JSCompiler_alias_TRUE$$, this.$_pointDataMode$ = this.$_pointsMode$ = $JSCompiler_alias_FALSE$$, this.$_objectType$ = "TRIANGLE_STRIPS", this.$_geometries$ = []
      }else {
        if("LINES" == $firstLineField_x0$$2_x1$$4_y2$$2$$) {
          this.$_geometryMode$ = $JSCompiler_alias_TRUE$$, this.$_pointDataMode$ = this.$_pointsMode$ = $JSCompiler_alias_FALSE$$, this.$_objectType$ = $X$object$types$LINES$$, this.$_geometries$ = []
        }else {
          if("POLYGONS" == $firstLineField_x0$$2_x1$$4_y2$$2$$) {
            this.$_geometryMode$ = $JSCompiler_alias_TRUE$$, this.$_pointDataMode$ = this.$_pointsMode$ = $JSCompiler_alias_FALSE$$, this.$_objectType$ = "POLYGONS", this.$_geometries$ = []
          }else {
            if("POINT_DATA" == $firstLineField_x0$$2_x1$$4_y2$$2$$) {
              this.$_pointDataMode$ = $JSCompiler_alias_TRUE$$, this.$_geometryMode$ = this.$_pointsMode$ = $JSCompiler_alias_FALSE$$
            }else {
              if(this.$_pointsMode$) {
                if(1 == $numberOfLineFields_x2$$2$$ || isNaN(parseFloat($firstLineField_x0$$2_x1$$4_y2$$2$$))) {
                  this.$_pointsMode$ = $JSCompiler_alias_FALSE$$
                }else {
                  if(3 <= $numberOfLineFields_x2$$2$$) {
                    var $firstLineField_x0$$2_x1$$4_y2$$2$$ = parseFloat($line$$2_lineFields$$1_z2$$[0]), $y0$$2_y1$$4$$ = parseFloat($line$$2_lineFields$$1_z2$$[1]), $z0_z1$$ = parseFloat($line$$2_lineFields$$1_z2$$[2]);
                    $unorderedPoints$$1$$.add($firstLineField_x0$$2_x1$$4_y2$$2$$, $y0$$2_y1$$4$$, $z0_z1$$)
                  }
                  6 <= $numberOfLineFields_x2$$2$$ && ($firstLineField_x0$$2_x1$$4_y2$$2$$ = parseFloat($line$$2_lineFields$$1_z2$$[3]), $y0$$2_y1$$4$$ = parseFloat($line$$2_lineFields$$1_z2$$[4]), $z0_z1$$ = parseFloat($line$$2_lineFields$$1_z2$$[5]), $unorderedPoints$$1$$.add($firstLineField_x0$$2_x1$$4_y2$$2$$, $y0$$2_y1$$4$$, $z0_z1$$));
                  9 <= $numberOfLineFields_x2$$2$$ && ($numberOfLineFields_x2$$2$$ = parseFloat($line$$2_lineFields$$1_z2$$[6]), $firstLineField_x0$$2_x1$$4_y2$$2$$ = parseFloat($line$$2_lineFields$$1_z2$$[7]), $line$$2_lineFields$$1_z2$$ = parseFloat($line$$2_lineFields$$1_z2$$[8]), $unorderedPoints$$1$$.add($numberOfLineFields_x2$$2$$, $firstLineField_x0$$2_x1$$4_y2$$2$$, $line$$2_lineFields$$1_z2$$))
                }
              }else {
                if(this.$_geometryMode$) {
                  1 == $numberOfLineFields_x2$$2$$ || isNaN(parseFloat($firstLineField_x0$$2_x1$$4_y2$$2$$)) ? this.$_geometryMode$ = $JSCompiler_alias_FALSE$$ : this.$_geometries$.push($line$$2_lineFields$$1_z2$$.slice(1))
                }else {
                  if(this.$_pointDataMode$) {
                    "NORMALS" == $firstLineField_x0$$2_x1$$4_y2$$2$$ ? this.$_normalsMode$ = $JSCompiler_alias_TRUE$$ : 1 == $numberOfLineFields_x2$$2$$ || isNaN(parseFloat($firstLineField_x0$$2_x1$$4_y2$$2$$)) ? this.$_normalsMode$ = this.$_pointDataMode$ = $JSCompiler_alias_FALSE$$ : this.$_normalsMode$ && (3 <= $numberOfLineFields_x2$$2$$ && ($firstLineField_x0$$2_x1$$4_y2$$2$$ = parseFloat($line$$2_lineFields$$1_z2$$[0]), $y0$$2_y1$$4$$ = parseFloat($line$$2_lineFields$$1_z2$$[1]), $z0_z1$$ = 
                    parseFloat($line$$2_lineFields$$1_z2$$[2]), $unorderedNormals$$1$$.add($firstLineField_x0$$2_x1$$4_y2$$2$$, $y0$$2_y1$$4$$, $z0_z1$$)), 6 <= $numberOfLineFields_x2$$2$$ && ($firstLineField_x0$$2_x1$$4_y2$$2$$ = parseFloat($line$$2_lineFields$$1_z2$$[3]), $y0$$2_y1$$4$$ = parseFloat($line$$2_lineFields$$1_z2$$[4]), $z0_z1$$ = parseFloat($line$$2_lineFields$$1_z2$$[5]), $unorderedNormals$$1$$.add($firstLineField_x0$$2_x1$$4_y2$$2$$, $y0$$2_y1$$4$$, $z0_z1$$)), 9 <= $numberOfLineFields_x2$$2$$ && 
                    ($numberOfLineFields_x2$$2$$ = parseFloat($line$$2_lineFields$$1_z2$$[6]), $firstLineField_x0$$2_x1$$4_y2$$2$$ = parseFloat($line$$2_lineFields$$1_z2$$[7]), $line$$2_lineFields$$1_z2$$ = parseFloat($line$$2_lineFields$$1_z2$$[8]), $unorderedNormals$$1$$.add($numberOfLineFields_x2$$2$$, $firstLineField_x0$$2_x1$$4_y2$$2$$, $line$$2_lineFields$$1_z2$$)))
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
$goog$exportSymbol$$("X.parserVTK", $X$parserVTK$$);
$goog$exportSymbol$$("X.parserVTK.prototype.parse", $X$parserVTK$$.prototype.parse);
$goog$exportSymbol$$("X.parserVTK.prototype.parseLine", $X$parserVTK$$.prototype.$parseLine$);
function $X$loader$$() {
  $X$base$$.call(this);
  this.$_className$ = "loader";
  this.$_jobs_$ = $JSCompiler_alias_NULL$$;
  this.$_progress_$ = 0
}
$goog$inherits$$($X$loader$$, $X$base$$);
function $JSCompiler_StaticMethods_jobs_$$($JSCompiler_StaticMethods_jobs_$self$$) {
  if(!$goog$isDefAndNotNull$$($JSCompiler_StaticMethods_jobs_$self$$.$_jobs_$)) {
    $JSCompiler_StaticMethods_jobs_$self$$.$_jobs_$ = new $goog$structs$Map$$
  }
  return $JSCompiler_StaticMethods_jobs_$self$$.$_jobs_$
}
function $JSCompiler_StaticMethods_completed$$($JSCompiler_StaticMethods_completed$self$$) {
  return!$goog$isDefAndNotNull$$($JSCompiler_StaticMethods_completed$self$$.$_jobs_$) ? $JSCompiler_alias_TRUE$$ : !$JSCompiler_StaticMethods_completed$self$$.$_jobs_$.$containsValue$($JSCompiler_alias_FALSE$$)
}
$X$loader$$.prototype.$loadTextureCompleted$ = function $$X$loader$$$$$loadTextureCompleted$$($object$$19$$) {
  $JSCompiler_StaticMethods_addProgress$$(this, 1.7);
  setTimeout(function() {
    $object$$19$$.$_texture$.$setClean$();
    $JSCompiler_StaticMethods_modified$$($object$$19$$);
    $JSCompiler_StaticMethods_jobs_$$(this).set($object$$19$$.id(), $JSCompiler_alias_TRUE$$)
  }.bind(this), 100)
};
function $JSCompiler_StaticMethods_addProgress$$($JSCompiler_StaticMethods_addProgress$self$$, $value$$74$$) {
  $JSCompiler_StaticMethods_addProgress$self$$.$_progress_$ += $value$$74$$ / $JSCompiler_StaticMethods_jobs_$$($JSCompiler_StaticMethods_addProgress$self$$).$getCount$() / 3;
  if(1 < $JSCompiler_StaticMethods_addProgress$self$$.$_progress_$) {
    $JSCompiler_StaticMethods_addProgress$self$$.$_progress_$ = 1
  }
  var $progressEvent$$2$$ = new $X$event$ProgressEvent$$;
  $progressEvent$$2$$.$_value$ = $JSCompiler_StaticMethods_addProgress$self$$.$_progress_$;
  $JSCompiler_StaticMethods_addProgress$self$$.dispatchEvent($progressEvent$$2$$)
}
$X$loader$$.prototype.$loadFileFailed$ = function $$X$loader$$$$$loadFileFailed$$() {
  $JSCompiler_alias_THROW$$(new $X$exception$$("Could not get the file."))
};
$X$loader$$.prototype.$loadFileCompleted$ = function $$X$loader$$$$$loadFileCompleted$$($request$$2$$, $object$$22$$) {
  $JSCompiler_StaticMethods_addProgress$$(this, 1);
  setTimeout(function() {
    var $fileExtension$$1_stlParser_trkParser_vtkParser$$ = $object$$22$$.file().path().split(".").pop();
    "stl" == $fileExtension$$1_stlParser_trkParser_vtkParser$$ ? ($fileExtension$$1_stlParser_trkParser_vtkParser$$ = new $X$parserSTL$$, $goog$events$listenOnce$$($fileExtension$$1_stlParser_trkParser_vtkParser$$, $X$event$events$MODIFIED$$, this.$parseFileCompleted$.bind(this)), $fileExtension$$1_stlParser_trkParser_vtkParser$$.parse($object$$22$$, $request$$2$$.response)) : "vtk" == $fileExtension$$1_stlParser_trkParser_vtkParser$$ ? ($fileExtension$$1_stlParser_trkParser_vtkParser$$ = new $X$parserVTK$$, 
    $goog$events$listenOnce$$($fileExtension$$1_stlParser_trkParser_vtkParser$$, $X$event$events$MODIFIED$$, this.$parseFileCompleted$.bind(this)), $fileExtension$$1_stlParser_trkParser_vtkParser$$.parse($object$$22$$, $request$$2$$.response)) : "trk" == $fileExtension$$1_stlParser_trkParser_vtkParser$$ && ($fileExtension$$1_stlParser_trkParser_vtkParser$$ = new $X$parserTRK$$, $goog$events$listenOnce$$($fileExtension$$1_stlParser_trkParser_vtkParser$$, $X$event$events$MODIFIED$$, this.$parseFileCompleted$.bind(this)), 
    $fileExtension$$1_stlParser_trkParser_vtkParser$$.parse($object$$22$$, $request$$2$$.response))
  }.bind(this), 100)
};
$X$loader$$.prototype.$parseFileCompleted$ = function $$X$loader$$$$$parseFileCompleted$$($event$$5$$) {
  $JSCompiler_StaticMethods_addProgress$$(this, 1);
  setTimeout(function() {
    var $object$$23$$ = $event$$5$$.$_object$;
    $object$$23$$.file().$setClean$();
    $JSCompiler_StaticMethods_modified$$($object$$23$$);
    $JSCompiler_StaticMethods_jobs_$$(this).set($object$$23$$.id(), $JSCompiler_alias_TRUE$$)
  }.bind(this), 100)
};
$goog$exportSymbol$$("X.loader", $X$loader$$);
function $X$shaders$$() {
  $X$base$$.call(this);
  this.$_className$ = "shader";
  this.$_vertexshaderSource$ = "";
  this.$_vertexshaderSource$ = "precision mediump float;\n\nattribute vec3 vertexPosition;\nattribute vec3 vertexNormal;\nattribute vec3 vertexColor;\nattribute vec2 vertexTexturePos;\n\nuniform mat4 view;\nuniform mat4 perspective;\nuniform vec3 center;\nuniform mat4 objectTransform;\nuniform bool useObjectColor;\nuniform vec3 objectColor;\n\nvarying vec4 fVertexPosition;\nvarying vec3 fragmentColor;\nvarying vec2 fragmentTexturePos;\nvarying vec3 fTransformedVertexNormal;\n\nvoid main(void) {\n  fTransformedVertexNormal = mat3(view[0].xyz,view[1].xyz,view[2].xyz) * mat3(objectTransform[0].xyz,objectTransform[1].xyz,objectTransform[2].xyz) * vertexNormal;\n  vec3 vertexPosition2 = vertexPosition - center;\n  fVertexPosition = view * objectTransform * vec4(vertexPosition2, 1.0);\n  fragmentTexturePos = vertexTexturePos;\n  if (useObjectColor) {\n    fragmentColor = objectColor;\n  } else {\n    fragmentColor = vertexColor;\n  }\n  gl_Position = perspective * fVertexPosition;\n}\n";
  this.$_fragmentshaderSource$ = "";
  this.$_fragmentshaderSource$ = "precision mediump float;\n\nuniform bool usePicking;\nuniform bool useTexture;\nuniform sampler2D textureSampler;\nuniform float objectOpacity;\n\nvarying vec4 fVertexPosition;\nvarying vec3 fragmentColor;\nvarying vec2 fragmentTexturePos;\nvarying vec3 fTransformedVertexNormal;\n\nvoid main(void) {\n if (usePicking) {\n   gl_FragColor = vec4(fragmentColor, 1.0);\n } else if (useTexture) {\n   gl_FragColor = texture2D(textureSampler,   vec2(fragmentTexturePos.s,fragmentTexturePos.t));\n } else {\n   vec3 nNormal = normalize(fTransformedVertexNormal);\n   vec3 light = vec3(0.0, 0.0, 1.0);\n   vec3 lightDirection = vec3(0,0,-10);\n   lightDirection = normalize(lightDirection);\n   vec3 eyeDirection = normalize(-fVertexPosition.xyz);\n   vec3 reflectionDirection = reflect(-lightDirection, nNormal);\n   float specular = pow(max(dot(reflectionDirection, eyeDirection), 0.0), 10.0);\n   float diffuse = 0.8 * max(dot(nNormal, light), 0.0);\n   float ambient = 0.3;\n   gl_FragColor = vec4(fragmentColor * ambient +\n                       fragmentColor * diffuse +\n                       vec3(0.2, 0.2, 0.2) * specular,\n                       objectOpacity);\n }\n}\n"
}
$goog$inherits$$($X$shaders$$, $X$base$$);
var $X$shaders$attributes$$ = {$VERTEXPOSITION$:"vertexPosition", $VERTEXNORMAL$:"vertexNormal", $VERTEXCOLOR$:"vertexColor", $VERTEXTEXTUREPOS$:"vertexTexturePos"}, $X$shaders$uniforms$$ = {$VIEW$:"view", $PERSPECTIVE$:"perspective", $CENTER$:"center", $OBJECTTRANSFORM$:"objectTransform", $USEOBJECTCOLOR$:"useObjectColor", $OBJECTCOLOR$:"objectColor", $OBJECTOPACITY$:"objectOpacity", $NORMAL$:"normal", $USEPICKING$:"usePicking", $USETEXTURE$:"useTexture", $TEXTURESAMPLER$:"textureSampler"};
$X$shaders$$.prototype.$vertex$ = $JSCompiler_get$$("$_vertexshaderSource$");
$X$shaders$$.prototype.$fragment$ = $JSCompiler_get$$("$_fragmentshaderSource$");
$X$shaders$$.prototype.$validate$ = function $$X$shaders$$$$$validate$$() {
  var $uniforms$$ = Object.keys($X$shaders$uniforms$$);
  Object.keys($X$shaders$attributes$$).every(function($a$$47$$) {
    $a$$47$$ = eval("X.shaders.attributes." + $a$$47$$);
    return-1 != this.$_vertexshaderSource$.search($a$$47$$) || -1 != this.$_fragmentshaderSource$.search($a$$47$$)
  }.bind(this)) || $JSCompiler_alias_THROW$$(new $X$exception$$("Could not find all attributes in the shader sources!"));
  $uniforms$$.every(function($u$$) {
    $u$$ = eval("X.shaders.uniforms." + $u$$);
    return-1 != this.$_vertexshaderSource$.search($u$$) || -1 != this.$_fragmentshaderSource$.search($u$$)
  }.bind(this)) || $JSCompiler_alias_THROW$$(new $X$exception$$("Could not find all uniforms in the shader sources!"));
  return $JSCompiler_alias_TRUE$$
};
$goog$exportSymbol$$("X.shaders", $X$shaders$$);
$goog$exportSymbol$$("X.shaders.attributes", $X$shaders$attributes$$);
$goog$exportSymbol$$("X.shaders.uniforms", $X$shaders$uniforms$$);
$goog$exportSymbol$$("X.shaders.prototype.vertex", $X$shaders$$.prototype.$vertex$);
$goog$exportSymbol$$("X.shaders.prototype.fragment", $X$shaders$$.prototype.$fragment$);
$goog$exportSymbol$$("X.shaders.prototype.validate", $X$shaders$$.prototype.$validate$);
function $goog$events$EventHandler$$($opt_handler$$7$$) {
  this.$handler_$ = $opt_handler$$7$$;
  this.$keys_$ = []
}
$goog$inherits$$($goog$events$EventHandler$$, $goog$Disposable$$);
var $goog$events$EventHandler$typeArray_$$ = [];
function $JSCompiler_StaticMethods_listen$$($JSCompiler_StaticMethods_listen$self$$, $src$$15$$, $type$$77$$, $opt_fn$$2$$, $opt_capture$$3$$) {
  $goog$isArray$$($type$$77$$) || ($goog$events$EventHandler$typeArray_$$[0] = $type$$77$$, $type$$77$$ = $goog$events$EventHandler$typeArray_$$);
  for(var $i$$138$$ = 0;$i$$138$$ < $type$$77$$.length;$i$$138$$++) {
    $JSCompiler_StaticMethods_listen$self$$.$keys_$.push($goog$events$listen$$($src$$15$$, $type$$77$$[$i$$138$$], $opt_fn$$2$$ || $JSCompiler_StaticMethods_listen$self$$, $opt_capture$$3$$ || $JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_listen$self$$.$handler_$ || $JSCompiler_StaticMethods_listen$self$$))
  }
}
$goog$events$EventHandler$$.prototype.$removeAll$ = function $$goog$events$EventHandler$$$$$removeAll$$() {
  $goog$array$forEach$$(this.$keys_$, $goog$events$unlistenByKey$$);
  this.$keys_$.length = 0
};
$goog$events$EventHandler$$.prototype.$disposeInternal$ = function $$goog$events$EventHandler$$$$$disposeInternal$$() {
  $goog$events$EventHandler$$.$superClass_$.$disposeInternal$.call(this);
  this.$removeAll$()
};
$goog$events$EventHandler$$.prototype.handleEvent = function $$goog$events$EventHandler$$$$handleEvent$() {
  $JSCompiler_alias_THROW$$(Error("EventHandler.handleEvent not implemented"))
};
function $goog$math$Box$$($top$$2$$, $right$$5$$, $bottom$$1$$, $left$$5$$) {
  this.top = $top$$2$$;
  this.right = $right$$5$$;
  this.bottom = $bottom$$1$$;
  this.left = $left$$5$$
}
$goog$math$Box$$.prototype.$clone$ = function $$goog$math$Box$$$$$clone$$() {
  return new $goog$math$Box$$(this.top, this.right, this.bottom, this.left)
};
$goog$math$Box$$.prototype.toString = function $$goog$math$Box$$$$toString$() {
  return"(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
};
$goog$math$Box$$.prototype.contains = function $$goog$math$Box$$$$contains$($other$$5$$) {
  return!this || !$other$$5$$ ? $JSCompiler_alias_FALSE$$ : $other$$5$$ instanceof $goog$math$Box$$ ? $other$$5$$.left >= this.left && $other$$5$$.right <= this.right && $other$$5$$.top >= this.top && $other$$5$$.bottom <= this.bottom : $other$$5$$.x >= this.left && $other$$5$$.x <= this.right && $other$$5$$.y >= this.top && $other$$5$$.y <= this.bottom
};
function $goog$math$Rect$$($x$$68$$, $y$$41$$, $w$$5$$, $h$$4$$) {
  this.left = $x$$68$$;
  this.top = $y$$41$$;
  this.width = $w$$5$$;
  this.height = $h$$4$$
}
$JSCompiler_prototypeAlias$$ = $goog$math$Rect$$.prototype;
$JSCompiler_prototypeAlias$$.$clone$ = function $$JSCompiler_prototypeAlias$$$$clone$$() {
  return new $goog$math$Rect$$(this.left, this.top, this.width, this.height)
};
$JSCompiler_prototypeAlias$$.toString = function $$JSCompiler_prototypeAlias$$$toString$() {
  return"(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)"
};
$JSCompiler_prototypeAlias$$.$intersection$ = function $$JSCompiler_prototypeAlias$$$$intersection$$($rect_y1$$5$$) {
  var $x0$$3$$ = Math.max(this.left, $rect_y1$$5$$.left), $x1$$5$$ = Math.min(this.left + this.width, $rect_y1$$5$$.left + $rect_y1$$5$$.width);
  if($x0$$3$$ <= $x1$$5$$) {
    var $y0$$3$$ = Math.max(this.top, $rect_y1$$5$$.top), $rect_y1$$5$$ = Math.min(this.top + this.height, $rect_y1$$5$$.top + $rect_y1$$5$$.height);
    if($y0$$3$$ <= $rect_y1$$5$$) {
      return this.left = $x0$$3$$, this.top = $y0$$3$$, this.width = $x1$$5$$ - $x0$$3$$, this.height = $rect_y1$$5$$ - $y0$$3$$, $JSCompiler_alias_TRUE$$
    }
  }
  return $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($another$$) {
  return $another$$ instanceof $goog$math$Rect$$ ? this.left <= $another$$.left && this.left + this.width >= $another$$.left + $another$$.width && this.top <= $another$$.top && this.top + this.height >= $another$$.top + $another$$.height : $another$$.x >= this.left && $another$$.x <= this.left + this.width && $another$$.y >= this.top && $another$$.y <= this.top + this.height
};
$JSCompiler_prototypeAlias$$.$getSize$ = function $$JSCompiler_prototypeAlias$$$$getSize$$() {
  return new $goog$math$Size$$(this.width, this.height)
};
var $goog$dom$defaultDomHelper_$$;
function $goog$dom$classes$add$$($element$$13$$, $var_args$$50$$) {
  var $className$$inline_239_classes$$;
  $className$$inline_239_classes$$ = ($className$$inline_239_classes$$ = $element$$13$$.className) && "function" == typeof $className$$inline_239_classes$$.split ? $className$$inline_239_classes$$.split(/\s+/) : [];
  var $args$$5_args$$inline_242$$ = $goog$array$slice$$(arguments, 1), $b$$50_classes$$inline_241$$;
  $b$$50_classes$$inline_241$$ = $className$$inline_239_classes$$;
  for(var $rv$$inline_243$$ = 0, $i$$inline_244$$ = 0;$i$$inline_244$$ < $args$$5_args$$inline_242$$.length;$i$$inline_244$$++) {
    0 <= $goog$array$indexOf$$($b$$50_classes$$inline_241$$, $args$$5_args$$inline_242$$[$i$$inline_244$$]) || ($b$$50_classes$$inline_241$$.push($args$$5_args$$inline_242$$[$i$$inline_244$$]), $rv$$inline_243$$++)
  }
  $b$$50_classes$$inline_241$$ = $rv$$inline_243$$ == $args$$5_args$$inline_242$$.length;
  $element$$13$$.className = $className$$inline_239_classes$$.join(" ");
  return $b$$50_classes$$inline_241$$
}
;var $goog$dom$BrowserFeature$CAN_ADD_NAME_OR_TYPE_ATTRIBUTES$$ = !$goog$userAgent$IE$$ || $goog$userAgent$isDocumentMode$$(9);
!$goog$userAgent$GECKO$$ && !$goog$userAgent$IE$$ || $goog$userAgent$IE$$ && $goog$userAgent$isDocumentMode$$(9) || $goog$userAgent$GECKO$$ && $goog$userAgent$isVersion$$("1.9.1");
$goog$userAgent$IE$$ && $goog$userAgent$isVersion$$("9");
function $goog$dom$getDomHelper$$($opt_element$$) {
  return $opt_element$$ ? new $goog$dom$DomHelper$$($goog$dom$getOwnerDocument$$($opt_element$$)) : $goog$dom$defaultDomHelper_$$ || ($goog$dom$defaultDomHelper_$$ = new $goog$dom$DomHelper$$)
}
function $goog$dom$getElement$$($element$$20$$) {
  return $goog$isString$$($element$$20$$) ? document.getElementById($element$$20$$) : $element$$20$$
}
function $goog$dom$setProperties$$($element$$21$$, $properties$$) {
  $goog$object$forEach$$($properties$$, function($val$$39$$, $key$$66$$) {
    "style" == $key$$66$$ ? $element$$21$$.style.cssText = $val$$39$$ : "class" == $key$$66$$ ? $element$$21$$.className = $val$$39$$ : "for" == $key$$66$$ ? $element$$21$$.htmlFor = $val$$39$$ : $key$$66$$ in $goog$dom$DIRECT_ATTRIBUTE_MAP_$$ ? $element$$21$$.setAttribute($goog$dom$DIRECT_ATTRIBUTE_MAP_$$[$key$$66$$], $val$$39$$) : 0 == $key$$66$$.lastIndexOf("aria-", 0) ? $element$$21$$.setAttribute($key$$66$$, $val$$39$$) : $element$$21$$[$key$$66$$] = $val$$39$$
  })
}
var $goog$dom$DIRECT_ATTRIBUTE_MAP_$$ = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function $goog$dom$createDom$$($tagName$$2$$, $opt_attributes$$, $var_args$$52$$) {
  return $goog$dom$createDom_$$(document, arguments)
}
function $goog$dom$createDom_$$($doc$$11$$, $args$$9$$) {
  var $element$$22_tagName$$3_tagNameArr$$ = $args$$9$$[0], $attributes$$2$$ = $args$$9$$[1];
  if(!$goog$dom$BrowserFeature$CAN_ADD_NAME_OR_TYPE_ATTRIBUTES$$ && $attributes$$2$$ && ($attributes$$2$$.name || $attributes$$2$$.type)) {
    $element$$22_tagName$$3_tagNameArr$$ = ["<", $element$$22_tagName$$3_tagNameArr$$];
    $attributes$$2$$.name && $element$$22_tagName$$3_tagNameArr$$.push(' name="', $goog$string$htmlEscape$$($attributes$$2$$.name), '"');
    if($attributes$$2$$.type) {
      $element$$22_tagName$$3_tagNameArr$$.push(' type="', $goog$string$htmlEscape$$($attributes$$2$$.type), '"');
      var $clone$$3$$ = {};
      $goog$object$extend$$($clone$$3$$, $attributes$$2$$);
      $attributes$$2$$ = $clone$$3$$;
      delete $attributes$$2$$.type
    }
    $element$$22_tagName$$3_tagNameArr$$.push(">");
    $element$$22_tagName$$3_tagNameArr$$ = $element$$22_tagName$$3_tagNameArr$$.join("")
  }
  $element$$22_tagName$$3_tagNameArr$$ = $doc$$11$$.createElement($element$$22_tagName$$3_tagNameArr$$);
  if($attributes$$2$$) {
    $goog$isString$$($attributes$$2$$) ? $element$$22_tagName$$3_tagNameArr$$.className = $attributes$$2$$ : $goog$isArray$$($attributes$$2$$) ? $goog$dom$classes$add$$.apply($JSCompiler_alias_NULL$$, [$element$$22_tagName$$3_tagNameArr$$].concat($attributes$$2$$)) : $goog$dom$setProperties$$($element$$22_tagName$$3_tagNameArr$$, $attributes$$2$$)
  }
  2 < $args$$9$$.length && $goog$dom$append_$$($doc$$11$$, $element$$22_tagName$$3_tagNameArr$$, $args$$9$$);
  return $element$$22_tagName$$3_tagNameArr$$
}
function $goog$dom$append_$$($doc$$12$$, $parent$$10$$, $args$$10$$) {
  function $childHandler$$($child$$1$$) {
    $child$$1$$ && $parent$$10$$.appendChild($goog$isString$$($child$$1$$) ? $doc$$12$$.createTextNode($child$$1$$) : $child$$1$$)
  }
  for(var $i$$146$$ = 2;$i$$146$$ < $args$$10$$.length;$i$$146$$++) {
    var $arg$$6$$ = $args$$10$$[$i$$146$$];
    $goog$isArrayLike$$($arg$$6$$) && !($goog$isObject$$($arg$$6$$) && 0 < $arg$$6$$.nodeType) ? $goog$array$forEach$$($goog$dom$isNodeList$$($arg$$6$$) ? $goog$array$clone$$($arg$$6$$) : $arg$$6$$, $childHandler$$) : $childHandler$$($arg$$6$$)
  }
}
function $goog$dom$removeNode$$($node$$5$$) {
  $node$$5$$ && $node$$5$$.parentNode && $node$$5$$.parentNode.removeChild($node$$5$$)
}
function $goog$dom$getNextElementNode_$$($node$$11$$) {
  for(;$node$$11$$ && 1 != $node$$11$$.nodeType;) {
    $node$$11$$ = $node$$11$$.nextSibling
  }
  return $node$$11$$
}
function $goog$dom$contains$$($parent$$17$$, $descendant$$) {
  if($parent$$17$$.contains && 1 == $descendant$$.nodeType) {
    return $parent$$17$$ == $descendant$$ || $parent$$17$$.contains($descendant$$)
  }
  if("undefined" != typeof $parent$$17$$.compareDocumentPosition) {
    return $parent$$17$$ == $descendant$$ || Boolean($parent$$17$$.compareDocumentPosition($descendant$$) & 16)
  }
  for(;$descendant$$ && $parent$$17$$ != $descendant$$;) {
    $descendant$$ = $descendant$$.parentNode
  }
  return $descendant$$ == $parent$$17$$
}
function $goog$dom$getOwnerDocument$$($node$$16$$) {
  return 9 == $node$$16$$.nodeType ? $node$$16$$ : $node$$16$$.ownerDocument || $node$$16$$.document
}
function $goog$dom$isNodeList$$($val$$40$$) {
  if($val$$40$$ && "number" == typeof $val$$40$$.length) {
    if($goog$isObject$$($val$$40$$)) {
      return"function" == typeof $val$$40$$.item || "string" == typeof $val$$40$$.item
    }
    if($goog$isFunction$$($val$$40$$)) {
      return"function" == typeof $val$$40$$.item
    }
  }
  return $JSCompiler_alias_FALSE$$
}
function $goog$dom$DomHelper$$($opt_document$$) {
  this.$document_$ = $opt_document$$ || $goog$global$$.document || document
}
$JSCompiler_prototypeAlias$$ = $goog$dom$DomHelper$$.prototype;
$JSCompiler_prototypeAlias$$.$getDomHelper$ = $goog$dom$getDomHelper$$;
$JSCompiler_prototypeAlias$$.$getElement$ = function $$JSCompiler_prototypeAlias$$$$getElement$$($element$$33$$) {
  return $goog$isString$$($element$$33$$) ? this.$document_$.getElementById($element$$33$$) : $element$$33$$
};
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$($tagName$$5$$, $opt_attributes$$1$$, $var_args$$55$$) {
  return $goog$dom$createDom_$$(this.$document_$, arguments)
};
$JSCompiler_prototypeAlias$$.createElement = function $$JSCompiler_prototypeAlias$$$createElement$($name$$65$$) {
  return this.$document_$.createElement($name$$65$$)
};
$JSCompiler_prototypeAlias$$.createTextNode = function $$JSCompiler_prototypeAlias$$$createTextNode$($content$$1$$) {
  return this.$document_$.createTextNode($content$$1$$)
};
function $JSCompiler_StaticMethods_isCss1CompatMode$$($JSCompiler_StaticMethods_isCss1CompatMode$self$$) {
  return"CSS1Compat" == $JSCompiler_StaticMethods_isCss1CompatMode$self$$.$document_$.compatMode
}
function $JSCompiler_StaticMethods_getDocumentScroll$$($JSCompiler_StaticMethods_getDocumentScroll$self_el$$inline_248$$) {
  var $doc$$inline_247_win$$inline_249$$ = $JSCompiler_StaticMethods_getDocumentScroll$self_el$$inline_248$$.$document_$, $JSCompiler_StaticMethods_getDocumentScroll$self_el$$inline_248$$ = !$goog$userAgent$WEBKIT$$ && "CSS1Compat" == $doc$$inline_247_win$$inline_249$$.compatMode ? $doc$$inline_247_win$$inline_249$$.documentElement : $doc$$inline_247_win$$inline_249$$.body, $doc$$inline_247_win$$inline_249$$ = $doc$$inline_247_win$$inline_249$$.parentWindow || $doc$$inline_247_win$$inline_249$$.defaultView;
  return new $goog$math$Coordinate$$($doc$$inline_247_win$$inline_249$$.pageXOffset || $JSCompiler_StaticMethods_getDocumentScroll$self_el$$inline_248$$.scrollLeft, $doc$$inline_247_win$$inline_249$$.pageYOffset || $JSCompiler_StaticMethods_getDocumentScroll$self_el$$inline_248$$.scrollTop)
}
$JSCompiler_prototypeAlias$$.appendChild = function $$JSCompiler_prototypeAlias$$$appendChild$($parent$$11$$, $child$$2$$) {
  $parent$$11$$.appendChild($child$$2$$)
};
$JSCompiler_prototypeAlias$$.contains = $goog$dom$contains$$;
$goog$userAgent$IE$$ || $goog$userAgent$GECKO$$ && $goog$userAgent$isVersion$$("1.9.3");
function $goog$style$getComputedStyle$$($element$$37$$, $property$$4$$) {
  var $doc$$24_styles$$ = $goog$dom$getOwnerDocument$$($element$$37$$);
  return $doc$$24_styles$$.defaultView && $doc$$24_styles$$.defaultView.getComputedStyle && ($doc$$24_styles$$ = $doc$$24_styles$$.defaultView.getComputedStyle($element$$37$$, $JSCompiler_alias_NULL$$)) ? $doc$$24_styles$$[$property$$4$$] || $doc$$24_styles$$.getPropertyValue($property$$4$$) : ""
}
function $goog$style$getCascadedStyle$$($element$$38$$, $style$$2$$) {
  return $element$$38$$.currentStyle ? $element$$38$$.currentStyle[$style$$2$$] : $JSCompiler_alias_NULL$$
}
function $goog$style$getStyle_$$($element$$39$$, $style$$3$$) {
  return $goog$style$getComputedStyle$$($element$$39$$, $style$$3$$) || $goog$style$getCascadedStyle$$($element$$39$$, $style$$3$$) || $element$$39$$.style && $element$$39$$.style[$style$$3$$]
}
function $goog$style$getClientViewportElement$$($doc$$25_opt_node$$) {
  $doc$$25_opt_node$$ = $doc$$25_opt_node$$ ? 9 == $doc$$25_opt_node$$.nodeType ? $doc$$25_opt_node$$ : $goog$dom$getOwnerDocument$$($doc$$25_opt_node$$) : document;
  return $goog$userAgent$IE$$ && !$goog$userAgent$isDocumentMode$$(9) && !$JSCompiler_StaticMethods_isCss1CompatMode$$($goog$dom$getDomHelper$$($doc$$25_opt_node$$)) ? $doc$$25_opt_node$$.body : $doc$$25_opt_node$$.documentElement
}
function $goog$style$getBoundingClientRect_$$($doc$$26_el$$5$$) {
  var $rect$$6$$ = $doc$$26_el$$5$$.getBoundingClientRect();
  if($goog$userAgent$IE$$) {
    $doc$$26_el$$5$$ = $doc$$26_el$$5$$.ownerDocument, $rect$$6$$.left -= $doc$$26_el$$5$$.documentElement.clientLeft + $doc$$26_el$$5$$.body.clientLeft, $rect$$6$$.top -= $doc$$26_el$$5$$.documentElement.clientTop + $doc$$26_el$$5$$.body.clientTop
  }
  return $rect$$6$$
}
function $goog$style$getOffsetParent$$($element$$48_parent$$20$$) {
  if($goog$userAgent$IE$$ && !$goog$userAgent$isDocumentMode$$(8)) {
    return $element$$48_parent$$20$$.offsetParent
  }
  for(var $doc$$27$$ = $goog$dom$getOwnerDocument$$($element$$48_parent$$20$$), $positionStyle$$ = $goog$style$getStyle_$$($element$$48_parent$$20$$, "position"), $skipStatic$$ = "fixed" == $positionStyle$$ || "absolute" == $positionStyle$$, $element$$48_parent$$20$$ = $element$$48_parent$$20$$.parentNode;$element$$48_parent$$20$$ && $element$$48_parent$$20$$ != $doc$$27$$;$element$$48_parent$$20$$ = $element$$48_parent$$20$$.parentNode) {
    if($positionStyle$$ = $goog$style$getStyle_$$($element$$48_parent$$20$$, "position"), $skipStatic$$ = $skipStatic$$ && "static" == $positionStyle$$ && $element$$48_parent$$20$$ != $doc$$27$$.documentElement && $element$$48_parent$$20$$ != $doc$$27$$.body, !$skipStatic$$ && ($element$$48_parent$$20$$.scrollWidth > $element$$48_parent$$20$$.clientWidth || $element$$48_parent$$20$$.scrollHeight > $element$$48_parent$$20$$.clientHeight || "fixed" == $positionStyle$$ || "absolute" == $positionStyle$$ || 
    "relative" == $positionStyle$$)) {
      return $element$$48_parent$$20$$
    }
  }
  return $JSCompiler_alias_NULL$$
}
function $goog$style$getVisibleRectForElement$$($el$$6_element$$49_scrollHeight$$inline_468$$) {
  for(var $visibleRect$$ = new $goog$math$Box$$(0, Infinity, Infinity, 0), $dom_el$$inline_469_win$$inline_465_winSize$$ = $goog$dom$getDomHelper$$($el$$6_element$$49_scrollHeight$$inline_468$$), $body$$2_scrollX$$ = $dom_el$$inline_469_win$$inline_465_winSize$$.$document_$.body, $doc$$inline_466_documentElement_innerHeight$$inline_467$$ = $dom_el$$inline_469_win$$inline_465_winSize$$.$document_$.documentElement, $scrollEl_scrollY$$ = !$goog$userAgent$WEBKIT$$ && "CSS1Compat" == $dom_el$$inline_469_win$$inline_465_winSize$$.$document_$.compatMode ? 
  $dom_el$$inline_469_win$$inline_465_winSize$$.$document_$.documentElement : $dom_el$$inline_469_win$$inline_465_winSize$$.$document_$.body;$el$$6_element$$49_scrollHeight$$inline_468$$ = $goog$style$getOffsetParent$$($el$$6_element$$49_scrollHeight$$inline_468$$);) {
    if((!$goog$userAgent$IE$$ || 0 != $el$$6_element$$49_scrollHeight$$inline_468$$.clientWidth) && (!$goog$userAgent$WEBKIT$$ || 0 != $el$$6_element$$49_scrollHeight$$inline_468$$.clientHeight || $el$$6_element$$49_scrollHeight$$inline_468$$ != $body$$2_scrollX$$) && $el$$6_element$$49_scrollHeight$$inline_468$$ != $body$$2_scrollX$$ && $el$$6_element$$49_scrollHeight$$inline_468$$ != $doc$$inline_466_documentElement_innerHeight$$inline_467$$ && "visible" != $goog$style$getStyle_$$($el$$6_element$$49_scrollHeight$$inline_468$$, 
    "overflow")) {
      var $pos$$4$$ = $goog$style$getPageOffset$$($el$$6_element$$49_scrollHeight$$inline_468$$), $client_el$$inline_251$$;
      $client_el$$inline_251$$ = $el$$6_element$$49_scrollHeight$$inline_468$$;
      if($goog$userAgent$GECKO$$ && !$goog$userAgent$isVersion$$("1.9")) {
        var $left$$inline_252$$ = parseFloat($goog$style$getComputedStyle$$($client_el$$inline_251$$, "borderLeftWidth"));
        if($goog$style$isRightToLeft$$($client_el$$inline_251$$)) {
          var $scrollbarWidth$$inline_253$$ = $client_el$$inline_251$$.offsetWidth - $client_el$$inline_251$$.clientWidth - $left$$inline_252$$ - parseFloat($goog$style$getComputedStyle$$($client_el$$inline_251$$, "borderRightWidth")), $left$$inline_252$$ = $left$$inline_252$$ + $scrollbarWidth$$inline_253$$
        }
        $client_el$$inline_251$$ = new $goog$math$Coordinate$$($left$$inline_252$$, parseFloat($goog$style$getComputedStyle$$($client_el$$inline_251$$, "borderTopWidth")))
      }else {
        $client_el$$inline_251$$ = new $goog$math$Coordinate$$($client_el$$inline_251$$.clientLeft, $client_el$$inline_251$$.clientTop)
      }
      $pos$$4$$.x += $client_el$$inline_251$$.x;
      $pos$$4$$.y += $client_el$$inline_251$$.y;
      $visibleRect$$.top = Math.max($visibleRect$$.top, $pos$$4$$.y);
      $visibleRect$$.right = Math.min($visibleRect$$.right, $pos$$4$$.x + $el$$6_element$$49_scrollHeight$$inline_468$$.clientWidth);
      $visibleRect$$.bottom = Math.min($visibleRect$$.bottom, $pos$$4$$.y + $el$$6_element$$49_scrollHeight$$inline_468$$.clientHeight);
      $visibleRect$$.left = Math.max($visibleRect$$.left, $pos$$4$$.x)
    }
  }
  $body$$2_scrollX$$ = $scrollEl_scrollY$$.scrollLeft;
  $scrollEl_scrollY$$ = $scrollEl_scrollY$$.scrollTop;
  $visibleRect$$.left = Math.max($visibleRect$$.left, $body$$2_scrollX$$);
  $visibleRect$$.top = Math.max($visibleRect$$.top, $scrollEl_scrollY$$);
  $dom_el$$inline_469_win$$inline_465_winSize$$ = $dom_el$$inline_469_win$$inline_465_winSize$$.$document_$.parentWindow || $dom_el$$inline_469_win$$inline_465_winSize$$.$document_$.defaultView || window;
  $doc$$inline_466_documentElement_innerHeight$$inline_467$$ = $dom_el$$inline_469_win$$inline_465_winSize$$.document;
  $goog$userAgent$WEBKIT$$ && !$goog$userAgent$isVersion$$("500") && !$goog$userAgent$MOBILE$$ ? ("undefined" == typeof $dom_el$$inline_469_win$$inline_465_winSize$$.innerHeight && ($dom_el$$inline_469_win$$inline_465_winSize$$ = window), $doc$$inline_466_documentElement_innerHeight$$inline_467$$ = $dom_el$$inline_469_win$$inline_465_winSize$$.innerHeight, $el$$6_element$$49_scrollHeight$$inline_468$$ = $dom_el$$inline_469_win$$inline_465_winSize$$.document.documentElement.scrollHeight, $dom_el$$inline_469_win$$inline_465_winSize$$ == 
  $dom_el$$inline_469_win$$inline_465_winSize$$.top && $el$$6_element$$49_scrollHeight$$inline_468$$ < $doc$$inline_466_documentElement_innerHeight$$inline_467$$ && ($doc$$inline_466_documentElement_innerHeight$$inline_467$$ -= 15), $dom_el$$inline_469_win$$inline_465_winSize$$ = new $goog$math$Size$$($dom_el$$inline_469_win$$inline_465_winSize$$.innerWidth, $doc$$inline_466_documentElement_innerHeight$$inline_467$$)) : ($dom_el$$inline_469_win$$inline_465_winSize$$ = "CSS1Compat" == $doc$$inline_466_documentElement_innerHeight$$inline_467$$.compatMode ? 
  $doc$$inline_466_documentElement_innerHeight$$inline_467$$.documentElement : $doc$$inline_466_documentElement_innerHeight$$inline_467$$.body, $dom_el$$inline_469_win$$inline_465_winSize$$ = new $goog$math$Size$$($dom_el$$inline_469_win$$inline_465_winSize$$.clientWidth, $dom_el$$inline_469_win$$inline_465_winSize$$.clientHeight));
  $visibleRect$$.right = Math.min($visibleRect$$.right, $body$$2_scrollX$$ + $dom_el$$inline_469_win$$inline_465_winSize$$.width);
  $visibleRect$$.bottom = Math.min($visibleRect$$.bottom, $scrollEl_scrollY$$ + $dom_el$$inline_469_win$$inline_465_winSize$$.height);
  return 0 <= $visibleRect$$.top && 0 <= $visibleRect$$.left && $visibleRect$$.bottom > $visibleRect$$.top && $visibleRect$$.right > $visibleRect$$.left ? $visibleRect$$ : $JSCompiler_alias_NULL$$
}
function $goog$style$getPageOffset$$($el$$8_scrollCoord_vpBox$$) {
  var $box$$5_parent$$21$$, $doc$$28$$ = $goog$dom$getOwnerDocument$$($el$$8_scrollCoord_vpBox$$), $positionStyle$$1$$ = $goog$style$getStyle_$$($el$$8_scrollCoord_vpBox$$, "position"), $BUGGY_GECKO_BOX_OBJECT$$ = $goog$userAgent$GECKO$$ && $doc$$28$$.getBoxObjectFor && !$el$$8_scrollCoord_vpBox$$.getBoundingClientRect && "absolute" == $positionStyle$$1$$ && ($box$$5_parent$$21$$ = $doc$$28$$.getBoxObjectFor($el$$8_scrollCoord_vpBox$$)) && (0 > $box$$5_parent$$21$$.screenX || 0 > $box$$5_parent$$21$$.screenY), 
  $pos$$5$$ = new $goog$math$Coordinate$$(0, 0), $viewportElement$$ = $goog$style$getClientViewportElement$$($doc$$28$$);
  if($el$$8_scrollCoord_vpBox$$ == $viewportElement$$) {
    return $pos$$5$$
  }
  if($el$$8_scrollCoord_vpBox$$.getBoundingClientRect) {
    $box$$5_parent$$21$$ = $goog$style$getBoundingClientRect_$$($el$$8_scrollCoord_vpBox$$), $el$$8_scrollCoord_vpBox$$ = $JSCompiler_StaticMethods_getDocumentScroll$$($goog$dom$getDomHelper$$($doc$$28$$)), $pos$$5$$.x = $box$$5_parent$$21$$.left + $el$$8_scrollCoord_vpBox$$.x, $pos$$5$$.y = $box$$5_parent$$21$$.top + $el$$8_scrollCoord_vpBox$$.y
  }else {
    if($doc$$28$$.getBoxObjectFor && !$BUGGY_GECKO_BOX_OBJECT$$) {
      $box$$5_parent$$21$$ = $doc$$28$$.getBoxObjectFor($el$$8_scrollCoord_vpBox$$), $el$$8_scrollCoord_vpBox$$ = $doc$$28$$.getBoxObjectFor($viewportElement$$), $pos$$5$$.x = $box$$5_parent$$21$$.screenX - $el$$8_scrollCoord_vpBox$$.screenX, $pos$$5$$.y = $box$$5_parent$$21$$.screenY - $el$$8_scrollCoord_vpBox$$.screenY
    }else {
      $box$$5_parent$$21$$ = $el$$8_scrollCoord_vpBox$$;
      do {
        $pos$$5$$.x += $box$$5_parent$$21$$.offsetLeft;
        $pos$$5$$.y += $box$$5_parent$$21$$.offsetTop;
        $box$$5_parent$$21$$ != $el$$8_scrollCoord_vpBox$$ && ($pos$$5$$.x += $box$$5_parent$$21$$.clientLeft || 0, $pos$$5$$.y += $box$$5_parent$$21$$.clientTop || 0);
        if($goog$userAgent$WEBKIT$$ && "fixed" == $goog$style$getStyle_$$($box$$5_parent$$21$$, "position")) {
          $pos$$5$$.x += $doc$$28$$.body.scrollLeft;
          $pos$$5$$.y += $doc$$28$$.body.scrollTop;
          break
        }
        $box$$5_parent$$21$$ = $box$$5_parent$$21$$.offsetParent
      }while($box$$5_parent$$21$$ && $box$$5_parent$$21$$ != $el$$8_scrollCoord_vpBox$$);
      if($goog$userAgent$OPERA$$ || $goog$userAgent$WEBKIT$$ && "absolute" == $positionStyle$$1$$) {
        $pos$$5$$.y -= $doc$$28$$.body.offsetTop
      }
      for($box$$5_parent$$21$$ = $el$$8_scrollCoord_vpBox$$;($box$$5_parent$$21$$ = $goog$style$getOffsetParent$$($box$$5_parent$$21$$)) && $box$$5_parent$$21$$ != $doc$$28$$.body && $box$$5_parent$$21$$ != $viewportElement$$;) {
        if($pos$$5$$.x -= $box$$5_parent$$21$$.scrollLeft, !$goog$userAgent$OPERA$$ || "TR" != $box$$5_parent$$21$$.tagName) {
          $pos$$5$$.y -= $box$$5_parent$$21$$.scrollTop
        }
      }
    }
  }
  return $pos$$5$$
}
function $goog$style$getPixelStyleValue_$$($value$$76$$, $round$$) {
  "number" == typeof $value$$76$$ && ($value$$76$$ = ($round$$ ? Math.round($value$$76$$) : $value$$76$$) + "px");
  return $value$$76$$
}
function $goog$style$getSize$$($element$$54_size$$9$$) {
  if("none" != $goog$style$getStyle_$$($element$$54_size$$9$$, "display")) {
    return $goog$style$getSizeWithDisplay_$$($element$$54_size$$9$$)
  }
  var $style$$4$$ = $element$$54_size$$9$$.style, $originalDisplay$$ = $style$$4$$.display, $originalVisibility$$ = $style$$4$$.visibility, $originalPosition$$ = $style$$4$$.position;
  $style$$4$$.visibility = "hidden";
  $style$$4$$.position = "absolute";
  $style$$4$$.display = "inline";
  $element$$54_size$$9$$ = $goog$style$getSizeWithDisplay_$$($element$$54_size$$9$$);
  $style$$4$$.display = $originalDisplay$$;
  $style$$4$$.position = $originalPosition$$;
  $style$$4$$.visibility = $originalVisibility$$;
  return $element$$54_size$$9$$
}
function $goog$style$getSizeWithDisplay_$$($clientRect_element$$55$$) {
  var $offsetWidth$$ = $clientRect_element$$55$$.offsetWidth, $offsetHeight$$ = $clientRect_element$$55$$.offsetHeight, $webkitOffsetsZero$$ = $goog$userAgent$WEBKIT$$ && !$offsetWidth$$ && !$offsetHeight$$;
  return(!$goog$isDef$$($offsetWidth$$) || $webkitOffsetsZero$$) && $clientRect_element$$55$$.getBoundingClientRect ? ($clientRect_element$$55$$ = $goog$style$getBoundingClientRect_$$($clientRect_element$$55$$), new $goog$math$Size$$($clientRect_element$$55$$.right - $clientRect_element$$55$$.left, $clientRect_element$$55$$.bottom - $clientRect_element$$55$$.top)) : new $goog$math$Size$$($offsetWidth$$, $offsetHeight$$)
}
function $goog$style$showElement$$($el$$18$$, $display$$) {
  $el$$18$$.style.display = $display$$ ? "" : "none"
}
function $goog$style$isRightToLeft$$($el$$22$$) {
  return"rtl" == $goog$style$getStyle_$$($el$$22$$, "direction")
}
function $goog$style$getIePixelValue_$$($element$$63$$, $value$$78$$) {
  if(/^\d+px?$/.test($value$$78$$)) {
    return parseInt($value$$78$$, 10)
  }
  var $oldStyleValue$$ = $element$$63$$.style.left, $oldRuntimeValue$$ = $element$$63$$.runtimeStyle.left;
  $element$$63$$.runtimeStyle.left = $element$$63$$.currentStyle.left;
  $element$$63$$.style.left = $value$$78$$;
  var $pixelValue$$ = $element$$63$$.style.pixelLeft;
  $element$$63$$.style.left = $oldStyleValue$$;
  $element$$63$$.runtimeStyle.left = $oldRuntimeValue$$;
  return $pixelValue$$
}
var $goog$style$ieBorderWidthKeywords_$$ = {thin:2, medium:4, thick:6};
function $goog$style$getIePixelBorder_$$($element$$68$$, $prop$$5$$) {
  if("none" == $goog$style$getCascadedStyle$$($element$$68$$, $prop$$5$$ + "Style")) {
    return 0
  }
  var $width$$15$$ = $goog$style$getCascadedStyle$$($element$$68$$, $prop$$5$$ + "Width");
  return $width$$15$$ in $goog$style$ieBorderWidthKeywords_$$ ? $goog$style$ieBorderWidthKeywords_$$[$width$$15$$] : $goog$style$getIePixelValue_$$($element$$68$$, $width$$15$$)
}
;function $goog$ui$IdGenerator$$() {
}
(function($ctor$$) {
  $ctor$$.$getInstance$ = function $$ctor$$$$getInstance$$() {
    return $ctor$$.$instance_$ || ($ctor$$.$instance_$ = new $ctor$$)
  }
})($goog$ui$IdGenerator$$);
$goog$ui$IdGenerator$$.prototype.$nextId_$ = 0;
$goog$ui$IdGenerator$$.$getInstance$();
function $goog$ui$Component$$($opt_domHelper$$) {
  this.$dom_$ = $opt_domHelper$$ || $goog$dom$getDomHelper$$();
  this.$rightToLeft_$ = $goog$ui$Component$defaultRightToLeft_$$
}
$goog$inherits$$($goog$ui$Component$$, $goog$events$EventTarget$$);
$goog$ui$Component$$.prototype.$idGenerator_$ = $goog$ui$IdGenerator$$.$getInstance$();
var $goog$ui$Component$defaultRightToLeft_$$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$ = $goog$ui$Component$$.prototype;
$JSCompiler_prototypeAlias$$.$id_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$inDocument_$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$element_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$rightToLeft_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$model_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$parent_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$children_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$childIndex_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$wasDecorated_$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$getElement$ = $JSCompiler_get$$("$element_$");
$JSCompiler_prototypeAlias$$.$setParentEventTarget$ = function $$JSCompiler_prototypeAlias$$$$setParentEventTarget$$($parent$$23$$) {
  this.$parent_$ && this.$parent_$ != $parent$$23$$ && $JSCompiler_alias_THROW$$(Error("Method not supported"));
  $goog$ui$Component$$.$superClass_$.$setParentEventTarget$.call(this, $parent$$23$$)
};
$JSCompiler_prototypeAlias$$.$getDomHelper$ = $JSCompiler_get$$("$dom_$");
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$() {
  this.$element_$ = this.$dom_$.createElement("div")
};
$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($opt_parentElement$$) {
  this.$render_$($opt_parentElement$$)
};
$JSCompiler_prototypeAlias$$.$render_$ = function $$JSCompiler_prototypeAlias$$$$render_$$($opt_parentElement$$1$$, $opt_beforeNode$$) {
  this.$inDocument_$ && $JSCompiler_alias_THROW$$(Error("Component already rendered"));
  this.$element_$ || this.$createDom$();
  $opt_parentElement$$1$$ ? $opt_parentElement$$1$$.insertBefore(this.$element_$, $opt_beforeNode$$ || $JSCompiler_alias_NULL$$) : this.$dom_$.$document_$.body.appendChild(this.$element_$);
  (!this.$parent_$ || this.$parent_$.$inDocument_$) && this.$enterDocument$()
};
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  this.$inDocument_$ = $JSCompiler_alias_TRUE$$;
  $JSCompiler_StaticMethods_forEachChild$$(this, function($child$$8$$) {
    !$child$$8$$.$inDocument_$ && $child$$8$$.$getElement$() && $child$$8$$.$enterDocument$()
  })
};
$JSCompiler_prototypeAlias$$.$exitDocument$ = function $$JSCompiler_prototypeAlias$$$$exitDocument$$() {
  $JSCompiler_StaticMethods_forEachChild$$(this, function($child$$9$$) {
    $child$$9$$.$inDocument_$ && $child$$9$$.$exitDocument$()
  });
  this.$googUiComponentHandler_$ && this.$googUiComponentHandler_$.$removeAll$();
  this.$inDocument_$ = $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$ui$Component$$.$superClass_$.$disposeInternal$.call(this);
  this.$inDocument_$ && this.$exitDocument$();
  this.$googUiComponentHandler_$ && (this.$googUiComponentHandler_$.$dispose$(), delete this.$googUiComponentHandler_$);
  $JSCompiler_StaticMethods_forEachChild$$(this, function($child$$10$$) {
    $child$$10$$.$dispose$()
  });
  !this.$wasDecorated_$ && this.$element_$ && $goog$dom$removeNode$$(this.$element_$);
  this.$parent_$ = this.$model_$ = this.$element_$ = this.$childIndex_$ = this.$children_$ = $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$hasChildren$ = function $$JSCompiler_prototypeAlias$$$$hasChildren$$() {
  return!!this.$children_$ && 0 != this.$children_$.length
};
function $JSCompiler_StaticMethods_forEachChild$$($JSCompiler_StaticMethods_forEachChild$self$$, $f$$39$$) {
  $JSCompiler_StaticMethods_forEachChild$self$$.$children_$ && $goog$array$forEach$$($JSCompiler_StaticMethods_forEachChild$self$$.$children_$, $f$$39$$, $JSCompiler_alias_VOID$$)
}
$JSCompiler_prototypeAlias$$.removeChild = function $$JSCompiler_prototypeAlias$$$removeChild$($child$$15$$, $opt_unrender$$) {
  if($child$$15$$) {
    var $JSCompiler_StaticMethods_setParent$self$$inline_259_id$$10$$ = $goog$isString$$($child$$15$$) ? $child$$15$$ : $child$$15$$.$id_$ || ($child$$15$$.$id_$ = ":" + ($child$$15$$.$idGenerator_$.$nextId_$++).toString(36)), $child$$15$$ = this.$childIndex_$ && $JSCompiler_StaticMethods_setParent$self$$inline_259_id$$10$$ ? ($JSCompiler_StaticMethods_setParent$self$$inline_259_id$$10$$ in this.$childIndex_$ ? this.$childIndex_$[$JSCompiler_StaticMethods_setParent$self$$inline_259_id$$10$$] : $JSCompiler_alias_VOID$$) || 
    $JSCompiler_alias_NULL$$ : $JSCompiler_alias_NULL$$;
    if($JSCompiler_StaticMethods_setParent$self$$inline_259_id$$10$$ && $child$$15$$) {
      var $obj$$inline_256$$ = this.$childIndex_$;
      $JSCompiler_StaticMethods_setParent$self$$inline_259_id$$10$$ in $obj$$inline_256$$ && delete $obj$$inline_256$$[$JSCompiler_StaticMethods_setParent$self$$inline_259_id$$10$$];
      $goog$array$remove$$(this.$children_$, $child$$15$$);
      $opt_unrender$$ && ($child$$15$$.$exitDocument$(), $child$$15$$.$element_$ && $goog$dom$removeNode$$($child$$15$$.$element_$));
      $JSCompiler_StaticMethods_setParent$self$$inline_259_id$$10$$ = $child$$15$$;
      $JSCompiler_StaticMethods_setParent$self$$inline_259_id$$10$$ == $JSCompiler_alias_NULL$$ && $JSCompiler_alias_THROW$$(Error("Unable to set parent component"));
      $JSCompiler_StaticMethods_setParent$self$$inline_259_id$$10$$.$parent_$ = $JSCompiler_alias_NULL$$;
      $goog$ui$Component$$.$superClass_$.$setParentEventTarget$.call($JSCompiler_StaticMethods_setParent$self$$inline_259_id$$10$$, $JSCompiler_alias_NULL$$)
    }
  }
  $child$$15$$ || $JSCompiler_alias_THROW$$(Error("Child is not in parent component"));
  return $child$$15$$
};
var $goog$Timer$defaultTimerObject$$ = $goog$global$$.window;
function $goog$Timer$callOnce$$($listener$$45$$, $opt_delay$$, $opt_handler$$13$$) {
  $goog$isFunction$$($listener$$45$$) ? $opt_handler$$13$$ && ($listener$$45$$ = $goog$bind$$($listener$$45$$, $opt_handler$$13$$)) : $listener$$45$$ && "function" == typeof $listener$$45$$.handleEvent ? $listener$$45$$ = $goog$bind$$($listener$$45$$.handleEvent, $listener$$45$$) : $JSCompiler_alias_THROW$$(Error("Invalid listener argument"));
  return 2147483647 < $opt_delay$$ ? -1 : $goog$Timer$defaultTimerObject$$.setTimeout($listener$$45$$, $opt_delay$$ || 0)
}
;function $goog$ui$PopupBase$$($opt_element$$1$$, $opt_type$$9$$) {
  this.$handler_$ = new $goog$events$EventHandler$$(this);
  this.$setElement$($opt_element$$1$$ || $JSCompiler_alias_NULL$$);
  $opt_type$$9$$ && this.$setType$($opt_type$$9$$)
}
$goog$inherits$$($goog$ui$PopupBase$$, $goog$events$EventTarget$$);
$JSCompiler_prototypeAlias$$ = $goog$ui$PopupBase$$.prototype;
$JSCompiler_prototypeAlias$$.$element_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$autoHide_$ = $JSCompiler_alias_TRUE$$;
$JSCompiler_prototypeAlias$$.$autoHideRegion_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$isVisible_$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$shouldHideAsync_$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$lastShowTime_$ = -1;
$JSCompiler_prototypeAlias$$.$lastHideTime_$ = -1;
$JSCompiler_prototypeAlias$$.$hideOnEscape_$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$enableCrossIframeDismissal_$ = $JSCompiler_alias_TRUE$$;
$JSCompiler_prototypeAlias$$.$type_$ = "toggle_display";
$JSCompiler_prototypeAlias$$.$setType$ = $JSCompiler_set$$("$type_$");
$JSCompiler_prototypeAlias$$.$getElement$ = $JSCompiler_get$$("$element_$");
$JSCompiler_prototypeAlias$$.$setElement$ = function $$JSCompiler_prototypeAlias$$$$setElement$$($elt$$2$$) {
  this.$isVisible_$ && $JSCompiler_alias_THROW$$(Error("Can not change this state of the popup while showing."));
  this.$element_$ = $elt$$2$$
};
$JSCompiler_prototypeAlias$$.$setVisible$ = function $$JSCompiler_prototypeAlias$$$$setVisible$$($doc$$inline_265_visible$$1$$) {
  this.$showTransition_$ && this.$showTransition_$.stop();
  this.$hideTransition_$ && this.$hideTransition_$.stop();
  if($doc$$inline_265_visible$$1$$) {
    if(!this.$isVisible_$ && this.$onBeforeShow$()) {
      this.$element_$ || $JSCompiler_alias_THROW$$(Error("Caller must call setElement before trying to show the popup"));
      this.$reposition$();
      $doc$$inline_265_visible$$1$$ = $goog$dom$getOwnerDocument$$(this.$element_$);
      this.$hideOnEscape_$ && $JSCompiler_StaticMethods_listen$$(this.$handler_$, $doc$$inline_265_visible$$1$$, "keydown", this.$onDocumentKeyDown_$, $JSCompiler_alias_TRUE$$);
      if(this.$autoHide_$) {
        if($JSCompiler_StaticMethods_listen$$(this.$handler_$, $doc$$inline_265_visible$$1$$, "mousedown", this.$onDocumentMouseDown_$, $JSCompiler_alias_TRUE$$), $goog$userAgent$IE$$) {
          var $activeElement$$inline_266$$;
          try {
            $activeElement$$inline_266$$ = $doc$$inline_265_visible$$1$$.activeElement
          }catch($e$$inline_268$$) {
          }
          for(;$activeElement$$inline_266$$ && "IFRAME" == $activeElement$$inline_266$$.nodeName;) {
            try {
              var $tempDoc$$inline_267$$ = $activeElement$$inline_266$$.contentDocument || $activeElement$$inline_266$$.contentWindow.document
            }catch($e$$inline_269$$) {
              break
            }
            $doc$$inline_265_visible$$1$$ = $tempDoc$$inline_267$$;
            $activeElement$$inline_266$$ = $doc$$inline_265_visible$$1$$.activeElement
          }
          $JSCompiler_StaticMethods_listen$$(this.$handler_$, $doc$$inline_265_visible$$1$$, "mousedown", this.$onDocumentMouseDown_$, $JSCompiler_alias_TRUE$$);
          $JSCompiler_StaticMethods_listen$$(this.$handler_$, $doc$$inline_265_visible$$1$$, "deactivate", this.$onDocumentBlur_$)
        }else {
          $JSCompiler_StaticMethods_listen$$(this.$handler_$, $doc$$inline_265_visible$$1$$, "blur", this.$onDocumentBlur_$)
        }
      }
      "toggle_display" == this.$type_$ ? (this.$element_$.style.visibility = "visible", $goog$style$showElement$$(this.$element_$, $JSCompiler_alias_TRUE$$)) : "move_offscreen" == this.$type_$ && this.$reposition$();
      this.$isVisible_$ = $JSCompiler_alias_TRUE$$;
      this.$showTransition_$ ? ($goog$events$listenOnce$$(this.$showTransition_$, "end", this.$onShow_$, $JSCompiler_alias_FALSE$$, this), this.$showTransition_$.play()) : this.$onShow_$()
    }
  }else {
    $JSCompiler_StaticMethods_hide_$$(this)
  }
};
$JSCompiler_prototypeAlias$$.$reposition$ = $goog$nullFunction$$;
function $JSCompiler_StaticMethods_hide_$$($JSCompiler_StaticMethods_hide_$self$$, $opt_target$$3$$) {
  if(!$JSCompiler_StaticMethods_hide_$self$$.$isVisible_$ || !$JSCompiler_StaticMethods_hide_$self$$.dispatchEvent({type:"beforehide", target:$opt_target$$3$$})) {
    return $JSCompiler_alias_FALSE$$
  }
  $JSCompiler_StaticMethods_hide_$self$$.$handler_$ && $JSCompiler_StaticMethods_hide_$self$$.$handler_$.$removeAll$();
  $JSCompiler_StaticMethods_hide_$self$$.$hideTransition_$ ? ($goog$events$listenOnce$$($JSCompiler_StaticMethods_hide_$self$$.$hideTransition_$, "end", $goog$partial$$($JSCompiler_StaticMethods_hide_$self$$.$continueHidingPopup_$, $opt_target$$3$$), $JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_hide_$self$$), $JSCompiler_StaticMethods_hide_$self$$.$hideTransition_$.play()) : $JSCompiler_StaticMethods_hide_$self$$.$continueHidingPopup_$($opt_target$$3$$);
  return $JSCompiler_alias_TRUE$$
}
$JSCompiler_prototypeAlias$$.$continueHidingPopup_$ = function $$JSCompiler_prototypeAlias$$$$continueHidingPopup_$$($opt_target$$4$$) {
  if("toggle_display" == this.$type_$) {
    this.$shouldHideAsync_$ ? $goog$Timer$callOnce$$(this.$hidePopupElement_$, 0, this) : this.$hidePopupElement_$()
  }else {
    if("move_offscreen" == this.$type_$) {
      this.$element_$.style.left = "-200px", this.$element_$.style.top = "-200px"
    }
  }
  this.$isVisible_$ = $JSCompiler_alias_FALSE$$;
  this.$onHide_$($opt_target$$4$$)
};
$JSCompiler_prototypeAlias$$.$hidePopupElement_$ = function $$JSCompiler_prototypeAlias$$$$hidePopupElement_$$() {
  this.$element_$.style.visibility = "hidden";
  $goog$style$showElement$$(this.$element_$, $JSCompiler_alias_FALSE$$)
};
$JSCompiler_prototypeAlias$$.$onBeforeShow$ = function $$JSCompiler_prototypeAlias$$$$onBeforeShow$$() {
  return this.dispatchEvent("beforeshow")
};
$JSCompiler_prototypeAlias$$.$onShow_$ = function $$JSCompiler_prototypeAlias$$$$onShow_$$() {
  this.$lastShowTime_$ = $goog$now$$();
  this.$lastHideTime_$ = -1;
  this.dispatchEvent("show")
};
$JSCompiler_prototypeAlias$$.$onHide_$ = function $$JSCompiler_prototypeAlias$$$$onHide_$$($opt_target$$6$$) {
  this.$lastHideTime_$ = $goog$now$$();
  this.dispatchEvent({type:"hide", target:$opt_target$$6$$})
};
$JSCompiler_prototypeAlias$$.$onDocumentMouseDown_$ = function $$JSCompiler_prototypeAlias$$$$onDocumentMouseDown_$$($e$$39_target$$42$$) {
  $e$$39_target$$42$$ = $e$$39_target$$42$$.target;
  !$goog$dom$contains$$(this.$element_$, $e$$39_target$$42$$) && (!this.$autoHideRegion_$ || $goog$dom$contains$$(this.$autoHideRegion_$, $e$$39_target$$42$$)) && !(150 > $goog$now$$() - this.$lastShowTime_$) && $JSCompiler_StaticMethods_hide_$$(this, $e$$39_target$$42$$)
};
$JSCompiler_prototypeAlias$$.$onDocumentKeyDown_$ = function $$JSCompiler_prototypeAlias$$$$onDocumentKeyDown_$$($e$$40$$) {
  27 == $e$$40$$.keyCode && $JSCompiler_StaticMethods_hide_$$(this, $e$$40$$.target) && ($e$$40$$.preventDefault(), $e$$40$$.stopPropagation())
};
$JSCompiler_prototypeAlias$$.$onDocumentBlur_$ = function $$JSCompiler_prototypeAlias$$$$onDocumentBlur_$$($activeElement$$1_e$$41$$) {
  if(this.$enableCrossIframeDismissal_$) {
    var $doc$$34$$ = $goog$dom$getOwnerDocument$$(this.$element_$);
    if($goog$userAgent$IE$$ || $goog$userAgent$OPERA$$) {
      if($activeElement$$1_e$$41$$ = $doc$$34$$.activeElement, !$activeElement$$1_e$$41$$ || $goog$dom$contains$$(this.$element_$, $activeElement$$1_e$$41$$) || "BODY" == $activeElement$$1_e$$41$$.tagName) {
        return
      }
    }else {
      if($activeElement$$1_e$$41$$.target != $doc$$34$$) {
        return
      }
    }
    150 > $goog$now$$() - this.$lastShowTime_$ || $JSCompiler_StaticMethods_hide_$$(this)
  }
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$ui$PopupBase$$.$superClass_$.$disposeInternal$.call(this);
  this.$handler_$.$dispose$();
  $goog$dispose$$(this.$showTransition_$);
  $goog$dispose$$(this.$hideTransition_$);
  delete this.$element_$;
  delete this.$handler_$
};
function $goog$ui$Dialog$ButtonSet$$($opt_domHelper$$3$$) {
  this.$dom_$ = $opt_domHelper$$3$$ || $goog$dom$getDomHelper$$();
  $goog$structs$Map$$.call(this)
}
$goog$inherits$$($goog$ui$Dialog$ButtonSet$$, $goog$structs$Map$$);
$JSCompiler_prototypeAlias$$ = $goog$ui$Dialog$ButtonSet$$.prototype;
$JSCompiler_prototypeAlias$$.$class_$ = "goog-buttonset";
$JSCompiler_prototypeAlias$$.$defaultButton_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$element_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$cancelButton_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.set = function $$JSCompiler_prototypeAlias$$$set$($key$$73$$, $caption$$5$$, $opt_isDefault$$, $opt_isCancel$$) {
  $goog$structs$Map$$.prototype.set.call(this, $key$$73$$, $caption$$5$$);
  if($opt_isDefault$$) {
    this.$defaultButton_$ = $key$$73$$
  }
  if($opt_isCancel$$) {
    this.$cancelButton_$ = $key$$73$$
  }
  return this
};
function $JSCompiler_StaticMethods_addButton$$($JSCompiler_StaticMethods_addButton$self$$, $button$$3$$, $opt_isDefault$$1$$, $opt_isCancel$$1$$) {
  return $JSCompiler_StaticMethods_addButton$self$$.set($button$$3$$.key, $button$$3$$.caption, $opt_isDefault$$1$$, $opt_isCancel$$1$$)
}
$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$() {
  if(this.$element_$) {
    this.$element_$.innerHTML = "";
    var $domHelper$$3$$ = $goog$dom$getDomHelper$$(this.$element_$);
    $goog$structs$forEach$$(this, function($caption$$6$$, $key$$74$$) {
      var $button$$4$$ = $domHelper$$3$$.$createDom$("button", {name:$key$$74$$}, $caption$$6$$);
      if($key$$74$$ == this.$defaultButton_$) {
        $button$$4$$.className = this.$class_$ + "-default"
      }
      this.$element_$.appendChild($button$$4$$)
    }, this)
  }
};
$JSCompiler_prototypeAlias$$.$getElement$ = $JSCompiler_get$$("$element_$");
$JSCompiler_prototypeAlias$$.$getDomHelper$ = $JSCompiler_get$$("$dom_$");
var $goog$ui$Dialog$ButtonSet$DefaultButtons$OK$$ = {key:"ok", caption:"OK"}, $goog$ui$Dialog$ButtonSet$DefaultButtons$CANCEL$$ = {key:"cancel", caption:"Cancel"}, $goog$ui$Dialog$ButtonSet$DefaultButtons$YES$$ = {key:"yes", caption:"Yes"}, $goog$ui$Dialog$ButtonSet$DefaultButtons$NO$$ = {key:"no", caption:"No"}, $goog$ui$Dialog$ButtonSet$DefaultButtons$SAVE$$ = {key:"save", caption:"Save"}, $goog$ui$Dialog$ButtonSet$DefaultButtons$CONTINUE$$ = {key:"continue", caption:"Continue"};
"undefined" != typeof document && ($JSCompiler_StaticMethods_addButton$$(new $goog$ui$Dialog$ButtonSet$$, $goog$ui$Dialog$ButtonSet$DefaultButtons$OK$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods_addButton$$($JSCompiler_StaticMethods_addButton$$(new $goog$ui$Dialog$ButtonSet$$, $goog$ui$Dialog$ButtonSet$DefaultButtons$OK$$, $JSCompiler_alias_TRUE$$), $goog$ui$Dialog$ButtonSet$DefaultButtons$CANCEL$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods_addButton$$($JSCompiler_StaticMethods_addButton$$(new $goog$ui$Dialog$ButtonSet$$, 
$goog$ui$Dialog$ButtonSet$DefaultButtons$YES$$, $JSCompiler_alias_TRUE$$), $goog$ui$Dialog$ButtonSet$DefaultButtons$NO$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods_addButton$$($JSCompiler_StaticMethods_addButton$$($JSCompiler_StaticMethods_addButton$$(new $goog$ui$Dialog$ButtonSet$$, $goog$ui$Dialog$ButtonSet$DefaultButtons$YES$$), $goog$ui$Dialog$ButtonSet$DefaultButtons$NO$$, $JSCompiler_alias_TRUE$$), $goog$ui$Dialog$ButtonSet$DefaultButtons$CANCEL$$, $JSCompiler_alias_FALSE$$, 
$JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods_addButton$$($JSCompiler_StaticMethods_addButton$$($JSCompiler_StaticMethods_addButton$$(new $goog$ui$Dialog$ButtonSet$$, $goog$ui$Dialog$ButtonSet$DefaultButtons$CONTINUE$$), $goog$ui$Dialog$ButtonSet$DefaultButtons$SAVE$$), $goog$ui$Dialog$ButtonSet$DefaultButtons$CANCEL$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$));
function $goog$ui$RangeModel$$() {
}
$goog$inherits$$($goog$ui$RangeModel$$, $goog$events$EventTarget$$);
$JSCompiler_prototypeAlias$$ = $goog$ui$RangeModel$$.prototype;
$JSCompiler_prototypeAlias$$.$value_$ = 0;
$JSCompiler_prototypeAlias$$.$minimum_$ = 0;
$JSCompiler_prototypeAlias$$.$maximum_$ = 100;
$JSCompiler_prototypeAlias$$.$extent_$ = 0;
$JSCompiler_prototypeAlias$$.$step_$ = 1;
$JSCompiler_prototypeAlias$$.$isChanging_$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$mute_$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$setValue$ = function $$JSCompiler_prototypeAlias$$$$setValue$$($value$$84$$) {
  $value$$84$$ = $JSCompiler_StaticMethods_roundToStepWithMin$$(this, $value$$84$$);
  if(this.$value_$ != $value$$84$$) {
    this.$value_$ = $value$$84$$ + this.$extent_$ > this.$maximum_$ ? this.$maximum_$ - this.$extent_$ : $value$$84$$ < this.$minimum_$ ? this.$minimum_$ : $value$$84$$, !this.$isChanging_$ && !this.$mute_$ && this.dispatchEvent("change")
  }
};
$JSCompiler_prototypeAlias$$.$getValue$ = function $$JSCompiler_prototypeAlias$$$$getValue$$() {
  return $JSCompiler_StaticMethods_roundToStepWithMin$$(this, this.$value_$)
};
$JSCompiler_prototypeAlias$$.$getMinimum$ = function $$JSCompiler_prototypeAlias$$$$getMinimum$$() {
  return $JSCompiler_StaticMethods_roundToStepWithMin$$(this, this.$minimum_$)
};
$JSCompiler_prototypeAlias$$.$getMaximum$ = function $$JSCompiler_prototypeAlias$$$$getMaximum$$() {
  return $JSCompiler_StaticMethods_roundToStepWithMin$$(this, this.$maximum_$)
};
function $JSCompiler_StaticMethods_roundToStepWithMin$$($JSCompiler_StaticMethods_roundToStepWithMin$self$$, $value$$85$$) {
  return $JSCompiler_StaticMethods_roundToStepWithMin$self$$.$step_$ == $JSCompiler_alias_NULL$$ ? $value$$85$$ : $JSCompiler_StaticMethods_roundToStepWithMin$self$$.$minimum_$ + Math.round(($value$$85$$ - $JSCompiler_StaticMethods_roundToStepWithMin$self$$.$minimum_$) / $JSCompiler_StaticMethods_roundToStepWithMin$self$$.$step_$) * $JSCompiler_StaticMethods_roundToStepWithMin$self$$.$step_$
}
;function $goog$ui$ProgressBar$$($opt_domHelper$$4$$) {
  $goog$ui$Component$$.call(this, $opt_domHelper$$4$$);
  this.$rangeModel_$ = new $goog$ui$RangeModel$$;
  $goog$events$listen$$(this.$rangeModel_$, "change", this.$handleChange_$, $JSCompiler_alias_FALSE$$, this)
}
$goog$inherits$$($goog$ui$ProgressBar$$, $goog$ui$Component$$);
var $goog$ui$ProgressBar$ORIENTATION_TO_CSS_NAME_$$ = {vertical:"progress-bar-vertical", horizontal:"progress-bar-horizontal"};
$JSCompiler_prototypeAlias$$ = $goog$ui$ProgressBar$$.prototype;
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$() {
  this.$thumbElement_$ = this.$getDomHelper$().$createDom$("div", "progress-bar-thumb");
  var $cs$$ = $goog$ui$ProgressBar$ORIENTATION_TO_CSS_NAME_$$[this.$orientation_$];
  this.$element_$ = this.$getDomHelper$().$createDom$("div", $cs$$, this.$thumbElement_$);
  $JSCompiler_StaticMethods_setValueState_$$(this);
  this.$getElement$().setAttribute("aria-valuemin", this.$getMinimum$());
  this.$getElement$().setAttribute("aria-valuemax", this.$getMaximum$())
};
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $goog$ui$ProgressBar$$.$superClass_$.$enterDocument$.call(this);
  $goog$userAgent$IE$$ && 7 > $goog$userAgent$VERSION$$ && $goog$events$listen$$(this.$getElement$(), "resize", this.$updateUi_$, $JSCompiler_alias_FALSE$$, this);
  this.$updateUi_$();
  var $element$$inline_284$$ = this.$getElement$();
  $element$$inline_284$$.setAttribute("role", "progressbar");
  $element$$inline_284$$.$roleName$ = "progressbar";
  this.$getElement$().setAttribute("aria-live", "polite")
};
$JSCompiler_prototypeAlias$$.$exitDocument$ = function $$JSCompiler_prototypeAlias$$$$exitDocument$$() {
  $goog$ui$ProgressBar$$.$superClass_$.$exitDocument$.call(this);
  $JSCompiler_StaticMethods_detachEvents_$$(this)
};
function $JSCompiler_StaticMethods_detachEvents_$$($JSCompiler_StaticMethods_detachEvents_$self$$) {
  $goog$userAgent$IE$$ && 7 > $goog$userAgent$VERSION$$ && $goog$events$unlisten$$($JSCompiler_StaticMethods_detachEvents_$self$$.$getElement$(), "resize", $JSCompiler_StaticMethods_detachEvents_$self$$.$updateUi_$, $JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_detachEvents_$self$$)
}
$JSCompiler_prototypeAlias$$.$getValue$ = function $$JSCompiler_prototypeAlias$$$$getValue$$() {
  return this.$rangeModel_$.$getValue$()
};
$JSCompiler_prototypeAlias$$.$setValue$ = function $$JSCompiler_prototypeAlias$$$$setValue$$($v$$8$$) {
  this.$rangeModel_$.$setValue$($v$$8$$);
  this.$getElement$() && $JSCompiler_StaticMethods_setValueState_$$(this)
};
function $JSCompiler_StaticMethods_setValueState_$$($JSCompiler_StaticMethods_setValueState_$self$$) {
  var $value$$inline_432$$ = $JSCompiler_StaticMethods_setValueState_$self$$.$getValue$();
  $JSCompiler_StaticMethods_setValueState_$self$$.$getElement$().setAttribute("aria-valuenow", $value$$inline_432$$)
}
$JSCompiler_prototypeAlias$$.$getMinimum$ = function $$JSCompiler_prototypeAlias$$$$getMinimum$$() {
  return this.$rangeModel_$.$getMinimum$()
};
$JSCompiler_prototypeAlias$$.$getMaximum$ = function $$JSCompiler_prototypeAlias$$$$getMaximum$$() {
  return this.$rangeModel_$.$getMaximum$()
};
$JSCompiler_prototypeAlias$$.$orientation_$ = "horizontal";
$JSCompiler_prototypeAlias$$.$handleChange_$ = function $$JSCompiler_prototypeAlias$$$$handleChange_$$() {
  this.$updateUi_$();
  this.dispatchEvent("change")
};
$JSCompiler_prototypeAlias$$.$updateUi_$ = function $$JSCompiler_prototypeAlias$$$$updateUi_$$() {
  if(this.$thumbElement_$) {
    var $bottom$$6_min$$1_ratio$$ = this.$getMinimum$(), $h$$8_max$$1_size$$13$$ = this.$getMaximum$(), $bottom$$6_min$$1_ratio$$ = (this.$getValue$() - $bottom$$6_min$$1_ratio$$) / ($h$$8_max$$1_size$$13$$ - $bottom$$6_min$$1_ratio$$), $h$$8_max$$1_size$$13$$ = Math.round(100 * $bottom$$6_min$$1_ratio$$);
    "vertical" == this.$orientation_$ ? $goog$userAgent$IE$$ && 7 > $goog$userAgent$VERSION$$ ? (this.$thumbElement_$.style.top = 0, this.$thumbElement_$.style.height = "100%", $h$$8_max$$1_size$$13$$ = this.$thumbElement_$.offsetHeight, $bottom$$6_min$$1_ratio$$ = Math.round($bottom$$6_min$$1_ratio$$ * $h$$8_max$$1_size$$13$$), this.$thumbElement_$.style.top = $h$$8_max$$1_size$$13$$ - $bottom$$6_min$$1_ratio$$ + "px", this.$thumbElement_$.style.height = $bottom$$6_min$$1_ratio$$ + "px") : (this.$thumbElement_$.style.top = 
    100 - $h$$8_max$$1_size$$13$$ + "%", this.$thumbElement_$.style.height = $h$$8_max$$1_size$$13$$ + "%") : this.$thumbElement_$.style.width = $h$$8_max$$1_size$$13$$ + "%"
  }
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $JSCompiler_StaticMethods_detachEvents_$$(this);
  $goog$ui$ProgressBar$$.$superClass_$.$disposeInternal$.call(this);
  this.$thumbElement_$ = $JSCompiler_alias_NULL$$;
  this.$rangeModel_$.$dispose$()
};
function $X$progressbar$$($parent$$24$$, $initialvalue$$) {
  $goog$isDefAndNotNull$$($parent$$24$$) || $JSCompiler_alias_THROW$$(new $X$exception$$("No valid parent element!"));
  $goog$isDefAndNotNull$$($initialvalue$$) || $JSCompiler_alias_THROW$$(new $X$exception$$("Invalid initial value!"));
  $goog$ui$ProgressBar$$.call(this);
  this.$_className$ = "progressbar";
  this.$_parent$ = $parent$$24$$;
  this.$_doneProgressBar$ = this.$_style$ = $JSCompiler_alias_NULL$$;
  this.$_css$ = [];
  this.$_css$ = [".progress-bar-horizontal {\n  position: relative;\n  border: 1px solid #949dad;\n  background: white;\n  padding: 1px;\n  overflow: hidden;\n  margin: 2px;\n  width: 100px;\n  height: 5px;\n}", ".progress-bar-thumb {\n  position: relative;\n  background: #F62217;\n  overflow: hidden;\n  width: 0%;\n  height: 100%;\n}", ".progress-bar-thumb-done {\n  background: #57E964;\n}"];
  this.$setValue$($initialvalue$$);
  this.$init_$()
}
$goog$inherits$$($X$progressbar$$, $goog$ui$ProgressBar$$);
$X$progressbar$$.prototype.$init_$ = function $$X$progressbar$$$$$init_$$() {
  this.$_parent$.style.position = "relative";
  var $head$$1_pbElement$$ = document.getElementsByTagName("head")[0], $style$$14$$ = $goog$dom$createDom$$("style");
  $style$$14$$.type = "text/css";
  $style$$14$$.media = "screen";
  var $css$$ = document.createTextNode(this.$_css$[0]), $css2$$1$$ = document.createTextNode(this.$_css$[1]), $css3$$1$$ = document.createTextNode(this.$_css$[2]);
  $head$$1_pbElement$$.appendChild($style$$14$$);
  $style$$14$$.appendChild($css$$);
  $style$$14$$.appendChild($css2$$1$$);
  $style$$14$$.appendChild($css3$$1$$);
  this.$_style$ = $style$$14$$;
  this.$render$(this.$_parent$);
  $head$$1_pbElement$$ = this.$getElement$();
  $head$$1_pbElement$$.style.position = "absolute";
  $head$$1_pbElement$$.style.top = (this.$_parent$.clientHeight - 5) / 2;
  $head$$1_pbElement$$.style.left = (this.$_parent$.clientWidth - 100) / 2
};
$X$progressbar$$.prototype.$done$ = function $$X$progressbar$$$$$done$$() {
  var $top$$9$$ = this.$getElement$().style.top, $left$$11$$ = this.$getElement$().style.left;
  $goog$dom$removeNode$$(this.$getElement$());
  var $pb$$ = new $X$progressbar$$(this.$_parent$, 100), $pbElement$$1$$ = $pb$$.$getElement$();
  $pbElement$$1$$.style.position = "absolute";
  $pbElement$$1$$.style.top = $top$$9$$;
  $pbElement$$1$$.style.left = $left$$11$$;
  ($pbElement$$1$$.firstElementChild != $JSCompiler_alias_VOID$$ ? $pbElement$$1$$.firstElementChild : $goog$dom$getNextElementNode_$$($pbElement$$1$$.firstChild)).classList.add("progress-bar-thumb-done");
  this.$_doneProgressBar$ = $pb$$
};
$X$progressbar$$.prototype.$kill$ = function $$X$progressbar$$$$$kill$$() {
  this.$_style$ && $goog$dom$removeNode$$(this.$_style$);
  this.$getElement$() && $goog$dom$removeNode$$(this.$getElement$());
  this.$_doneProgressBar$ && $goog$dom$removeNode$$(this.$_doneProgressBar$.$getElement$());
  this.$_doneProgressBar$ = this.$_style$ = $JSCompiler_alias_NULL$$
};
$goog$exportSymbol$$("X.progressbar", $X$progressbar$$);
$goog$exportSymbol$$("X.progressbar.prototype.done", $X$progressbar$$.prototype.$done$);
$goog$exportSymbol$$("X.progressbar.prototype.kill", $X$progressbar$$.prototype.$kill$);
function $X$buffer$$($glBuffer$$, $itemCount$$, $itemSize$$) {
  $goog$isDefAndNotNull$$($glBuffer$$) || $JSCompiler_alias_THROW$$(new $X$exception$$("Invalid GL Buffer!"));
  $goog$isDefAndNotNull$$($itemCount$$) || $JSCompiler_alias_THROW$$(new $X$exception$$("Invalid number of items!"));
  $goog$isDefAndNotNull$$($itemSize$$) || $JSCompiler_alias_THROW$$(new $X$exception$$("Invalid item size!"));
  $X$base$$.call(this);
  this.$_className$ = "buffer";
  this.$_glBuffer$ = $glBuffer$$;
  this.$_itemCount$ = $itemCount$$;
  this.$_itemSize$ = $itemSize$$
}
$goog$inherits$$($X$buffer$$, $X$base$$);
$X$buffer$$.prototype.$glBuffer$ = $JSCompiler_get$$("$_glBuffer$");
$X$buffer$$.prototype.$itemCount$ = $JSCompiler_get$$("$_itemCount$");
$X$buffer$$.prototype.$itemSize$ = $JSCompiler_get$$("$_itemSize$");
$goog$exportSymbol$$("X.buffer", $X$buffer$$);
$goog$exportSymbol$$("X.buffer.prototype.glBuffer", $X$buffer$$.prototype.$glBuffer$);
$goog$exportSymbol$$("X.buffer.prototype.itemCount", $X$buffer$$.prototype.$itemCount$);
$goog$exportSymbol$$("X.buffer.prototype.itemSize", $X$buffer$$.prototype.$itemSize$);
function $goog$positioning$positionAtAnchor$$($anchorElement_corner$$, $absolutePos_anchorElementCorner$$, $movableElement$$, $movableElementCorner$$, $opt_offset$$1$$, $opt_margin$$, $opt_overflow$$, $opt_preferredSize$$) {
  var $moveableParentTopLeft$$, $o$$inline_435_parent$$25_rect$$inline_299$$ = $movableElement$$.offsetParent;
  if($o$$inline_435_parent$$25_rect$$inline_299$$) {
    var $isBody_origBase$$inline_303_s$$inline_436_visibleBox$$inline_300$$ = "HTML" == $o$$inline_435_parent$$25_rect$$inline_299$$.tagName || "BODY" == $o$$inline_435_parent$$25_rect$$inline_299$$.tagName;
    if(!$isBody_origBase$$inline_303_s$$inline_436_visibleBox$$inline_300$$ || "static" != $goog$style$getStyle_$$($o$$inline_435_parent$$25_rect$$inline_299$$, "position")) {
      $moveableParentTopLeft$$ = $goog$style$getPageOffset$$($o$$inline_435_parent$$25_rect$$inline_299$$), $isBody_origBase$$inline_303_s$$inline_436_visibleBox$$inline_300$$ || ($moveableParentTopLeft$$ = $goog$math$Coordinate$difference$$($moveableParentTopLeft$$, new $goog$math$Coordinate$$($o$$inline_435_parent$$25_rect$$inline_299$$.scrollLeft, $o$$inline_435_parent$$25_rect$$inline_299$$.scrollTop)))
    }
  }
  $o$$inline_435_parent$$25_rect$$inline_299$$ = $goog$style$getPageOffset$$($anchorElement_corner$$);
  $isBody_origBase$$inline_303_s$$inline_436_visibleBox$$inline_300$$ = $goog$style$getSize$$($anchorElement_corner$$);
  $o$$inline_435_parent$$25_rect$$inline_299$$ = new $goog$math$Rect$$($o$$inline_435_parent$$25_rect$$inline_299$$.x, $o$$inline_435_parent$$25_rect$$inline_299$$.y, $isBody_origBase$$inline_303_s$$inline_436_visibleBox$$inline_300$$.width, $isBody_origBase$$inline_303_s$$inline_436_visibleBox$$inline_300$$.height);
  ($isBody_origBase$$inline_303_s$$inline_436_visibleBox$$inline_300$$ = $goog$style$getVisibleRectForElement$$($anchorElement_corner$$)) && $o$$inline_435_parent$$25_rect$$inline_299$$.$intersection$(new $goog$math$Rect$$($isBody_origBase$$inline_303_s$$inline_436_visibleBox$$inline_300$$.left, $isBody_origBase$$inline_303_s$$inline_436_visibleBox$$inline_300$$.top, $isBody_origBase$$inline_303_s$$inline_436_visibleBox$$inline_300$$.right - $isBody_origBase$$inline_303_s$$inline_436_visibleBox$$inline_300$$.left, 
  $isBody_origBase$$inline_303_s$$inline_436_visibleBox$$inline_300$$.bottom - $isBody_origBase$$inline_303_s$$inline_436_visibleBox$$inline_300$$.top));
  var $isBody_origBase$$inline_303_s$$inline_436_visibleBox$$inline_300$$ = $goog$dom$getDomHelper$$($anchorElement_corner$$), $newBase$$inline_304_relativeWin$$inline_439$$ = $goog$dom$getDomHelper$$($movableElement$$);
  if($isBody_origBase$$inline_303_s$$inline_436_visibleBox$$inline_300$$.$document_$ != $newBase$$inline_304_relativeWin$$inline_439$$.$document_$) {
    var $body$$inline_305_pos$$inline_306$$ = $isBody_origBase$$inline_303_s$$inline_436_visibleBox$$inline_300$$.$document_$.body, $newBase$$inline_304_relativeWin$$inline_439$$ = $newBase$$inline_304_relativeWin$$inline_439$$.$document_$.parentWindow || $newBase$$inline_304_relativeWin$$inline_439$$.$document_$.defaultView, $position$$inline_440$$ = new $goog$math$Coordinate$$(0, 0), $currentWin$$inline_441$$ = $goog$dom$getOwnerDocument$$($body$$inline_305_pos$$inline_306$$) ? $goog$dom$getOwnerDocument$$($body$$inline_305_pos$$inline_306$$).parentWindow || 
    $goog$dom$getOwnerDocument$$($body$$inline_305_pos$$inline_306$$).defaultView : window, $currentEl$$inline_442$$ = $body$$inline_305_pos$$inline_306$$;
    do {
      var $JSCompiler_temp$$464_offset$$inline_443_pos$$inline_472$$;
      if($currentWin$$inline_441$$ == $newBase$$inline_304_relativeWin$$inline_439$$) {
        $JSCompiler_temp$$464_offset$$inline_443_pos$$inline_472$$ = $goog$style$getPageOffset$$($currentEl$$inline_442$$)
      }else {
        var $box$$inline_473_el$$inline_471_pageCoord$$inline_475$$ = $currentEl$$inline_442$$;
        $JSCompiler_temp$$464_offset$$inline_443_pos$$inline_472$$ = new $goog$math$Coordinate$$;
        if(1 == $box$$inline_473_el$$inline_471_pageCoord$$inline_475$$.nodeType) {
          if($box$$inline_473_el$$inline_471_pageCoord$$inline_475$$.getBoundingClientRect) {
            $box$$inline_473_el$$inline_471_pageCoord$$inline_475$$ = $goog$style$getBoundingClientRect_$$($box$$inline_473_el$$inline_471_pageCoord$$inline_475$$), $JSCompiler_temp$$464_offset$$inline_443_pos$$inline_472$$.x = $box$$inline_473_el$$inline_471_pageCoord$$inline_475$$.left, $JSCompiler_temp$$464_offset$$inline_443_pos$$inline_472$$.y = $box$$inline_473_el$$inline_471_pageCoord$$inline_475$$.top
          }else {
            var $isAbstractedEvent$$inline_476_scrollCoord$$inline_474$$ = $JSCompiler_StaticMethods_getDocumentScroll$$($goog$dom$getDomHelper$$($box$$inline_473_el$$inline_471_pageCoord$$inline_475$$)), $box$$inline_473_el$$inline_471_pageCoord$$inline_475$$ = $goog$style$getPageOffset$$($box$$inline_473_el$$inline_471_pageCoord$$inline_475$$);
            $JSCompiler_temp$$464_offset$$inline_443_pos$$inline_472$$.x = $box$$inline_473_el$$inline_471_pageCoord$$inline_475$$.x - $isAbstractedEvent$$inline_476_scrollCoord$$inline_474$$.x;
            $JSCompiler_temp$$464_offset$$inline_443_pos$$inline_472$$.y = $box$$inline_473_el$$inline_471_pageCoord$$inline_475$$.y - $isAbstractedEvent$$inline_476_scrollCoord$$inline_474$$.y
          }
        }else {
          var $isAbstractedEvent$$inline_476_scrollCoord$$inline_474$$ = $goog$isFunction$$($box$$inline_473_el$$inline_471_pageCoord$$inline_475$$.$getBrowserEvent$), $targetEvent$$inline_477$$ = $box$$inline_473_el$$inline_471_pageCoord$$inline_475$$;
          $box$$inline_473_el$$inline_471_pageCoord$$inline_475$$.targetTouches ? $targetEvent$$inline_477$$ = $box$$inline_473_el$$inline_471_pageCoord$$inline_475$$.targetTouches[0] : $isAbstractedEvent$$inline_476_scrollCoord$$inline_474$$ && $box$$inline_473_el$$inline_471_pageCoord$$inline_475$$.$event_$.targetTouches && ($targetEvent$$inline_477$$ = $box$$inline_473_el$$inline_471_pageCoord$$inline_475$$.$event_$.targetTouches[0]);
          $JSCompiler_temp$$464_offset$$inline_443_pos$$inline_472$$.x = $targetEvent$$inline_477$$.clientX;
          $JSCompiler_temp$$464_offset$$inline_443_pos$$inline_472$$.y = $targetEvent$$inline_477$$.clientY
        }
      }
      $position$$inline_440$$.x += $JSCompiler_temp$$464_offset$$inline_443_pos$$inline_472$$.x;
      $position$$inline_440$$.y += $JSCompiler_temp$$464_offset$$inline_443_pos$$inline_472$$.y
    }while($currentWin$$inline_441$$ && $currentWin$$inline_441$$ != $newBase$$inline_304_relativeWin$$inline_439$$ && ($currentEl$$inline_442$$ = $currentWin$$inline_441$$.frameElement) && ($currentWin$$inline_441$$ = $currentWin$$inline_441$$.parent));
    $body$$inline_305_pos$$inline_306$$ = $goog$math$Coordinate$difference$$($position$$inline_440$$, $goog$style$getPageOffset$$($body$$inline_305_pos$$inline_306$$));
    $goog$userAgent$IE$$ && !$JSCompiler_StaticMethods_isCss1CompatMode$$($isBody_origBase$$inline_303_s$$inline_436_visibleBox$$inline_300$$) && ($body$$inline_305_pos$$inline_306$$ = $goog$math$Coordinate$difference$$($body$$inline_305_pos$$inline_306$$, $JSCompiler_StaticMethods_getDocumentScroll$$($isBody_origBase$$inline_303_s$$inline_436_visibleBox$$inline_300$$)));
    $o$$inline_435_parent$$25_rect$$inline_299$$.left += $body$$inline_305_pos$$inline_306$$.x;
    $o$$inline_435_parent$$25_rect$$inline_299$$.top += $body$$inline_305_pos$$inline_306$$.y
  }
  $anchorElement_corner$$ = ($absolutePos_anchorElementCorner$$ & 4 && $goog$style$isRightToLeft$$($anchorElement_corner$$) ? $absolutePos_anchorElementCorner$$ ^ 2 : $absolutePos_anchorElementCorner$$) & -5;
  $absolutePos_anchorElementCorner$$ = new $goog$math$Coordinate$$($anchorElement_corner$$ & 2 ? $o$$inline_435_parent$$25_rect$$inline_299$$.left + $o$$inline_435_parent$$25_rect$$inline_299$$.width : $o$$inline_435_parent$$25_rect$$inline_299$$.left, $anchorElement_corner$$ & 1 ? $o$$inline_435_parent$$25_rect$$inline_299$$.top + $o$$inline_435_parent$$25_rect$$inline_299$$.height : $o$$inline_435_parent$$25_rect$$inline_299$$.top);
  $moveableParentTopLeft$$ && ($absolutePos_anchorElementCorner$$ = $goog$math$Coordinate$difference$$($absolutePos_anchorElementCorner$$, $moveableParentTopLeft$$));
  $opt_offset$$1$$ && ($absolutePos_anchorElementCorner$$.x += ($anchorElement_corner$$ & 2 ? -1 : 1) * $opt_offset$$1$$.x, $absolutePos_anchorElementCorner$$.y += ($anchorElement_corner$$ & 1 ? -1 : 1) * $opt_offset$$1$$.y);
  var $viewport$$;
  if($opt_overflow$$ && ($viewport$$ = $goog$style$getVisibleRectForElement$$($movableElement$$)) && $moveableParentTopLeft$$) {
    $viewport$$.top -= $moveableParentTopLeft$$.y, $viewport$$.right -= $moveableParentTopLeft$$.x, $viewport$$.bottom -= $moveableParentTopLeft$$.y, $viewport$$.left -= $moveableParentTopLeft$$.x
  }
  return $goog$positioning$positionAtCoordinate$$($absolutePos_anchorElementCorner$$, $movableElement$$, $movableElementCorner$$, $opt_margin$$, $viewport$$, $opt_overflow$$, $opt_preferredSize$$)
}
function $goog$positioning$positionAtCoordinate$$($absolutePos$$1_isCss1CompatMode$$inline_322_left$$inline_480_paddingBox$$inline_324_x$$inline_316$$, $borderBox$$inline_325_bottom$$inline_449_movableElement$$1_style$$inline_453$$, $elementSize_movableElementCorner$$1_style$$inline_323$$, $bottom$$inline_483_opt_margin$$1_status$$inline_312_top$$inline_448$$, $buggyGeckoSubPixelPos$$inline_318_left$$inline_446_opt_viewport_right$$inline_481$$, $arg1$$inline_315_opt_overflow$$1_overflow$$inline_311_right$$inline_447_top$$inline_482_y$$inline_317$$, 
$opt_preferredSize$$1_size$$14$$) {
  var $absolutePos$$1_isCss1CompatMode$$inline_322_left$$inline_480_paddingBox$$inline_324_x$$inline_316$$ = $absolutePos$$1_isCss1CompatMode$$inline_322_left$$inline_480_paddingBox$$inline_324_x$$inline_316$$.$clone$(), $JSCompiler_temp$$27_pos$$inline_308_status$$ = 0, $corner$$1$$ = ($elementSize_movableElementCorner$$1_style$$inline_323$$ & 4 && $goog$style$isRightToLeft$$($borderBox$$inline_325_bottom$$inline_449_movableElement$$1_style$$inline_453$$) ? $elementSize_movableElementCorner$$1_style$$inline_323$$ ^ 
  2 : $elementSize_movableElementCorner$$1_style$$inline_323$$) & -5, $elementSize_movableElementCorner$$1_style$$inline_323$$ = $goog$style$getSize$$($borderBox$$inline_325_bottom$$inline_449_movableElement$$1_style$$inline_453$$), $opt_preferredSize$$1_size$$14$$ = $opt_preferredSize$$1_size$$14$$ ? $opt_preferredSize$$1_size$$14$$.$clone$() : $elementSize_movableElementCorner$$1_style$$inline_323$$.$clone$();
  if($bottom$$inline_483_opt_margin$$1_status$$inline_312_top$$inline_448$$ || 0 != $corner$$1$$) {
    $corner$$1$$ & 2 ? $absolutePos$$1_isCss1CompatMode$$inline_322_left$$inline_480_paddingBox$$inline_324_x$$inline_316$$.x -= $opt_preferredSize$$1_size$$14$$.width + ($bottom$$inline_483_opt_margin$$1_status$$inline_312_top$$inline_448$$ ? $bottom$$inline_483_opt_margin$$1_status$$inline_312_top$$inline_448$$.right : 0) : $bottom$$inline_483_opt_margin$$1_status$$inline_312_top$$inline_448$$ && ($absolutePos$$1_isCss1CompatMode$$inline_322_left$$inline_480_paddingBox$$inline_324_x$$inline_316$$.x += 
    $bottom$$inline_483_opt_margin$$1_status$$inline_312_top$$inline_448$$.left), $corner$$1$$ & 1 ? $absolutePos$$1_isCss1CompatMode$$inline_322_left$$inline_480_paddingBox$$inline_324_x$$inline_316$$.y -= $opt_preferredSize$$1_size$$14$$.height + ($bottom$$inline_483_opt_margin$$1_status$$inline_312_top$$inline_448$$ ? $bottom$$inline_483_opt_margin$$1_status$$inline_312_top$$inline_448$$.bottom : 0) : $bottom$$inline_483_opt_margin$$1_status$$inline_312_top$$inline_448$$ && ($absolutePos$$1_isCss1CompatMode$$inline_322_left$$inline_480_paddingBox$$inline_324_x$$inline_316$$.y += 
    $bottom$$inline_483_opt_margin$$1_status$$inline_312_top$$inline_448$$.top)
  }
  if($arg1$$inline_315_opt_overflow$$1_overflow$$inline_311_right$$inline_447_top$$inline_482_y$$inline_317$$) {
    if($buggyGeckoSubPixelPos$$inline_318_left$$inline_446_opt_viewport_right$$inline_481$$) {
      $JSCompiler_temp$$27_pos$$inline_308_status$$ = $absolutePos$$1_isCss1CompatMode$$inline_322_left$$inline_480_paddingBox$$inline_324_x$$inline_316$$;
      $bottom$$inline_483_opt_margin$$1_status$$inline_312_top$$inline_448$$ = 0;
      if(65 == ($arg1$$inline_315_opt_overflow$$1_overflow$$inline_311_right$$inline_447_top$$inline_482_y$$inline_317$$ & 65) && ($JSCompiler_temp$$27_pos$$inline_308_status$$.x < $buggyGeckoSubPixelPos$$inline_318_left$$inline_446_opt_viewport_right$$inline_481$$.left || $JSCompiler_temp$$27_pos$$inline_308_status$$.x >= $buggyGeckoSubPixelPos$$inline_318_left$$inline_446_opt_viewport_right$$inline_481$$.right)) {
        $arg1$$inline_315_opt_overflow$$1_overflow$$inline_311_right$$inline_447_top$$inline_482_y$$inline_317$$ &= -2
      }
      if(132 == ($arg1$$inline_315_opt_overflow$$1_overflow$$inline_311_right$$inline_447_top$$inline_482_y$$inline_317$$ & 132) && ($JSCompiler_temp$$27_pos$$inline_308_status$$.y < $buggyGeckoSubPixelPos$$inline_318_left$$inline_446_opt_viewport_right$$inline_481$$.top || $JSCompiler_temp$$27_pos$$inline_308_status$$.y >= $buggyGeckoSubPixelPos$$inline_318_left$$inline_446_opt_viewport_right$$inline_481$$.bottom)) {
        $arg1$$inline_315_opt_overflow$$1_overflow$$inline_311_right$$inline_447_top$$inline_482_y$$inline_317$$ &= -5
      }
      if($JSCompiler_temp$$27_pos$$inline_308_status$$.x < $buggyGeckoSubPixelPos$$inline_318_left$$inline_446_opt_viewport_right$$inline_481$$.left && $arg1$$inline_315_opt_overflow$$1_overflow$$inline_311_right$$inline_447_top$$inline_482_y$$inline_317$$ & 1) {
        $JSCompiler_temp$$27_pos$$inline_308_status$$.x = $buggyGeckoSubPixelPos$$inline_318_left$$inline_446_opt_viewport_right$$inline_481$$.left, $bottom$$inline_483_opt_margin$$1_status$$inline_312_top$$inline_448$$ |= 1
      }
      if($JSCompiler_temp$$27_pos$$inline_308_status$$.x < $buggyGeckoSubPixelPos$$inline_318_left$$inline_446_opt_viewport_right$$inline_481$$.left && $JSCompiler_temp$$27_pos$$inline_308_status$$.x + $opt_preferredSize$$1_size$$14$$.width > $buggyGeckoSubPixelPos$$inline_318_left$$inline_446_opt_viewport_right$$inline_481$$.right && $arg1$$inline_315_opt_overflow$$1_overflow$$inline_311_right$$inline_447_top$$inline_482_y$$inline_317$$ & 16) {
        $opt_preferredSize$$1_size$$14$$.width = Math.max($opt_preferredSize$$1_size$$14$$.width - ($JSCompiler_temp$$27_pos$$inline_308_status$$.x + $opt_preferredSize$$1_size$$14$$.width - $buggyGeckoSubPixelPos$$inline_318_left$$inline_446_opt_viewport_right$$inline_481$$.right), 0), $bottom$$inline_483_opt_margin$$1_status$$inline_312_top$$inline_448$$ |= 4
      }
      if($JSCompiler_temp$$27_pos$$inline_308_status$$.x + $opt_preferredSize$$1_size$$14$$.width > $buggyGeckoSubPixelPos$$inline_318_left$$inline_446_opt_viewport_right$$inline_481$$.right && $arg1$$inline_315_opt_overflow$$1_overflow$$inline_311_right$$inline_447_top$$inline_482_y$$inline_317$$ & 1) {
        $JSCompiler_temp$$27_pos$$inline_308_status$$.x = Math.max($buggyGeckoSubPixelPos$$inline_318_left$$inline_446_opt_viewport_right$$inline_481$$.right - $opt_preferredSize$$1_size$$14$$.width, $buggyGeckoSubPixelPos$$inline_318_left$$inline_446_opt_viewport_right$$inline_481$$.left), $bottom$$inline_483_opt_margin$$1_status$$inline_312_top$$inline_448$$ |= 1
      }
      $arg1$$inline_315_opt_overflow$$1_overflow$$inline_311_right$$inline_447_top$$inline_482_y$$inline_317$$ & 2 && ($bottom$$inline_483_opt_margin$$1_status$$inline_312_top$$inline_448$$ |= ($JSCompiler_temp$$27_pos$$inline_308_status$$.x < $buggyGeckoSubPixelPos$$inline_318_left$$inline_446_opt_viewport_right$$inline_481$$.left ? 16 : 0) | ($JSCompiler_temp$$27_pos$$inline_308_status$$.x + $opt_preferredSize$$1_size$$14$$.width > $buggyGeckoSubPixelPos$$inline_318_left$$inline_446_opt_viewport_right$$inline_481$$.right ? 
      32 : 0));
      if($JSCompiler_temp$$27_pos$$inline_308_status$$.y < $buggyGeckoSubPixelPos$$inline_318_left$$inline_446_opt_viewport_right$$inline_481$$.top && $arg1$$inline_315_opt_overflow$$1_overflow$$inline_311_right$$inline_447_top$$inline_482_y$$inline_317$$ & 4) {
        $JSCompiler_temp$$27_pos$$inline_308_status$$.y = $buggyGeckoSubPixelPos$$inline_318_left$$inline_446_opt_viewport_right$$inline_481$$.top, $bottom$$inline_483_opt_margin$$1_status$$inline_312_top$$inline_448$$ |= 2
      }
      if($JSCompiler_temp$$27_pos$$inline_308_status$$.y >= $buggyGeckoSubPixelPos$$inline_318_left$$inline_446_opt_viewport_right$$inline_481$$.top && $JSCompiler_temp$$27_pos$$inline_308_status$$.y + $opt_preferredSize$$1_size$$14$$.height > $buggyGeckoSubPixelPos$$inline_318_left$$inline_446_opt_viewport_right$$inline_481$$.bottom && $arg1$$inline_315_opt_overflow$$1_overflow$$inline_311_right$$inline_447_top$$inline_482_y$$inline_317$$ & 32) {
        $opt_preferredSize$$1_size$$14$$.height = Math.max($opt_preferredSize$$1_size$$14$$.height - ($JSCompiler_temp$$27_pos$$inline_308_status$$.y + $opt_preferredSize$$1_size$$14$$.height - $buggyGeckoSubPixelPos$$inline_318_left$$inline_446_opt_viewport_right$$inline_481$$.bottom), 0), $bottom$$inline_483_opt_margin$$1_status$$inline_312_top$$inline_448$$ |= 8
      }
      if($JSCompiler_temp$$27_pos$$inline_308_status$$.y + $opt_preferredSize$$1_size$$14$$.height > $buggyGeckoSubPixelPos$$inline_318_left$$inline_446_opt_viewport_right$$inline_481$$.bottom && $arg1$$inline_315_opt_overflow$$1_overflow$$inline_311_right$$inline_447_top$$inline_482_y$$inline_317$$ & 4) {
        $JSCompiler_temp$$27_pos$$inline_308_status$$.y = Math.max($buggyGeckoSubPixelPos$$inline_318_left$$inline_446_opt_viewport_right$$inline_481$$.bottom - $opt_preferredSize$$1_size$$14$$.height, $buggyGeckoSubPixelPos$$inline_318_left$$inline_446_opt_viewport_right$$inline_481$$.top), $bottom$$inline_483_opt_margin$$1_status$$inline_312_top$$inline_448$$ |= 2
      }
      $arg1$$inline_315_opt_overflow$$1_overflow$$inline_311_right$$inline_447_top$$inline_482_y$$inline_317$$ & 8 && ($bottom$$inline_483_opt_margin$$1_status$$inline_312_top$$inline_448$$ |= ($JSCompiler_temp$$27_pos$$inline_308_status$$.y < $buggyGeckoSubPixelPos$$inline_318_left$$inline_446_opt_viewport_right$$inline_481$$.top ? 64 : 0) | ($JSCompiler_temp$$27_pos$$inline_308_status$$.y + $opt_preferredSize$$1_size$$14$$.height > $buggyGeckoSubPixelPos$$inline_318_left$$inline_446_opt_viewport_right$$inline_481$$.bottom ? 
      128 : 0));
      $JSCompiler_temp$$27_pos$$inline_308_status$$ = $bottom$$inline_483_opt_margin$$1_status$$inline_312_top$$inline_448$$
    }else {
      $JSCompiler_temp$$27_pos$$inline_308_status$$ = 256
    }
    if($JSCompiler_temp$$27_pos$$inline_308_status$$ & 496) {
      return $JSCompiler_temp$$27_pos$$inline_308_status$$
    }
  }
  $arg1$$inline_315_opt_overflow$$1_overflow$$inline_311_right$$inline_447_top$$inline_482_y$$inline_317$$ = $absolutePos$$1_isCss1CompatMode$$inline_322_left$$inline_480_paddingBox$$inline_324_x$$inline_316$$;
  $buggyGeckoSubPixelPos$$inline_318_left$$inline_446_opt_viewport_right$$inline_481$$ = $goog$userAgent$GECKO$$ && ($goog$userAgent$detectedMac_$$ || $goog$userAgent$X11$$) && $goog$userAgent$isVersion$$("1.9");
  $arg1$$inline_315_opt_overflow$$1_overflow$$inline_311_right$$inline_447_top$$inline_482_y$$inline_317$$ instanceof $goog$math$Coordinate$$ ? ($absolutePos$$1_isCss1CompatMode$$inline_322_left$$inline_480_paddingBox$$inline_324_x$$inline_316$$ = $arg1$$inline_315_opt_overflow$$1_overflow$$inline_311_right$$inline_447_top$$inline_482_y$$inline_317$$.x, $arg1$$inline_315_opt_overflow$$1_overflow$$inline_311_right$$inline_447_top$$inline_482_y$$inline_317$$ = $arg1$$inline_315_opt_overflow$$1_overflow$$inline_311_right$$inline_447_top$$inline_482_y$$inline_317$$.y) : 
  ($absolutePos$$1_isCss1CompatMode$$inline_322_left$$inline_480_paddingBox$$inline_324_x$$inline_316$$ = $arg1$$inline_315_opt_overflow$$1_overflow$$inline_311_right$$inline_447_top$$inline_482_y$$inline_317$$, $arg1$$inline_315_opt_overflow$$1_overflow$$inline_311_right$$inline_447_top$$inline_482_y$$inline_317$$ = $JSCompiler_alias_VOID$$);
  $borderBox$$inline_325_bottom$$inline_449_movableElement$$1_style$$inline_453$$.style.left = $goog$style$getPixelStyleValue_$$($absolutePos$$1_isCss1CompatMode$$inline_322_left$$inline_480_paddingBox$$inline_324_x$$inline_316$$, $buggyGeckoSubPixelPos$$inline_318_left$$inline_446_opt_viewport_right$$inline_481$$);
  $borderBox$$inline_325_bottom$$inline_449_movableElement$$1_style$$inline_453$$.style.top = $goog$style$getPixelStyleValue_$$($arg1$$inline_315_opt_overflow$$1_overflow$$inline_311_right$$inline_447_top$$inline_482_y$$inline_317$$, $buggyGeckoSubPixelPos$$inline_318_left$$inline_446_opt_viewport_right$$inline_481$$);
  if(!$goog$math$Size$equals$$($elementSize_movableElementCorner$$1_style$$inline_323$$, $opt_preferredSize$$1_size$$14$$)) {
    $absolutePos$$1_isCss1CompatMode$$inline_322_left$$inline_480_paddingBox$$inline_324_x$$inline_316$$ = $JSCompiler_StaticMethods_isCss1CompatMode$$($goog$dom$getDomHelper$$($goog$dom$getOwnerDocument$$($borderBox$$inline_325_bottom$$inline_449_movableElement$$1_style$$inline_453$$))), $goog$userAgent$IE$$ && (!$absolutePos$$1_isCss1CompatMode$$inline_322_left$$inline_480_paddingBox$$inline_324_x$$inline_316$$ || !$goog$userAgent$isVersion$$("8")) ? ($elementSize_movableElementCorner$$1_style$$inline_323$$ = 
    $borderBox$$inline_325_bottom$$inline_449_movableElement$$1_style$$inline_453$$.style, $absolutePos$$1_isCss1CompatMode$$inline_322_left$$inline_480_paddingBox$$inline_324_x$$inline_316$$ ? ($goog$userAgent$IE$$ ? ($absolutePos$$1_isCss1CompatMode$$inline_322_left$$inline_480_paddingBox$$inline_324_x$$inline_316$$ = $goog$style$getIePixelValue_$$($borderBox$$inline_325_bottom$$inline_449_movableElement$$1_style$$inline_453$$, $goog$style$getCascadedStyle$$($borderBox$$inline_325_bottom$$inline_449_movableElement$$1_style$$inline_453$$, 
    "paddingLeft")), $buggyGeckoSubPixelPos$$inline_318_left$$inline_446_opt_viewport_right$$inline_481$$ = $goog$style$getIePixelValue_$$($borderBox$$inline_325_bottom$$inline_449_movableElement$$1_style$$inline_453$$, $goog$style$getCascadedStyle$$($borderBox$$inline_325_bottom$$inline_449_movableElement$$1_style$$inline_453$$, "paddingRight")), $arg1$$inline_315_opt_overflow$$1_overflow$$inline_311_right$$inline_447_top$$inline_482_y$$inline_317$$ = $goog$style$getIePixelValue_$$($borderBox$$inline_325_bottom$$inline_449_movableElement$$1_style$$inline_453$$, 
    $goog$style$getCascadedStyle$$($borderBox$$inline_325_bottom$$inline_449_movableElement$$1_style$$inline_453$$, "paddingTop")), $bottom$$inline_483_opt_margin$$1_status$$inline_312_top$$inline_448$$ = $goog$style$getIePixelValue_$$($borderBox$$inline_325_bottom$$inline_449_movableElement$$1_style$$inline_453$$, $goog$style$getCascadedStyle$$($borderBox$$inline_325_bottom$$inline_449_movableElement$$1_style$$inline_453$$, "paddingBottom")), $absolutePos$$1_isCss1CompatMode$$inline_322_left$$inline_480_paddingBox$$inline_324_x$$inline_316$$ = 
    new $goog$math$Box$$($arg1$$inline_315_opt_overflow$$1_overflow$$inline_311_right$$inline_447_top$$inline_482_y$$inline_317$$, $buggyGeckoSubPixelPos$$inline_318_left$$inline_446_opt_viewport_right$$inline_481$$, $bottom$$inline_483_opt_margin$$1_status$$inline_312_top$$inline_448$$, $absolutePos$$1_isCss1CompatMode$$inline_322_left$$inline_480_paddingBox$$inline_324_x$$inline_316$$)) : ($absolutePos$$1_isCss1CompatMode$$inline_322_left$$inline_480_paddingBox$$inline_324_x$$inline_316$$ = $goog$style$getComputedStyle$$($borderBox$$inline_325_bottom$$inline_449_movableElement$$1_style$$inline_453$$, 
    "paddingLeft"), $buggyGeckoSubPixelPos$$inline_318_left$$inline_446_opt_viewport_right$$inline_481$$ = $goog$style$getComputedStyle$$($borderBox$$inline_325_bottom$$inline_449_movableElement$$1_style$$inline_453$$, "paddingRight"), $arg1$$inline_315_opt_overflow$$1_overflow$$inline_311_right$$inline_447_top$$inline_482_y$$inline_317$$ = $goog$style$getComputedStyle$$($borderBox$$inline_325_bottom$$inline_449_movableElement$$1_style$$inline_453$$, "paddingTop"), $bottom$$inline_483_opt_margin$$1_status$$inline_312_top$$inline_448$$ = 
    $goog$style$getComputedStyle$$($borderBox$$inline_325_bottom$$inline_449_movableElement$$1_style$$inline_453$$, "paddingBottom"), $absolutePos$$1_isCss1CompatMode$$inline_322_left$$inline_480_paddingBox$$inline_324_x$$inline_316$$ = new $goog$math$Box$$(parseFloat($arg1$$inline_315_opt_overflow$$1_overflow$$inline_311_right$$inline_447_top$$inline_482_y$$inline_317$$), parseFloat($buggyGeckoSubPixelPos$$inline_318_left$$inline_446_opt_viewport_right$$inline_481$$), parseFloat($bottom$$inline_483_opt_margin$$1_status$$inline_312_top$$inline_448$$), 
    parseFloat($absolutePos$$1_isCss1CompatMode$$inline_322_left$$inline_480_paddingBox$$inline_324_x$$inline_316$$))), $goog$userAgent$IE$$ ? ($buggyGeckoSubPixelPos$$inline_318_left$$inline_446_opt_viewport_right$$inline_481$$ = $goog$style$getIePixelBorder_$$($borderBox$$inline_325_bottom$$inline_449_movableElement$$1_style$$inline_453$$, "borderLeft"), $arg1$$inline_315_opt_overflow$$1_overflow$$inline_311_right$$inline_447_top$$inline_482_y$$inline_317$$ = $goog$style$getIePixelBorder_$$($borderBox$$inline_325_bottom$$inline_449_movableElement$$1_style$$inline_453$$, 
    "borderRight"), $bottom$$inline_483_opt_margin$$1_status$$inline_312_top$$inline_448$$ = $goog$style$getIePixelBorder_$$($borderBox$$inline_325_bottom$$inline_449_movableElement$$1_style$$inline_453$$, "borderTop"), $borderBox$$inline_325_bottom$$inline_449_movableElement$$1_style$$inline_453$$ = $goog$style$getIePixelBorder_$$($borderBox$$inline_325_bottom$$inline_449_movableElement$$1_style$$inline_453$$, "borderBottom"), $borderBox$$inline_325_bottom$$inline_449_movableElement$$1_style$$inline_453$$ = 
    new $goog$math$Box$$($bottom$$inline_483_opt_margin$$1_status$$inline_312_top$$inline_448$$, $arg1$$inline_315_opt_overflow$$1_overflow$$inline_311_right$$inline_447_top$$inline_482_y$$inline_317$$, $borderBox$$inline_325_bottom$$inline_449_movableElement$$1_style$$inline_453$$, $buggyGeckoSubPixelPos$$inline_318_left$$inline_446_opt_viewport_right$$inline_481$$)) : ($buggyGeckoSubPixelPos$$inline_318_left$$inline_446_opt_viewport_right$$inline_481$$ = $goog$style$getComputedStyle$$($borderBox$$inline_325_bottom$$inline_449_movableElement$$1_style$$inline_453$$, 
    "borderLeftWidth"), $arg1$$inline_315_opt_overflow$$1_overflow$$inline_311_right$$inline_447_top$$inline_482_y$$inline_317$$ = $goog$style$getComputedStyle$$($borderBox$$inline_325_bottom$$inline_449_movableElement$$1_style$$inline_453$$, "borderRightWidth"), $bottom$$inline_483_opt_margin$$1_status$$inline_312_top$$inline_448$$ = $goog$style$getComputedStyle$$($borderBox$$inline_325_bottom$$inline_449_movableElement$$1_style$$inline_453$$, "borderTopWidth"), $borderBox$$inline_325_bottom$$inline_449_movableElement$$1_style$$inline_453$$ = 
    $goog$style$getComputedStyle$$($borderBox$$inline_325_bottom$$inline_449_movableElement$$1_style$$inline_453$$, "borderBottomWidth"), $borderBox$$inline_325_bottom$$inline_449_movableElement$$1_style$$inline_453$$ = new $goog$math$Box$$(parseFloat($bottom$$inline_483_opt_margin$$1_status$$inline_312_top$$inline_448$$), parseFloat($arg1$$inline_315_opt_overflow$$1_overflow$$inline_311_right$$inline_447_top$$inline_482_y$$inline_317$$), parseFloat($borderBox$$inline_325_bottom$$inline_449_movableElement$$1_style$$inline_453$$), 
    parseFloat($buggyGeckoSubPixelPos$$inline_318_left$$inline_446_opt_viewport_right$$inline_481$$))), $elementSize_movableElementCorner$$1_style$$inline_323$$.pixelWidth = $opt_preferredSize$$1_size$$14$$.width - $borderBox$$inline_325_bottom$$inline_449_movableElement$$1_style$$inline_453$$.left - $absolutePos$$1_isCss1CompatMode$$inline_322_left$$inline_480_paddingBox$$inline_324_x$$inline_316$$.left - $absolutePos$$1_isCss1CompatMode$$inline_322_left$$inline_480_paddingBox$$inline_324_x$$inline_316$$.right - 
    $borderBox$$inline_325_bottom$$inline_449_movableElement$$1_style$$inline_453$$.right, $elementSize_movableElementCorner$$1_style$$inline_323$$.pixelHeight = $opt_preferredSize$$1_size$$14$$.height - $borderBox$$inline_325_bottom$$inline_449_movableElement$$1_style$$inline_453$$.top - $absolutePos$$1_isCss1CompatMode$$inline_322_left$$inline_480_paddingBox$$inline_324_x$$inline_316$$.top - $absolutePos$$1_isCss1CompatMode$$inline_322_left$$inline_480_paddingBox$$inline_324_x$$inline_316$$.bottom - 
    $borderBox$$inline_325_bottom$$inline_449_movableElement$$1_style$$inline_453$$.bottom) : ($elementSize_movableElementCorner$$1_style$$inline_323$$.pixelWidth = $opt_preferredSize$$1_size$$14$$.width, $elementSize_movableElementCorner$$1_style$$inline_323$$.pixelHeight = $opt_preferredSize$$1_size$$14$$.height)) : ($borderBox$$inline_325_bottom$$inline_449_movableElement$$1_style$$inline_453$$ = $borderBox$$inline_325_bottom$$inline_449_movableElement$$1_style$$inline_453$$.style, $goog$userAgent$GECKO$$ ? 
    $borderBox$$inline_325_bottom$$inline_449_movableElement$$1_style$$inline_453$$.MozBoxSizing = "border-box" : $goog$userAgent$WEBKIT$$ ? $borderBox$$inline_325_bottom$$inline_449_movableElement$$1_style$$inline_453$$.WebkitBoxSizing = "border-box" : $borderBox$$inline_325_bottom$$inline_449_movableElement$$1_style$$inline_453$$.boxSizing = "border-box", $borderBox$$inline_325_bottom$$inline_449_movableElement$$1_style$$inline_453$$.width = Math.max($opt_preferredSize$$1_size$$14$$.width, 0) + 
    "px", $borderBox$$inline_325_bottom$$inline_449_movableElement$$1_style$$inline_453$$.height = Math.max($opt_preferredSize$$1_size$$14$$.height, 0) + "px")
  }
  return $JSCompiler_temp$$27_pos$$inline_308_status$$
}
;function $goog$positioning$AbstractPosition$$() {
}
$goog$positioning$AbstractPosition$$.prototype.$reposition$ = function $$goog$positioning$AbstractPosition$$$$$reposition$$() {
};
function $goog$positioning$ViewportPosition$$($arg1$$1$$, $opt_arg2$$1$$) {
  this.$coordinate$ = $arg1$$1$$ instanceof $goog$math$Coordinate$$ ? $arg1$$1$$ : new $goog$math$Coordinate$$($arg1$$1$$, $opt_arg2$$1$$)
}
$goog$inherits$$($goog$positioning$ViewportPosition$$, $goog$positioning$AbstractPosition$$);
$goog$positioning$ViewportPosition$$.prototype.$reposition$ = function $$goog$positioning$ViewportPosition$$$$$reposition$$($element$$91$$, $popupCorner$$, $opt_margin$$3$$, $opt_preferredSize$$3$$) {
  $goog$positioning$positionAtAnchor$$($goog$style$getClientViewportElement$$($element$$91$$), 0, $element$$91$$, $popupCorner$$, this.$coordinate$, $opt_margin$$3$$, $JSCompiler_alias_NULL$$, $opt_preferredSize$$3$$)
};
function $goog$positioning$AnchoredPosition$$($anchorElement$$1$$, $corner$$7$$) {
  this.element = $anchorElement$$1$$;
  this.$corner$ = $corner$$7$$
}
$goog$inherits$$($goog$positioning$AnchoredPosition$$, $goog$positioning$AbstractPosition$$);
$goog$positioning$AnchoredPosition$$.prototype.$reposition$ = function $$goog$positioning$AnchoredPosition$$$$$reposition$$($movableElement$$3$$, $movableCorner$$, $opt_margin$$4$$) {
  $goog$positioning$positionAtAnchor$$(this.element, this.$corner$, $movableElement$$3$$, $movableCorner$$, $JSCompiler_alias_VOID$$, $opt_margin$$4$$)
};
function $goog$ui$Popup$$($opt_element$$2$$, $opt_position$$) {
  this.$popupCorner_$ = 4;
  this.$position_$ = $opt_position$$ || $JSCompiler_alias_VOID$$;
  $goog$ui$PopupBase$$.call(this, $opt_element$$2$$)
}
$goog$inherits$$($goog$ui$Popup$$, $goog$ui$PopupBase$$);
$goog$ui$Popup$$.prototype.$setPosition$ = function $$goog$ui$Popup$$$$$setPosition$$($position$$1$$) {
  this.$position_$ = $position$$1$$ || $JSCompiler_alias_VOID$$;
  this.$isVisible_$ && this.$reposition$()
};
$goog$ui$Popup$$.prototype.$reposition$ = function $$goog$ui$Popup$$$$$reposition$$() {
  if(this.$position_$) {
    var $hideForPositioning$$ = !this.$isVisible_$ && "move_offscreen" != this.$type_$, $el$$32$$ = this.$getElement$();
    if($hideForPositioning$$) {
      $el$$32$$.style.visibility = "hidden", $goog$style$showElement$$($el$$32$$, $JSCompiler_alias_TRUE$$)
    }
    this.$position_$.$reposition$($el$$32$$, this.$popupCorner_$, this.$margin_$);
    $hideForPositioning$$ && $goog$style$showElement$$($el$$32$$, $JSCompiler_alias_FALSE$$)
  }
};
function $goog$ui$Tooltip$$($element$$inline_455_opt_el$$7$$, $opt_str$$2$$, $child$$inline_486_opt_domHelper$$5$$) {
  this.$dom_$ = $child$$inline_486_opt_domHelper$$5$$ || ($element$$inline_455_opt_el$$7$$ ? $goog$dom$getDomHelper$$($goog$dom$getElement$$($element$$inline_455_opt_el$$7$$)) : $goog$dom$getDomHelper$$());
  $goog$ui$Popup$$.call(this, this.$dom_$.$createDom$("div", {style:"position:absolute;display:none;"}));
  this.$cursorPosition$ = new $goog$math$Coordinate$$(1, 1);
  this.$elements_$ = new $goog$structs$Set$$;
  $element$$inline_455_opt_el$$7$$ && $JSCompiler_StaticMethods_attach$$(this, $element$$inline_455_opt_el$$7$$);
  if($opt_str$$2$$ != $JSCompiler_alias_NULL$$) {
    if($element$$inline_455_opt_el$$7$$ = this.$getElement$(), "textContent" in $element$$inline_455_opt_el$$7$$) {
      $element$$inline_455_opt_el$$7$$.textContent = $opt_str$$2$$
    }else {
      if($element$$inline_455_opt_el$$7$$.firstChild && 3 == $element$$inline_455_opt_el$$7$$.firstChild.nodeType) {
        for(;$element$$inline_455_opt_el$$7$$.lastChild != $element$$inline_455_opt_el$$7$$.firstChild;) {
          $element$$inline_455_opt_el$$7$$.removeChild($element$$inline_455_opt_el$$7$$.lastChild)
        }
        $element$$inline_455_opt_el$$7$$.firstChild.data = $opt_str$$2$$
      }else {
        for(;$child$$inline_486_opt_domHelper$$5$$ = $element$$inline_455_opt_el$$7$$.firstChild;) {
          $element$$inline_455_opt_el$$7$$.removeChild($child$$inline_486_opt_domHelper$$5$$)
        }
        $element$$inline_455_opt_el$$7$$.appendChild($goog$dom$getOwnerDocument$$($element$$inline_455_opt_el$$7$$).createTextNode($opt_str$$2$$))
      }
    }
  }
}
$goog$inherits$$($goog$ui$Tooltip$$, $goog$ui$Popup$$);
var $goog$ui$Tooltip$activeInstances_$$ = [];
$JSCompiler_prototypeAlias$$ = $goog$ui$Tooltip$$.prototype;
$JSCompiler_prototypeAlias$$.$activeEl_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.className = "goog-tooltip";
$JSCompiler_prototypeAlias$$.$showDelayMs_$ = 500;
$JSCompiler_prototypeAlias$$.$hideDelayMs_$ = 0;
$JSCompiler_prototypeAlias$$.$getDomHelper$ = $JSCompiler_get$$("$dom_$");
function $JSCompiler_StaticMethods_attach$$($JSCompiler_StaticMethods_attach$self$$, $el$$33$$) {
  $el$$33$$ = $goog$dom$getElement$$($el$$33$$);
  $JSCompiler_StaticMethods_attach$self$$.$elements_$.add($el$$33$$);
  $goog$events$listen$$($el$$33$$, "mouseover", $JSCompiler_StaticMethods_attach$self$$.$handleMouseOver$, $JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_attach$self$$);
  $goog$events$listen$$($el$$33$$, "mouseout", $JSCompiler_StaticMethods_attach$self$$.$handleMouseOutAndBlur$, $JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_attach$self$$);
  $goog$events$listen$$($el$$33$$, "mousemove", $JSCompiler_StaticMethods_attach$self$$.$handleMouseMove$, $JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_attach$self$$);
  $goog$events$listen$$($el$$33$$, "focus", $JSCompiler_StaticMethods_attach$self$$.$handleFocus$, $JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_attach$self$$);
  $goog$events$listen$$($el$$33$$, "blur", $JSCompiler_StaticMethods_attach$self$$.$handleMouseOutAndBlur$, $JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_attach$self$$)
}
$JSCompiler_prototypeAlias$$.detach = function $$JSCompiler_prototypeAlias$$$detach$($el$$34_opt_el$$8$$) {
  if($el$$34_opt_el$$8$$) {
    $el$$34_opt_el$$8$$ = $goog$dom$getElement$$($el$$34_opt_el$$8$$), $JSCompiler_StaticMethods_detachElement_$$(this, $el$$34_opt_el$$8$$), this.$elements_$.remove($el$$34_opt_el$$8$$)
  }else {
    for(var $a$$57$$ = this.$elements_$.$getValues$(), $i$$159$$ = 0;$el$$34_opt_el$$8$$ = $a$$57$$[$i$$159$$];$i$$159$$++) {
      $JSCompiler_StaticMethods_detachElement_$$(this, $el$$34_opt_el$$8$$)
    }
    this.$elements_$.clear()
  }
};
function $JSCompiler_StaticMethods_detachElement_$$($JSCompiler_StaticMethods_detachElement_$self$$, $el$$35$$) {
  $goog$events$unlisten$$($el$$35$$, "mouseover", $JSCompiler_StaticMethods_detachElement_$self$$.$handleMouseOver$, $JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_detachElement_$self$$);
  $goog$events$unlisten$$($el$$35$$, "mouseout", $JSCompiler_StaticMethods_detachElement_$self$$.$handleMouseOutAndBlur$, $JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_detachElement_$self$$);
  $goog$events$unlisten$$($el$$35$$, "mousemove", $JSCompiler_StaticMethods_detachElement_$self$$.$handleMouseMove$, $JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_detachElement_$self$$);
  $goog$events$unlisten$$($el$$35$$, "focus", $JSCompiler_StaticMethods_detachElement_$self$$.$handleFocus$, $JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_detachElement_$self$$);
  $goog$events$unlisten$$($el$$35$$, "blur", $JSCompiler_StaticMethods_detachElement_$self$$.$handleMouseOutAndBlur$, $JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_detachElement_$self$$)
}
$JSCompiler_prototypeAlias$$.$setElement$ = function $$JSCompiler_prototypeAlias$$$$setElement$$($el$$36$$) {
  var $body$$5_oldElement$$ = this.$getElement$();
  $body$$5_oldElement$$ && $goog$dom$removeNode$$($body$$5_oldElement$$);
  $goog$ui$Tooltip$$.$superClass_$.$setElement$.call(this, $el$$36$$);
  if($el$$36$$) {
    $body$$5_oldElement$$ = this.$dom_$.$document_$.body, $body$$5_oldElement$$.insertBefore($el$$36$$, $body$$5_oldElement$$.lastChild)
  }
};
$JSCompiler_prototypeAlias$$.$onBeforeShow$ = function $$JSCompiler_prototypeAlias$$$$onBeforeShow$$() {
  if(!$goog$ui$PopupBase$$.prototype.$onBeforeShow$.call(this)) {
    return $JSCompiler_alias_FALSE$$
  }
  if(this.anchor) {
    for(var $element$$94_tt$$, $i$$160$$ = 0;$element$$94_tt$$ = $goog$ui$Tooltip$activeInstances_$$[$i$$160$$];$i$$160$$++) {
      $goog$dom$contains$$($element$$94_tt$$.$getElement$(), this.anchor) || $element$$94_tt$$.$setVisible$($JSCompiler_alias_FALSE$$)
    }
  }
  0 <= $goog$array$indexOf$$($goog$ui$Tooltip$activeInstances_$$, this) || $goog$ui$Tooltip$activeInstances_$$.push(this);
  $element$$94_tt$$ = this.$getElement$();
  $element$$94_tt$$.className = this.className;
  $JSCompiler_StaticMethods_clearHideTimer$$(this);
  $goog$events$listen$$($element$$94_tt$$, "mouseover", this.$handleTooltipMouseOver$, $JSCompiler_alias_FALSE$$, this);
  $goog$events$listen$$($element$$94_tt$$, "mouseout", this.$handleTooltipMouseOut$, $JSCompiler_alias_FALSE$$, this);
  $JSCompiler_StaticMethods_clearShowTimer$$(this);
  return $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.$onHide_$ = function $$JSCompiler_prototypeAlias$$$$onHide_$$() {
  $goog$array$remove$$($goog$ui$Tooltip$activeInstances_$$, this);
  for(var $element$$95$$ = this.$getElement$(), $tt$$1$$, $i$$161$$ = 0;$tt$$1$$ = $goog$ui$Tooltip$activeInstances_$$[$i$$161$$];$i$$161$$++) {
    $tt$$1$$.anchor && $goog$dom$contains$$($element$$95$$, $tt$$1$$.anchor) && $tt$$1$$.$setVisible$($JSCompiler_alias_FALSE$$)
  }
  this.$parentTooltip_$ && $JSCompiler_StaticMethods_startHideTimer$$(this.$parentTooltip_$);
  $goog$events$unlisten$$($element$$95$$, "mouseover", this.$handleTooltipMouseOver$, $JSCompiler_alias_FALSE$$, this);
  $goog$events$unlisten$$($element$$95$$, "mouseout", this.$handleTooltipMouseOut$, $JSCompiler_alias_FALSE$$, this);
  this.anchor = $JSCompiler_alias_VOID$$;
  if(0 == (this.$showTimer$ ? this.$isVisible_$ ? 4 : 1 : this.$hideTimer$ ? 3 : this.$isVisible_$ ? 2 : 0)) {
    this.$seenInteraction_$ = $JSCompiler_alias_FALSE$$
  }
  $goog$ui$PopupBase$$.prototype.$onHide_$.call(this)
};
$JSCompiler_prototypeAlias$$.$maybeShow$ = function $$JSCompiler_prototypeAlias$$$$maybeShow$$($el$$37$$, $opt_pos$$) {
  if(this.anchor == $el$$37$$ && this.$elements_$.contains(this.anchor)) {
    if(this.$seenInteraction_$ || !this.$requireInteraction_$) {
      if(this.$setVisible$($JSCompiler_alias_FALSE$$), !this.$isVisible_$) {
        this.anchor = $el$$37$$, this.$setPosition$($opt_pos$$ || $JSCompiler_StaticMethods_getPositioningStrategy$$(this, 0)), this.$setVisible$($JSCompiler_alias_TRUE$$)
      }
    }else {
      this.anchor = $JSCompiler_alias_VOID$$
    }
  }
  this.$showTimer$ = $JSCompiler_alias_VOID$$
};
$JSCompiler_prototypeAlias$$.$maybeHide$ = function $$JSCompiler_prototypeAlias$$$$maybeHide$$($el$$40$$) {
  this.$hideTimer$ = $JSCompiler_alias_VOID$$;
  $el$$40$$ == this.anchor && (this.$activeEl_$ == $JSCompiler_alias_NULL$$ || this.$activeEl_$ != this.$getElement$() && !this.$elements_$.contains(this.$activeEl_$)) && (!this.$childTooltip_$ || !this.$childTooltip_$.$activeEl_$) && this.$setVisible$($JSCompiler_alias_FALSE$$)
};
function $JSCompiler_StaticMethods_saveCursorPosition_$$($JSCompiler_StaticMethods_saveCursorPosition_$self$$, $event$$7$$) {
  var $scroll$$1$$ = $JSCompiler_StaticMethods_getDocumentScroll$$($JSCompiler_StaticMethods_saveCursorPosition_$self$$.$dom_$);
  $JSCompiler_StaticMethods_saveCursorPosition_$self$$.$cursorPosition$.x = $event$$7$$.clientX + $scroll$$1$$.x;
  $JSCompiler_StaticMethods_saveCursorPosition_$self$$.$cursorPosition$.y = $event$$7$$.clientY + $scroll$$1$$.y
}
$JSCompiler_prototypeAlias$$.$handleMouseOver$ = function $$JSCompiler_prototypeAlias$$$$handleMouseOver$$($event$$8$$) {
  var $el$$41$$ = $JSCompiler_StaticMethods_getAnchorFromElement$$(this, $event$$8$$.target);
  this.$activeEl_$ = $el$$41$$;
  $JSCompiler_StaticMethods_clearHideTimer$$(this);
  if($el$$41$$ != this.anchor) {
    this.anchor = $el$$41$$;
    if(!this.$showTimer$) {
      this.$showTimer$ = $goog$Timer$callOnce$$($goog$bind$$(this.$maybeShow$, this, $el$$41$$, $JSCompiler_alias_VOID$$), this.$showDelayMs_$)
    }
    $JSCompiler_StaticMethods_checkForParentTooltip_$$(this);
    $JSCompiler_StaticMethods_saveCursorPosition_$$(this, $event$$8$$)
  }
};
function $JSCompiler_StaticMethods_getAnchorFromElement$$($JSCompiler_StaticMethods_getAnchorFromElement$self$$, $el$$42$$) {
  try {
    for(;$el$$42$$ && !$JSCompiler_StaticMethods_getAnchorFromElement$self$$.$elements_$.contains($el$$42$$);) {
      $el$$42$$ = $el$$42$$.parentNode
    }
    return $el$$42$$
  }catch($e$$52$$) {
    return $JSCompiler_alias_NULL$$
  }
}
$JSCompiler_prototypeAlias$$.$handleMouseMove$ = function $$JSCompiler_prototypeAlias$$$$handleMouseMove$$($event$$9$$) {
  $JSCompiler_StaticMethods_saveCursorPosition_$$(this, $event$$9$$);
  this.$seenInteraction_$ = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.$handleFocus$ = function $$JSCompiler_prototypeAlias$$$$handleFocus$$($el$$43_event$$10$$) {
  this.$activeEl_$ = $el$$43_event$$10$$ = $JSCompiler_StaticMethods_getAnchorFromElement$$(this, $el$$43_event$$10$$.target);
  this.$seenInteraction_$ = $JSCompiler_alias_TRUE$$;
  if(this.anchor != $el$$43_event$$10$$) {
    this.anchor = $el$$43_event$$10$$;
    var $pos$$9$$ = $JSCompiler_StaticMethods_getPositioningStrategy$$(this, 1);
    $JSCompiler_StaticMethods_clearHideTimer$$(this);
    if(!this.$showTimer$) {
      this.$showTimer$ = $goog$Timer$callOnce$$($goog$bind$$(this.$maybeShow$, this, $el$$43_event$$10$$, $pos$$9$$), this.$showDelayMs_$)
    }
    $JSCompiler_StaticMethods_checkForParentTooltip_$$(this)
  }
};
function $JSCompiler_StaticMethods_getPositioningStrategy$$($JSCompiler_StaticMethods_getPositioningStrategy$self$$, $activationType$$) {
  if(0 == $activationType$$) {
    var $coord$$3$$ = $JSCompiler_StaticMethods_getPositioningStrategy$self$$.$cursorPosition$.$clone$();
    return new $goog$ui$Tooltip$CursorTooltipPosition$$($coord$$3$$)
  }
  return new $goog$ui$Tooltip$ElementTooltipPosition$$($JSCompiler_StaticMethods_getPositioningStrategy$self$$.$activeEl_$)
}
function $JSCompiler_StaticMethods_checkForParentTooltip_$$($JSCompiler_StaticMethods_checkForParentTooltip_$self$$) {
  if($JSCompiler_StaticMethods_checkForParentTooltip_$self$$.anchor) {
    for(var $tt$$2$$, $i$$162$$ = 0;$tt$$2$$ = $goog$ui$Tooltip$activeInstances_$$[$i$$162$$];$i$$162$$++) {
      if($goog$dom$contains$$($tt$$2$$.$getElement$(), $JSCompiler_StaticMethods_checkForParentTooltip_$self$$.anchor)) {
        $tt$$2$$.$childTooltip_$ = $JSCompiler_StaticMethods_checkForParentTooltip_$self$$, $JSCompiler_StaticMethods_checkForParentTooltip_$self$$.$parentTooltip_$ = $tt$$2$$
      }
    }
  }
}
$JSCompiler_prototypeAlias$$.$handleMouseOutAndBlur$ = function $$JSCompiler_prototypeAlias$$$$handleMouseOutAndBlur$$($event$$11$$) {
  var $el$$44$$ = $JSCompiler_StaticMethods_getAnchorFromElement$$(this, $event$$11$$.target), $elTo$$ = $JSCompiler_StaticMethods_getAnchorFromElement$$(this, $event$$11$$.relatedTarget);
  if($el$$44$$ != $elTo$$) {
    if($el$$44$$ == this.$activeEl_$) {
      this.$activeEl_$ = $JSCompiler_alias_NULL$$
    }
    $JSCompiler_StaticMethods_clearShowTimer$$(this);
    this.$seenInteraction_$ = $JSCompiler_alias_FALSE$$;
    this.$isVisible_$ && (!$event$$11$$.relatedTarget || !$goog$dom$contains$$(this.$getElement$(), $event$$11$$.relatedTarget)) ? $JSCompiler_StaticMethods_startHideTimer$$(this) : this.anchor = $JSCompiler_alias_VOID$$
  }
};
$JSCompiler_prototypeAlias$$.$handleTooltipMouseOver$ = function $$JSCompiler_prototypeAlias$$$$handleTooltipMouseOver$$() {
  var $element$$96$$ = this.$getElement$();
  if(this.$activeEl_$ != $element$$96$$) {
    $JSCompiler_StaticMethods_clearHideTimer$$(this), this.$activeEl_$ = $element$$96$$
  }
};
$JSCompiler_prototypeAlias$$.$handleTooltipMouseOut$ = function $$JSCompiler_prototypeAlias$$$$handleTooltipMouseOut$$($event$$13$$) {
  var $element$$97$$ = this.$getElement$();
  if(this.$activeEl_$ == $element$$97$$ && (!$event$$13$$.relatedTarget || !$goog$dom$contains$$($element$$97$$, $event$$13$$.relatedTarget))) {
    this.$activeEl_$ = $JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_startHideTimer$$(this)
  }
};
function $JSCompiler_StaticMethods_clearShowTimer$$($JSCompiler_StaticMethods_clearShowTimer$self$$) {
  if($JSCompiler_StaticMethods_clearShowTimer$self$$.$showTimer$) {
    $goog$Timer$defaultTimerObject$$.clearTimeout($JSCompiler_StaticMethods_clearShowTimer$self$$.$showTimer$), $JSCompiler_StaticMethods_clearShowTimer$self$$.$showTimer$ = $JSCompiler_alias_VOID$$
  }
}
function $JSCompiler_StaticMethods_startHideTimer$$($JSCompiler_StaticMethods_startHideTimer$self$$) {
  if(2 == ($JSCompiler_StaticMethods_startHideTimer$self$$.$showTimer$ ? $JSCompiler_StaticMethods_startHideTimer$self$$.$isVisible_$ ? 4 : 1 : $JSCompiler_StaticMethods_startHideTimer$self$$.$hideTimer$ ? 3 : $JSCompiler_StaticMethods_startHideTimer$self$$.$isVisible_$ ? 2 : 0)) {
    $JSCompiler_StaticMethods_startHideTimer$self$$.$hideTimer$ = $goog$Timer$callOnce$$($goog$bind$$($JSCompiler_StaticMethods_startHideTimer$self$$.$maybeHide$, $JSCompiler_StaticMethods_startHideTimer$self$$, $JSCompiler_StaticMethods_startHideTimer$self$$.anchor), $JSCompiler_StaticMethods_startHideTimer$self$$.$hideDelayMs_$)
  }
}
function $JSCompiler_StaticMethods_clearHideTimer$$($JSCompiler_StaticMethods_clearHideTimer$self$$) {
  if($JSCompiler_StaticMethods_clearHideTimer$self$$.$hideTimer$) {
    $goog$Timer$defaultTimerObject$$.clearTimeout($JSCompiler_StaticMethods_clearHideTimer$self$$.$hideTimer$), $JSCompiler_StaticMethods_clearHideTimer$self$$.$hideTimer$ = $JSCompiler_alias_VOID$$
  }
}
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  this.$setVisible$($JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods_clearShowTimer$$(this);
  this.detach();
  this.$getElement$() && $goog$dom$removeNode$$(this.$getElement$());
  this.$activeEl_$ = $JSCompiler_alias_NULL$$;
  delete this.$dom_$;
  $goog$ui$Tooltip$$.$superClass_$.$disposeInternal$.call(this)
};
function $goog$ui$Tooltip$CursorTooltipPosition$$($arg1$$6$$, $opt_arg2$$6$$) {
  $goog$positioning$ViewportPosition$$.call(this, $arg1$$6$$, $opt_arg2$$6$$)
}
$goog$inherits$$($goog$ui$Tooltip$CursorTooltipPosition$$, $goog$positioning$ViewportPosition$$);
$goog$ui$Tooltip$CursorTooltipPosition$$.prototype.$reposition$ = function $$goog$ui$Tooltip$CursorTooltipPosition$$$$$reposition$$($element$$98$$, $popupCorner$$3_viewport$$3_viewportElt$$2$$, $margin_opt_margin$$11$$) {
  $popupCorner$$3_viewport$$3_viewportElt$$2$$ = $goog$style$getClientViewportElement$$($element$$98$$);
  $popupCorner$$3_viewport$$3_viewportElt$$2$$ = $goog$style$getVisibleRectForElement$$($popupCorner$$3_viewport$$3_viewportElt$$2$$);
  $margin_opt_margin$$11$$ = $margin_opt_margin$$11$$ ? new $goog$math$Box$$($margin_opt_margin$$11$$.top + 10, $margin_opt_margin$$11$$.right, $margin_opt_margin$$11$$.bottom, $margin_opt_margin$$11$$.left + 10) : new $goog$math$Box$$(10, 0, 0, 10);
  $goog$positioning$positionAtCoordinate$$(this.$coordinate$, $element$$98$$, 4, $margin_opt_margin$$11$$, $popupCorner$$3_viewport$$3_viewportElt$$2$$, 9) & 496 && $goog$positioning$positionAtCoordinate$$(this.$coordinate$, $element$$98$$, 4, $margin_opt_margin$$11$$, $popupCorner$$3_viewport$$3_viewportElt$$2$$, 5)
};
function $goog$ui$Tooltip$ElementTooltipPosition$$($element$$99$$) {
  $goog$positioning$AnchoredPosition$$.call(this, $element$$99$$, 3)
}
$goog$inherits$$($goog$ui$Tooltip$ElementTooltipPosition$$, $goog$positioning$AnchoredPosition$$);
$goog$ui$Tooltip$ElementTooltipPosition$$.prototype.$reposition$ = function $$goog$ui$Tooltip$ElementTooltipPosition$$$$$reposition$$($element$$100$$, $popupCorner$$4$$, $opt_margin$$12$$) {
  var $offset$$30$$ = new $goog$math$Coordinate$$(10, 0);
  $goog$positioning$positionAtAnchor$$(this.element, this.$corner$, $element$$100$$, $popupCorner$$4$$, $offset$$30$$, $opt_margin$$12$$, 9) & 496 && $goog$positioning$positionAtAnchor$$(this.element, 2, $element$$100$$, 1, $offset$$30$$, $opt_margin$$12$$, 5)
};
function $goog$events$MouseWheelHandler$$($element$$101$$) {
  this.$element_$ = $element$$101$$;
  this.$listenKey_$ = $goog$events$listen$$(this.$element_$, $goog$userAgent$GECKO$$ ? "DOMMouseScroll" : "mousewheel", this)
}
$goog$inherits$$($goog$events$MouseWheelHandler$$, $goog$events$EventTarget$$);
$goog$events$MouseWheelHandler$$.prototype.handleEvent = function $$goog$events$MouseWheelHandler$$$$handleEvent$($be$$3_e$$53$$) {
  var $deltaX_newEvent$$ = 0, $deltaY_wheelDeltaScaleFactor$$ = 0, $detail$$2$$ = 0, $be$$3_e$$53$$ = $be$$3_e$$53$$.$event_$;
  if("mousewheel" == $be$$3_e$$53$$.type) {
    $deltaY_wheelDeltaScaleFactor$$ = 1;
    if($goog$userAgent$IE$$ || $goog$userAgent$WEBKIT$$ && ($goog$userAgent$detectedWindows_$$ || $goog$userAgent$isVersion$$("532.0"))) {
      $deltaY_wheelDeltaScaleFactor$$ = 40
    }
    $detail$$2$$ = $goog$userAgent$WEBKIT$$ && $goog$userAgent$detectedMac_$$ && 0 != -$be$$3_e$$53$$.wheelDelta % $deltaY_wheelDeltaScaleFactor$$ ? -$be$$3_e$$53$$.wheelDelta : -$be$$3_e$$53$$.wheelDelta / $deltaY_wheelDeltaScaleFactor$$;
    $goog$isDef$$($be$$3_e$$53$$.wheelDeltaX) ? ($deltaX_newEvent$$ = $goog$userAgent$WEBKIT$$ && $goog$userAgent$detectedMac_$$ && 0 != -$be$$3_e$$53$$.wheelDeltaX % $deltaY_wheelDeltaScaleFactor$$ ? -$be$$3_e$$53$$.wheelDeltaX : -$be$$3_e$$53$$.wheelDeltaX / $deltaY_wheelDeltaScaleFactor$$, $deltaY_wheelDeltaScaleFactor$$ = $goog$userAgent$WEBKIT$$ && $goog$userAgent$detectedMac_$$ && 0 != -$be$$3_e$$53$$.wheelDeltaY % $deltaY_wheelDeltaScaleFactor$$ ? -$be$$3_e$$53$$.wheelDeltaY : -$be$$3_e$$53$$.wheelDeltaY / 
    $deltaY_wheelDeltaScaleFactor$$) : $deltaY_wheelDeltaScaleFactor$$ = $detail$$2$$
  }else {
    $detail$$2$$ = $be$$3_e$$53$$.detail, 100 < $detail$$2$$ ? $detail$$2$$ = 3 : -100 > $detail$$2$$ && ($detail$$2$$ = -3), $goog$isDef$$($be$$3_e$$53$$.axis) && $be$$3_e$$53$$.axis === $be$$3_e$$53$$.HORIZONTAL_AXIS ? $deltaX_newEvent$$ = $detail$$2$$ : $deltaY_wheelDeltaScaleFactor$$ = $detail$$2$$
  }
  $goog$isNumber$$(this.$maxDeltaX_$) && ($deltaX_newEvent$$ = Math.min(Math.max($deltaX_newEvent$$, -this.$maxDeltaX_$), this.$maxDeltaX_$));
  $goog$isNumber$$(this.$maxDeltaY_$) && ($deltaY_wheelDeltaScaleFactor$$ = Math.min(Math.max($deltaY_wheelDeltaScaleFactor$$, -this.$maxDeltaY_$), this.$maxDeltaY_$));
  $deltaX_newEvent$$ = new $goog$events$MouseWheelEvent$$($detail$$2$$, $be$$3_e$$53$$, $deltaX_newEvent$$, $deltaY_wheelDeltaScaleFactor$$);
  try {
    this.dispatchEvent($deltaX_newEvent$$)
  }finally {
    $deltaX_newEvent$$.$dispose$()
  }
};
$goog$events$MouseWheelHandler$$.prototype.$disposeInternal$ = function $$goog$events$MouseWheelHandler$$$$$disposeInternal$$() {
  $goog$events$MouseWheelHandler$$.$superClass_$.$disposeInternal$.call(this);
  $goog$events$unlistenByKey$$(this.$listenKey_$);
  delete this.$listenKey_$
};
function $goog$events$MouseWheelEvent$$($detail$$3$$, $browserEvent$$1$$, $deltaX$$1$$, $deltaY$$1$$) {
  $browserEvent$$1$$ && this.$init$($browserEvent$$1$$, $JSCompiler_alias_VOID$$);
  this.type = "mousewheel";
  this.detail = $detail$$3$$;
  this.$deltaX$ = $deltaX$$1$$;
  this.$deltaY$ = $deltaY$$1$$
}
$goog$inherits$$($goog$events$MouseWheelEvent$$, $goog$events$BrowserEvent$$);
$goog$userAgent$IE$$ || $goog$userAgent$WEBKIT$$ && $goog$userAgent$isVersion$$("525");
function $X$interactor$$($element$$103$$) {
  (!$goog$isDefAndNotNull$$($element$$103$$) || !($element$$103$$ instanceof Element)) && $JSCompiler_alias_THROW$$(new $X$exception$$("Could not add interactor to the given element."));
  $X$base$$.call(this);
  this.$_className$ = "interactor";
  this.$_element$ = $element$$103$$;
  this.$_mouseWheelHandler$ = this.$_mouseOutListener$ = this.$_mouseMoveListener$ = this.$_mouseUpListener$ = this.$_mouseDownListener$ = this.$_mouseWheelListener$ = $JSCompiler_alias_NULL$$;
  this.$_mouseInside$ = $JSCompiler_alias_TRUE$$;
  this.$_rightButtonDown$ = this.$_middleButtonDown$ = this.$_leftButtonDown$ = $JSCompiler_alias_FALSE$$;
  this.$_lastMousePosition$ = new $goog$math$Vec2$$(0, 0)
}
$goog$inherits$$($X$interactor$$, $X$base$$);
$JSCompiler_prototypeAlias$$ = $X$interactor$$.prototype;
$JSCompiler_prototypeAlias$$.$config$ = {$MOUSEWHEEL_ENABLED$:$JSCompiler_alias_TRUE$$, $MOUSECLICKS_ENABLED$:$JSCompiler_alias_TRUE$$, $KEYBOARD_ENABLED$:$JSCompiler_alias_TRUE$$, $HOVERING_ENABLED$:$JSCompiler_alias_TRUE$$, $CONTEXTMENU_ENABLED$:$JSCompiler_alias_FALSE$$};
$JSCompiler_prototypeAlias$$.$init$ = function $$JSCompiler_prototypeAlias$$$$init$$() {
  this.$config$.$MOUSEWHEEL_ENABLED$ ? (this.$_mouseWheelHandler$ = new $goog$events$MouseWheelHandler$$(this.$_element$), this.$_mouseWheelListener$ = $goog$events$listen$$(this.$_mouseWheelHandler$, "mousewheel", this.$onMouseWheel$.bind(this))) : ($goog$events$unlistenByKey$$(this.$_mouseWheelListener$), this.$_mouseWheelHandler$ = $JSCompiler_alias_NULL$$);
  this.$config$.$MOUSECLICKS_ENABLED$ ? (this.$_mouseDownListener$ = $goog$events$listen$$(this.$_element$, "mousedown", this.$onMouseDown$.bind(this)), this.$_mouseUpListener$ = $goog$events$listen$$(this.$_element$, "mouseup", this.$onMouseUp$.bind(this))) : ($goog$events$unlistenByKey$$(this.$_mouseDownListener$), $goog$events$unlistenByKey$$(this.$_mouseUpListener$));
  this.$_element$.oncontextmenu = this.$config$.$CONTEXTMENU_ENABLED$ ? $JSCompiler_alias_NULL$$ : function() {
    return $JSCompiler_alias_FALSE$$
  };
  window.onkeydown = this.$config$.$KEYBOARD_ENABLED$ ? this.$onKey$.bind(this) : $JSCompiler_alias_NULL$$;
  $goog$events$unlistenByKey$$(this.$_mouseMoveListener$);
  $goog$events$unlistenByKey$$(this.$_mouseOutListener$);
  this.$_mouseMoveListener$ = $goog$events$listen$$(this.$_element$, "mousemove", this.$onMouseMovementInside$.bind(this));
  this.$_mouseOutListener$ = $goog$events$listen$$(this.$_element$, "mouseout", this.$onMouseMovementOutside$.bind(this))
};
$JSCompiler_prototypeAlias$$.$onMouseDown$ = function $$JSCompiler_prototypeAlias$$$$onMouseDown$$($event$$15$$) {
  if(0 == $event$$15$$.button) {
    this.$_leftButtonDown$ = $JSCompiler_alias_TRUE$$
  }else {
    if(1 == $event$$15$$.button) {
      this.$_middleButtonDown$ = $JSCompiler_alias_TRUE$$
    }else {
      if(2 == $event$$15$$.button) {
        this.$_rightButtonDown$ = $JSCompiler_alias_TRUE$$
      }
    }
  }
  $JSCompiler_StaticMethods_hoverEnd_$$(this);
  $event$$15$$.preventDefault()
};
$JSCompiler_prototypeAlias$$.$onMouseUp$ = function $$JSCompiler_prototypeAlias$$$$onMouseUp$$($event$$16$$) {
  if(0 == $event$$16$$.button) {
    this.$_leftButtonDown$ = $JSCompiler_alias_FALSE$$
  }else {
    if(1 == $event$$16$$.button) {
      this.$_middleButtonDown$ = $JSCompiler_alias_FALSE$$
    }else {
      if(2 == $event$$16$$.button) {
        this.$_rightButtonDown$ = $JSCompiler_alias_FALSE$$
      }
    }
  }
  $JSCompiler_StaticMethods_hoverEnd_$$(this);
  $event$$16$$.preventDefault()
};
$JSCompiler_prototypeAlias$$.$onMouseMovementOutside$ = function $$JSCompiler_prototypeAlias$$$$onMouseMovementOutside$$($event$$17$$) {
  this.$_mouseInside$ = $JSCompiler_alias_FALSE$$;
  if(this.$config$.$KEYBOARD_ENABLED$) {
    window.onkeydown = $JSCompiler_alias_NULL$$
  }
  this.$_rightButtonDown$ = this.$_middleButtonDown$ = this.$_leftButtonDown$ = $JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods_hoverEnd_$$(this);
  this.$_lastMousePosition$ = new $goog$math$Vec2$$(0, 0);
  $event$$17$$.preventDefault()
};
$JSCompiler_prototypeAlias$$.$onMouseMovementInside$ = function $$JSCompiler_prototypeAlias$$$$onMouseMovementInside$$($distance$$6_event$$18$$) {
  this.dispatchEvent("mouseup");
  this.$_mouseInside$ = $JSCompiler_alias_TRUE$$;
  if(this.$config$.$KEYBOARD_ENABLED$ && window.onkeydown == $JSCompiler_alias_NULL$$) {
    window.onkeydown = this.$onKey$.bind(this)
  }
  $distance$$6_event$$18$$.preventDefault();
  var $e$$57_shiftDown$$ = $distance$$6_event$$18$$.shiftKey, $currentMousePosition$$ = new $goog$math$Vec2$$($distance$$6_event$$18$$.offsetX, $distance$$6_event$$18$$.offsetY), $distance$$6_event$$18$$ = this.$_lastMousePosition$.$subtract$($currentMousePosition$$);
  this.$_lastMousePosition$ = $currentMousePosition$$.$clone$();
  if(this.$config$.$HOVERING_ENABLED$) {
    (0 < Math.abs($distance$$6_event$$18$$.x) || 0 < Math.abs($distance$$6_event$$18$$.y) || this.$_middleButtonDown$ || this.$_leftButtonDown$ || this.$_rightButtonDown$) && $JSCompiler_StaticMethods_hoverEnd_$$(this), this.$_hoverTrigger$ = setTimeout(function() {
      $JSCompiler_StaticMethods_hoverEnd_$$(this);
      var $e$$58$$ = new $X$event$HoverEvent$$;
      $e$$58$$.$_x$ = $currentMousePosition$$.x;
      $e$$58$$.$_y$ = $currentMousePosition$$.y;
      this.dispatchEvent($e$$58$$);
      this.$_hoverTrigger$ = $JSCompiler_alias_NULL$$
    }.bind(this), 700)
  }
  if(2 > Math.abs($distance$$6_event$$18$$.x)) {
    $distance$$6_event$$18$$.x = 0
  }
  if(2 > Math.abs($distance$$6_event$$18$$.y)) {
    $distance$$6_event$$18$$.y = 0
  }
  if(0 != $distance$$6_event$$18$$.$magnitude$()) {
    if(this.$_leftButtonDown$ && !$e$$57_shiftDown$$) {
      $e$$57_shiftDown$$ = new $X$event$RotateEvent$$, $e$$57_shiftDown$$.$_distance$ = $distance$$6_event$$18$$, $e$$57_shiftDown$$.$_angle$ = 0, this.dispatchEvent($e$$57_shiftDown$$)
    }else {
      if(this.$_middleButtonDown$ || this.$_leftButtonDown$ && $e$$57_shiftDown$$) {
        $e$$57_shiftDown$$ = new $X$event$PanEvent$$;
        if(5 < $distance$$6_event$$18$$.x) {
          $distance$$6_event$$18$$.x = 5
        }else {
          if(-5 > $distance$$6_event$$18$$.x) {
            $distance$$6_event$$18$$.x = -5
          }
        }
        if(5 < $distance$$6_event$$18$$.y) {
          $distance$$6_event$$18$$.y = 5
        }else {
          if(-5 > $distance$$6_event$$18$$.y) {
            $distance$$6_event$$18$$.y = -5
          }
        }
        $e$$57_shiftDown$$.$_distance$ = $distance$$6_event$$18$$;
        this.dispatchEvent($e$$57_shiftDown$$)
      }else {
        if(this.$_rightButtonDown$) {
          $e$$57_shiftDown$$ = new $X$event$ZoomEvent$$, $e$$57_shiftDown$$.$_in$ = 0 < $distance$$6_event$$18$$.y, $e$$57_shiftDown$$.$_fast$ = $JSCompiler_alias_FALSE$$, this.dispatchEvent($e$$57_shiftDown$$)
        }
      }
    }
  }
};
function $JSCompiler_StaticMethods_hoverEnd_$$($JSCompiler_StaticMethods_hoverEnd_$self$$) {
  $JSCompiler_StaticMethods_hoverEnd_$self$$.$_hoverTrigger$ && clearTimeout($JSCompiler_StaticMethods_hoverEnd_$self$$.$_hoverTrigger$);
  $JSCompiler_StaticMethods_hoverEnd_$self$$.dispatchEvent(new $X$event$HoverEndEvent$$)
}
$JSCompiler_prototypeAlias$$.$onMouseWheel$ = function $$JSCompiler_prototypeAlias$$$$onMouseWheel$$($event$$19$$) {
  $JSCompiler_StaticMethods_hoverEnd_$$(this);
  $event$$19$$.preventDefault();
  var $e$$60$$ = new $X$event$ZoomEvent$$;
  if(!$goog$isDefAndNotNull$$($event$$19$$.$deltaY$)) {
    $event$$19$$.$deltaY$ = 0
  }
  $e$$60$$.$_in$ = 0 > $event$$19$$.$deltaY$;
  $e$$60$$.$_fast$ = $JSCompiler_alias_TRUE$$;
  this.dispatchEvent($e$$60$$)
};
$JSCompiler_prototypeAlias$$.$onKey$ = function $$JSCompiler_prototypeAlias$$$$onKey$$($e$$61_event$$20$$) {
  if(this.$_mouseInside$) {
    $JSCompiler_StaticMethods_hoverEnd_$$(this);
    var $alt$$ = $e$$61_event$$20$$.altKey, $ctrl_distance$$7$$ = $e$$61_event$$20$$.ctrlKey, $meta$$ = $e$$61_event$$20$$.metaKey, $shift$$ = $e$$61_event$$20$$.shiftKey, $keyCode$$4$$ = $e$$61_event$$20$$.keyCode;
    if(82 == $keyCode$$4$$ && !$alt$$ && !$ctrl_distance$$7$$ && !$meta$$ && !$shift$$) {
      $e$$61_event$$20$$.preventDefault(), $e$$61_event$$20$$ = new $X$event$ResetViewEvent$$, this.dispatchEvent($e$$61_event$$20$$)
    }else {
      if(37 <= $keyCode$$4$$ && 40 >= $keyCode$$4$$ && ($e$$61_event$$20$$.preventDefault(), $e$$61_event$$20$$ = $shift$$ ? new $X$event$PanEvent$$ : $alt$$ ? new $X$event$ZoomEvent$$ : new $X$event$RotateEvent$$)) {
        $ctrl_distance$$7$$ = new $goog$math$Vec2$$(0, 0);
        if(37 == $keyCode$$4$$) {
          if($ctrl_distance$$7$$.x = 5, $alt$$) {
            $e$$61_event$$20$$.$_in$ = $JSCompiler_alias_TRUE$$, $e$$61_event$$20$$.$_fast$ = $JSCompiler_alias_FALSE$$
          }
        }else {
          if(39 == $keyCode$$4$$) {
            if($ctrl_distance$$7$$.x = -5, $alt$$) {
              $e$$61_event$$20$$.$_in$ = $JSCompiler_alias_FALSE$$, $e$$61_event$$20$$.$_fast$ = $JSCompiler_alias_FALSE$$
            }
          }else {
            if(38 == $keyCode$$4$$) {
              if($ctrl_distance$$7$$.y = 5, $alt$$) {
                $e$$61_event$$20$$.$_in$ = $JSCompiler_alias_TRUE$$, $e$$61_event$$20$$.$_fast$ = $JSCompiler_alias_TRUE$$
              }
            }else {
              if(40 == $keyCode$$4$$ && ($ctrl_distance$$7$$.y = -5, $alt$$)) {
                $e$$61_event$$20$$.$_in$ = $JSCompiler_alias_FALSE$$, $e$$61_event$$20$$.$_fast$ = $JSCompiler_alias_TRUE$$
              }
            }
          }
        }
        $e$$61_event$$20$$.$_distance$ = $ctrl_distance$$7$$;
        this.dispatchEvent($e$$61_event$$20$$)
      }
    }
  }
};
$goog$exportSymbol$$("X.interactor", $X$interactor$$);
$goog$exportSymbol$$("X.interactor.prototype.config", $X$interactor$$.prototype.$config$);
$goog$exportSymbol$$("X.interactor.prototype.init", $X$interactor$$.prototype.$init$);
$goog$exportSymbol$$("X.interactor.prototype.onMouseDown", $X$interactor$$.prototype.$onMouseDown$);
$goog$exportSymbol$$("X.interactor.prototype.onMouseUp", $X$interactor$$.prototype.$onMouseUp$);
$goog$exportSymbol$$("X.interactor.prototype.onMouseMovementOutside", $X$interactor$$.prototype.$onMouseMovementOutside$);
$goog$exportSymbol$$("X.interactor.prototype.onMouseMovementInside", $X$interactor$$.prototype.$onMouseMovementInside$);
$goog$exportSymbol$$("X.interactor.prototype.onMouseWheel", $X$interactor$$.prototype.$onMouseWheel$);
$goog$exportSymbol$$("X.interactor.prototype.onKey", $X$interactor$$.prototype.$onKey$);
function $X$caption$$($parent$$26$$, $x$$78$$, $y$$50$$, $interactor$$) {
  $goog$isDefAndNotNull$$($parent$$26$$) || $JSCompiler_alias_THROW$$(new $X$exception$$("No valid parent element!"));
  (!$goog$isNumber$$($x$$78$$) || !$goog$isNumber$$($y$$50$$)) && $JSCompiler_alias_THROW$$(new $X$exception$$("Invalid coordinates."));
  (!$goog$isDefAndNotNull$$($interactor$$) || !($interactor$$ instanceof $X$interactor$$)) && $JSCompiler_alias_THROW$$(new $X$exception$$("Invalid interactor."));
  $goog$ui$Tooltip$$.call(this);
  this.$_className$ = "caption";
  this.$_parent$ = $parent$$26$$;
  this.$_x$ = $x$$78$$;
  this.$_y$ = $y$$50$$;
  this.$_interactor$ = $interactor$$;
  this.$_style$ = $JSCompiler_alias_NULL$$;
  this.$_css$ = [];
  this.$_css$ = [".x-tooltip {\n  background: #C0C0FF;\n  color: #000000;\n  border: 1px solid infotext;\n  padding: 1px;\n  font-family: sans-serif;\n}"];
  $goog$events$listenOnce$$($interactor$$, $X$event$events$HOVER_END$$, this.$kill$.bind(this));
  this.$init_$()
}
$goog$inherits$$($X$caption$$, $goog$ui$Tooltip$$);
$X$caption$$.prototype.$init_$ = function $$X$caption$$$$$init_$$() {
  this.$_parent$.style.position = "relative";
  var $head$$2$$ = document.getElementsByTagName("head")[0], $style$$15$$ = $goog$dom$createDom$$("style");
  $style$$15$$.type = "text/css";
  $style$$15$$.media = "screen";
  var $css$$1$$ = document.createTextNode(this.$_css$[0]);
  $head$$2$$.appendChild($style$$15$$);
  $style$$15$$.appendChild($css$$1$$);
  this.$_style$ = $style$$15$$;
  this.$setPosition$(new $goog$positioning$ViewportPosition$$(this.$_x$, this.$_y$));
  this.$setVisible$($JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods_attach$$(this, this.$_parent$);
  this.$getElement$().classList.add("x-tooltip")
};
$X$caption$$.prototype.$kill$ = function $$X$caption$$$$$kill$$() {
  this.$setVisible$($JSCompiler_alias_FALSE$$);
  this.$_style$ && $goog$dom$removeNode$$(this.$_style$);
  this.$getElement$() && $goog$dom$removeNode$$(this.$getElement$());
  this.$_style$ = $JSCompiler_alias_NULL$$
};
$goog$exportSymbol$$("X.caption", $X$caption$$);
$goog$exportSymbol$$("X.caption.prototype.kill", $X$caption$$.prototype.$kill$);
function $X$camera$$($width$$17$$, $height$$15$$) {
  (!$goog$isNumber$$($width$$17$$) || !$goog$isNumber$$($height$$15$$)) && $JSCompiler_alias_THROW$$(new $X$exception$$("A camera needs valid width and height values."));
  $X$base$$.call(this);
  this.$_className$ = "camera";
  this.$_fieldOfView$ = 45;
  this.$_position$ = new $goog$math$Vec3$$(0, 0, 100);
  this.$_focus$ = new $goog$math$Vec3$$(0, 0, 0);
  this.$_up$ = new $goog$math$Vec3$$(0, 1, 0);
  var $JSCompiler_temp_const$$34$$ = Float32Array, $JSCompiler_inline_result$$359_aspectRatio$$inline_362$$;
  $JSCompiler_inline_result$$359_aspectRatio$$inline_362$$ = $width$$17$$ / $height$$15$$;
  var $ymax$$inline_363$$ = 1 * Math.tan(this.$_fieldOfView$ * Math.PI / 360), $ymin$$inline_364$$ = -$ymax$$inline_363$$;
  $JSCompiler_inline_result$$359_aspectRatio$$inline_362$$ = new $X$matrix$$([[2 / ($ymax$$inline_363$$ * $JSCompiler_inline_result$$359_aspectRatio$$inline_362$$ - $ymin$$inline_364$$ * $JSCompiler_inline_result$$359_aspectRatio$$inline_362$$), 0, ($ymax$$inline_363$$ * $JSCompiler_inline_result$$359_aspectRatio$$inline_362$$ + $ymin$$inline_364$$ * $JSCompiler_inline_result$$359_aspectRatio$$inline_362$$) / ($ymax$$inline_363$$ * $JSCompiler_inline_result$$359_aspectRatio$$inline_362$$ - $ymin$$inline_364$$ * 
  $JSCompiler_inline_result$$359_aspectRatio$$inline_362$$), 0], [0, 2 / ($ymax$$inline_363$$ - $ymin$$inline_364$$), ($ymax$$inline_363$$ + $ymin$$inline_364$$) / ($ymax$$inline_363$$ - $ymin$$inline_364$$), 0], [0, 0, -10001 / 9999, -2.000200020002], [0, 0, -1, 0]]);
  this.$_perspective$ = new $JSCompiler_temp_const$$34$$($JSCompiler_inline_result$$359_aspectRatio$$inline_362$$.$flatten$());
  this.$_view$ = $JSCompiler_StaticMethods_lookAt_$$(this, this.$_position$, this.$_focus$);
  this.$_glView$ = new Float32Array(this.$_view$.$flatten$())
}
$goog$inherits$$($X$camera$$, $X$base$$);
$JSCompiler_prototypeAlias$$ = $X$camera$$.prototype;
$JSCompiler_prototypeAlias$$.$observe$ = function $$JSCompiler_prototypeAlias$$$$observe$$($interactor$$1$$) {
  (!$goog$isDefAndNotNull$$($interactor$$1$$) || !($interactor$$1$$ instanceof $X$interactor$$)) && $JSCompiler_alias_THROW$$(new $X$exception$$("Could not observe the interactor."));
  $goog$events$listen$$($interactor$$1$$, $X$event$events$PAN$$, this.$onPan$.bind(this));
  $goog$events$listen$$($interactor$$1$$, $X$event$events$ROTATE$$, this.$onRotate$.bind(this));
  $goog$events$listen$$($interactor$$1$$, $X$event$events$ZOOM$$, this.$onZoom$.bind(this))
};
$JSCompiler_prototypeAlias$$.$onZoom$ = function $$JSCompiler_prototypeAlias$$$$onZoom$$($event$$21$$) {
  $event$$21$$ instanceof $X$event$ZoomEvent$$ || $JSCompiler_alias_THROW$$(new $X$exception$$("Received no valid zoom event!"));
  $event$$21$$.$_in$ ? this.$zoomIn$($event$$21$$.$_fast$) : this.$zoomOut$($event$$21$$.$_fast$)
};
$JSCompiler_prototypeAlias$$.$onPan$ = function $$JSCompiler_prototypeAlias$$$$onPan$$($event$$22$$) {
  $event$$22$$ instanceof $X$event$PanEvent$$ || $JSCompiler_alias_THROW$$(new $X$exception$$("Received no valid pan event!"));
  this.$pan$($event$$22$$.$_distance$)
};
$JSCompiler_prototypeAlias$$.$onRotate$ = function $$JSCompiler_prototypeAlias$$$$onRotate$$($event$$23$$) {
  $event$$23$$ instanceof $X$event$RotateEvent$$ || $JSCompiler_alias_THROW$$(new $X$exception$$("Received no valid rotate event!"));
  this.rotate($event$$23$$.$_distance$)
};
$JSCompiler_prototypeAlias$$.$perspective$ = $JSCompiler_get$$("$_perspective$");
$JSCompiler_prototypeAlias$$.view = $JSCompiler_get$$("$_view$");
$JSCompiler_prototypeAlias$$.position = $JSCompiler_get$$("$_position$");
$JSCompiler_prototypeAlias$$.$setPosition$ = function $$JSCompiler_prototypeAlias$$$$setPosition$$($x$$79$$, $y$$51$$, $z$$6$$) {
  (!$goog$isNumber$$($x$$79$$) || !$goog$isNumber$$($y$$51$$) || !$goog$isNumber$$($z$$6$$)) && $JSCompiler_alias_THROW$$(new $X$exception$$("The position was invalid."));
  this.$_position$ = new $goog$math$Vec3$$($x$$79$$, $y$$51$$, $z$$6$$);
  this.reset()
};
$JSCompiler_prototypeAlias$$.reset = function $$JSCompiler_prototypeAlias$$$reset$() {
  this.$_view$ = $JSCompiler_StaticMethods_lookAt_$$(this, this.$_position$, this.$_focus$);
  this.$_glView$ = new Float32Array(this.$_view$.$flatten$())
};
$JSCompiler_prototypeAlias$$.focus = $JSCompiler_get$$("$_focus$");
$JSCompiler_prototypeAlias$$.$setFocus$ = function $$JSCompiler_prototypeAlias$$$$setFocus$$($x$$80$$, $y$$52$$, $z$$7$$) {
  (!$goog$isNumber$$($x$$80$$) || !$goog$isNumber$$($y$$52$$) || !$goog$isNumber$$($z$$7$$)) && $JSCompiler_alias_THROW$$(new $X$exception$$("The focus was invalid."));
  this.$_focus$ = new $goog$math$Vec3$$($x$$80$$, $y$$52$$, $z$$7$$);
  this.reset()
};
$JSCompiler_prototypeAlias$$.$up$ = $JSCompiler_get$$("$_up$");
$JSCompiler_prototypeAlias$$.$setUp$ = function $$JSCompiler_prototypeAlias$$$$setUp$$($x$$81$$, $y$$53$$, $z$$8$$) {
  (!$goog$isNumber$$($x$$81$$) || !$goog$isNumber$$($y$$53$$) || !$goog$isNumber$$($z$$8$$)) && $JSCompiler_alias_THROW$$(new $X$exception$$("The up-vector was invalid."));
  this.$_up$ = new $goog$math$Vec3$$($x$$81$$, $y$$53$$, $z$$8$$);
  this.reset()
};
$JSCompiler_prototypeAlias$$.$pan$ = function $$JSCompiler_prototypeAlias$$$$pan$$($distance$$8_distance3d_panMatrix$$) {
  $distance$$8_distance3d_panMatrix$$ instanceof $goog$math$Vec2$$ || $JSCompiler_alias_THROW$$(new $X$exception$$("Invalid distance vector for pan operation."));
  $distance$$8_distance3d_panMatrix$$ = new $goog$math$Vec3$$(-$distance$$8_distance3d_panMatrix$$.x, $distance$$8_distance3d_panMatrix$$.y, 0);
  $distance$$8_distance3d_panMatrix$$ = $X$matrix$createIdentityMatrix$$(4).translate($distance$$8_distance3d_panMatrix$$);
  this.$_view$ = new $X$matrix$$($distance$$8_distance3d_panMatrix$$.multiply(this.$_view$));
  this.$_glView$ = new Float32Array(this.$_view$.$flatten$());
  this.dispatchEvent(new $X$event$RenderEvent$$)
};
$JSCompiler_prototypeAlias$$.rotate = function $$JSCompiler_prototypeAlias$$$rotate$($angleY_distance$$9_rotateY$$) {
  $angleY_distance$$9_rotateY$$ instanceof $goog$math$Vec2$$ || $JSCompiler_alias_THROW$$(new $X$exception$$("Invalid distance vector for rotate operation."));
  var $angleX_rotateX$$ = -$angleY_distance$$9_rotateY$$.x / 5 * Math.PI / 180, $angleY_distance$$9_rotateY$$ = -$angleY_distance$$9_rotateY$$.y / 5 * Math.PI / 180, $identity$$2$$ = $X$matrix$createIdentityMatrix$$(4), $xAxisVector$$ = new $goog$math$Vec3$$(parseFloat($JSCompiler_StaticMethods_getValueAt$$(this.$_view$, 0, 0)), parseFloat($JSCompiler_StaticMethods_getValueAt$$(this.$_view$, 0, 1)), parseFloat($JSCompiler_StaticMethods_getValueAt$$(this.$_view$, 0, 2))), $angleX_rotateX$$ = $identity$$2$$.rotate($angleX_rotateX$$, 
  new $goog$math$Vec3$$(parseFloat($JSCompiler_StaticMethods_getValueAt$$(this.$_view$, 1, 0)), parseFloat($JSCompiler_StaticMethods_getValueAt$$(this.$_view$, 1, 1)), parseFloat($JSCompiler_StaticMethods_getValueAt$$(this.$_view$, 1, 2)))), $angleY_distance$$9_rotateY$$ = $identity$$2$$.rotate($angleY_distance$$9_rotateY$$, $xAxisVector$$);
  this.$_view$ = new $X$matrix$$(this.$_view$.multiply($angleY_distance$$9_rotateY$$.multiply($angleX_rotateX$$)));
  this.$_glView$ = new Float32Array(this.$_view$.$flatten$());
  this.dispatchEvent(new $X$event$RenderEvent$$)
};
$JSCompiler_prototypeAlias$$.$zoomIn$ = function $$JSCompiler_prototypeAlias$$$$zoomIn$$($fast_zoomMatrix_zoomVector$$) {
  var $zoomStep$$ = 20;
  $goog$isDefAndNotNull$$($fast_zoomMatrix_zoomVector$$) && !$fast_zoomMatrix_zoomVector$$ && ($zoomStep$$ = 1);
  $fast_zoomMatrix_zoomVector$$ = new $goog$math$Vec3$$(0, 0, $zoomStep$$);
  $fast_zoomMatrix_zoomVector$$ = $X$matrix$createIdentityMatrix$$(4).translate($fast_zoomMatrix_zoomVector$$);
  this.$_view$ = new $X$matrix$$($fast_zoomMatrix_zoomVector$$.multiply(this.$_view$));
  this.$_glView$ = new Float32Array(this.$_view$.$flatten$());
  this.dispatchEvent(new $X$event$RenderEvent$$)
};
$JSCompiler_prototypeAlias$$.$zoomOut$ = function $$JSCompiler_prototypeAlias$$$$zoomOut$$($fast$$1_zoomMatrix$$1_zoomVector$$1$$) {
  var $zoomStep$$1$$ = 30;
  $goog$isDefAndNotNull$$($fast$$1_zoomMatrix$$1_zoomVector$$1$$) && !$fast$$1_zoomMatrix$$1_zoomVector$$1$$ && ($zoomStep$$1$$ = 1);
  $fast$$1_zoomMatrix$$1_zoomVector$$1$$ = new $goog$math$Vec3$$(0, 0, -$zoomStep$$1$$);
  $fast$$1_zoomMatrix$$1_zoomVector$$1$$ = $X$matrix$createIdentityMatrix$$(4).translate($fast$$1_zoomMatrix$$1_zoomVector$$1$$);
  this.$_view$ = new $X$matrix$$($fast$$1_zoomMatrix$$1_zoomVector$$1$$.multiply(this.$_view$));
  this.$_glView$ = new Float32Array(this.$_view$.$flatten$());
  this.dispatchEvent(new $X$event$RenderEvent$$)
};
function $JSCompiler_StaticMethods_lookAt_$$($JSCompiler_StaticMethods_lookAt_$self_yVector$$, $cameraPosition_invertedCameraPosition$$, $targetPoint_zVector$$) {
  (!($cameraPosition_invertedCameraPosition$$ instanceof $goog$math$Vec3$$) || !($targetPoint_zVector$$ instanceof $goog$math$Vec3$$)) && $JSCompiler_alias_THROW$$(new $X$exception$$("3D vectors required for calculating the view."));
  var $matrix$$4$$ = $X$matrix$createIdentityMatrix$$(4), $targetPoint_zVector$$ = new $goog$math$Vec3$$($cameraPosition_invertedCameraPosition$$.x - $targetPoint_zVector$$.x, $cameraPosition_invertedCameraPosition$$.y - $targetPoint_zVector$$.y, $cameraPosition_invertedCameraPosition$$.$z$ - $targetPoint_zVector$$.$z$), $targetPoint_zVector$$ = $targetPoint_zVector$$.normalize(), $JSCompiler_StaticMethods_lookAt_$self_yVector$$ = $JSCompiler_StaticMethods_lookAt_$self_yVector$$.$_up$.$clone$();
  $JSCompiler_StaticMethods_lookAt_$self_yVector$$.$equals$($targetPoint_zVector$$) && ($JSCompiler_StaticMethods_lookAt_$self_yVector$$.$z$ += 1.0E-6);
  var $xVector$$ = $goog$math$Vec3$cross$$($JSCompiler_StaticMethods_lookAt_$self_yVector$$, $targetPoint_zVector$$), $JSCompiler_StaticMethods_lookAt_$self_yVector$$ = $goog$math$Vec3$cross$$($targetPoint_zVector$$, $xVector$$), $xVector$$ = $xVector$$.normalize(), $JSCompiler_StaticMethods_lookAt_$self_yVector$$ = $JSCompiler_StaticMethods_lookAt_$self_yVector$$.normalize();
  $JSCompiler_StaticMethods_setValueAt$$($matrix$$4$$, 0, 0, $xVector$$.x);
  $JSCompiler_StaticMethods_setValueAt$$($matrix$$4$$, 0, 1, $xVector$$.y);
  $JSCompiler_StaticMethods_setValueAt$$($matrix$$4$$, 0, 2, $xVector$$.$z$);
  $JSCompiler_StaticMethods_setValueAt$$($matrix$$4$$, 0, 3, 0);
  $JSCompiler_StaticMethods_setValueAt$$($matrix$$4$$, 1, 0, $JSCompiler_StaticMethods_lookAt_$self_yVector$$.x);
  $JSCompiler_StaticMethods_setValueAt$$($matrix$$4$$, 1, 1, $JSCompiler_StaticMethods_lookAt_$self_yVector$$.y);
  $JSCompiler_StaticMethods_setValueAt$$($matrix$$4$$, 1, 2, $JSCompiler_StaticMethods_lookAt_$self_yVector$$.$z$);
  $JSCompiler_StaticMethods_setValueAt$$($matrix$$4$$, 1, 3, 0);
  $JSCompiler_StaticMethods_setValueAt$$($matrix$$4$$, 2, 0, $targetPoint_zVector$$.x);
  $JSCompiler_StaticMethods_setValueAt$$($matrix$$4$$, 2, 1, $targetPoint_zVector$$.y);
  $JSCompiler_StaticMethods_setValueAt$$($matrix$$4$$, 2, 2, $targetPoint_zVector$$.$z$);
  $JSCompiler_StaticMethods_setValueAt$$($matrix$$4$$, 2, 3, 0);
  $JSCompiler_StaticMethods_setValueAt$$($matrix$$4$$, 3, 0, 0);
  $JSCompiler_StaticMethods_setValueAt$$($matrix$$4$$, 3, 1, 0);
  $JSCompiler_StaticMethods_setValueAt$$($matrix$$4$$, 3, 2, 0);
  $JSCompiler_StaticMethods_setValueAt$$($matrix$$4$$, 3, 3, 1);
  $cameraPosition_invertedCameraPosition$$ = $cameraPosition_invertedCameraPosition$$.$clone$();
  return $matrix$$4$$.translate($cameraPosition_invertedCameraPosition$$.$invert$())
}
$goog$exportSymbol$$("X.camera", $X$camera$$);
$goog$exportSymbol$$("X.camera.prototype.observe", $X$camera$$.prototype.$observe$);
$goog$exportSymbol$$("X.camera.prototype.onZoom", $X$camera$$.prototype.$onZoom$);
$goog$exportSymbol$$("X.camera.prototype.onPan", $X$camera$$.prototype.$onPan$);
$goog$exportSymbol$$("X.camera.prototype.onRotate", $X$camera$$.prototype.$onRotate$);
$goog$exportSymbol$$("X.camera.prototype.perspective", $X$camera$$.prototype.$perspective$);
$goog$exportSymbol$$("X.camera.prototype.view", $X$camera$$.prototype.view);
$goog$exportSymbol$$("X.camera.prototype.position", $X$camera$$.prototype.position);
$goog$exportSymbol$$("X.camera.prototype.setPosition", $X$camera$$.prototype.$setPosition$);
$goog$exportSymbol$$("X.camera.prototype.focus", $X$camera$$.prototype.focus);
$goog$exportSymbol$$("X.camera.prototype.setFocus", $X$camera$$.prototype.$setFocus$);
$goog$exportSymbol$$("X.camera.prototype.up", $X$camera$$.prototype.$up$);
$goog$exportSymbol$$("X.camera.prototype.setUp", $X$camera$$.prototype.$setUp$);
$goog$exportSymbol$$("X.camera.prototype.pan", $X$camera$$.prototype.$pan$);
$goog$exportSymbol$$("X.camera.prototype.rotate", $X$camera$$.prototype.rotate);
$goog$exportSymbol$$("X.camera.prototype.zoomIn", $X$camera$$.prototype.$zoomIn$);
$goog$exportSymbol$$("X.camera.prototype.zoomOut", $X$camera$$.prototype.$zoomOut$);
$goog$exportSymbol$$("X.camera.prototype.observe", $X$camera$$.prototype.$observe$);
function $X$renderer$$($_container_container$$1$$) {
  $goog$isDefAndNotNull$$($_container_container$$1$$) || $JSCompiler_alias_THROW$$(new $X$exception$$("An ID to a valid container (<div>..) is required!"));
  $_container_container$$1$$ = $goog$dom$getElement$$($_container_container$$1$$);
  (!($goog$isObject$$($_container_container$$1$$) && 1 == $_container_container$$1$$.nodeType) || 0 == $_container_container$$1$$.clientWidth || 0 == $_container_container$$1$$.clientHeight) && $JSCompiler_alias_THROW$$(new $X$exception$$("Could not find the given container or it has an undefined size!"));
  $X$base$$.call(this);
  this.$_className$ = "renderer";
  this.$_container$ = $_container_container$$1$$;
  this.$_width$ = this.$_container$.clientWidth;
  this.$_height$ = this.$_container$.clientHeight;
  this.$_interactor$ = this.$_camera$ = this.$_shaderProgram$ = this.$_shaders$ = this.$_gl$ = this.$_canvas$ = $JSCompiler_alias_NULL$$;
  this.$_objects$ = [];
  this.$_topLevelObjects$ = [];
  this.$_maxZ$ = this.$_minZ$ = this.$_maxY$ = this.$_minY$ = this.$_maxX$ = this.$_minX$ = $JSCompiler_alias_NULL$$;
  this.$_center$ = [0, 0, 0];
  this.$_pickFrameBuffer$ = $JSCompiler_alias_NULL$$;
  this.$_attributePointers$ = new $goog$structs$Map$$;
  this.$_uniformLocations$ = new $goog$structs$Map$$;
  this.$_vertexBuffers$ = new $goog$structs$Map$$;
  this.$_normalBuffers$ = new $goog$structs$Map$$;
  this.$_colorBuffers$ = new $goog$structs$Map$$;
  this.$_texturePositionBuffers$ = new $goog$structs$Map$$;
  this.$_textures$ = new $goog$structs$Map$$;
  this.$_progressBar$ = this.$_loader$ = $JSCompiler_alias_NULL$$;
  this.$_locked$ = $JSCompiler_alias_FALSE$$;
  window.console.log("XTK Release 1 -- 1/12/12 -- http://www.goXTK.com")
}
$goog$inherits$$($X$renderer$$, $X$base$$);
$JSCompiler_prototypeAlias$$ = $X$renderer$$.prototype;
$JSCompiler_prototypeAlias$$.$config$ = {$PROGRESSBAR_ENABLED$:$JSCompiler_alias_TRUE$$, $PICKING_ENABLED$:$JSCompiler_alias_TRUE$$};
$JSCompiler_prototypeAlias$$.width = $JSCompiler_get$$("$_width$");
$JSCompiler_prototypeAlias$$.height = $JSCompiler_get$$("$_height$");
$JSCompiler_prototypeAlias$$.canvas = function $$JSCompiler_prototypeAlias$$$canvas$() {
  if(!$goog$isDefAndNotNull$$(this.$_canvas$)) {
    this.$_canvas$ = $goog$dom$createDom$$("canvas")
  }
  return this.$_canvas$
};
$JSCompiler_prototypeAlias$$.$container$ = $JSCompiler_get$$("$_container$");
$JSCompiler_prototypeAlias$$.$camera$ = $JSCompiler_get$$("$_camera$");
$JSCompiler_prototypeAlias$$.$interactor$ = $JSCompiler_get$$("$_interactor$");
$JSCompiler_prototypeAlias$$.$loader$ = function $$JSCompiler_prototypeAlias$$$$loader$$() {
  if(!$goog$isDefAndNotNull$$(this.$_loader$)) {
    this.$_loader$ = new $X$loader$$, $goog$events$listen$$(this.$loader$(), $X$event$events$PROGRESS$$, this.$onProgress$.bind(this))
  }
  return this.$_loader$
};
$JSCompiler_prototypeAlias$$.$onProgress$ = function $$JSCompiler_prototypeAlias$$$$onProgress$$($event$$24$$) {
  this.$_progressBar$ && this.$_progressBar$.$setValue$(100 * $event$$24$$.$_value$)
};
$JSCompiler_prototypeAlias$$.$onModified$ = function $$JSCompiler_prototypeAlias$$$$onModified$$($event$$25$$) {
  $goog$isDefAndNotNull$$($event$$25$$) && $event$$25$$ instanceof $X$event$ModifiedEvent$$ && $JSCompiler_StaticMethods_update_$$(this, $event$$25$$.$_object$)
};
$JSCompiler_prototypeAlias$$.$onHover$ = function $$JSCompiler_prototypeAlias$$$$onHover$$($event$$26_object$$inline_369_str$$inline_459$$) {
  if($goog$isDefAndNotNull$$($event$$26_object$$inline_369_str$$inline_459$$) && $event$$26_object$$inline_369_str$$inline_459$$ instanceof $X$event$HoverEvent$$) {
    var $JSCompiler_StaticMethods_setHtml$self$$inline_458_x$$inline_367$$ = $event$$26_object$$inline_369_str$$inline_459$$.$_x$, $y$$inline_368$$ = $event$$26_object$$inline_369_str$$inline_459$$.$_y$;
    if(($event$$26_object$$inline_369_str$$inline_459$$ = this.get($JSCompiler_StaticMethods_pick$$(this, $JSCompiler_StaticMethods_setHtml$self$$inline_458_x$$inline_367$$, $y$$inline_368$$))) && $event$$26_object$$inline_369_str$$inline_459$$.caption()) {
      $JSCompiler_StaticMethods_setHtml$self$$inline_458_x$$inline_367$$ = new $X$caption$$(this.$_container$, $JSCompiler_StaticMethods_setHtml$self$$inline_458_x$$inline_367$$ + 10, $y$$inline_368$$ + 10, this.$_interactor$), $event$$26_object$$inline_369_str$$inline_459$$ = $event$$26_object$$inline_369_str$$inline_459$$.caption(), $JSCompiler_StaticMethods_setHtml$self$$inline_458_x$$inline_367$$.$getElement$().innerHTML = $event$$26_object$$inline_369_str$$inline_459$$
    }
  }
};
function $JSCompiler_StaticMethods_hideProgressBar_$$($JSCompiler_StaticMethods_hideProgressBar_$self$$) {
  if($JSCompiler_StaticMethods_hideProgressBar_$self$$.$config$.$PROGRESSBAR_ENABLED$ && $JSCompiler_StaticMethods_hideProgressBar_$self$$.$_progressBar$ && !$JSCompiler_StaticMethods_hideProgressBar_$self$$.$_readyCheckTimer2$) {
    $JSCompiler_StaticMethods_hideProgressBar_$self$$.$_progressBar$.$done$(), $JSCompiler_StaticMethods_hideProgressBar_$self$$.$_readyCheckTimer2$ = $goog$Timer$callOnce$$(function() {
      this.$_readyCheckTimer2$ = $JSCompiler_alias_NULL$$;
      if(this.$_progressBar$) {
        this.$_progressBar$.$kill$(), this.$_progressBar$ = $JSCompiler_alias_NULL$$
      }
      this.$render$()
    }.bind($JSCompiler_StaticMethods_hideProgressBar_$self$$), 700)
  }
}
$JSCompiler_prototypeAlias$$.$resetViewAndRender$ = function $$JSCompiler_prototypeAlias$$$$resetViewAndRender$$() {
  this.$_camera$.reset();
  this.$render_$($JSCompiler_alias_FALSE$$)
};
$JSCompiler_prototypeAlias$$.$init$ = function $$JSCompiler_prototypeAlias$$$$init$$() {
  var $canvas$$ = this.canvas();
  $canvas$$.width = this.width();
  $canvas$$.height = this.height();
  this.$_container$.appendChild($canvas$$);
  try {
    var $gl$$ = $canvas$$.getContext("experimental-webgl");
    $gl$$ || $JSCompiler_alias_THROW$$(Error())
  }catch($e$$62$$) {
    alert("WebGL not supported! See http://wiki.goXTK.com/index.php/X:Browsers for instructions.."), $JSCompiler_alias_THROW$$(Error("WebGL not supported! See http://wiki.goXTK.com/index.php/X:Browsers for instructions.."))
  }
  try {
    if($gl$$.clearColor(0, 0, 0, 0), $gl$$.enable($gl$$.BLEND), $gl$$.blendFunc($gl$$.SRC_ALPHA, $gl$$.ONE_MINUS_SRC_ALPHA), $gl$$.enable($gl$$.DEPTH_TEST), $gl$$.depthFunc($gl$$.LEQUAL), $gl$$.clear($gl$$.COLOR_BUFFER_BIT | $gl$$.DEPTH_BUFFER_BIT), this.$config$.$PICKING_ENABLED$) {
      var $interactor$$2_pickFrameBuffer$$ = $gl$$.createFramebuffer(), $camera_pickRenderBuffer$$ = $gl$$.createRenderbuffer(), $pickTexture$$ = $gl$$.createTexture();
      $gl$$.bindTexture($gl$$.TEXTURE_2D, $pickTexture$$);
      $gl$$.texImage2D($gl$$.TEXTURE_2D, 0, $gl$$.RGB, this.width(), this.height(), 0, $gl$$.RGB, $gl$$.UNSIGNED_BYTE, $JSCompiler_alias_NULL$$);
      $gl$$.bindFramebuffer($gl$$.FRAMEBUFFER, $interactor$$2_pickFrameBuffer$$);
      $gl$$.bindRenderbuffer($gl$$.RENDERBUFFER, $camera_pickRenderBuffer$$);
      $gl$$.renderbufferStorage($gl$$.RENDERBUFFER, $gl$$.DEPTH_COMPONENT16, this.width(), this.height());
      $gl$$.bindRenderbuffer($gl$$.RENDERBUFFER, $JSCompiler_alias_NULL$$);
      $gl$$.framebufferTexture2D($gl$$.FRAMEBUFFER, $gl$$.COLOR_ATTACHMENT0, $gl$$.TEXTURE_2D, $pickTexture$$, 0);
      $gl$$.framebufferRenderbuffer($gl$$.FRAMEBUFFER, $gl$$.DEPTH_ATTACHMENT, $gl$$.RENDERBUFFER, $camera_pickRenderBuffer$$);
      $gl$$.bindFramebuffer($gl$$.FRAMEBUFFER, $JSCompiler_alias_NULL$$);
      this.$_pickFrameBuffer$ = $interactor$$2_pickFrameBuffer$$
    }
  }catch($e$$63$$) {
    $JSCompiler_alias_THROW$$(new $X$exception$$("Exception while accessing GL Context!\n" + $e$$63$$))
  }
  $interactor$$2_pickFrameBuffer$$ = new $X$interactor$$($canvas$$);
  $interactor$$2_pickFrameBuffer$$.$init$();
  $goog$events$listen$$($interactor$$2_pickFrameBuffer$$, $X$event$events$RESETVIEW$$, this.$resetViewAndRender$.bind(this));
  $goog$events$listen$$($interactor$$2_pickFrameBuffer$$, $X$event$events$HOVER$$, this.$onHover$.bind(this));
  $camera_pickRenderBuffer$$ = new $X$camera$$(this.width(), this.height());
  $camera_pickRenderBuffer$$.$observe$($interactor$$2_pickFrameBuffer$$);
  $goog$events$listen$$($camera_pickRenderBuffer$$, $X$event$events$RENDER$$, this.$render_$.bind(this, $JSCompiler_alias_FALSE$$));
  this.$_canvas$ = $canvas$$;
  this.$_gl$ = $gl$$;
  this.$_camera$ = $camera_pickRenderBuffer$$;
  this.$_interactor$ = $interactor$$2_pickFrameBuffer$$;
  this.$addShaders$(new $X$shaders$$)
};
$JSCompiler_prototypeAlias$$.$addShaders$ = function $$JSCompiler_prototypeAlias$$$$addShaders$$($shaders$$) {
  (!$goog$isDefAndNotNull$$(this.$_canvas$) || !$goog$isDefAndNotNull$$(this.$_gl$) || !$goog$isDefAndNotNull$$(this.$_camera$)) && $JSCompiler_alias_THROW$$(new $X$exception$$("Renderer was not initialized properly!"));
  (!$goog$isDefAndNotNull$$($shaders$$) || !($shaders$$ instanceof $X$shaders$$)) && $JSCompiler_alias_THROW$$(new $X$exception$$("Could not add shaders!"));
  $shaders$$.$validate$();
  var $glFragmentShader$$ = this.$_gl$.createShader(this.$_gl$.FRAGMENT_SHADER), $glVertexShader$$ = this.$_gl$.createShader(this.$_gl$.VERTEX_SHADER);
  this.$_gl$.shaderSource($glFragmentShader$$, $shaders$$.$_fragmentshaderSource$);
  this.$_gl$.shaderSource($glVertexShader$$, $shaders$$.$_vertexshaderSource$);
  this.$_gl$.compileShader($glFragmentShader$$);
  this.$_gl$.compileShader($glVertexShader$$);
  this.$_gl$.getShaderParameter($glFragmentShader$$, this.$_gl$.COMPILE_STATUS) || $JSCompiler_alias_THROW$$(new $X$exception$$("Fragement Shader compilation failed!\n" + this.$_gl$.getShaderInfoLog($glFragmentShader$$)));
  this.$_gl$.getShaderParameter($glVertexShader$$, this.$_gl$.COMPILE_STATUS) || $JSCompiler_alias_THROW$$(new $X$exception$$("Vertex Shader compilation failed!\n" + this.$_gl$.getShaderInfoLog($glVertexShader$$)));
  var $shaderProgram$$ = this.$_gl$.createProgram();
  this.$_gl$.attachShader($shaderProgram$$, $glVertexShader$$);
  this.$_gl$.attachShader($shaderProgram$$, $glFragmentShader$$);
  this.$_gl$.linkProgram($shaderProgram$$);
  this.$_gl$.getProgramParameter($shaderProgram$$, this.$_gl$.LINK_STATUS) || $JSCompiler_alias_THROW$$(new $X$exception$$("Could not create shader program!\n" + this.$_gl$.getShaderInfoLog($glFragmentShader$$) + "\n" + this.$_gl$.getShaderInfoLog($glVertexShader$$) + "\n" + this.$_gl$.getProgramInfoLog($shaderProgram$$)));
  this.$_gl$.useProgram($shaderProgram$$);
  this.$_shaderProgram$ = $shaderProgram$$;
  Object.keys($X$shaders$attributes$$).forEach(function($a$$59$$) {
    $a$$59$$ = eval("X.shaders.attributes." + $a$$59$$);
    this.$_attributePointers$.set($a$$59$$, this.$_gl$.getAttribLocation(this.$_shaderProgram$, $a$$59$$));
    this.$_gl$.enableVertexAttribArray(this.$_attributePointers$.get($a$$59$$))
  }.bind(this));
  Object.keys($X$shaders$uniforms$$).forEach(function($u$$1$$) {
    $u$$1$$ = eval("X.shaders.uniforms." + $u$$1$$);
    this.$_uniformLocations$.set($u$$1$$, this.$_gl$.getUniformLocation(this.$_shaderProgram$, $u$$1$$))
  }.bind(this));
  this.$_shaders$ = $shaders$$
};
$JSCompiler_prototypeAlias$$.add = function $$JSCompiler_prototypeAlias$$$add$($object$$25$$) {
  this.$_topLevelObjects$.push($object$$25$$);
  (!$goog$isDefAndNotNull$$(this.$_canvas$) || !$goog$isDefAndNotNull$$(this.$_gl$) || !$goog$isDefAndNotNull$$(this.$_camera$)) && $JSCompiler_alias_THROW$$(new $X$exception$$("Renderer was not initialized properly!"));
  (!$goog$isDefAndNotNull$$($object$$25$$) || !($object$$25$$ instanceof $X$object$$)) && $JSCompiler_alias_THROW$$(new $X$exception$$("Illegal object!"));
  if($object$$25$$.$hasChildren$()) {
    for(var $children$$inline_376$$ = $object$$25$$.children(), $numberOfChildren$$inline_377$$ = $children$$inline_376$$.length, $c$$inline_378$$ = 0, $c$$inline_378$$ = 0;$c$$inline_378$$ < $numberOfChildren$$inline_377$$;$c$$inline_378$$++) {
      this.add($children$$inline_376$$[$c$$inline_378$$])
    }
  }
  $goog$events$listen$$($object$$25$$, $X$event$events$MODIFIED$$, this.$onModified$.bind(this));
  $JSCompiler_StaticMethods_update_$$(this, $object$$25$$)
};
function $JSCompiler_StaticMethods_update_$$($JSCompiler_StaticMethods_update_$self$$, $object$$27$$) {
  (!$goog$isDefAndNotNull$$($JSCompiler_StaticMethods_update_$self$$.$_canvas$) || !$goog$isDefAndNotNull$$($JSCompiler_StaticMethods_update_$self$$.$_gl$) || !$goog$isDefAndNotNull$$($JSCompiler_StaticMethods_update_$self$$.$_camera$)) && $JSCompiler_alias_THROW$$(new $X$exception$$("Renderer was not initialized properly!"));
  (!$goog$isDefAndNotNull$$($object$$27$$) || !($object$$27$$ instanceof $X$object$$)) && $JSCompiler_alias_THROW$$(new $X$exception$$("Illegal object!"));
  var $JSCompiler_StaticMethods_loadFile$self$$inline_385_JSCompiler_StaticMethods_loadTexture$self$$inline_380_existed_glTexturePositionBuffer_texture$$6$$ = $JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods_update_$self$$.get($object$$27$$.id()) && ($JSCompiler_StaticMethods_loadFile$self$$inline_385_JSCompiler_StaticMethods_loadTexture$self$$inline_380_existed_glTexturePositionBuffer_texture$$6$$ = $JSCompiler_alias_TRUE$$);
  if($goog$isDefAndNotNull$$($object$$27$$.$_texture$) && $object$$27$$.$_texture$.$_dirty$) {
    $JSCompiler_StaticMethods_loadFile$self$$inline_385_JSCompiler_StaticMethods_loadTexture$self$$inline_380_existed_glTexturePositionBuffer_texture$$6$$ = $JSCompiler_StaticMethods_update_$self$$.$loader$();
    $goog$isDefAndNotNull$$($object$$27$$.$_texture$) || $JSCompiler_alias_THROW$$(new $X$exception$$("Internal error during texture loading."));
    var $counter$$1_filepath$$inline_387_glVertexBuffer_image$$inline_382_oldVertexBuffer_vertexBuffer$$ = new Image, $currentTextureFilename$$inline_383_fileExtension$$inline_388_glNormalBuffer_normalBuffer_oldNormalBuffer_points$$1_request$$inline_389_tMax$$ = $object$$27$$.$_texture$.file();
    $counter$$1_filepath$$inline_387_glVertexBuffer_image$$inline_382_oldVertexBuffer_vertexBuffer$$.src = $currentTextureFilename$$inline_383_fileExtension$$inline_388_glNormalBuffer_normalBuffer_oldNormalBuffer_points$$1_request$$inline_389_tMax$$;
    $object$$27$$.$_texture$.$_image$ = $counter$$1_filepath$$inline_387_glVertexBuffer_image$$inline_382_oldVertexBuffer_vertexBuffer$$;
    $goog$events$listenOnce$$($counter$$1_filepath$$inline_387_glVertexBuffer_image$$inline_382_oldVertexBuffer_vertexBuffer$$, "load", $JSCompiler_StaticMethods_loadFile$self$$inline_385_JSCompiler_StaticMethods_loadTexture$self$$inline_380_existed_glTexturePositionBuffer_texture$$6$$.$loadTextureCompleted$.bind($JSCompiler_StaticMethods_loadFile$self$$inline_385_JSCompiler_StaticMethods_loadTexture$self$$inline_380_existed_glTexturePositionBuffer_texture$$6$$, $object$$27$$));
    $JSCompiler_StaticMethods_jobs_$$($JSCompiler_StaticMethods_loadFile$self$$inline_385_JSCompiler_StaticMethods_loadTexture$self$$inline_380_existed_glTexturePositionBuffer_texture$$6$$).set($object$$27$$.id(), $JSCompiler_alias_FALSE$$);
    $JSCompiler_StaticMethods_addProgress$$($JSCompiler_StaticMethods_loadFile$self$$inline_385_JSCompiler_StaticMethods_loadTexture$self$$inline_380_existed_glTexturePositionBuffer_texture$$6$$, 0.3)
  }else {
    if($goog$isDefAndNotNull$$($object$$27$$.file()) && $object$$27$$.file().$_dirty$) {
      $JSCompiler_StaticMethods_loadFile$self$$inline_385_JSCompiler_StaticMethods_loadTexture$self$$inline_380_existed_glTexturePositionBuffer_texture$$6$$ = $JSCompiler_StaticMethods_update_$self$$.$loader$(), $goog$isDefAndNotNull$$($object$$27$$.file()) || $JSCompiler_alias_THROW$$(new $X$exception$$("Internal error during file loading.")), $object$$27$$.$_points$.clear(), $object$$27$$.$_normals$.clear(), $counter$$1_filepath$$inline_387_glVertexBuffer_image$$inline_382_oldVertexBuffer_vertexBuffer$$ = 
      $object$$27$$.file().path(), $currentTextureFilename$$inline_383_fileExtension$$inline_388_glNormalBuffer_normalBuffer_oldNormalBuffer_points$$1_request$$inline_389_tMax$$ = $counter$$1_filepath$$inline_387_glVertexBuffer_image$$inline_382_oldVertexBuffer_vertexBuffer$$.split(".").pop(), $currentTextureFilename$$inline_383_fileExtension$$inline_388_glNormalBuffer_normalBuffer_oldNormalBuffer_points$$1_request$$inline_389_tMax$$ = $currentTextureFilename$$inline_383_fileExtension$$inline_388_glNormalBuffer_normalBuffer_oldNormalBuffer_points$$1_request$$inline_389_tMax$$.toUpperCase(), 
      $currentTextureFilename$$inline_383_fileExtension$$inline_388_glNormalBuffer_normalBuffer_oldNormalBuffer_points$$1_request$$inline_389_tMax$$ in $X$parser$extensions$$ || $JSCompiler_alias_THROW$$(new $X$exception$$("The " + $currentTextureFilename$$inline_383_fileExtension$$inline_388_glNormalBuffer_normalBuffer_oldNormalBuffer_points$$1_request$$inline_389_tMax$$ + " file format is not supported!")), $currentTextureFilename$$inline_383_fileExtension$$inline_388_glNormalBuffer_normalBuffer_oldNormalBuffer_points$$1_request$$inline_389_tMax$$ = 
      new XMLHttpRequest, $goog$events$listen$$($currentTextureFilename$$inline_383_fileExtension$$inline_388_glNormalBuffer_normalBuffer_oldNormalBuffer_points$$1_request$$inline_389_tMax$$, "abort", $JSCompiler_StaticMethods_loadFile$self$$inline_385_JSCompiler_StaticMethods_loadTexture$self$$inline_380_existed_glTexturePositionBuffer_texture$$6$$.$loadFileFailed$.bind($JSCompiler_StaticMethods_loadFile$self$$inline_385_JSCompiler_StaticMethods_loadTexture$self$$inline_380_existed_glTexturePositionBuffer_texture$$6$$, 
      $currentTextureFilename$$inline_383_fileExtension$$inline_388_glNormalBuffer_normalBuffer_oldNormalBuffer_points$$1_request$$inline_389_tMax$$, $object$$27$$)), $goog$events$listen$$($currentTextureFilename$$inline_383_fileExtension$$inline_388_glNormalBuffer_normalBuffer_oldNormalBuffer_points$$1_request$$inline_389_tMax$$, "error", $JSCompiler_StaticMethods_loadFile$self$$inline_385_JSCompiler_StaticMethods_loadTexture$self$$inline_380_existed_glTexturePositionBuffer_texture$$6$$.$loadFileFailed$.bind($JSCompiler_StaticMethods_loadFile$self$$inline_385_JSCompiler_StaticMethods_loadTexture$self$$inline_380_existed_glTexturePositionBuffer_texture$$6$$, 
      $currentTextureFilename$$inline_383_fileExtension$$inline_388_glNormalBuffer_normalBuffer_oldNormalBuffer_points$$1_request$$inline_389_tMax$$, $object$$27$$)), $goog$events$listen$$($currentTextureFilename$$inline_383_fileExtension$$inline_388_glNormalBuffer_normalBuffer_oldNormalBuffer_points$$1_request$$inline_389_tMax$$, "load", $JSCompiler_StaticMethods_loadFile$self$$inline_385_JSCompiler_StaticMethods_loadTexture$self$$inline_380_existed_glTexturePositionBuffer_texture$$6$$.$loadFileCompleted$.bind($JSCompiler_StaticMethods_loadFile$self$$inline_385_JSCompiler_StaticMethods_loadTexture$self$$inline_380_existed_glTexturePositionBuffer_texture$$6$$, 
      $currentTextureFilename$$inline_383_fileExtension$$inline_388_glNormalBuffer_normalBuffer_oldNormalBuffer_points$$1_request$$inline_389_tMax$$, $object$$27$$)), $currentTextureFilename$$inline_383_fileExtension$$inline_388_glNormalBuffer_normalBuffer_oldNormalBuffer_points$$1_request$$inline_389_tMax$$.open("GET", $counter$$1_filepath$$inline_387_glVertexBuffer_image$$inline_382_oldVertexBuffer_vertexBuffer$$, $JSCompiler_alias_TRUE$$), $currentTextureFilename$$inline_383_fileExtension$$inline_388_glNormalBuffer_normalBuffer_oldNormalBuffer_points$$1_request$$inline_389_tMax$$.overrideMimeType("text/plain; charset=x-user-defined"), 
      $currentTextureFilename$$inline_383_fileExtension$$inline_388_glNormalBuffer_normalBuffer_oldNormalBuffer_points$$1_request$$inline_389_tMax$$.setRequestHeader("Content-Type", "text/plain"), $currentTextureFilename$$inline_383_fileExtension$$inline_388_glNormalBuffer_normalBuffer_oldNormalBuffer_points$$1_request$$inline_389_tMax$$.send($JSCompiler_alias_NULL$$), $JSCompiler_StaticMethods_jobs_$$($JSCompiler_StaticMethods_loadFile$self$$inline_385_JSCompiler_StaticMethods_loadTexture$self$$inline_380_existed_glTexturePositionBuffer_texture$$6$$).set($object$$27$$.id(), 
      $JSCompiler_alias_FALSE$$)
    }else {
      if(0 != $object$$27$$.$_points$.$count$()) {
        for($counter$$1_filepath$$inline_387_glVertexBuffer_image$$inline_382_oldVertexBuffer_vertexBuffer$$ = 0;$JSCompiler_StaticMethods_update_$self$$.$_locked$;) {
          $counter$$1_filepath$$inline_387_glVertexBuffer_image$$inline_382_oldVertexBuffer_vertexBuffer$$++
        }
        $JSCompiler_StaticMethods_update_$self$$.$_locked$ = $JSCompiler_alias_TRUE$$;
        $JSCompiler_StaticMethods_loadFile$self$$inline_385_JSCompiler_StaticMethods_loadTexture$self$$inline_380_existed_glTexturePositionBuffer_texture$$6$$ && $object$$27$$.$_points$.$_dirty$ && ($counter$$1_filepath$$inline_387_glVertexBuffer_image$$inline_382_oldVertexBuffer_vertexBuffer$$ = $JSCompiler_StaticMethods_update_$self$$.$_vertexBuffers$.get($object$$27$$.id()), $goog$isDefAndNotNull$$($counter$$1_filepath$$inline_387_glVertexBuffer_image$$inline_382_oldVertexBuffer_vertexBuffer$$) && 
        $JSCompiler_StaticMethods_update_$self$$.$_gl$.isBuffer($counter$$1_filepath$$inline_387_glVertexBuffer_image$$inline_382_oldVertexBuffer_vertexBuffer$$.$_glBuffer$) && $JSCompiler_StaticMethods_update_$self$$.$_gl$.deleteBuffer($counter$$1_filepath$$inline_387_glVertexBuffer_image$$inline_382_oldVertexBuffer_vertexBuffer$$.$_glBuffer$));
        $counter$$1_filepath$$inline_387_glVertexBuffer_image$$inline_382_oldVertexBuffer_vertexBuffer$$ = $JSCompiler_alias_NULL$$;
        if(!$JSCompiler_StaticMethods_loadFile$self$$inline_385_JSCompiler_StaticMethods_loadTexture$self$$inline_380_existed_glTexturePositionBuffer_texture$$6$$ || $object$$27$$.$_points$.$_dirty$) {
          $counter$$1_filepath$$inline_387_glVertexBuffer_image$$inline_382_oldVertexBuffer_vertexBuffer$$ = $JSCompiler_StaticMethods_update_$self$$.$_gl$.createBuffer();
          $currentTextureFilename$$inline_383_fileExtension$$inline_388_glNormalBuffer_normalBuffer_oldNormalBuffer_points$$1_request$$inline_389_tMax$$ = $object$$27$$.$_points$;
          $JSCompiler_StaticMethods_update_$self$$.$_gl$.bindBuffer($JSCompiler_StaticMethods_update_$self$$.$_gl$.ARRAY_BUFFER, $counter$$1_filepath$$inline_387_glVertexBuffer_image$$inline_382_oldVertexBuffer_vertexBuffer$$);
          $JSCompiler_StaticMethods_update_$self$$.$_gl$.bufferData($JSCompiler_StaticMethods_update_$self$$.$_gl$.ARRAY_BUFFER, new Float32Array($currentTextureFilename$$inline_383_fileExtension$$inline_388_glNormalBuffer_normalBuffer_oldNormalBuffer_points$$1_request$$inline_389_tMax$$.all()), $JSCompiler_StaticMethods_update_$self$$.$_gl$.STATIC_DRAW);
          var $counter$$1_filepath$$inline_387_glVertexBuffer_image$$inline_382_oldVertexBuffer_vertexBuffer$$ = new $X$buffer$$($counter$$1_filepath$$inline_387_glVertexBuffer_image$$inline_382_oldVertexBuffer_vertexBuffer$$, $currentTextureFilename$$inline_383_fileExtension$$inline_388_glNormalBuffer_normalBuffer_oldNormalBuffer_points$$1_request$$inline_389_tMax$$.$count$(), 3), $oldTexturePositionBuffer_texturePositionBuffer_transformationMatrix$$1$$ = $object$$27$$.transform().$_matrix$, $colorBuffer_glColorBuffer_oldColorBuffer_tMin$$ = 
          $oldTexturePositionBuffer_texturePositionBuffer_transformationMatrix$$1$$.$multiplyByVector$(new $goog$math$Vec3$$($currentTextureFilename$$inline_383_fileExtension$$inline_388_glNormalBuffer_normalBuffer_oldNormalBuffer_points$$1_request$$inline_389_tMax$$.$_minA$, $currentTextureFilename$$inline_383_fileExtension$$inline_388_glNormalBuffer_normalBuffer_oldNormalBuffer_points$$1_request$$inline_389_tMax$$.$_minB$, $currentTextureFilename$$inline_383_fileExtension$$inline_388_glNormalBuffer_normalBuffer_oldNormalBuffer_points$$1_request$$inline_389_tMax$$.$_minC$)), 
          $currentTextureFilename$$inline_383_fileExtension$$inline_388_glNormalBuffer_normalBuffer_oldNormalBuffer_points$$1_request$$inline_389_tMax$$ = $oldTexturePositionBuffer_texturePositionBuffer_transformationMatrix$$1$$.$multiplyByVector$(new $goog$math$Vec3$$($currentTextureFilename$$inline_383_fileExtension$$inline_388_glNormalBuffer_normalBuffer_oldNormalBuffer_points$$1_request$$inline_389_tMax$$.$_maxA$, $currentTextureFilename$$inline_383_fileExtension$$inline_388_glNormalBuffer_normalBuffer_oldNormalBuffer_points$$1_request$$inline_389_tMax$$.$_maxB$, 
          $currentTextureFilename$$inline_383_fileExtension$$inline_388_glNormalBuffer_normalBuffer_oldNormalBuffer_points$$1_request$$inline_389_tMax$$.$_maxC$));
          if($JSCompiler_StaticMethods_update_$self$$.$_minX$ === $JSCompiler_alias_NULL$$ || $colorBuffer_glColorBuffer_oldColorBuffer_tMin$$.x < $JSCompiler_StaticMethods_update_$self$$.$_minX$) {
            $JSCompiler_StaticMethods_update_$self$$.$_minX$ = $colorBuffer_glColorBuffer_oldColorBuffer_tMin$$.x
          }
          if($JSCompiler_StaticMethods_update_$self$$.$_maxX$ === $JSCompiler_alias_NULL$$ || $currentTextureFilename$$inline_383_fileExtension$$inline_388_glNormalBuffer_normalBuffer_oldNormalBuffer_points$$1_request$$inline_389_tMax$$.x > $JSCompiler_StaticMethods_update_$self$$.$_maxX$) {
            $JSCompiler_StaticMethods_update_$self$$.$_maxX$ = $currentTextureFilename$$inline_383_fileExtension$$inline_388_glNormalBuffer_normalBuffer_oldNormalBuffer_points$$1_request$$inline_389_tMax$$.x
          }
          if($JSCompiler_StaticMethods_update_$self$$.$_minY$ === $JSCompiler_alias_NULL$$ || $colorBuffer_glColorBuffer_oldColorBuffer_tMin$$.y < $JSCompiler_StaticMethods_update_$self$$.$_minY$) {
            $JSCompiler_StaticMethods_update_$self$$.$_minY$ = $colorBuffer_glColorBuffer_oldColorBuffer_tMin$$.y
          }
          if($JSCompiler_StaticMethods_update_$self$$.$_maxY$ === $JSCompiler_alias_NULL$$ || $currentTextureFilename$$inline_383_fileExtension$$inline_388_glNormalBuffer_normalBuffer_oldNormalBuffer_points$$1_request$$inline_389_tMax$$.y > $JSCompiler_StaticMethods_update_$self$$.$_maxY$) {
            $JSCompiler_StaticMethods_update_$self$$.$_maxY$ = $currentTextureFilename$$inline_383_fileExtension$$inline_388_glNormalBuffer_normalBuffer_oldNormalBuffer_points$$1_request$$inline_389_tMax$$.y
          }
          if($JSCompiler_StaticMethods_update_$self$$.$_minZ$ === $JSCompiler_alias_NULL$$ || $colorBuffer_glColorBuffer_oldColorBuffer_tMin$$.$z$ < $JSCompiler_StaticMethods_update_$self$$.$_minZ$) {
            $JSCompiler_StaticMethods_update_$self$$.$_minZ$ = $colorBuffer_glColorBuffer_oldColorBuffer_tMin$$.$z$
          }
          if($JSCompiler_StaticMethods_update_$self$$.$_maxZ$ === $JSCompiler_alias_NULL$$ || $currentTextureFilename$$inline_383_fileExtension$$inline_388_glNormalBuffer_normalBuffer_oldNormalBuffer_points$$1_request$$inline_389_tMax$$.$z$ > $JSCompiler_StaticMethods_update_$self$$.$_maxZ$) {
            $JSCompiler_StaticMethods_update_$self$$.$_maxZ$ = $currentTextureFilename$$inline_383_fileExtension$$inline_388_glNormalBuffer_normalBuffer_oldNormalBuffer_points$$1_request$$inline_389_tMax$$.$z$
          }
          $JSCompiler_StaticMethods_update_$self$$.$_center$ = [($JSCompiler_StaticMethods_update_$self$$.$_minX$ + $JSCompiler_StaticMethods_update_$self$$.$_maxX$) / 2, ($JSCompiler_StaticMethods_update_$self$$.$_minY$ + $JSCompiler_StaticMethods_update_$self$$.$_maxY$) / 2, ($JSCompiler_StaticMethods_update_$self$$.$_minZ$ + $JSCompiler_StaticMethods_update_$self$$.$_maxZ$) / 2]
        }else {
          $counter$$1_filepath$$inline_387_glVertexBuffer_image$$inline_382_oldVertexBuffer_vertexBuffer$$ = $JSCompiler_StaticMethods_update_$self$$.$_vertexBuffers$.get($object$$27$$.id())
        }
        $JSCompiler_StaticMethods_addProgress$$($JSCompiler_StaticMethods_update_$self$$.$loader$(), 0.3);
        $JSCompiler_StaticMethods_loadFile$self$$inline_385_JSCompiler_StaticMethods_loadTexture$self$$inline_380_existed_glTexturePositionBuffer_texture$$6$$ && $object$$27$$.$_normals$.$_dirty$ && ($currentTextureFilename$$inline_383_fileExtension$$inline_388_glNormalBuffer_normalBuffer_oldNormalBuffer_points$$1_request$$inline_389_tMax$$ = $JSCompiler_StaticMethods_update_$self$$.$_vertexBuffers$.get($object$$27$$.id()), $goog$isDefAndNotNull$$($currentTextureFilename$$inline_383_fileExtension$$inline_388_glNormalBuffer_normalBuffer_oldNormalBuffer_points$$1_request$$inline_389_tMax$$) && 
        $JSCompiler_StaticMethods_update_$self$$.$_gl$.isBuffer($currentTextureFilename$$inline_383_fileExtension$$inline_388_glNormalBuffer_normalBuffer_oldNormalBuffer_points$$1_request$$inline_389_tMax$$.$_glBuffer$) && $JSCompiler_StaticMethods_update_$self$$.$_gl$.deleteBuffer($currentTextureFilename$$inline_383_fileExtension$$inline_388_glNormalBuffer_normalBuffer_oldNormalBuffer_points$$1_request$$inline_389_tMax$$.$_glBuffer$));
        $currentTextureFilename$$inline_383_fileExtension$$inline_388_glNormalBuffer_normalBuffer_oldNormalBuffer_points$$1_request$$inline_389_tMax$$ = $JSCompiler_alias_NULL$$;
        !$JSCompiler_StaticMethods_loadFile$self$$inline_385_JSCompiler_StaticMethods_loadTexture$self$$inline_380_existed_glTexturePositionBuffer_texture$$6$$ || $object$$27$$.$_normals$.$_dirty$ ? ($currentTextureFilename$$inline_383_fileExtension$$inline_388_glNormalBuffer_normalBuffer_oldNormalBuffer_points$$1_request$$inline_389_tMax$$ = $JSCompiler_StaticMethods_update_$self$$.$_gl$.createBuffer(), $JSCompiler_StaticMethods_update_$self$$.$_gl$.bindBuffer($JSCompiler_StaticMethods_update_$self$$.$_gl$.ARRAY_BUFFER, 
        $currentTextureFilename$$inline_383_fileExtension$$inline_388_glNormalBuffer_normalBuffer_oldNormalBuffer_points$$1_request$$inline_389_tMax$$), $JSCompiler_StaticMethods_update_$self$$.$_gl$.bufferData($JSCompiler_StaticMethods_update_$self$$.$_gl$.ARRAY_BUFFER, new Float32Array($object$$27$$.$_normals$.all()), $JSCompiler_StaticMethods_update_$self$$.$_gl$.STATIC_DRAW), $currentTextureFilename$$inline_383_fileExtension$$inline_388_glNormalBuffer_normalBuffer_oldNormalBuffer_points$$1_request$$inline_389_tMax$$ = 
        new $X$buffer$$($currentTextureFilename$$inline_383_fileExtension$$inline_388_glNormalBuffer_normalBuffer_oldNormalBuffer_points$$1_request$$inline_389_tMax$$, $object$$27$$.$_normals$.$count$(), 3)) : $currentTextureFilename$$inline_383_fileExtension$$inline_388_glNormalBuffer_normalBuffer_oldNormalBuffer_points$$1_request$$inline_389_tMax$$ = $JSCompiler_StaticMethods_update_$self$$.$_normalBuffers$.get($object$$27$$.id());
        $JSCompiler_StaticMethods_addProgress$$($JSCompiler_StaticMethods_update_$self$$.$loader$(), 0.3);
        $JSCompiler_StaticMethods_loadFile$self$$inline_385_JSCompiler_StaticMethods_loadTexture$self$$inline_380_existed_glTexturePositionBuffer_texture$$6$$ && $object$$27$$.$_colors$.$_dirty$ && ($colorBuffer_glColorBuffer_oldColorBuffer_tMin$$ = $JSCompiler_StaticMethods_update_$self$$.$_colorBuffers$.get($object$$27$$.id()), $goog$isDefAndNotNull$$($colorBuffer_glColorBuffer_oldColorBuffer_tMin$$) && $JSCompiler_StaticMethods_update_$self$$.$_gl$.isBuffer($colorBuffer_glColorBuffer_oldColorBuffer_tMin$$.$_glBuffer$) && 
        $JSCompiler_StaticMethods_update_$self$$.$_gl$.deleteBuffer($colorBuffer_glColorBuffer_oldColorBuffer_tMin$$.$_glBuffer$));
        $colorBuffer_glColorBuffer_oldColorBuffer_tMin$$ = $JSCompiler_alias_NULL$$;
        0 < $object$$27$$.$_colors$.length() && (!$JSCompiler_StaticMethods_loadFile$self$$inline_385_JSCompiler_StaticMethods_loadTexture$self$$inline_380_existed_glTexturePositionBuffer_texture$$6$$ || $object$$27$$.$_colors$.$_dirty$ ? ($object$$27$$.$_colors$.length() != $object$$27$$.$_points$.length() && $JSCompiler_alias_THROW$$(new $X$exception$$("Mismatch between points and point colors!")), $colorBuffer_glColorBuffer_oldColorBuffer_tMin$$ = $JSCompiler_StaticMethods_update_$self$$.$_gl$.createBuffer(), 
        $JSCompiler_StaticMethods_update_$self$$.$_gl$.bindBuffer($JSCompiler_StaticMethods_update_$self$$.$_gl$.ARRAY_BUFFER, $colorBuffer_glColorBuffer_oldColorBuffer_tMin$$), $JSCompiler_StaticMethods_update_$self$$.$_gl$.bufferData($JSCompiler_StaticMethods_update_$self$$.$_gl$.ARRAY_BUFFER, new Float32Array($object$$27$$.$_colors$.all()), $JSCompiler_StaticMethods_update_$self$$.$_gl$.STATIC_DRAW), $colorBuffer_glColorBuffer_oldColorBuffer_tMin$$ = new $X$buffer$$($colorBuffer_glColorBuffer_oldColorBuffer_tMin$$, 
        $object$$27$$.$_colors$.$count$(), 3)) : $colorBuffer_glColorBuffer_oldColorBuffer_tMin$$ = $JSCompiler_StaticMethods_update_$self$$.$_colorBuffers$.get($object$$27$$.id()));
        $JSCompiler_StaticMethods_addProgress$$($JSCompiler_StaticMethods_update_$self$$.$loader$(), 0.3);
        $JSCompiler_StaticMethods_loadFile$self$$inline_385_JSCompiler_StaticMethods_loadTexture$self$$inline_380_existed_glTexturePositionBuffer_texture$$6$$ && $goog$isDefAndNotNull$$($object$$27$$.$_texture$) && $object$$27$$.$_texture$.$_dirty$ && ($oldTexturePositionBuffer_texturePositionBuffer_transformationMatrix$$1$$ = $JSCompiler_StaticMethods_update_$self$$.$_texturePositionBuffers$.get($object$$27$$.id()), $goog$isDefAndNotNull$$($oldTexturePositionBuffer_texturePositionBuffer_transformationMatrix$$1$$) && 
        $JSCompiler_StaticMethods_update_$self$$.$_gl$.isBuffer($oldTexturePositionBuffer_texturePositionBuffer_transformationMatrix$$1$$.$_glBuffer$) && $JSCompiler_StaticMethods_update_$self$$.$_gl$.deleteBuffer($oldTexturePositionBuffer_texturePositionBuffer_transformationMatrix$$1$$.$_glBuffer$));
        $oldTexturePositionBuffer_texturePositionBuffer_transformationMatrix$$1$$ = $JSCompiler_alias_NULL$$;
        if($goog$isDefAndNotNull$$($object$$27$$.$_texture$)) {
          !$JSCompiler_StaticMethods_loadFile$self$$inline_385_JSCompiler_StaticMethods_loadTexture$self$$inline_380_existed_glTexturePositionBuffer_texture$$6$$ || $object$$27$$.$_texture$.$_dirty$ ? ($goog$isDefAndNotNull$$($object$$27$$.$_textureCoordinateMap$) || $JSCompiler_alias_THROW$$(new $X$exception$$("Can not add an object and texture without valid coordinate mapping! Set the textureCoordinateMap!")), $JSCompiler_StaticMethods_loadFile$self$$inline_385_JSCompiler_StaticMethods_loadTexture$self$$inline_380_existed_glTexturePositionBuffer_texture$$6$$ = 
          $JSCompiler_StaticMethods_update_$self$$.$_gl$.createTexture(), $JSCompiler_StaticMethods_loadFile$self$$inline_385_JSCompiler_StaticMethods_loadTexture$self$$inline_380_existed_glTexturePositionBuffer_texture$$6$$.$image$ = $object$$27$$.$_texture$.$image$(), $JSCompiler_StaticMethods_update_$self$$.$_textures$.set($object$$27$$.$_texture$.file(), $JSCompiler_StaticMethods_loadFile$self$$inline_385_JSCompiler_StaticMethods_loadTexture$self$$inline_380_existed_glTexturePositionBuffer_texture$$6$$), 
          $JSCompiler_StaticMethods_update_$self$$.$_gl$.pixelStorei($JSCompiler_StaticMethods_update_$self$$.$_gl$.UNPACK_FLIP_Y_WEBGL, $JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_update_$self$$.$_gl$.bindTexture($JSCompiler_StaticMethods_update_$self$$.$_gl$.TEXTURE_2D, $JSCompiler_StaticMethods_loadFile$self$$inline_385_JSCompiler_StaticMethods_loadTexture$self$$inline_380_existed_glTexturePositionBuffer_texture$$6$$), $JSCompiler_StaticMethods_update_$self$$.$_gl$.texImage2D($JSCompiler_StaticMethods_update_$self$$.$_gl$.TEXTURE_2D, 
          0, $JSCompiler_StaticMethods_update_$self$$.$_gl$.RGBA, $JSCompiler_StaticMethods_update_$self$$.$_gl$.RGBA, $JSCompiler_StaticMethods_update_$self$$.$_gl$.UNSIGNED_BYTE, $JSCompiler_StaticMethods_loadFile$self$$inline_385_JSCompiler_StaticMethods_loadTexture$self$$inline_380_existed_glTexturePositionBuffer_texture$$6$$.$image$), $JSCompiler_StaticMethods_update_$self$$.$_gl$.texParameteri($JSCompiler_StaticMethods_update_$self$$.$_gl$.TEXTURE_2D, $JSCompiler_StaticMethods_update_$self$$.$_gl$.TEXTURE_MAG_FILTER, 
          $JSCompiler_StaticMethods_update_$self$$.$_gl$.LINEAR), $JSCompiler_StaticMethods_update_$self$$.$_gl$.texParameteri($JSCompiler_StaticMethods_update_$self$$.$_gl$.TEXTURE_2D, $JSCompiler_StaticMethods_update_$self$$.$_gl$.TEXTURE_MIN_FILTER, $JSCompiler_StaticMethods_update_$self$$.$_gl$.LINEAR), $JSCompiler_StaticMethods_update_$self$$.$_gl$.bindTexture($JSCompiler_StaticMethods_update_$self$$.$_gl$.TEXTURE_2D, $JSCompiler_alias_NULL$$), $JSCompiler_StaticMethods_loadFile$self$$inline_385_JSCompiler_StaticMethods_loadTexture$self$$inline_380_existed_glTexturePositionBuffer_texture$$6$$ = 
          $JSCompiler_StaticMethods_update_$self$$.$_gl$.createBuffer(), $JSCompiler_StaticMethods_update_$self$$.$_gl$.bindBuffer($JSCompiler_StaticMethods_update_$self$$.$_gl$.ARRAY_BUFFER, $JSCompiler_StaticMethods_loadFile$self$$inline_385_JSCompiler_StaticMethods_loadTexture$self$$inline_380_existed_glTexturePositionBuffer_texture$$6$$), $JSCompiler_StaticMethods_update_$self$$.$_gl$.bufferData($JSCompiler_StaticMethods_update_$self$$.$_gl$.ARRAY_BUFFER, new Float32Array($object$$27$$.$_textureCoordinateMap$), 
          $JSCompiler_StaticMethods_update_$self$$.$_gl$.STATIC_DRAW), $oldTexturePositionBuffer_texturePositionBuffer_transformationMatrix$$1$$ = new $X$buffer$$($JSCompiler_StaticMethods_loadFile$self$$inline_385_JSCompiler_StaticMethods_loadTexture$self$$inline_380_existed_glTexturePositionBuffer_texture$$6$$, $object$$27$$.$_textureCoordinateMap$.length, 2)) : $oldTexturePositionBuffer_texturePositionBuffer_transformationMatrix$$1$$ = $JSCompiler_StaticMethods_update_$self$$.$_texturePositionBuffers$.get($object$$27$$.id())
        }
        $JSCompiler_StaticMethods_addProgress$$($JSCompiler_StaticMethods_update_$self$$.$loader$(), 0.1);
        $JSCompiler_StaticMethods_update_$self$$.$_objects$.push($object$$27$$) || $JSCompiler_alias_THROW$$(new $X$exception$$("Could not add object to this renderer."));
        $JSCompiler_StaticMethods_update_$self$$.$_vertexBuffers$.set($object$$27$$.id(), $counter$$1_filepath$$inline_387_glVertexBuffer_image$$inline_382_oldVertexBuffer_vertexBuffer$$);
        $JSCompiler_StaticMethods_update_$self$$.$_normalBuffers$.set($object$$27$$.id(), $currentTextureFilename$$inline_383_fileExtension$$inline_388_glNormalBuffer_normalBuffer_oldNormalBuffer_points$$1_request$$inline_389_tMax$$);
        $JSCompiler_StaticMethods_update_$self$$.$_colorBuffers$.set($object$$27$$.id(), $colorBuffer_glColorBuffer_oldColorBuffer_tMin$$);
        $JSCompiler_StaticMethods_update_$self$$.$_texturePositionBuffers$.set($object$$27$$.id(), $oldTexturePositionBuffer_texturePositionBuffer_transformationMatrix$$1$$);
        $JSCompiler_StaticMethods_update_$self$$.$_locked$ = $JSCompiler_alias_FALSE$$
      }
    }
  }
}
$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$() {
  (!this.$_canvas$ || !this.$_gl$ || !this.$_camera$) && $JSCompiler_alias_THROW$$(new $X$exception$$("The renderer was not initialized properly!"));
  if(!$goog$isDefAndNotNull$$(this.$_readyCheckTimer$)) {
    if($JSCompiler_StaticMethods_completed$$(this.$loader$())) {
      this.$_progressBar$ ? $JSCompiler_StaticMethods_hideProgressBar_$$(this) : this.$render_$($JSCompiler_alias_FALSE$$)
    }else {
      if(this.$config$.$PROGRESSBAR_ENABLED$ && !this.$_progressBar$) {
        this.$_progressBar$ = new $X$progressbar$$(this.$_container$, 0)
      }
      this.$_readyCheckTimer$ = $goog$Timer$callOnce$$(function() {
        this.$_readyCheckTimer$ = $JSCompiler_alias_NULL$$;
        this.$render$()
      }.bind(this), 100)
    }
  }
};
$JSCompiler_prototypeAlias$$.get = function $$JSCompiler_prototypeAlias$$$get$($id$$12$$) {
  $goog$isDefAndNotNull$$($id$$12$$) || $JSCompiler_alias_THROW$$(new $X$exception$$("Invalid object id."));
  for(var $k$$4$$ = 0, $numberOfObjects$$ = this.$_objects$.length, $k$$4$$ = 0;$k$$4$$ < $numberOfObjects$$;$k$$4$$++) {
    if(this.$_objects$[$k$$4$$].id() == $id$$12$$) {
      return this.$_objects$[$k$$4$$]
    }
  }
  return $JSCompiler_alias_NULL$$
};
function $JSCompiler_StaticMethods_pick$$($JSCompiler_StaticMethods_pick$self_r$$2$$, $g$$1_x$$84$$, $y$$56$$) {
  if($JSCompiler_StaticMethods_pick$self_r$$2$$.$config$.$PICKING_ENABLED$) {
    $JSCompiler_StaticMethods_pick$self_r$$2$$.$render_$($JSCompiler_alias_TRUE$$);
    var $b$$58_data$$35$$ = new Uint8Array(4);
    $JSCompiler_StaticMethods_pick$self_r$$2$$.$_gl$.readPixels($g$$1_x$$84$$, $JSCompiler_StaticMethods_pick$self_r$$2$$.$_height$ - $y$$56$$, 1, 1, $JSCompiler_StaticMethods_pick$self_r$$2$$.$_gl$.RGBA, $JSCompiler_StaticMethods_pick$self_r$$2$$.$_gl$.UNSIGNED_BYTE, $b$$58_data$$35$$);
    $JSCompiler_StaticMethods_pick$self_r$$2$$ = Math.round(10 * ($b$$58_data$$35$$[0] / 255));
    $g$$1_x$$84$$ = Math.round(10 * ($b$$58_data$$35$$[1] / 255));
    $b$$58_data$$35$$ = Math.round(10 * ($b$$58_data$$35$$[2] / 255));
    return 100 * $JSCompiler_StaticMethods_pick$self_r$$2$$ + 10 * $g$$1_x$$84$$ + $b$$58_data$$35$$
  }
  return-1
}
$JSCompiler_prototypeAlias$$.$render_$ = function $$JSCompiler_prototypeAlias$$$$render_$$($picking$$) {
  for(var $center_objects_perspectiveMatrix_y$$57$$ = 0;$center_objects_perspectiveMatrix_y$$57$$ < this.$_topLevelObjects$.length;$center_objects_perspectiveMatrix_y$$57$$++) {
  }
  $picking$$ ? this.$_gl$.bindFramebuffer(this.$_gl$.FRAMEBUFFER, this.$_pickFrameBuffer$) : this.$_gl$.bindFramebuffer(this.$_gl$.FRAMEBUFFER, $JSCompiler_alias_NULL$$);
  this.$_gl$.clear(this.$_gl$.COLOR_BUFFER_BIT | this.$_gl$.DEPTH_BUFFER_BIT);
  var $center_objects_perspectiveMatrix_y$$57$$ = this.$_camera$.$_perspective$, $numberOfObjects$$1_viewMatrix$$ = this.$_camera$.$_glView$;
  this.$_gl$.uniformMatrix4fv(this.$_uniformLocations$.get("perspective"), $JSCompiler_alias_FALSE$$, $center_objects_perspectiveMatrix_y$$57$$);
  this.$_gl$.uniformMatrix4fv(this.$_uniformLocations$.get("view"), $JSCompiler_alias_FALSE$$, $numberOfObjects$$1_viewMatrix$$);
  $center_objects_perspectiveMatrix_y$$57$$ = this.$_center$;
  this.$_gl$.uniform3f(this.$_uniformLocations$.get("center"), parseFloat($center_objects_perspectiveMatrix_y$$57$$[0]), parseFloat($center_objects_perspectiveMatrix_y$$57$$[1]), parseFloat($center_objects_perspectiveMatrix_y$$57$$[2]));
  var $center_objects_perspectiveMatrix_y$$57$$ = this.$_objects$, $numberOfObjects$$1_viewMatrix$$ = $center_objects_perspectiveMatrix_y$$57$$.length, $i$$163$$;
  window.console.log("number of objects: " + $numberOfObjects$$1_viewMatrix$$);
  for($i$$163$$ = 0;$i$$163$$ < $numberOfObjects$$1_viewMatrix$$;++$i$$163$$) {
    var $object$$30$$ = $center_objects_perspectiveMatrix_y$$57$$[$i$$163$$];
    if($object$$30$$) {
      if($object$$30$$.$_visible$) {
        var $drawMode_id$$13$$ = $object$$30$$.id();
        window.console.log("==================");
        window.console.log("id: " + $object$$30$$.id());
        window.console.log("color: " + $object$$30$$.color());
        window.console.log("visible: " + $object$$30$$.$_visible$);
        window.console.log("opacity: " + $object$$30$$.opacity());
        window.console.log("points: " + $object$$30$$.$_points$.get(1));
        window.console.log("normals: " + $object$$30$$.$_normals$.get(1));
        var $magicMode$$1_objectColor_r$$3$$ = $object$$30$$.$_magicMode$, $vertexBuffer$$1$$ = this.$_vertexBuffers$.get($drawMode_id$$13$$), $g$$2_normalBuffer$$1_useObjectColor$$ = this.$_normalBuffers$.get($drawMode_id$$13$$), $colorBuffer$$1$$ = this.$_colorBuffers$.get($drawMode_id$$13$$), $texturePositionBuffer$$1$$ = this.$_texturePositionBuffers$.get($drawMode_id$$13$$);
        this.$_gl$.bindBuffer(this.$_gl$.ARRAY_BUFFER, $vertexBuffer$$1$$.$_glBuffer$);
        this.$_gl$.vertexAttribPointer(this.$_attributePointers$.get("vertexPosition"), $vertexBuffer$$1$$.$_itemSize$, this.$_gl$.FLOAT, $JSCompiler_alias_FALSE$$, 0, 0);
        this.$_gl$.bindBuffer(this.$_gl$.ARRAY_BUFFER, $g$$2_normalBuffer$$1_useObjectColor$$.$_glBuffer$);
        this.$_gl$.vertexAttribPointer(this.$_attributePointers$.get("vertexNormal"), $g$$2_normalBuffer$$1_useObjectColor$$.$_itemSize$, this.$_gl$.FLOAT, $JSCompiler_alias_FALSE$$, 0, 0);
        $picking$$ ? this.$_gl$.uniform1i(this.$_uniformLocations$.get("usePicking"), $JSCompiler_alias_TRUE$$) : this.$_gl$.uniform1i(this.$_uniformLocations$.get("usePicking"), $JSCompiler_alias_FALSE$$);
        $goog$isDefAndNotNull$$($colorBuffer$$1$$) && !$picking$$ && !$magicMode$$1_objectColor_r$$3$$ ? (this.$_gl$.uniform1i(this.$_uniformLocations$.get("useObjectColor"), $JSCompiler_alias_FALSE$$), this.$_gl$.bindBuffer(this.$_gl$.ARRAY_BUFFER, $colorBuffer$$1$$.$_glBuffer$), this.$_gl$.vertexAttribPointer(this.$_attributePointers$.get("vertexColor"), $colorBuffer$$1$$.$_itemSize$, this.$_gl$.FLOAT, $JSCompiler_alias_FALSE$$, 0, 0)) : ($g$$2_normalBuffer$$1_useObjectColor$$ = $JSCompiler_alias_TRUE$$, 
        $magicMode$$1_objectColor_r$$3$$ && !$picking$$ && ($g$$2_normalBuffer$$1_useObjectColor$$ = $JSCompiler_alias_FALSE$$), this.$_gl$.uniform1i(this.$_uniformLocations$.get("useObjectColor"), $g$$2_normalBuffer$$1_useObjectColor$$), $magicMode$$1_objectColor_r$$3$$ = $object$$30$$.color(), $picking$$ && (999 < $drawMode_id$$13$$ && $JSCompiler_alias_THROW$$(new $X$exception$$("Id out of bounds.")), $magicMode$$1_objectColor_r$$3$$ = Math.floor(0.01 * $drawMode_id$$13$$), $g$$2_normalBuffer$$1_useObjectColor$$ = 
        Math.floor(0.1 * $drawMode_id$$13$$) - 10 * $magicMode$$1_objectColor_r$$3$$, $magicMode$$1_objectColor_r$$3$$ = [$magicMode$$1_objectColor_r$$3$$ / 10, $g$$2_normalBuffer$$1_useObjectColor$$ / 10, ($drawMode_id$$13$$ - 100 * $magicMode$$1_objectColor_r$$3$$ - 10 * $g$$2_normalBuffer$$1_useObjectColor$$) / 10]), this.$_gl$.uniform3f(this.$_uniformLocations$.get("objectColor"), parseFloat($magicMode$$1_objectColor_r$$3$$[0]), parseFloat($magicMode$$1_objectColor_r$$3$$[1]), parseFloat($magicMode$$1_objectColor_r$$3$$[2])), 
        this.$_gl$.vertexAttribPointer(this.$_attributePointers$.get("vertexColor"), $vertexBuffer$$1$$.$_itemSize$, this.$_gl$.FLOAT, $JSCompiler_alias_FALSE$$, 0, 0));
        this.$_gl$.uniform1f(this.$_uniformLocations$.get("objectOpacity"), parseFloat($object$$30$$.opacity()));
        $goog$isDefAndNotNull$$($object$$30$$.$_texture$) && $goog$isDefAndNotNull$$($texturePositionBuffer$$1$$) && !$picking$$ ? (this.$_gl$.uniform1i(this.$_uniformLocations$.get("useTexture"), $JSCompiler_alias_TRUE$$), this.$_gl$.activeTexture(this.$_gl$.TEXTURE0), this.$_gl$.bindTexture(this.$_gl$.TEXTURE_2D, this.$_textures$.get($object$$30$$.$_texture$.file())), this.$_gl$.uniform1i(this.$_uniformLocations$.get("textureSampler"), 0), this.$_gl$.bindBuffer(this.$_gl$.ARRAY_BUFFER, $texturePositionBuffer$$1$$.$_glBuffer$), 
        this.$_gl$.vertexAttribPointer(this.$_attributePointers$.get("vertexTexturePos"), $texturePositionBuffer$$1$$.$_itemSize$, this.$_gl$.FLOAT, $JSCompiler_alias_FALSE$$, 0, 0)) : (this.$_gl$.uniform1i(this.$_uniformLocations$.get("useTexture"), $JSCompiler_alias_FALSE$$), this.$_gl$.vertexAttribPointer(this.$_attributePointers$.get("vertexTexturePos"), $vertexBuffer$$1$$.$_itemSize$, this.$_gl$.FLOAT, $JSCompiler_alias_FALSE$$, 0, 0));
        this.$_gl$.uniformMatrix4fv(this.$_uniformLocations$.get("objectTransform"), $JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_glMatrix$$($object$$30$$.transform()));
        $drawMode_id$$13$$ = -1;
        $object$$30$$.type() == $X$object$types$TRIANGLES$$ ? $drawMode_id$$13$$ = this.$_gl$.TRIANGLES : $object$$30$$.type() == $X$object$types$LINES$$ ? (this.$_gl$.lineWidth($object$$30$$.lineWidth()), $drawMode_id$$13$$ = this.$_gl$.LINES) : "TRIANGLE_STRIPS" == $object$$30$$.type() ? $drawMode_id$$13$$ = this.$_gl$.TRIANGLE_STRIP : "POLYGONS" == $object$$30$$.type() && ($drawMode_id$$13$$ = 0 == $vertexBuffer$$1$$.$_itemCount$ % 3 ? this.$_gl$.TRIANGLES : this.$_gl$.TRIANGLE_FAN);
        this.$_gl$.drawArrays($drawMode_id$$13$$, 0, $vertexBuffer$$1$$.$_itemCount$)
      }
    }else {
      $JSCompiler_alias_THROW$$(new $X$exception$$("Could not retrieve object for (re-)drawing!"))
    }
  }
};
$goog$exportSymbol$$("X.renderer", $X$renderer$$);
$goog$exportSymbol$$("X.renderer.prototype.config", $X$renderer$$.prototype.$config$);
$goog$exportSymbol$$("X.renderer.prototype.width", $X$renderer$$.prototype.width);
$goog$exportSymbol$$("X.renderer.prototype.height", $X$renderer$$.prototype.height);
$goog$exportSymbol$$("X.renderer.prototype.canvas", $X$renderer$$.prototype.canvas);
$goog$exportSymbol$$("X.renderer.prototype.container", $X$renderer$$.prototype.$container$);
$goog$exportSymbol$$("X.renderer.prototype.camera", $X$renderer$$.prototype.$camera$);
$goog$exportSymbol$$("X.renderer.prototype.interactor", $X$renderer$$.prototype.$interactor$);
$goog$exportSymbol$$("X.renderer.prototype.loader", $X$renderer$$.prototype.$loader$);
$goog$exportSymbol$$("X.renderer.prototype.onProgress", $X$renderer$$.prototype.$onProgress$);
$goog$exportSymbol$$("X.renderer.prototype.onModified", $X$renderer$$.prototype.$onModified$);
$goog$exportSymbol$$("X.renderer.prototype.resetViewAndRender", $X$renderer$$.prototype.$resetViewAndRender$);
$goog$exportSymbol$$("X.renderer.prototype.init", $X$renderer$$.prototype.$init$);
$goog$exportSymbol$$("X.renderer.prototype.addShaders", $X$renderer$$.prototype.$addShaders$);
$goog$exportSymbol$$("X.renderer.prototype.add", $X$renderer$$.prototype.add);
$goog$exportSymbol$$("X.renderer.prototype.render", $X$renderer$$.prototype.$render$);
function $CSG$sphere$$($options$$2_stacks$$) {
  function $vertex$$1$$($theta$$1$$, $phi$$1$$) {
    var $theta$$1$$ = $theta$$1$$ * 2 * Math.PI, $phi$$1$$ = $phi$$1$$ * Math.PI, $dir$$ = new $csgVector$$(Math.cos($theta$$1$$) * Math.sin($phi$$1$$), Math.cos($phi$$1$$), Math.sin($theta$$1$$) * Math.sin($phi$$1$$));
    $vertices$$4$$.push(new $csgVertex$$($c$$10$$.$plus$($dir$$.$times$($r$$4$$)), $dir$$))
  }
  this.$polygons_$ = [];
  for(var $options$$2_stacks$$ = $options$$2_stacks$$ || {}, $c$$10$$ = new $csgVector$$($options$$2_stacks$$.$center$ || [0, 0, 0]), $r$$4$$ = $options$$2_stacks$$.$radius$ || 1, $slices$$ = $options$$2_stacks$$.$slices$ || 16, $options$$2_stacks$$ = $options$$2_stacks$$.$stacks$ || 8, $polygons$$7$$ = [], $vertices$$4$$, $i$$164$$ = 0;$i$$164$$ < $slices$$;$i$$164$$++) {
    for(var $j$$32$$ = 0;$j$$32$$ < $options$$2_stacks$$;$j$$32$$++) {
      $vertices$$4$$ = [], $vertex$$1$$($i$$164$$ / $slices$$, $j$$32$$ / $options$$2_stacks$$), 0 < $j$$32$$ && $vertex$$1$$(($i$$164$$ + 1) / $slices$$, $j$$32$$ / $options$$2_stacks$$), $j$$32$$ < $options$$2_stacks$$ - 1 && $vertex$$1$$(($i$$164$$ + 1) / $slices$$, ($j$$32$$ + 1) / $options$$2_stacks$$), $vertex$$1$$($i$$164$$ / $slices$$, ($j$$32$$ + 1) / $options$$2_stacks$$), $polygons$$7$$.push(new $csgPolygon$$($vertices$$4$$))
    }
  }
  return $CSG$fromPolygons$$($polygons$$7$$)
}
$goog$inherits$$($CSG$sphere$$, $CSG$$);
$goog$exportSymbol$$("CSG.sphere", $CSG$sphere$$);
function $X$sphere$$($center$$1$$, $radius$$4$$) {
  (!$goog$isDefAndNotNull$$($center$$1$$) || !($center$$1$$ instanceof Array) || 3 != $center$$1$$.length) && $JSCompiler_alias_THROW$$(new $X$exception$$("Invalid center."));
  $goog$isNumber$$($radius$$4$$) || $JSCompiler_alias_THROW$$(new $X$exception$$("Invalid radius."));
  $X$object$$.call(this);
  this.$_className$ = "Sphere";
  this.$_center$ = $center$$1$$;
  this.$_radius$ = $radius$$4$$;
  this.$_slices$ = 32;
  this.$_stacks$ = 16;
  this.$create_$()
}
$goog$inherits$$($X$sphere$$, $X$object$$);
$X$sphere$$.prototype.$create_$ = function $$X$sphere$$$$$create_$$() {
  $JSCompiler_StaticMethods_fromCSG$$(this, new $CSG$sphere$$({$center$:this.$_center$, $radius$:this.$_radius$, $slices$:this.$_slices$, $stacks$:this.$_stacks$}))
};
$goog$exportSymbol$$("X.sphere", $X$sphere$$);
function $CSG$cylinder$$($options$$3_slices$$1$$) {
  function $point$$($pos$$10_stack$$1$$, $angle$$11_out_slice$$, $normal$$2_normalBlend$$) {
    $angle$$11_out_slice$$ = 2 * $angle$$11_out_slice$$ * Math.PI;
    $angle$$11_out_slice$$ = $axisX$$.$times$(Math.cos($angle$$11_out_slice$$)).$plus$($axisY$$.$times$(Math.sin($angle$$11_out_slice$$)));
    $pos$$10_stack$$1$$ = $s$$25$$.$plus$($ray$$.$times$($pos$$10_stack$$1$$)).$plus$($angle$$11_out_slice$$.$times$($r$$5$$));
    $normal$$2_normalBlend$$ = $angle$$11_out_slice$$.$times$(1 - Math.abs($normal$$2_normalBlend$$)).$plus$($axisZ$$.$times$($normal$$2_normalBlend$$));
    return new $csgVertex$$($pos$$10_stack$$1$$, $normal$$2_normalBlend$$)
  }
  this.$polygons_$ = [];
  for(var $options$$3_slices$$1$$ = $options$$3_slices$$1$$ || {}, $s$$25$$ = new $csgVector$$($options$$3_slices$$1$$.start || [0, -1, 0]), $e$$64_end$$3$$ = new $csgVector$$($options$$3_slices$$1$$.end || [0, 1, 0]), $ray$$ = $e$$64_end$$3$$.$minus$($s$$25$$), $r$$5$$ = $options$$3_slices$$1$$.$radius$ || 1, $options$$3_slices$$1$$ = $options$$3_slices$$1$$.$slices$ || 16, $axisZ$$ = $ray$$.$unit$(), $isY_start$$8$$ = 0.5 < Math.abs($axisZ$$.y()), $axisX$$ = (new $csgVector$$($isY_start$$8$$, !$isY_start$$8$$, 
  0)).$cross$($axisZ$$).$unit$(), $axisY$$ = $axisX$$.$cross$($axisZ$$).$unit$(), $isY_start$$8$$ = new $csgVertex$$($s$$25$$, $axisZ$$.$negated$()), $e$$64_end$$3$$ = new $csgVertex$$($e$$64_end$$3$$, $axisZ$$.$unit$()), $polygons$$8$$ = [], $i$$165$$ = 0;$i$$165$$ < $options$$3_slices$$1$$;$i$$165$$++) {
    var $t0$$ = $i$$165$$ / $options$$3_slices$$1$$, $t1$$ = ($i$$165$$ + 1) / $options$$3_slices$$1$$;
    $polygons$$8$$.push(new $csgPolygon$$([$isY_start$$8$$, $point$$(0, $t0$$, -1), $point$$(0, $t1$$, -1)]));
    $polygons$$8$$.push(new $csgPolygon$$([$point$$(0, $t1$$, 0), $point$$(0, $t0$$, 0), $point$$(1, $t0$$, 0), $point$$(1, $t1$$, 0)]));
    $polygons$$8$$.push(new $csgPolygon$$([$e$$64_end$$3$$, $point$$(1, $t1$$, 1), $point$$(1, $t0$$, 1)]))
  }
  return $CSG$fromPolygons$$($polygons$$8$$)
}
$goog$inherits$$($CSG$cylinder$$, $CSG$$);
$goog$exportSymbol$$("CSG.cylinder", $CSG$cylinder$$);
function $X$cylinder$$($start$$9$$, $end$$4$$, $radius$$5$$) {
  (!$goog$isDefAndNotNull$$($start$$9$$) || !($start$$9$$ instanceof Array) || 3 != $start$$9$$.length) && $JSCompiler_alias_THROW$$(new $X$exception$$("Invalid start position."));
  (!$goog$isDefAndNotNull$$($end$$4$$) || !($end$$4$$ instanceof Array) || 3 != $end$$4$$.length) && $JSCompiler_alias_THROW$$(new $X$exception$$("Invalid end position."));
  $goog$isNumber$$($radius$$5$$) || $JSCompiler_alias_THROW$$(new $X$exception$$("Invalid radius."));
  $X$object$$.call(this);
  this.$_className$ = "cylinder";
  this.$_start$ = $start$$9$$;
  this.$_end$ = $end$$4$$;
  this.$_radius$ = $radius$$5$$;
  this.$_slices$ = 32;
  this.$create_$()
}
$goog$inherits$$($X$cylinder$$, $X$object$$);
$X$cylinder$$.prototype.$create_$ = function $$X$cylinder$$$$$create_$$() {
  $JSCompiler_StaticMethods_fromCSG$$(this, new $CSG$cylinder$$({start:this.$_start$, end:this.$_end$, $radius$:this.$_radius$, $slices$:this.$_slices$}))
};
$goog$exportSymbol$$("X.cylinder", $X$cylinder$$);
function $CSG$cube$$($options$$4$$) {
  this.$polygons_$ = [];
  var $options$$4$$ = $options$$4$$ || {}, $c$$11$$ = new $csgVector$$($options$$4$$.$center$ || [0, 0, 0]), $r$$6$$ = !$options$$4$$.$radius$ ? [1, 1, 1] : $options$$4$$.$radius$.length ? $options$$4$$.$radius$ : [$options$$4$$.$radius$, $options$$4$$.$radius$, $options$$4$$.$radius$];
  return $CSG$fromPolygons$$([[[0, 4, 6, 2], [-1, 0, 0]], [[1, 3, 7, 5], [1, 0, 0]], [[0, 1, 5, 4], [0, -1, 0]], [[2, 6, 7, 3], [0, 1, 0]], [[0, 2, 3, 1], [0, 0, -1]], [[4, 5, 7, 6], [0, 0, 1]]].map(function($info$$1$$) {
    return new $csgPolygon$$($info$$1$$[0].map(function($i$$166_pos$$11$$) {
      $i$$166_pos$$11$$ = new $csgVector$$($c$$11$$.x() + $r$$6$$[0] * (2 * !!($i$$166_pos$$11$$ & 1) - 1), $c$$11$$.y() + $r$$6$$[1] * (2 * !!($i$$166_pos$$11$$ & 2) - 1), $c$$11$$.$z$() + $r$$6$$[2] * (2 * !!($i$$166_pos$$11$$ & 4) - 1));
      return new $csgVertex$$($i$$166_pos$$11$$, new $csgVector$$($info$$1$$[1]))
    }))
  }))
}
$goog$inherits$$($CSG$cube$$, $CSG$$);
$goog$exportSymbol$$("CSG.cube", $CSG$cube$$);
function $X$cube$$($center$$2$$, $radiusX$$, $radiusY$$, $radiusZ$$) {
  (!$goog$isDefAndNotNull$$($center$$2$$) || !($center$$2$$ instanceof Array) || 3 != $center$$2$$.length) && $JSCompiler_alias_THROW$$(new $X$exception$$("Invalid center."));
  (!$goog$isNumber$$($radiusX$$) || !$goog$isNumber$$($radiusY$$) || !$goog$isNumber$$($radiusZ$$)) && $JSCompiler_alias_THROW$$(new $X$exception$$("Invalid radii."));
  $X$object$$.call(this);
  this.$_className$ = "cube";
  this.$_center$ = $center$$2$$;
  this.$_radiusX$ = $radiusX$$;
  this.$_radiusY$ = $radiusY$$;
  this.$_radiusZ$ = $radiusZ$$;
  this.$_textureCoordinateMap$ = [0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0];
  this.$create_$()
}
$goog$inherits$$($X$cube$$, $X$object$$);
$X$cube$$.prototype.$create_$ = function $$X$cube$$$$$create_$$() {
  $JSCompiler_StaticMethods_fromCSG$$(this, new $CSG$cube$$({$center$:this.$_center$, $radius$:[this.$_radiusX$, this.$_radiusY$, this.$_radiusZ$]}))
};
$goog$exportSymbol$$("X.cube", $X$cube$$);

