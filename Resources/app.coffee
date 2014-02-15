Titanium.UI.setBackgroundColor "#000#"
tabGroup = Ti.UI.createTabGroup()
# 
# Create Tab1
# 
win1 = Ti.UI.createWindow(
  title: "Search"
  backgroundColor: "#fff"
)
tab1 = Ti.UI.createTab(
  icon: "./images/tabs/KS_nav_phone.png"
  title: "Search"
  window: win1
)
view = Ti.UI.createView()

# Get datas by Json file
if Ti.Network.online is false
	alert 'Cannnot get a data because No Network'
else
	# Create HTTPClient object
	xhr = Ti.Network.createHTTPClient()
	xhr.onload = ->
	  json = undefined
	  pos = undefined
	  _results = undefined
	  json = JSON.parse(@responseText)
	  unless json
	    Ti.API.info "Error - Null return!"
	    return
	  json = json.drivers
	  pos = 0
	  _results = []
	  while pos < jsondrivers.length
	    Ti.UI.info json[pos].id, json[pos].fname
	    _results.push pos++
	  _results

	xhr.open "GET", "http://www.boda-border/get_data_ti.php"
	xhr.send()
	tableView = Ti.UI.createTableView(data: [
		{title: ""}
		{title: "json[0],id"}
		{title: "json[0].fname"}
		{title: "json[1].id"}
		{title: "json[1].fname"}
	])


view.add tableView
win1.add view
search = Ti.UI.createSearchBar(
  barColor: "#000"
  showCancel: true
  height: 43
  top: 0
)
win1.add search
search.addEventListener "change", (e) ->
  Ti.API.info "search bar: you type " + e.value + " act val " + search.value
  return

search.addEventListener "cancel", (e) ->
  Ti.API.info "search bar cancel fired"
  search.blur()
  return

search.addEventListener "return", (e) ->
  Ti.UI.createAlertDialog(
    title: "Search Bar"
    message: "You typed " + e.value
  ).show()
  search.blur()
  return

search.addEventListener "focus", (e) ->
  Ti.API.info "search bar: focus reveived"
  return

search.addEventListener "blur", (e) ->
  Ti.API.info "search bar:blur received"
  return

# 
# Create Tab 2 
# 
win2 = Ti.UI.createWindow(
  title: "Register"
  # backgroundColor: "#fff"
  backgroundColor: "#78925F"
)
tab2 = Ti.UI.createTab(
  icon: "./images/tabs/KS_nav_views.png"
  title: "Register"
  window: win2
)
tableView = Ti.UI.createTableView(
	style: Titanium.UI.iPhone.TableViewStyle.GROUPED
	width: 300
	backgroundColor: '#78925F'
)

# Headline
tableView.appendRow (->
	row = Ti.UI.createTableViewRow(
		height: 40
		backgroundColor: '#ccc'
	)
	row.selectionStyle = Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
	row.add Ti.UI.createLabel(
		text: 'Register a Driver'
		height: 'auto'
		left: 8
		width: 300
	)
	row
)()

# Create TextField
ril_fname = Ti.UI.createTextField(
	color:'#336699'
	hintText:'First'
	height: 35
	top:12 
	left:130 
	width:70
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	# Turn off system to check spell
	autocorrect: false
	# Turn off system to auto capitalization
	# autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE
)
ril_sname = Ti.UI.createTextField(
	color:'#336699'
	hintText:'Last'
	height: 35
	top:12 
	left:210 
	width:70
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	# Turn off system to check spell
	autocorrect: false
	# Turn off system to auto capitalization
	# autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE
)
ril_phone = Titanium.UI.createTextField(
	color:'#336699'
	height:35
	top:12
	left:130
	width:150
	keyboardType:Ti.UI.KEY_BOARD_NUMBER_PAD
	borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED
	# Turn off system to check spell
	autocorrect: false
	# Turn off system to auto capitalization
	autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE
)
ril_plate = Titanium.UI.createTextField(
	color:'#336699'
	height:35
	top:12
	left:130
	width:150
	borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED
	# Turn off system to check spell
	autocorrect: false
	# Turn off system to auto capitalization
	autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE
)

ril_area = Titanium.UI.createTextField(
	color:'#336699'
	height:35
	top:12
	left:130
	width:150
	borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED
	# Turn off system to check spell
	autocorrect: false
	# Turn off system to auto capitalization
	# autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE
)

