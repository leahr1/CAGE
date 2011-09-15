// news

$('#results_main_wrapper').prepend('<div class="results"><div class="result"><span class="result_body"><div id="cageNews"><div id="cageNewsHead"></div><div id="cageNewsBody"><p id="cageNewsText"><br><br><b>Changelog:</b></p><ul id="cageNewsChanges"></ul></div></div><div id="cageNewsFoot"><a href="http://cagenhancer.blogspot.com/" target="_blank">Blog</a> - <a href="http://caaplayer.freeforums.org/c-a-g-e-f29.html" target="_blank">Forum</a> - <a href="https://github.com/unknowner/CAGE" target="_blank">GitHub</a></div></span></div><br></div>').show();
$('#cageNewsHead').text('CAGE - Castle Age Game Enhance - V 1.0.32α');
$('#cageNewsText').text('You\'re now running CAGE and making your Castle Age life a bit easier ;)');
_news = [
	['CHG', 'Static results turned off until settings available'],
	['CHG', 'jQuery updated to 1.6.4'],
	['CHG', 'Results are shown under general selector/abilites'],
	['FIX', 'Results shows scrollbar for empty area'],
	['FIX', 'General switcher for Atlantis']
];
$.each(_news, function(_i, _e) {
	$('#cageNewsChanges').append('<li><span>' + _e[0] + ': </span>' + _e[1] + '</li>');
});
/*
 '<li><span>CHG: </span>Static results turned off until settings available</li>');
 $('#cageNewsChanges').append('<li><span>CHG: </span>jQuery updated to 1.6.4</li>');
 $('#cageNewsChanges').append('<li><span>CHG: </span></li>');
 $('#cageNewsChanges').append('<li><span>FIX: </span></li>');
 $('#cageNewsChanges').append('<li><span>FIX: </span></li>');
 */