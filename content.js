var details = document.querySelector("#content > section > div > div.details-info > ul");
var fileName = document.querySelector("#content > section > div > div.details-info > ul > li:nth-child(1) > div.info-data.overflow-tip");

addInfo(details, "Maven Dep", getMaven());

function addInfo(details, title, info) {
	
	var li = document.createElement("li");
	
	var titleElem = document.createElement("div");
	titleElem.className = "info-label";
	titleElem.textContent = title;
	
	var infoElem = document.createElement("div");
	//infoElem.className = "info-data overflow-tip j-tooltip";
	infoElem.textContent = info;
	
	li.appendChild(titleElem);
	li.appendChild(infoElem);
	
	details.appendChild(li);
}

function getMaven() {
	
	//deobfCompile "more-universal-blocks-2:MoreUniversalBlock:1.0.4"
    var fileStr = fileName.innerHTML.replace(/-/g, ':').replace(/\.[^/.]+$/, "");
	return "deobfCompile '" + getSlug() + ":" + fileStr + "'";
}

function getSlug() {
	
	var baseUrl = document.URL;
	return baseUrl.match("\/projects\/(.*?)\/files\/")[1];
}