ril_rate = Ti.UI.createPicker(
	color:'#99E5FF'
	value:3
)
data = []
data[0]=Ti.UI.createPickerRow(title:"1")
data[1]=Ti.UI.createPickerRow(title:"2")
data[2]=Ti.UI.createPickerRow(title:"3")
data[3]=Ti.UI.createPickerRow(title:"4")
data[4]=Ti.UI.createPickerRow(title:"5")
ril_rate.add data
ril_rate.selectionIndicator = true;
ril_rate.type=Ti.UI.PICKER_TYPE_PLAIN

###
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
	# Turn off system to check spell
	autocorrect: false
	# Turn off system to auto capitalization
	autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE
)
###

ril_review = Titanium.UI.createTextField(
	color:'#336699'
	height:35
	top:12
	left:130
	width:150
	borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED
	# Turn off system to check spell
	autocorrect: false
	# Turn off system to auto capitalization
	# autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE
)

# Append rows
tableView.appendRow (->
	row = Titanium.UI.createTableViewRow(
		height:60
		backgroundColor:'#fff'
	)
	row.selectionStyle = Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
	row.add Ti.UI.createLabel(
		text:'Name'
		height:35
		left:8
		top:12
		width:100
	)
	row.add ril_fname
	row.add ril_sname
	row
)()
tableView.appendRow (->
	row = Ti.UI.createTableViewRow(
		height:60
		backgroundColor:'#fff'
	)
	row.selectionStyle = Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
	row.add Ti.UI.createLabel(
		text:'Mob'
		height:35
		left:8
		top:12
		width:100
	)
	row.add ril_phone
	row
)()
tableView.appendRow (->
	row = Ti.UI.createTableViewRow(
		height:60
		backgroundColor:'#fff'
	)
	row.selectionStyle = Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
	row.add Ti.UI.createLabel(
		text:'Plate'
		height:35
		left:8
		top:12
		width:100
	)
	row.add ril_plate
	row
)()
tableView.appendRow (->
	row = Ti.UI.createTableViewRow(
		height:60
		backgroundColor:'#fff'
	)
	row.selectionStyle = Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
	row.add Ti.UI.createLabel(
		text:'Area (Stage)'
		height:35
		left:8
		top:12
		width:100
	)
	row.add ril_area
	row
)()
tableView.appendRow (->
	row = Ti.UI.createTableViewRow(
		height:60
		backgroundColor:'#fff'
	)
	row.selectionStyle = Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
	row.add Ti.UI.createLabel(
		text:"Rating"
		height:35
		left:8
		top:12
		width:100
	)
	row
)()
tableView.appendRow (->
	row = Ti.UI.createTableViewRow(
		height:100
		backgroundColor:'#fff'
	)
	row.selectionStyle = Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
	row.add ril_rate
	row
)()
tableView.appendRow (->
	row = Ti.UI.createTableViewRow(
		height:60
		backgroundColor:'#fff'
	)
	row.selectionStyle = Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
	row.add Ti.UI.createLabel(
		text:'Comment'
		height:35
		left:8
		top:12
		width:100
	)
	row.add ril_review
	row
)()
tableView.appendRow (->
	row = Ti.UI.createTableViewRow(
		height:60
		backgroundColor:'#fff'
	)
	row.add Ti.UI.createLabel(
		text:'Save'
		height:35
		left:8
		top:12
		width:300
		textAlign:'center'
	)
	row
)()

tableView.addEventListener "click", (e) ->
	if e.index is 3
		Ti.App.Properties.setString('ril_fname', ril_fname.value)
		Ti.App.Properties.setString('ril_sname', ril_sname.value)
		Ti.App.Properties.setString('ril_phone', ril_phone.value)
		Ti.App.Properties.setString('ril_plate', ril_plate.value)
		Ti.App.Properties.setString('ril_area', ril_area.value)
		Ti.App.Properties.setString('ril_rate', ril_rate.value)
		Ti.App.Properties.setString('ril_review', ril_review.value)
win2.add tableView

# 
# Create Tab 3
#
win3 = Ti.UI.createWindow(
  title: "About"
  backgroundColor: "#fff"
)
tab3 = Ti.UI.createTab(
  icon: "./images/tabs/KS_nav_ui.png"
  title: "About"
  window: win3
)
view3 = Ti.UI.createView()

# orientation change listener
Ti.Gesture.addEventListener "orientationchange", (e) ->
  # get orienation from event object
  orientation = getOrientation(e.orientation)
  return

