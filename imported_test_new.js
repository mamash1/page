Object.defineProperties(Array.prototype, {
	count: {
		value: function(query) {
			var count = 0;
			for(let i=0; i<this.length; i++)
				if (this[i]==query)
					count++;
			return count;
		}
	}
});



function receiveMessage(event){
	if (event != null ){
		e_data = JSON.stringify(event.data);
		received_messages.add(event.data);
		received_messages_ar.push(event.data);
	}
	console.log("RR", received_messages_ar);
}


function sendMessages(passed_messages){
        console.log(passed_messages)

    for (var i=0; i<passed_messages.length; i++){
        message = passed_messages[i];
        window.postMessage(message,'*')
		sent_messages.add(message);
		sent_messages_ar.push(message);
		console.log(sent_messages_ar);
    }

    message ={pageEnable: true}
    window.postMessage(message,'*')
	sent_messages.add(message);
	sent_messages_ar.push(message);
    message ={pageDisable: true}
    window.postMessage(message,'*')
	sent_messages.add(message);
	sent_messages_ar.push(message);


    for (var i=0; i<passed_messages.length; i++){

    	message ={type: passed_messages[i]}
        window.postMessage(message,'*')
		sent_messages.add(message);
		sent_messages_ar.push(message);
		message = JSON.stringify(message)
        window.postMessage(message,'*')
		sent_messages.add(message);
		sent_messages_ar.push(message);

    	message ={source: passed_messages[i]}
        window.postMessage(message,'*')
		sent_messages.add(message);
		sent_messages_ar.push(message);
		message = JSON.stringify(message)
        window.postMessage(message,'*')
		sent_messages.add(message);
		sent_messages_ar.push(message);

    	message ={app: passed_messages[i]}
        window.postMessage(message,'*')
		sent_messages.add(message);
		sent_messages_ar.push(message);
		message = JSON.stringify(message)
        window.postMessage(message,'*')
		sent_messages.add(message);
		sent_messages_ar.push(message);

    	message ={name: passed_messages[i]}
        window.postMessage(message,'*')
		sent_messages.add(message);
		sent_messages_ar.push(message);
		message = JSON.stringify(message)
        window.postMessage(message,'*')
		sent_messages.add(message);
		sent_messages_ar.push(message);

    	message ={action: passed_messages[i]}
        window.postMessage(message,'*')
		sent_messages.add(message);
		sent_messages_ar.push(message);
		message = JSON.stringify(message)
        window.postMessage(message,'*')
		sent_messages.add(message);
		sent_messages_ar.push(message);

    	message ={payload: passed_messages[i]}
        window.postMessage(message,'*')
		sent_messages.add(message);
		sent_messages_ar.push(message);
		message = JSON.stringify(message)
        window.postMessage(message,'*')
		sent_messages.add(message);
		sent_messages_ar.push(message);

    	message ={method: passed_messages[i]}
        window.postMessage(message,'*')
		sent_messages.add(message);
		sent_messages_ar.push(message);
		message = JSON.stringify(message)
        window.postMessage(message,'*')
		sent_messages.add(message);
		sent_messages_ar.push(message);
		console.log(sent_messages_ar);

    	message ={text: passed_messages[i]}
        window.postMessage(message,'*')
		sent_messages.add(message);
		sent_messages_ar.push(message);
		message = JSON.stringify(message)
        window.postMessage(message,'*')
		sent_messages.add(message);
		sent_messages_ar.push(message);
		console.log(sent_messages_ar);

    	message ={cmd: passed_messages[i]}
        window.postMessage(message,'*')
		sent_messages.add(message);
		sent_messages_ar.push(message);
		message = JSON.stringify(message)
        window.postMessage(message,'*')
		sent_messages.add(message);
		sent_messages_ar.push(message);
		console.log(sent_messages_ar);

		message ={command: passed_messages[i]}
        window.postMessage(message,'*')
		sent_messages.add(message);
		sent_messages_ar.push(message);
		message = JSON.stringify(message)
        window.postMessage(message,'*')
		sent_messages.add(message);
		sent_messages_ar.push(message);
		console.log(sent_messages_ar);

		message ={type: passed_messages[i], phone: passed_messages[i]}
        window.postMessage(message,'*')
		sent_messages.add(message);
		sent_messages_ar.push(message);
		message = JSON.stringify(message)
        window.postMessage(message,'*')
		sent_messages.add(message);
		sent_messages_ar.push(message);
		console.log(sent_messages_ar);

		message ={type: passed_messages[i], payload: passed_messages[i]}
        window.postMessage(message,'*')
		sent_messages.add(message);
		sent_messages_ar.push(message);
		message = JSON.stringify(message)
        window.postMessage(message,'*')
		sent_messages.add(message);
		sent_messages_ar.push(message);
		console.log(sent_messages_ar);

		message ={CSS: passed_messages[i]}
        window.postMessage(message,'*')
		sent_messages.add(message);
		sent_messages_ar.push(message);
		message = JSON.stringify(message)
        window.postMessage(message,'*')
		sent_messages.add(message);
		sent_messages_ar.push(message);
		console.log(sent_messages_ar);		

		message ={vvc: passed_messages[i], from: ""}
        window.postMessage(message,'*')
		sent_messages.add(message);
		sent_messages_ar.push(message);
		message = JSON.stringify(message)
        window.postMessage(message,'*')
		sent_messages.add(message);
		sent_messages_ar.push(message);
		console.log(sent_messages_ar);		
    }
}







