var CHARACTERS = [
	{"tag":"man_and_baby", "width":124, "height":164, "posX":18, "posY":45, "sound":"FG_GN_025", "tofind":true},
	{"tag":"ady_posting", "width":56, "height":80, "posX":48, "posY":251, "sound":"FG_GN_005", "tofind":true},
	{"tag":"bike_and", "width":104, "height":135, "posX":227, "posY":38, "sound":"FG_GN_008", "tofind":true},
//	{"tag":"and_girl", "width":50, "height":141, "posX":417, "posY":73, "sound":"", "tofind":false},
	{"tag":"atm_guy", "width":61, "height":122, "posX":339, "posY":110, "sound":"FG_GN_009", "tofind":true},
	{"tag":"lady_watering", "width":67, "height":92, "posX":351, "posY":281, "sound":"", "tofind":false},
	{"tag":"firebell", "width":47, "height":70, "posX":137, "posY":376, "sound":"", "tofind":false},
	{"tag":"dalmation", "width":46, "height":51, "posX":190, "posY":254, "sound":"FG_GN_007", "tofind":true},
	{"tag":"fireman", "width":49, "height":51, "posX":236, "posY":238, "sound":"FG_GN_006", "tofind":true},
	{"tag":"horn", "width":47, "height":42, "posX":265, "posY":289, "sound":"", "tofind":false},
	{"tag":"cake_lady", "width":50, "height":112, "posX":476, "posY":99, "sound":"FG_GN_012", "tofind":true},
	{"tag":"grocer", "width":162, "height":108, "posX":534, "posY":139, "sound":"FG_GN_013", "tofind":true},
	{"tag":"baker", "width":87, "height":71, "posX":458, "posY":281, "sound":"FG_GN_014", "tofind":true},
	{"tag":"boy_playing", "width":72, "height":50, "posX":565, "posY":302, "sound":"FG_GN_015", "tofind":true},
	{"tag":"roof_bird", "width":46, "height":46, "posX":504, "posY":396, "sound":"FG_GN_016", "tofind":true},
	{"tag":"jackhammer_guy", "width":61, "height":117, "posX":742, "posY":71, "sound":"FG_GN_010", "tofind":true},
	{"tag":"manhole_guy", "width":71, "height":37, "posX":830, "posY":120, "sound":"FG_GN_011", "tofind":true},
	{"tag":"postal_delivery", "width":72, "height":129, "posX":742, "posY":200, "sound":"FG_GN_020", "tofind":true},
	{"tag":"george", "width":52, "height":99, "posX":690, "posY":281, "sound":"FG_GN_017", "tofind":true},
	{"tag":"parrot", "width":45, "height":80, "posX":830, "posY":263, "sound":"FG_GN_019", "tofind":true},
	{"tag":"man_in_shower", "width":55, "height":99, "posX":690, "posY":396, "sound":"", "tofind":false},
	{"tag":"piano_girl", "width":55, "height":102, "posX":758, "posY":387, "sound":"FG_GN_004", "tofind":true},
	{"tag":"man_yellow_hat", "width":55, "height":102, "posX":825, "posY":380, "sound":"FG_GN_018", "tofind":true},
	{"tag":"police_car", "width":200, "height":135, "posX":920, "posY":73, "sound":"FG_GN_021", "tofind":true},
	{"tag":"librarian", "width":149, "height":87, "posX":908, "posY":232, "sound":"FG_GN_030", "tofind":true},
	{"tag":"dog", "width":82, "height":70, "posX":1131, "posY":87, "sound":"FG_GN_003", "tofind":true},
	{"tag":"dog", "width":65, "height":80, "posX":1187, "posY":127, "sound":"FG_GN_003", "tofind":false},
	{"tag":"cat", "width":90, "height":46, "posX":1235, "posY":3, "sound":"", "tofind":false},
	{"tag":"butterflies", "width":237, "height":46, "posX":1233, "posY":50, "sound":"", "tofind":false},
	{"tag":"fountain", "width":90, "height":127, "posX":1378, "posY":110, "sound":"FG_GN_026", "tofind":true},
	{"tag":"crossing_guard", "width":42, "height":91, "posX":1230, "posY":208, "sound":"FG_GN_028", "tofind":true},
	{"tag":"wheelchair_girl", "width":36, "height":64, "posX":1324, "posY":228, "sound":"FG_GN_027", "tofind":true},
	{"tag":"coach", "width":44, "height":85, "posX":1251, "posY":302, "sound":"", "tofind":false},
	{"tag":"clock", "width":43, "height":46, "posX":1233, "posY":413, "sound":"", "tofind":false},
	{"tag":"classroom", "width":96, "height":79, "posX":1331, "posY":329, "sound":"FG_GN_024", "tofind":true},
	{"tag":"teacher", "width":70, "height":82, "posX":1434, "posY":367, "sound":"FG_GN_023", "tofind":true},
	{"tag":"ice_cream_vendor", "width":78, "height":143, "posX":1572, "posY":7, "sound":"FG_GN_031", "tofind":true},
	{"tag":"ice_cream_vendor", "width":112, "height":184, "posX":1649, "posY":0, "sound":"FG_GN_031", "tofind":false},
	{"tag":"recycle_bin", "width":76, "height":59, "posX":1472, "posY":240, "sound":"FG_GN_022", "tofind":true},
	{"tag":"birds_lady", "width":59, "height":82, "posX":1591, "posY":217, "sound":"", "tofind":false},
	{"tag":"yoyo_boy", "width":49, "height":68, "posX":1744, "posY":275, "sound":"FG_GN_029", "tofind":true},
	{"tag":"swings", "width":66, "height":72, "posX":1554, "posY":410, "sound":"", "tofind":false},
	{"tag":"kite", "width":58, "height":119, "posX":1715, "posY":376, "sound":"FG_GN_032", "tofind":true}
]
