$(document).ready(() => {
    let uniHomeCurrency = $("#selCountryStatus :selected").val(); //"-1";
    let status = -1;
    let countriesTable;
    let createdCountryDataArray = [];
    let currSelect = [];
    let updateStatus = 0;
    let niceTry = ""
    let country_id = '';

    let getCountriesURL = `${localhostAPI}Currency/GetAllCurrencies`
    NewAjaxRequest(getCountriesURL, "GET").done(function(data) {
        currSelect = [];
        let response = data.body
        currSelect.push(response)
        var options = "<option value='-1' selected>Select Currency</option>";
        $(response).each(function(i, val) {
            options += "<option value='" + val.id + "'>" + val.name + "</option>";
        });
        $('#selCountryCurrency').html(options)
    });

    document.getElementById('btnAddCountry').addEventListener('click', () => {
        country_id = null;
        $('#addCountryModal').modal('show');
        $("#mdlCountryTitle").text("Add Country");
        $("#btnSave").text("Save").prop('disabled', true);
        $('#clearAllModal').show();
        updateStatus = 0;
    });

    GetElementById('selCountryStatus').addEventListener('change', () => {
        status = $("#selCountryStatus :selected").val();
    });

    GetElementById('selCountryCurrency').addEventListener('change', () => {
        uniHomeCurrency = $("#selCountryCurrency :selected").val();
        console.log(uniHomeCurrency)
    });

    $("#btnSearch").click((e) => {
        PopulateTable(countriesTable, 'country-table', $('#search_term').val())
    });

    //Initialize Table 
    if ($("#country-table").length !== 0) {
        countriesTable = $("#country-table").DataTable({
            dom: '<"top">rt<"panel-footer"<"row"<"col-md-4"<"bottom"l>><"col-md-4"<"bottom"i>><"col-md-4"<"bottom"p>>>><"clear">',
            lengthMenu: DataTablelengthMenu,
            searching: false,
            scrollY: "40vh",
            pagingType: "simple",
            fixedHeader: {
                header: true,
                headerOffset: $("#header").height()
            },
            responsive: true,
            columns: [{
                    width: "25.8%",
                    title: "Country Name",
                    data: "countryName"
                },
                {
                    width: "15.8%",
                    title: "Home Currency",
                    data: "countryCurrency"
                },
                {
                    width: "15.8%",
                    title: "Country Code",
                    data: "countryCode"
                },
                {
                    width: "15.8%",
                    title: "Country Status",
                    data: "countryStatus"
                },
                {
                    width: "5%",
                    orderable: false,
                    title: "Action",
                    data: null,
                    defaultContent: '<ul class="list-inline"><li>' +
                        '<a href="#" class="text-inverse btnEditEmp" title="Edit"><i class="fa fa-pencil f-s-15"></i></a>' +
                        "</li>" +
                        // "<li>" +
                        // '<a href="#" class="text-danger btnDeleteEmp" title="Delete"><i class="fa fa-trash f-s-15"></i></a>' +
                        // "</li>" +
                        "<li>" +
                        '<a href="#" class="text-info btnHistory" title="History"><i class="fa fa-history f-s-15"></i></a>' +
                        "</li>" +
                        "</ul>"
                }
            ]
        });
    }

    $('input,select').on('keyup change', () => {
        $("#inTxtCountryName").val() !== '' && $('#inTxtCountryCode').val() !== '' && $("#selCountryCurrency :selected").val() !== "-1" && $("#selCountryStatus :selected").val() != -1 ? $('#btnSave').prop("disabled", false) : $('#btnSave').prop("disabled", true);
    });

    // Button to create or update country
    $('#btnSave').on('click', () => {
        updateStatus === 0 ? country_id = null : country_id = niceTry;

        let inTxtCountryName = GetValueById('inTxtCountryName');
        let inTxtCountryCode = GetValueById('inTxtCountryCode');

        let postdata = {
            szName: GetValueById('inTxtCountryName'),
            uniHomeCurrency: uniHomeCurrency,
            szCountryCode: GetValueById('inTxtCountryCode'),
            iStatus: $("#selCountryStatus :selected").val(),
            dDateCreated: "2019-09-10T11:50:37.289Z",
            uniUserId: "6baea330-843e-4017-8004-31f5cff41d20"
        };
        let putdata = {
            szName: inTxtCountryName,
            uniHomeCurrency: $("#selCountryCurrency :selected").val(),
            szCountryCode: inTxtCountryCode,
            iStatus: $("#selCountryStatus :selected").val(),
            dDateCreated: "2019-09-10T11:50:37.289Z",
            uniUserId: "6baea330-843e-4017-8004-31f5cff41d20"
        };

        updateStatus === 0 ? CreateNewCountry(postdata) : UpdateCountry(putdata, country_id)
    });

    //Edit country data
    $(document).on("click", ".btnEditEmp", function() {
        clearModals();
        updateStatus = 1
        $("#btnSave").text("Update");
        $('#clearAllModal').hide();
        var rowItems = countriesTable.row($(this).closest("tr")).data();
        niceTry = rowItems.countryId;
        $.ajax({
            url: `/api/Country/GetCountryById/${rowItems.countryId}`,
            type: "GET",
            dataType: "json",
            success: function(data) {
                let dataLoadedFromDB = data.body[0];
                let filterCurrency = currSelect[0].filter((data) => data.name == dataLoadedFromDB.homeCurrency);
                dataLoadedFromDB.currencyId = filterCurrency[0].id
                $("#mdlCountryTitle").html(`<span class='f-w-600'>Edit: </span> <span style="color: #00acac;">${rowItems.countryName}</span>`);
                populateFormModal(dataLoadedFromDB);
                $("#addCountryModal").modal("show");
            },
            statusCode: {
                401: function() {
                    return false;
                },
                404: function() {
                    return false;
                }
            }
        });
    });

    function populateFormModal(data) {
        $("#inTxtCountryName").val(data.name)
        $('#inTxtCountryCode').val(data.countryCode)
        $("#selCountryCurrency").val(data.currencyId)
        $("#selCountryStatus").val(data.status)
    }

    function clearModals() {
        $("#addCountryModal input").val("");
        $("#addCountryModal select").val(-1);
    }

    function CreateNewCountry(postdata) {
        if (!postdata || $("#selCountryStatus :selected").val() == -1) {
            iziToast.info({ timeout: 3000, icon: 'fa fa-check', title: 'OK', message: msg.fillAllFields });
        } else {
            $.ajax({
                url: "/api/Country/CreateCountry",
                type: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(postdata),
                beforeSend: function() {
                    loading('.panel');
                },
                success: function(data) {
                    let postResponseData = data.body;
                    createdCountryDataArray = [];
                    clearModals()
                    if (data.status === 'Successful') {
                        console.log(!countriesTable.data().any())
                        if (postResponseData.status == 1) { postResponseData.status = 'Active' } else { postResponseData.status = 'Inactive' }
                        createdCountryDataArray.push({ countryId: postResponseData.id, countryCode: postResponseData.countryCode, countryName: postResponseData.name, countryStatus: postResponseData.status, userId: postResponseData.userId, countryCurrency: postResponseData.homeCurrency });
                        iziToast.success({ timeout: 5000, icon: 'fa fa-check', title: 'OK', message: msg.success });
                        stop('.panel');
                        countriesTable = $(`#country-table`).DataTable();
                        countriesTable.rows.add(createdCountryDataArray).draw();
                        $('#addCountryModal').modal('hide');
                    } else {
                        iziToast.error({ timeout: 5000, icon: 'fa fa-close', title: 'Not Found', message: "There was a problem!" });
                    }
                },
                statusCode: {
                    404: function() {
                        iziToast.error({ timeout: 5000, icon: 'fa fa-close', title: 'Not Found', message: msg.notFound });
                    }
                },
                error: function(data) {
                    iziToast.error({ timeout: 5000, icon: 'fa fa-close', title: 'Error', message: msg.fail });
                }
            });
        }
    }


    function UpdateCountry(putdata, country_id) {
        console.log({ putdata, country_id })
        if (!putdata || $("#selCountryStatus :selected").val() == -1) {
            iziToast.info({ timeout: 3000, icon: 'fa fa-check', title: 'OK', message: msg.fillAllFields });
        } else {
            $.ajax({
                url: `/api/Country/UpdateCountry/${country_id}`,
                type: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(putdata),
                beforeSend: function() {
                    loading('.panel');
                },
                success: function(data) {
                    let postResponseData = data.body;
                    createdCountryDataArray = [];
                    clearModals()
                    if (data.status === 'Successful') {
                        console.log(!countriesTable.data().any())
                        if (postResponseData.status == 1) { postResponseData.status = 'Active' } else { postResponseData.status = 'Inactive' }
                        createdCountryDataArray.push({ countryId: postResponseData.id, countryCode: postResponseData.countryCode, countryName: postResponseData.name, countryStatus: postResponseData.status, userId: postResponseData.userId, countryCurrency: postResponseData.homeCurrency });
                        iziToast.success({ timeout: 5000, icon: 'fa fa-check', title: 'OK', message: msg.success });
                        stop('.panel');
                        countriesTable = $(`#country-table`).DataTable();
                        countriesTable.rows.add(createdCountryDataArray).draw();
                        $('#addCountryModal').modal('hide');
                    } else {
                        iziToast.error({ timeout: 5000, icon: 'fa fa-close', title: 'Not Found', message: "There was a problem!" });
                    }
                },
                statusCode: {
                    404: function() {
                        iziToast.error({ timeout: 5000, icon: 'fa fa-close', title: 'Not Found', message: msg.notFound });
                    }
                },
                error: function(data) {
                    iziToast.error({ timeout: 5000, icon: 'fa fa-close', title: 'Error', message: msg.fail });
                }
            });
        }
    }

    $("#clearAllModal").click(function() {
        if (updateStatus === 1) {
            populateFormModal(dataLoadedFromDB);
            return;
        }
        clearModals();
    });

    $("#inTxtCountryName").focusout(function() {
        if ($("#btnSave").text() === "Save") {
            if ($(this).val() !== "" || $(this).val().length > 2) {
                CheckIfItemExists('/api/Country/GetCountryByName/', "#inTxtCountryName", $(this).val());
            }
        }
    });

});