const GetValueById = id => document.getElementById(id).value;
const GetValueByClassName = className => document.getElementsByClassName(className).value;
const GetElementById = id => document.getElementById(id);
const GetElementsByClassName = className => document.getElementsByClassName(className);
const localhostAPI = "https://localhost:44306/api/";
let currenciesData = [];
let countriesData = [];
let DataTablelengthMenu = [5, 10, 20];
$.ajaxSetup({
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'RequestVerificationToken': $('input:hidden[name="__RequestVerificationToken"]').val(),
    }
});
var msg = {
    success: "Data submitted successfully",
    conflict: "A conflict occurred, please refresh page and try again",
    unauthorized: "Unauthorized. Please login and try again.",
    emailNotice: "<br /><br />You will be notified via email shortly",
    notFound: "No match found",
    fail: "Sorry, something unexpected happened. Please refresh page and try again",
    contactAdmin: "Contact Admin if this persists.",
    passwordChange: "Password changed successfully",
    oldpassword: "Your current password is not correct",
    serverError: "Server error! Operation not completed.",
    userExists: "The user name already exist.",
    itemDeleted: 'Item deleted successfully!',
    fillAllFields: 'Please provide all data',
    badRequest: 'Bad Request here!'
};


//All ajax requests are made through this
function NewAjaxRequest(url, method, data = "") {
    return $.ajax({
            url: url,
            method: method,
            crossDomain: true,
            'RequestVerificationToken': $('input:hidden[name="__RequestVerificationToken"]').val(),
            data: JSON.stringify(data)
        }).done(function() {

        })
        .fail(function(xhr) {
            switch (xhr.status) {
                case 401:
                    console.log(msg.unauthorized);
                    break;
                case 404:
                    console.log(msg.notFound);
                    break;
                case 409:
                    console.log(msg.conflict);
                    break;
                case 400:
                    console.log(msg.badRequest);
                    break;
                default:
                    console.log(msg.fail + msg.contactAdmin);
                    break;
            }
            stop('.panel');
        });
}

$(".numbers").on("keypress", function(evt) {
    var self = $(this);
    self.val(self.val().replace(/[^0-9\.]/g, ''));
    if ((evt.which != 46 || self.val().indexOf('.') != -1) && (evt.which < 48 || evt.which > 57)) {
        evt.preventDefault();
    }
});

$(".only-numbers").on("keypress", function(evt) {
    var self = $(this);
    self.val(self.val().replace(/[^\d].+/, ""));
    if ((evt.which < 48 || evt.which > 57)) {
        evt.preventDefault();
    }
});

function moneyInTxt(value, standard, dec = 0) {
    nf = new Intl.NumberFormat(standard, {
        minimumFractionDigits: dec,
        maximumFractionDigits: 2
    });
    return nf.format(Number(value) ? value : 0.00);
}

function commaRemover(value) {
    value = value.replace(/,/g, '');
    return parseFloat(value);
}

$('.moneyformat').focusout(function() {
    $(this).val(commaRemover($(this).val()));
    $(this).val(moneyInTxt($(this).val(), 'en', 2));
});


$('.moneyformat').focus(function() {
    $(this).val(Number($(this).val()) === 0 ? "" : commaRemover($(this).val()));
});

$('.moneyformat').keydown(function(e) {
    if (!e.key.match(/^[0-9.()]+$/) && Number(e.key.length) === 1) {
        e.preventDefault();
        return;
    }
});

$('.fa-times-circle-o').on('click', () => {
    $('input, textarea').val('');
    $('input, textarea, select').removeClass('parsley-success');
    $('input, textarea, select').removeClass('parsley-error');
    $('select').val('-1');
});

function next_prev(next, prev, save, list) {
    $('#' + next).click(function() {
        $('#' + list + ' li.active').next().children('a').tab('show');
    });
    $('#' + prev).click(function() {
        $('#' + list + ' li.active').prev().children('a').tab('show');
    });
}

