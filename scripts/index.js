window.onload = function() {
    var featureName;
    $(document).on('click', '.ghx-issue' ,function(){
        hideCopyDiv();
        clearInterval(hideDiv);
        var summary = $(this).find(".ghx-summary").text();
        var ticketName =  $(this).attr('data-issue-key');
        var summaryForFeature = summary.replace(/[^a-zA-Z ]/g, "").split(" ").join("_").toLowerCase();
        featureName = "git checkout -b feature/"+ticketName+"/"+summaryForFeature+" develop";
        // delay as jira modal takes time to popuop
        setTimeout(function () {
            $('body').after("<div class='copyDiv'>Copy Feature Name</div>");
        }, 800);
        //hide in 10 seconds
        var hideDiv = setTimeout(function () {
            hideCopyDiv();
        }, 10000);
    });
    $(document).on('click','.close', function () {
        hideCopyDiv();
    });
    $(document).on('click','.copyDiv', function () {
        copyToClipboard(featureName);
    });
    $(document).on('click','[role=dialog]', function () {
        hideCopyDiv();
    });
    function hideCopyDiv() {
        $(".copyDiv").remove();
    }
    function copyToClipboard(text) {
        window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
    }
}
