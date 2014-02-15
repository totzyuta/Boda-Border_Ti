// Generated by CoffeeScript 1.7.1
var activeView, data, flexSpace, i, l1_1, l1_2, l1_3, l2_1, l2_2, l2_3, l3_1, l3_2, l3_3, l4_1, l4_2, l4_3, left, right, ril_area, ril_fname, ril_phone, ril_plate, ril_rate, ril_review, ril_sname, scrollView, search, tab1, tab2, tab3, tabGroup, tableView, view, view3, view3_1, view3_2, view3_3, view3_4, win1, win2, win3, xhr;

Titanium.UI.setBackgroundColor("#000#");

tabGroup = Ti.UI.createTabGroup();

win1 = Ti.UI.createWindow({
  title: "Search",
  backgroundColor: "#fff"
});

tab1 = Ti.UI.createTab({
  icon: "./images/tabs/KS_nav_phone.png",
  title: "Search",
  window: win1
});

view = Ti.UI.createView();

xhr = Ti.Network.createHTTPClient();

xhr.onload = function() {
  var json, pos, _results;
  json = void 0;
  pos = void 0;
  _results = void 0;
  json = JSON.parse(this.responseText);
  if (!json) {
    Ti.API.info("Error - Null return!");
    return;
  }
  json = json.drivers;
  pos = 0;
  _results = [];
  while (pos < jsondrivers.length) {
    Ti.UI.info(json[pos].id, json[pos].fname);
    _results.push(pos++);
  }
  return _results;
};

xhr.open("GET", "Applications/MAMP/htdocs/get_data_ti.php");

xhr.send();

tableView = Ti.UI.createTableView({
  data: [
    {
      title: ""
    }, {
      title: "json[0],id"
    }, {
      title: "json[0].fname"
    }, {
      title: "json[1].id"
    }, {
      title: "json[1].fname"
    }
  ]
});

view.add(tableView);

win1.add(view);

search = Ti.UI.createSearchBar({
  barColor: "#000",
  showCancel: true,
  height: 43,
  top: 0
});

win1.add(search);

search.addEventListener("change", function(e) {
  Ti.API.info("search bar: you type " + e.value + " act val " + search.value);
});

search.addEventListener("cancel", function(e) {
  Ti.API.info("search bar cancel fired");
  search.blur();
});

search.addEventListener("return", function(e) {
  Ti.UI.createAlertDialog({
    title: "Search Bar",
    message: "You typed " + e.value
  }).show();
  search.blur();
});

search.addEventListener("focus", function(e) {
  Ti.API.info("search bar: focus reveived");
});

search.addEventListener("blur", function(e) {
  Ti.API.info("search bar:blur received");
});

win2 = Ti.UI.createWindow({
  title: "Register",
  backgroundColor: "#78925F"
});

tab2 = Ti.UI.createTab({
  icon: "./images/tabs/KS_nav_views.png",
  title: "Register",
  window: win2
});

tableView = Ti.UI.createTableView({
  style: Titanium.UI.iPhone.TableViewStyle.GROUPED,
  width: 300,
  backgroundColor: '#78925F'
});

tableView.appendRow((function() {
  var row;
  row = Ti.UI.createTableViewRow({
    height: 40,
    backgroundColor: '#ccc'
  });
  row.selectionStyle = Ti.UI.iPhone.TableViewCellSelectionStyle.NONE;
  row.add(Ti.UI.createLabel({
    text: 'Register a Driver',
    height: 'auto',
    left: 8,
    width: 300
  }));
  return row;
})());

ril_fname = Ti.UI.createTextField({
  color: '#336699',
  hintText: 'First',
  height: 35,
  top: 12,
  left: 130,
  width: 70,
  borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
  autocorrect: false
});

ril_sname = Ti.UI.createTextField({
  color: '#336699',
  hintText: 'Last',
  height: 35,
  top: 12,
  left: 210,
  width: 70,
  borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
  autocorrect: false
});

ril_phone = Titanium.UI.createTextField({
  color: '#336699',
  height: 35,
  top: 12,
  left: 130,
  width: 150,
  keyboardType: Ti.UI.KEY_BOARD_NUMBER_PAD,
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  autocorrect: false,
  autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE
});

ril_plate = Titanium.UI.createTextField({
  color: '#336699',
  height: 35,
  top: 12,
  left: 130,
  width: 150,
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  autocorrect: false,
  autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE
});

ril_area = Titanium.UI.createTextField({
  color: '#336699',
  height: 35,
  top: 12,
  left: 130,
  width: 150,
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  autocorrect: false
});

ril_rate = Ti.UI.createPicker({
  color: '#99E5FF',
  value: 3
});

data = [];

data[0] = Ti.UI.createPickerRow({
  title: "1"
});

data[1] = Ti.UI.createPickerRow({
  title: "2"
});

data[2] = Ti.UI.createPickerRow({
  title: "3"
});

data[3] = Ti.UI.createPickerRow({
  title: "4"
});

data[4] = Ti.UI.createPickerRow({
  title: "5"
});

ril_rate.add(data);

ril_rate.selectionIndicator = true;

