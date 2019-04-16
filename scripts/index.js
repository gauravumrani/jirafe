window.onload = function() {
    let featureName;
    $(document).on('click', '.ghx-issue' ,function(){
        console.log('clicked');
        hideCopyDiv();
        clearInterval(hideDiv);
        let summary = $(this).find(".ghx-summary").text();
        let ticketName =  $(this).attr('data-issue-key');
        let summaryForFeature = summary.replace(/[^a-zA-Z ]/g, "").split(" ").join("_").toLowerCase();
        featureName = "git hf feature start "+ticketName+"/"+summaryForFeature;
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
