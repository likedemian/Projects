/**
 * @name		Shuffle Letters
 * @author		Martin Angelov
 * @version 	1.0
 * @url			http://tutorialzine.com/2011/09/shuffle-letters-effect-jquery/
 * @license		MIT License
 */
!function(t){function a(t){var a="";"lowerLetter"==t?a="abcdefghijklmnopqrstuvwxyz0123456789":"upperLetter"==t?a="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789":"symbol"==t&&(a=",.?/\\(^)![]{}*&^%$#'\"");var e=a.split("");return e[Math.floor(Math.random()*e.length)]}t.fn.shuffleLetters=function(e){var n=t.extend({step:8,fps:25,text:"",callback:function(){}},e);return this.each(function(){var e=t(this),i="";if(e.data("animated"))return!0;e.data("animated",!0),i=n.text?n.text.split(""):e.text().split("");for(var r=[],s=[],o=0;o<i.length;o++){var p=i[o];" "!=p?(/[a-z]/.test(p)?r[o]="lowerLetter":/[A-Z]/.test(p)?r[o]="upperLetter":r[o]="symbol",s.push(o)):r[o]="space"}e.html(""),function t(o){var p,c=s.length,l=i.slice(0);if(o>c)return e.data("animated",!1),void n.callback(e);for(p=Math.max(o,0);p<c;p++)p<o+n.step?l[s[p]]=a(r[s[p]]):l[s[p]]="";e.text(l.join("")),setTimeout(function(){t(o+1)},1e3/n.fps)}(-n.step)})}}(jQuery);