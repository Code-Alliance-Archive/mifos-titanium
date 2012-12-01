function ApplicationWindow(title) {
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'white'
	});
	
	var button = Ti.UI.createButton({
		height:44 * Titanium.Platform.displayCaps.dpi / 160,
		width:200 * Titanium.Platform.displayCaps.dpi / 160,
		title:L('login'),
		top:20 * Titanium.Platform.displayCaps.dpi / 160
	});
	self.add(button);
	
	Ti.API.log('info', 'pwd-tablet')
	var passwordField = Titanium.UI.createTextField({
		    color:'#336699',  
    top:100,  
    left:10,  
    width:300,  
    height:40,  
    hintText:'Username',  
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED  
/*
	    //hintText:'enter password',
	    height:35 * Titanium.Platform.displayCaps.dpi / 160,
	    top:100 * Titanium.Platform.displayCaps.dpi / 160,
	    width:250 * Titanium.Platform.displayCaps.dpi / 160,
	    //borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,*/
	})
	
	button.addEventListener('click', function() {
		//containingTab attribute must be set by parent tab group on
		//the window for this work
		self.containingTab.open(Ti.UI.createWindow({
			title: L('newWindow'),
			backgroundColor: 'white'
		}));
	});
	
	return self;
};

module.exports = ApplicationWindow;
