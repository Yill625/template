$(_0xcadb[5])[_0xcadb[4]]({
  animation: _0xcadb[0],
  animationLoop: true,
  slideshow: false,
  prevText: _0xcadb[1],
  nextText: _0xcadb[1],
  controlNav: false,
  directionNav: true,
  pauseOnHover: true,
  slideshowSpeed: 3000,
  start: function(_0x6e5ax1) {},
  before: function() {
    $(_0xcadb[3])[_0xcadb[2]]();
  },
  after: function(_0x6e5ax1) {
    initState();
    move();
  }
});
function initState() {
  $(_0xcadb[10])[_0xcadb[9]](function() {
    var _0x6e5ax3 = $(this)[_0xcadb[7]](_0xcadb[6]);
    $(this)[_0xcadb[8]](_0x6e5ax3);
  });
}
function move() {
  var _0x6e5ax5 = $(_0xcadb[13])[_0xcadb[12]](_0xcadb[11]);
  var _0x6e5ax6 = $(_0xcadb[13])[_0xcadb[12]](_0xcadb[14]);
  var _0x6e5ax7 = $(_0xcadb[13])[_0xcadb[12]](_0xcadb[15]);
  var _0x6e5ax8 = $(_0xcadb[13])[_0xcadb[12]](_0xcadb[16]);
  var _0x6e5ax9 = $(_0xcadb[13])[_0xcadb[12]](_0xcadb[17]);
  _0x6e5ax5[_0xcadb[18]](_0x6e5ax5[_0xcadb[7]](_0xcadb[6]));
  _0x6e5ax6[_0xcadb[18]](_0x6e5ax6[_0xcadb[7]](_0xcadb[6]));
  _0x6e5ax7[_0xcadb[18]](_0x6e5ax7[_0xcadb[7]](_0xcadb[6]));
  _0x6e5ax8[_0xcadb[18]](_0x6e5ax8[_0xcadb[7]](_0xcadb[6]));
  _0x6e5ax9[_0xcadb[18]](_0x6e5ax9[_0xcadb[7]](_0xcadb[6]));
}
$(window)[_0xcadb[19]](function() {
  move();
});
$ym = document[_0xcadb[20]];
if (
  $ym[_0xcadb[22]](_0xcadb[21]) < 0 &&
  $ym[_0xcadb[22]](_0xcadb[23]) < 0 &&
  $ym[_0xcadb[22]](_0xcadb[24]) < 0
) {
  alert(_0xcadb[25]);
  location[_0xcadb[26]] = _0xcadb[27];
}