myMutations = []
other = []
boolval = false
// var nodetypes = new Set()


var observer = new MutationObserver(function(mutations) {
	mutations.forEach(function(mutation) {
		if (mutation.type == "childList"){
			console.log(mutation)
			myMutationObject = {}
			myMutationObject.type = mutation.type

			added = []
			removed = []

			if (mutation.addedNodes.length>0) {
				for (var i=0; i<mutation.addedNodes.length; i++){
					node = {}
					node.nodeName = mutation.addedNodes[i].nodeName
					if (mutation.addedNodes[i].nodeName == "P"){
						node.innerHTML = mutation.addedNodes[i].innerHTML
						node.outerHTML = mutation.addedNodes[i].outerHTML
						added.push(node)
					}
					if (mutation.addedNodes[i].nodeName == "#text"){
						node.data = mutation.addedNodes[i].data
						if (mutation.addedNodes[i].data != "\n\n\n\n"){
							added.push(node)
						}
					}
					if (mutation.addedNodes[i].nodeName == "DIV"){
						node.outerHTML = mutation.addedNodes[i].outerHTML
						added.push(node)
					}
					if (mutation.addedNodes[i].nodeName == "TABLE"){
						node.innerHTML = mutation.addedNodes[i].innerHTML
						added.push(node)
					}
					if (mutation.addedNodes[i].nodeName == "FIELDSET"){
						node.outerHTML = mutation.addedNodes[i].outerHTML
						added.push(node)
					}
					if (mutation.addedNodes[i].nodeName == "LINK"){
						node.outerHTML = mutation.addedNodes[i].outerHTML
						added.push(node)
					}
					if (mutation.addedNodes[i].nodeName == "A"){
						node.outerHTML = mutation.addedNodes[i].outerHTML
						added.push(node)
					}
					if (mutation.addedNodes[i].nodeName == "SELECT"){
						node.outerHTML = mutation.addedNodes[i].outerHTML
						added.push(node)
					}
					if (mutation.addedNodes[i].nodeName == "IMG"){
						node.outerHTML = mutation.addedNodes[i].outerHTML
						added.push(node)
					}
					if (mutation.addedNodes[i].nodeName == "IFRAME"){
						node.outerHTML = mutation.addedNodes[i].outerHTML
						added.push(node)
					}
					if (mutation.addedNodes[i].nodeName == "SPAN"){
						node.outerHTML = mutation.addedNodes[i].outerHTML
						node.outerText = mutation.addedNodes[i].outerText
						added.push(node)
					}
					if (mutation.addedNodes[i].nodeName == "STYLE"){
						node.innerHTML = mutation.addedNodes[i].innerHTML						
						node.outerHTML = mutation.addedNodes[i].outerHTML
						node.outerText = mutation.addedNodes[i].outerText
						added.push(node)
					}
					if (mutation.addedNodes[i].nodeName == "BUTTON"){
						node.innerHTML = mutation.addedNodes[i].innerHTML						
						node.outerHTML = mutation.addedNodes[i].outerHTML
						node.outerText = mutation.addedNodes[i].outerText
						added.push(node)
					}
					if (mutation.addedNodes[i].nodeName == "SCRIPT"){
						node.outerHTML = mutation.addedNodes[i].outerHTML
						added.push(node)
					}
					if ((mutation.addedNodes[i].nodeName != "P") && (mutation.addedNodes[i].nodeName != "#text") && (mutation.addedNodes[i].nodeName != "DIV") && (mutation.addedNodes[i].nodeName != "TABLE") && (mutation.addedNodes[i].nodeName != "FIELDSET") && (mutation.addedNodes[i].nodeName != "LINK") && (mutation.addedNodes[i].nodeName != "A") && (mutation.addedNodes[i].nodeName != "SELECT") && (mutation.addedNodes[i].nodeName != "IMG") && (mutation.addedNodes[i].nodeName != "IFRAME") && (mutation.addedNodes[i].nodeName != "SPAN") && (mutation.addedNodes[i].nodeName != "SCRIPT") && (mutation.addedNodes[i].nodeName != "STYLE") && (mutation.addedNodes[i].nodeName != "BUTTON")){
						other.push(mutation.addedNodes[i].nodeName)
					}
				}
			}


			if (mutation.removedNodes.length>0) {
				for (var i=0; i<mutation.removedNodes.length; i++){
					node = {}
					node.nodeName = mutation.removedNodes[i].nodeName
					if (mutation.removedNodes[i].nodeName == "P"){
						node.innerHTML = mutation.removedNodes[i].innerHTML
						node.outerHTML = mutation.removedNodes[i].outerHTML
						removed.push(node)
					}
					if (mutation.removedNodes[i].nodeName == "#text"){
						node.data = mutation.removedNodes[i].data
						removed.push(node)
					}
					if (mutation.removedNodes[i].nodeName == "DIV"){
						node.outerHTML = mutation.removedNodes[i].outerHTML
						removed.push(node)
					}
					if (mutation.removedNodes[i].nodeName == "TABLE"){
						node.innerHTML = mutation.removedNodes[i].innerHTML
						removed.push(node)
					}
					if (mutation.removedNodes[i].nodeName == "FIELDSET"){
						node.outerHTML = mutation.removedNodes[i].outerHTML
						removed.push(node)
					}
					if (mutation.removedNodes[i].nodeName == "LINK"){
						node.outerHTML = mutation.removedNodes[i].outerHTML
						removed.push(node)
					}
					if (mutation.removedNodes[i].nodeName == "A"){
						node.outerHTML = mutation.removedNodes[i].outerHTML
						removed.push(node)
					}
					if (mutation.removedNodes[i].nodeName == "SELECT"){
						node.outerHTML = mutation.removedNodes[i].outerHTML
						removed.push(node)
					}
					if (mutation.removedNodes[i].nodeName == "IMG"){
						node.outerHTML = mutation.removedNodes[i].outerHTML
						removed.push(node)
					}
					if (mutation.removedNodes[i].nodeName == "IFRAME"){
						node.outerHTML = mutation.removedNodes[i].outerHTML
						removed.push(node)
					}
					if (mutation.removedNodes[i].nodeName == "SPAN"){
						node.outerHTML = mutation.removedNodes[i].outerHTML
						node.outerText = mutation.removedNodes[i].outerText
						removed.push(node)
					}
					if (mutation.removedNodes[i].nodeName == "STYLE"){
						node.innerHTML = mutation.removedNodes[i].innerHTML						
						node.outerHTML = mutation.removedNodes[i].outerHTML
						node.outerText = mutation.removedNodes[i].outerText
						removed.push(node)
					}
					if (mutation.removedNodes[i].nodeName == "BUTTON"){
						node.innerHTML = mutation.removedNodes[i].innerHTML						
						node.outerHTML = mutation.removedNodes[i].outerHTML
						node.outerText = mutation.removedNodes[i].outerText
						removed.push(node)
					}
					if (mutation.removedNodes[i].nodeName == "SCRIPT"){
						node.outerHTML = mutation.removedNodes[i].outerHTML
						removed.push(node)
					}
					if ((mutation.removedNodes[i].nodeName != "P") && (mutation.removedNodes[i].nodeName != "#text") && (mutation.removedNodes[i].nodeName != "DIV") && (mutation.removedNodes[i].nodeName != "TABLE") && (mutation.removedNodes[i].nodeName != "FIELDSET") && (mutation.removedNodes[i].nodeName != "LINK") && (mutation.removedNodes[i].nodeName != "A") && (mutation.removedNodes[i].nodeName != "SELECT") && (mutation.removedNodes[i].nodeName !="IMG") && (mutation.removedNodes[i].nodeName != "IFRAME") && (mutation.removedNodes[i].nodeName != "SPAN") && (mutation.removedNodes[i].nodeName != "SCRIPT") &&  (mutation.removedNodes[i].nodeName != "STYLE") && (mutation.removedNodes[i].nodeName != "BUTTON")){
						other.push(mutation.removedNodes[i].nodeName)
						removed.push(node)
					}
				}
			}

			// myMutationObject.addedNodes = added
			// myMutationObject.removedNodes = removed
			myMutationObject.other = other


			myMutations.push(JSON.stringify(myMutationObject))


			console.log("AAAAA", myMutationObject)
			console.log("BBBBB", myMutations)
		}


		if (mutation.type == "attributes"){
			console.log(mutation)
			console.log(mutation.attributeName, mutations.target.currentSrc)
			myMutations.push(mutation.attributeName)
		}

	});    
});