view3_1 = Ti.UI.createView(backgroundColor: "white")
l1_1 = Ti.UI.createLabel(
  text: "STEP 1"
  color: "#2947FF"
  width: "auto"
  top : 40
  font: {fontSize:40}
)
l1_2 = Ti.UI.createLabel(
	text: "Register for Fee!"
	color: "#000"
	width:"auto"
	height: "auto"
	font: {fontSize:30}
	top: 130
)
l1_3 = Ti.UI.createLabel(
	text: "Let you search drivers you want to ride from navigation var on the top. You can search drivers who are near your place or who are very safer than others by drivers' areas."
	color: "#000"
	width: "250"
	height: "250"
	top: 150
)
view3_1.add l1_1
view3_1.add l1_2
view3_1.add l1_3

view3_2 = Ti.UI.createView(backgroundColor: "white")
l2_1 = Ti.UI.createLabel(
  text: "STEP 2"
  color: "#2947FF"
  width: "auto"
  top : 40
  font: {fontSize:40}
)
l2_2 = Ti.UI.createLabel(
  text: "Search by Your Area"
  color: "#000"
  width: "auto"
  font: {fontSize:30}
  top: 130 
)
l2_3 = Ti.UI.createLabel(
	text: "If you use boda-boda and you liked it, you can register your favorite drivers. If you are a driver, you can register yourself. People use this service to find good drivers."
	color: "#000"
	width: "250"
	height: "250"
	top: 150
)
view3_2.add l2_1
view3_2.add l2_2
view3_2.add l2_3

view3_3 = Ti.UI.createView(backgroundColor: "white")
l3_1 = Ti.UI.createLabel(
  text: "STEP 3" 
  color: "#2947FF"
  width: "auto"
  top : 40
  font: {fontSize:40}
)
l3_2 = Ti.UI.createLabel(
  text: "Rate the Driver"
  color: "#000"
  width: "auto"
  font: {fontSize:30}
  top:130 
)
l3_3 = Ti.UI.createLabel(
	text: "Please rate the driver and have a comment. People can easily know who is a good driver."
	color: "#000"
	width: "250"
	height: "250"
	top: 150
)
view3_3.add l3_1
view3_3.add l3_2
view3_3.add l3_3

view3_4 = Ti.UI.createView(backgroundColor: "white")
l4_1 = Ti.UI.createLabel(
  text: "App for iOS" 
  color: "#2947FF"
  width: "auto"
  top : 40
  font: {fontSize:40}
)
l4_2 = Ti.UI.createLabel(
  text: "Use Anywhere!"
  color: "#000"
  width: "auto"
  font: {fontSize:30}
  top: 130 
)
l4_3 = Ti.UI.createLabel(
	text: "Now apps for iOS/Android are comming! You can more easily use boda-border anywhere. Please wait for a moment..."
	color: "#000"
	width: "250"
	height: "250"
	top: 150
)
view3_4.add l4_1
view3_4.add l4_2
view3_4.add l4_3
scrollView = Titanium.UI.createScrollableView(
  views: [
    view3_1
    view3_2
    view3_3
    view3_4
  ]
  showPagingControl: true
  pagingControlHeight: 30
  maxZoomScale: 2.0
  currentPage: 1
)
win3.add scrollView
i = 1
activeView = view3_1
scrollView.addEventListener "scroll", (e) ->
  activeView = e.view # the object handle to the view that is about to become visible
  i = e.currentPage
  Titanium.API.info "scroll called - current index " + i + " active view " + activeView
  return

scrollView.addEventListener "click", (e) ->
  Ti.API.info "ScrollView received click event, source = " + e.source
  return

scrollView.addEventListener "touchend", (e) ->
  Ti.API.info "ScrollView received touchend event, source = " + e.source
  return


# move scroll view left
left = Titanium.UI.createButton(
  backgroundColor: "transparent"
  image: "/images/icon_arrow_left.png"
)
left.addEventListener "click", (e) ->
  return  if i is 0
  i--
  scrollView.scrollToView i
  return


# move scroll view right
right = Titanium.UI.createButton(
  backgroundColor: "transparent"
  image: "/images/icon_arrow_right.png"
)
right.addEventListener "click", (e) ->
  return  if i is (scrollView.views.length - 1)
  i++
  scrollView.scrollToView scrollView.views[i]
  return

if Titanium.Platform.osname is "iphone" or Titanium.Platform.osname is "ipad"
  flexSpace = Titanium.UI.createButton(systemButton: Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE)

tabGroup.addTab tab1
tabGroup.addTab tab2
tabGroup.addTab tab3
tabGroup.open()
