/****************************************************************************
 Copyright (c) 2010-2012 cocos2d-x.org
 Copyright (c) 2008-2010 Ricardo Quesada
 Copyright (c) 2011      Zynga Inc.

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

/**
 @brief This action simulates a page turn from the bottom right hand corner of the screen.
 It's not much use by itself but is used by the PageTurnTransition.

 Based on an original paper by L Hong et al.
 http://www.parc.com/publication/1638/turning-pages-of-3d-electronic-books.html

 @since v0.8.2
 */

cc.PageTurn3D = cc.Grid3DAction.extend({
    /*
     * Update each tick
     * Time is the percentage of the way through the duration
     */
    update:function (time) {
        var tt = Math.max(0, time - 0.25);
        var deltaAy = (tt * tt * 500);
        var ay = -100 - deltaAy;

        var deltaTheta = -Math.PI / 2 * Math.sqrt(time);
        var theta = /*0.01f */ +Math.PI / 2 + deltaTheta;

        var sinTheta = Math.sin(theta);
        var cosTheta = Math.cos(theta);

        for (var i = 0; i <= this._gridSize.x; ++i) {
            for (var j = 0; j <= this._gridSize.y; ++j) {
                // Get original vertex
                var p = this.originalVertex(cc.ccg(i, j));

                var R = Math.sqrt((p.x * p.x) + ((p.y - ay) * (p.y - ay)));
                var r = R * sinTheta;
                var alpha = Math.asin(p.x / R);
                var beta = alpha / sinTheta;
                var cosBeta = Math.cos(beta);

                // If beta > PI then we've wrapped around the cone
                // Reduce the radius to stop these points interfering with others
                if (beta <= Math.PI) {
                    p.x = ( r * Math.sin(beta));
                }
                else {
                    // Force X = 0 to stop wrapped
                    // points
                    p.x = 0;
                }

                p.y = ( R + ay - ( r * (1 - cosBeta) * sinTheta));

                // We scale z here to avoid the animation being
                // too much bigger than the screen due to perspectve transform
                p.z = (r * ( 1 - cosBeta ) * cosTheta) / 7;// "100" didn't work for

                //	Stop z coord from dropping beneath underlying page in a transition
                // issue #751
                if (p.z < 0.5) {
                    p.z = 0.5;
                }

                // Set new coords
                this.setVertex(cc.ccg(i, j), p);

            }
        }
    }
});

/** create the action */
cc.PageTurn3D.create = function (gridSize, time) {
    var action = new cc.PageTurn3D();
    return action;
};