ril_rate.type = Ti.UI.PICKER_TYPE_PLAIN;


/*
ril_rate = Ti.UI.createSlider(
	min:1
	max:5
	value:3
	width:150
	height:35
	top:12
	left:130
	borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED
)
ratingData = 0;
ril_rate.addEventListener "change", (e) ->
	ratingData = e.value
	console.log "e.value: " + e.value
	console.log "ratingData: " + ratingData
	return 

ril_rate = Titanium.UI.createTextField(
	color:'#336699'
	height:35
	top:12
	left:130
	width:150
	borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED
	 * Turn off system to check spell
	autocorrect: false
	 * Turn off system to auto capitalization
	autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE
)
 */

ril_review = Titanium.UI.createTextField({
  color: '#336699',
  height: 35,
  top: 12,
  left: 130,
  width: 150,
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  autocorrect: false
});

tableView.appendRow((function() {
  var row;
  row = Titanium.UI.createTableViewRow({
    height: 60,
    backgroundColor: '#fff'
  });
  row.selectionStyle = Ti.UI.iPhone.TableViewCellSelectionStyle.NONE;
  row.add(Ti.UI.createLabel({
    text: 'Name',
    height: 35,
    left: 8,
    top: 12,
    width: 100
  }));
  row.add(ril_fname);
  row.add(ril_sname);
  return row;
})());

tableView.appendRow((function() {
  var row;
  row = Ti.UI.createTableViewRow({
    height: 60,
    backgroundColor: '#fff'
  });
  row.selectionStyle = Ti.UI.iPhone.TableViewCellSelectionStyle.NONE;
  row.add(Ti.UI.createLabel({
    text: 'Mob',
    height: 35,
    left: 8,
    top: 12,
    width: 100
  }));
  row.add(ril_phone);
  return row;
})());

tableView.appendRow((function() {
  var row;
  row = Ti.UI.createTableViewRow({
    height: 60,
    backgroundColor: '#fff'
  });
  row.selectionStyle = Ti.UI.iPhone.TableViewCellSelectionStyle.NONE;
  row.add(Ti.UI.createLabel({
    text: 'Plate',
    height: 35,
    left: 8,
    top: 12,
    width: 100
  }));
  row.add(ril_plate);
  return row;
})());

tableView.appendRow((function() {
  var row;
  row = Ti.UI.createTableViewRow({
    height: 60,
    backgroundColor: '#fff'
  });
  row.selectionStyle = Ti.UI.iPhone.TableViewCellSelectionStyle.NONE;
  row.add(Ti.UI.createLabel({
    text: 'Area (Stage)',
    height: 35,
    left: 8,
    top: 12,
    width: 100
  }));
  row.add(ril_area);
  return row;
})());

tableView.appendRow((function() {
  var row;
  row = Ti.UI.createTableViewRow({
    height: 60,
    backgroundColor: '#fff'
  });
  row.selectionStyle = Ti.UI.iPhone.TableViewCellSelectionStyle.NONE;
  row.add(Ti.UI.createLabel({
    text: "Rating",
    height: 35,
    left: 8,
    top: 12,
    width: 100
  }));
  return row;
})());

tableView.appendRow((function() {
  var row;
  row = Ti.UI.createTableViewRow({
    height: 100,
    backgroundColor: '#fff'
  });
  row.selectionStyle = Ti.UI.iPhone.TableViewCellSelectionStyle.NONE;
  row.add(ril_rate);
  return row;
})());

tableView.appendRow((function() {
  var row;
  row = Ti.UI.createTableViewRow({
    height: 60,
    backgroundColor: '#fff'
  });
  row.selectionStyle = Ti.UI.iPhone.TableViewCellSelectionStyle.NONE;
  row.add(Ti.UI.createLabel({
    text: 'Comment',
    height: 35,
    left: 8,
    top: 12,
    width: 100
  }));
  row.add(ril_review);
  return row;
})());

tableView.appendRow((function() {
  var row;
  row = Ti.UI.createTableViewRow({
    height: 60,
    backgroundColor: '#fff'
  });
  row.add(Ti.UI.createLabel({
    text: 'Save',
    height: 35,
    left: 8,
    top: 12,
    width: 300,
    textAlign: 'center'
  }));
  return row;
})());

tableView.addEventListener("click", function(e) {
  if (e.index === 3) {
    Ti.App.Properties.setString('ril_fname', ril_fname.value);
    Ti.App.Properties.setString('ril_sname', ril_sname.value);
    Ti.App.Properties.setString('ril_phone', ril_phone.value);
    Ti.App.Properties.setString('ril_plate', ril_plate.value);
    Ti.App.Properties.setString('ril_area', ril_area.value);
    Ti.App.Properties.setString('ril_rate', ril_rate.value);
    return Ti.App.Properties.setString('ril_review', ril_review.value);
  }
});

win2.add(tableView);

win3 = Ti.UI.createWindow({
  title: "About",
  backgroundColor: "#fff"
});

tab3 = Ti.UI.createTab({
  icon: "./images/tabs/KS_nav_ui.png",
  title: "About",
  window: win3
});