var container = document.documentElement || document.body;
var config = {
	childList: false,
    attributes: true,
    characterData: true,
    subtree: true,
    attributeOldValue: true,
    characterDataOldValue: true
};
observer.observe(container, config);


// function compareMutations(myMutation1, myMutation2){
// 	console.log(myMutation1)
// 	console.log(myMutation2)
// 	aa = myMutation1[0]
// 	aaa = JSON.stringify(aa)
// 	console.log("ASAS", aaa)
// 	console.log(JSON.stringify(myMutation1[0]))
// 	console.log(JSON.stringify(myMutation1[1]))

// 	if (JSON.stringify(myMutation1[1]) == JSON.stringify(myMutation2[0])){
// 		console.log("AA")
// 	}
// 	if (JSON.stringify(myMutation1[0]) == JSON.stringify(myMutation2[1])){
// 		console.log("BB")
// 	}
// 	if (JSON.stringify(myMutation1[0]) == JSON.stringify(myMutation2[0])){
// 		console.log("CC")
// 	}
// 	if (JSON.stringify(myMutation1[1]) == JSON.stringify(myMutation2[1])){
// 		console.log("DD")
// 	}
// }



// sleep(10).then(() => {
// 	compareMutations(myMutation1, myMutation2);
//     });






window.addEventListener("message", receiveMessage, false);

