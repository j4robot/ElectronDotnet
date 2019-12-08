function GetCurrentPageName() {
    var url = window.location.pathname;
    var myPageName = url.substring(url.lastIndexOf('/') + 1);
    return myPageName;
}
$('.pace-activity').hide('fast');
var currentPathName = GetCurrentPageName();

switch (currentPathName.toLowerCase()) {
    case "dashboard":
        //$(`#${currentPathName}`).addClass('active-act-menubar');
        //$(`.${currentPathName}`).addClass('active')
        break;

    //Setup Pages
    case "countrysetup":
        $(`#${currentPathName}`).addClass('active .has-sub');
        $('.SetUpMainMenu').addClass('active');
        break;
    case "taxlawsetup":
        $(`#${currentPathName}`).addClass('active .has-sub');
        $('.SetUpMainMenu').addClass('active');
        break;
    case "currencysetup":
        $(`#${currentPathName}`).addClass('active .has-sub');
        $('.SetUpMainMenu').addClass('active');
        break;
    case "noncashbenefitsetup":
        $(`#${currentPathName}`).addClass('active .has-sub');
        $('.SetUpMainMenu').addClass('active');
        break;
    case "savingsschemesetup":
        $(`#${currentPathName}`).addClass('active .has-sub');
        $('.SetUpMainMenu').addClass('active');
        break;
    case "taxbandsetup":
        $(`#${currentPathName}`).addClass('active .has-sub');
        $('.SetUpMainMenu').addClass('active');
        break;
    case "bonustaxrulessetup":
        $(`#${currentPathName}`).addClass('active .has-sub');
        $('.SetUpMainMenu').addClass('active');
        break; 
    case "loanrulessetup":
        $(`#${currentPathName}`).addClass('active .has-sub');
        $('.SetUpMainMenu').addClass('active');
        break;
    case "overtimerulessetup":
        $(`#${currentPathName}`).addClass('active .has-sub');
        $('.SetUpMainMenu').addClass('active');
        break;
}
