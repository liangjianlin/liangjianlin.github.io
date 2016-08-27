window.onload = function (argument) {
	for (var i = 8; i >= 1; i--) {
		list_menu('list' + i, 'list-item-' + i);
	}
}

/**
* 文章目录的子目录的显示和隐藏
* list 文章目录
* list_item 文章目录的子目录
*/
function list_menu(list, list_item) {
	var l = document.getElementById(list);
	l.onclick = function() {
		var l_item = document.getElementById(list_item);
		if (l_item.style.display == 'none' || l_item.style.display == '') {
			l_item.style.display = 'block';
		} else {
			l_item.style.display = 'none';
		}
	};
}