whitelisted = ["https://www.strictly-software.com/scripts/downloads/encoder.js", "https://www.w3schools.com/"]
var myObject = {};
var res_json_data = ""
var external_links = [];
var sent_messages = new Set()
var received_messages = new Set()
var msg_diff = new Set()
var sent_messages_ar = [];
var received_messages_ar = [];
var num_of_diff_messages = 0;



// var excluded_values = ["defaultStatus", "onloadeddata", "onreset", "personalbar", "focus", "webkitRequestFileSystem", "onbeforeinstallprompt", "atob", "ondurationchange", "onpopstate", "pageXOffset", "find", "menubar", "indexedDB", "onload", "oninput", "locationbar", "outerWidth", "innerHeight", "onselect", "onmousemove", "location", "ontoggle", "onanimationstart", "onplay", "onlostpointercapture", "onkeypress", "ononline", "stop", "onmouseover", "outerHeight", "onsearch", "onseeking", "speechSynthesis", "postMessage", "onbeforeprint", "requestAnimationFrame", "oncanplaythrough", "crypto", "onmouseenter", "resizeTo", "onlanguagechange", "onkeyup", "caches", "clientInformation", "onpointerout", "onwaiting", "webkitCancelAnimationFrame", "onpointerover", "clearInterval", "btoa", "createImageBitmap", "screenTop", "showSaveFilePicker", "onchange", "onwheel", "webkitResolveLocalFileSystemURL", "ontimeupdate", "onwebkitanimationstart", "queueMicrotask", "getComputedStyle", "ondragleave", "innerWidth", "onresize", "moveBy", "opener", "closed", "blur", "onemptied", "onfocus", "ondrag", "getSelection", "scrollTo", "onoffline", "parent", "sessionStorage", "screen", "onkeydown", "requestIdleCallback", "onpointerdown", "onwebkitanimationiteration", "alert", "toolbar", "cancelIdleCallback", "oncancel", "isSecureContext", "ondeviceorientationabsolute", "onpointercancel", "onprogress", "scrollX", "scrollY", "onbeforeunload", "length", "frameElement", "onseeked", "origin", "moveTo", "cancelAnimationFrame", "trustedTypes", "showOpenFilePicker", "onunhandledrejection", "oncuechange", "onscroll", "frames", "releaseEvents", "navigator", "onsuspend", "oninvalid", "onpointerenter", "onabort", "ondevicemotion", "setTimeout", "chrome", "onratechange", "top", "clearTimeout", "window", "resizeBy", "onwebkitanimationend", "localStorage", "onmouseup", "screenY", "screenX", "onstorage", "pageYOffset", "onblur", "cdc_adoQpoasnfa76pfcZLmcfl_Array", "ondrop", "setInterval", "onpointermove", "onvolumechange", "onrejectionhandled", "external", "webkitRequestAnimationFrame", "webkitStorageInfo", "onmousewheel", "visualViewport", "oncontextmenu", "onunload", "onauxclick", "screenLeft", "captureEvents", "scrollBy", "onpagehide", "onselectionchange", "fetch", "history", "onformdata", "prompt", "onerror", "ondragenter", "styleMedia", "onanimationiteration", "onmousedown", "customElements", "onpointerrawupdate", "onsubmit", "onpause", "scrollbars", "close", "onafterprint", "onloadstart", "defaultstatus", "onpointerup", "onmouseout", "ondragover", "open", "onclose", "cdc_adoQpoasnfa76pfcZLmcfl_Symbol", "onclick", "ongotpointercapture", "performance", "document", "oncanplay", "status", "cdc_adoQpoasnfa76pfcZLmcfl_Promise", "onended", "onhashchange", "ondragstart", "onmouseleave", "openDatabase", "onpageshow", "onappinstalled", "onmessage", "ondeviceorientation", "onwebkittransitionend", "onloadedmetadata", "ondragend", "ontransitionend", "devicePixelRatio", "statusbar", "onanimationend", "confirm", "onmessageerror", "matchMedia", "showDirectoryPicker", "onpointerleave", "scroll", "onplaying", "ondblclick", "onselectstart", "self", "onstalled", "name", "print", "TEMPORARY", "PERSISTENT", "addEventListener", "dispatchEvent", "removeEventListener"]

// var newKs = [];
// var my_symbols_obj = {};
// for (key in window) {
//     if(excluded_values.indexOf(key) == -1 && key !== "excluded_values" && key !=="newKs" && key !=="my_symbols_obj") {
//         newKs.push(key);
//         my_symbols_obj[key] = window[key]
//     }
// }