function loading(className) {
    $(className).prepend('<div class="panel-loader"><span class="spinner-small"></span></div>');
}

function stop(className) {
    $(className).find(".panel-loader").remove();
}

iziToast.settings({
    timeout: 3000, // default timeout
    resetOnHover: true,
    // icon: '', // icon class
    transitionIn: 'flipInX',
    transitionOut: 'flipOutX',
    position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
    onOpen: function() {
        console.log('callback abriu!');
    },
    onClose: function() {
        console.log("callback fechou!");
    }
});



//activates search on click
$("#search_term").keyup(function(e) {
    $("#search_term").val() !== '' ? $('#btnSearch').prop("disabled", false) : $('#btnSearch').prop("disabled", true);
    var key = e.which;
    if (key === 13 && $('#search_term').val() !== '') // the enter key code
    {
        $('#btnSearch').click();
        return false;
    }
});


// All Services API Calls.
// GetAllCurrencies();

// function GetAllCurrencies() {
//     let getCountriesURL = `${localhostAPI}Currency/GetAllCurrencies`;
//     NewAjaxRequest(`${getCountriesURL}`, `GET`).done(function(data) {
//         currenciesData = [];
//         let response = data.body
//         console.log(response)
//         for (let x = 0; x < response.length; x++) {
//             if (response[x].status == 1) { response[x].status = 'Active' } else { response[x].status = 'Inactive' }
//             currenciesData.push({ currencyId: response[x].id, currencyName: response[x].name, currencyStatus: response[x].status, userId: response[x].userId, currencySymbol: response[x].symbol });
//         }
//     });
// }

// GetAllCountries();

// function GetAllCountries() {
//     let getCountriesURL = `${localhostAPI}Country/GetAllCountries`;
//     NewAjaxRequest(`${getCountriesURL}`, `GET`).done(function(data) {
//         countriesData = [];
//         let response = data.body;
//         console.log(response)
//         for (let x = 0; x < response.length; x++) {
//             if (response[x].status == 1) { response[x].status = 'Active' } else { response[x].status = 'Inactive' }
//             countriesData.push({ countryId: response[x].id, countryCode: response[x].countryCode, countryName: response[x].name, countryStatus: response[x].status, userId: response[x].userId, countryCurrency: response[x].homeCurrency });
//         }
//     });
// }

function PopulateTable(table, tableId, searchString = '', type = 'all') {
    loading('.panel')
    if (type === 'all') {
        if (searchString === '*') {
            if (tableId === 'country-table') {
                LoadAllCountriesIntoTable(`${localhostAPI}Country/GetAllCountries`, table, tableId)
            } else if (tableId === 'currency-table') {
                LoadAllCurrenciesIntoTable(`${localhostAPI}Currency/GetAllCurrencies`, table, tableId)
            }
        } else {
            stop('.panel');
        }
    } else if (type === 'one') {
        LoadOneCountryIntoTable(`${localhostAPI}Country/GetAllCountries`, table, tableId, searchString)
    } else {
        stop('.panel');
    }
}

function CheckIfItemExists(url, countryNameId, itemName = "ID") {
    $("#btnSave").prop("disabled", true);
    $.ajax({
        url: `${url}/${$(countryNameId).val()}`,
        type: 'GET',
        dataType: 'json',
        success: (data) => {
            let response = data.caption;
            if (response === "No Content") {
                $("#btnSave").prop("disabled", false);
            } else if (response === "OK") {
                iziToast.info({ timeout: 5000, icon: 'fa fa-close', title: 'Info Alert', message: `${itemName} already exists!` });
                $("#btnSave").prop("disabled", true);
                $(countryNameId).addClass("parsley-error").removeClass("parsley-success").focus();
                return false;
            }
        },
        statusCode: {
            401: () => {
                toastr("info", "Sorry!! Please login");
                return false;
            },
            200: () => {

            },
            204: () => {

            }
        }
    });
}