/**
 * AlignSpaceAround 1.0
 *
 * Copyright (c) 2016 Roman Shamin https://github.com/romashamin
 * and licenced under the MIT licence. All rights not explicitly
 * granted in the MIT license are reserved. See the included
 * LICENSE file for more details.
 *
 * https://github.com/romashamin
 * https://twitter.com/romanshamin
 *
 * Lines up selected layers along the first one with equal gaps
 * between layers. Edge gaps are included:
 * [___________]
 * _[_]_[_]_[_]_
 */

try {
  var sel = app.activeDocument.selection;

  var mWidth = sel[0].width;
  var sumWidthOfAllObjects = 0;

  for (var i = 1; i < sel.length; i++) {
    sumWidthOfAllObjects += sel[i].width;
  }

  var gap = (mWidth - sumWidthOfAllObjects) / sel.length

  var i = 1;
  var currX = sel[0].left + gap;

  while (i < sel.length) {
    var currObject = sel[i];
    currObject.left = currX;

    currX = currX + currObject.width + gap;
    i++;
  }
}
catch(e) {
	alert(e.line + '\n' + e.message, "Script Alert", true);
}
