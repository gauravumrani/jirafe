window.onload = function() {

    $('.ghx-issue').after("<a href='javascript:void(0)' class='copyBranch'>Show Git Branch</a>");
    $('.copyBranch').on('click', function(e){
        e.preventDefault();
        let summary = $(this).prev().find(".ghx-summary").text();
        let ticketName =  $(this).prev().attr('data-issue-key');
        let summaryForFeature = summary.replace(/[^a-zA-Z ]/g, "").split(" ").join("_").toLowerCase();
        let featureName = "git hf feature start "+ticketName+"/"+summaryForFeature;
        alert(featureName);
    })

}
