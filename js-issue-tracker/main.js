function fetchIssues() {
	const issues = JSON.parse(localStorage.getItem('issues'));
	const issuesList = document.getElementById('issuesList');

	issuesList.innerHTML = '';

	for (var i = 0; i < issues.length; i++) {
		var id = issues[i].id;
		var desc = issues[i].description;
		var severity = issues[i].severity;
		var assignedTo = issues[i].assignedTo;
		var status = issues[i].status;

		issuesList.innerHTML += '<div class="well">' + '<h6>Issue ID: ' + id + '</h6>' + '<p><span class="label label-info">' + status + '</span></p>' + '<h3>' + desc + '</h3>' +
		'<p><span class="glyphicon-time"></span>' + severity + '</p>' +
		'<p><span class="glyphicon-user"></span>' + assignedTo + '</p>' +
		'<a href="#" onclick="setStatusClosed(\''+id+'\')" class="btn btn-warning">Close</a>' +
		'<a href="#" onclick="deleteIssue(\''+id+'\')" class="btn btn-delete">Delete</a>' +
		'</div>';
	}
}