view3 = Ti.UI.createView();

Ti.Gesture.addEventListener("orientationchange", function(e) {
  var orientation;
  orientation = getOrientation(e.orientation);
});

view3_1 = Ti.UI.createView({
  backgroundColor: "white"
});

l1_1 = Ti.UI.createLabel({
  text: "STEP 1",
  color: "#2947FF",
  width: "auto",
  top: 40,
  font: {
    fontSize: 40
  }
});

l1_2 = Ti.UI.createLabel({
  text: "Register for Fee!",
  color: "#000",
  width: "auto",
  height: "auto",
  font: {
    fontSize: 30
  },
  top: 130
});

l1_3 = Ti.UI.createLabel({
  text: "Let you search drivers you want to ride from navigation var on the top. You can search drivers who are near your place or who are very safer than others by drivers' areas.",
  color: "#000",
  width: "250",
  height: "250",
  top: 150
});

view3_1.add(l1_1);

view3_1.add(l1_2);

view3_1.add(l1_3);

view3_2 = Ti.UI.createView({
  backgroundColor: "white"
});

l2_1 = Ti.UI.createLabel({
  text: "STEP 2",
  color: "#2947FF",
  width: "auto",
  top: 40,
  font: {
    fontSize: 40
  }
});

l2_2 = Ti.UI.createLabel({
  text: "Search by Your Area",
  color: "#000",
  width: "auto",
  font: {
    fontSize: 30
  },
  top: 130
});

l2_3 = Ti.UI.createLabel({
  text: "If you use boda-boda and you liked it, you can register your favorite drivers. If you are a driver, you can register yourself. People use this service to find good drivers.",
  color: "#000",
  width: "250",
  height: "250",
  top: 150
});

view3_2.add(l2_1);

view3_2.add(l2_2);

view3_2.add(l2_3);

view3_3 = Ti.UI.createView({
  backgroundColor: "white"
});

l3_1 = Ti.UI.createLabel({
  text: "STEP 3",
  color: "#2947FF",
  width: "auto",
  top: 40,
  font: {
    fontSize: 40
  }
});

l3_2 = Ti.UI.createLabel({
  text: "Rate the Driver",
  color: "#000",
  width: "auto",
  font: {
    fontSize: 30
  },
  top: 130
});

l3_3 = Ti.UI.createLabel({
  text: "Please rate the driver and have a comment. People can easily know who is a good driver.",
  color: "#000",
  width: "250",
  height: "250",
  top: 150
});

view3_3.add(l3_1);

view3_3.add(l3_2);

view3_3.add(l3_3);

view3_4 = Ti.UI.createView({
  backgroundColor: "white"
});

l4_1 = Ti.UI.createLabel({
  text: "App for iOS",
  color: "#2947FF",
  width: "auto",
  top: 40,
  font: {
    fontSize: 40
  }
});

l4_2 = Ti.UI.createLabel({
  text: "Use Anywhere!",
  color: "#000",
  width: "auto",
  font: {
    fontSize: 30
  },
  top: 130
});

l4_3 = Ti.UI.createLabel({
  text: "Now apps for iOS/Android are comming! You can more easily use boda-border anywhere. Please wait for a moment...",
  color: "#000",
  width: "250",
  height: "250",
  top: 150
});

view3_4.add(l4_1);

view3_4.add(l4_2);

view3_4.add(l4_3);

scrollView = Titanium.UI.createScrollableView({
  views: [view3_1, view3_2, view3_3, view3_4],
  showPagingControl: true,
  pagingControlHeight: 30,
  maxZoomScale: 2.0,
  currentPage: 1
});

win3.add(scrollView);

i = 1;

activeView = view3_1;

scrollView.addEventListener("scroll", function(e) {
  activeView = e.view;
  i = e.currentPage;
  Titanium.API.info("scroll called - current index " + i + " active view " + activeView);
});

scrollView.addEventListener("click", function(e) {
  Ti.API.info("ScrollView received click event, source = " + e.source);
});

scrollView.addEventListener("touchend", function(e) {
  Ti.API.info("ScrollView received touchend event, source = " + e.source);
});

left = Titanium.UI.createButton({
  backgroundColor: "transparent",
  image: "/images/icon_arrow_left.png"
});

left.addEventListener("click", function(e) {
  if (i === 0) {
    return;
  }
  i--;
  scrollView.scrollToView(i);
});

right = Titanium.UI.createButton({
  backgroundColor: "transparent",
  image: "/images/icon_arrow_right.png"
});

right.addEventListener("click", function(e) {
  if (i === (scrollView.views.length - 1)) {
    return;
  }
  i++;
  scrollView.scrollToView(scrollView.views[i]);
});

if (Titanium.Platform.osname === "iphone" || Titanium.Platform.osname === "ipad") {
  flexSpace = Titanium.UI.createButton({
    systemButton: Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
  });
}

Titanium.UI.iPhone.setStatusBarStyle(Ti.UI.iPhone.StatusBar.OPAQUE_BLACK);

tabGroup.addTab(tab1);

tabGroup.addTab(tab2);

tabGroup.addTab(tab3);

tabGroup.open();