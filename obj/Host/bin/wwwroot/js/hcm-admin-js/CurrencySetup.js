$(document).ready(() => {
    let currenciesTable;
    let status = -1;
    document.getElementById('btnAddCurrency').addEventListener('click', () => {
        $('#addCurrencyModal').modal('show');
    });

    $("#btnSearch").click(function(e) {
        PopulateTable(currenciesTable, 'currency-table', $('#search_term').val())
    });

    console.log(status)
    GetElementById('selCurrencyStatus').addEventListener('change', () => {
        status = $("#selCurrencyStatus :selected").val();
        console.log(status)
    });

    //Initialize Table
    if ($("#currency-table").length !== 0) {
        currenciesTable = $("#currency-table").DataTable({
            //data: currenciesTable,
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
                    title: "Currency Name",
                    data: "currencyName"
                },
                {
                    width: "15.8%",
                    title: "Currency Symbol",
                    data: "currencySymbol"
                },
                {
                    width: "15.8%",
                    title: "Currency Status",
                    data: "currencyStatus"
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
        $("#inTxtCurrencyName").val() !== '' && $('#inTxtCurrencySymbol').val() !== '' && $("#selCurrencyStatus :selected").val() != -1 ? $('#btnSave').prop("disabled", false) : $('#btnSave').prop("disabled", true);
    });

    $('#btnSave').on('click', () => {
        let inTxtCurrencyName = GetValueById('inTxtCurrencyName');
        let inTxtCurrencySymbol = GetValueById('inTxtCurrencySymbol');

        let postdata = {
            szName: inTxtCurrencyName,
            iStatus: Number(status),
            symbol: inTxtCurrencySymbol,
            dDateCreated: "2019-09-10T11:50:37.289Z",
            uniUserId: "6baea330-843e-4017-8004-31f5cff41d20"
        }
        console.log(postdata)
        if (!inTxtCurrencyName || !inTxtCurrencySymbol || status == -1) {
            iziToast.info({ timeout: 3000, icon: 'fa fa-check', title: 'OK', message: msg.fillAllFields });
            console.log("Not Sent")
        } else {
            console.log("Sent")
            $.ajax({
                url: "/api/Currency/CreateCurrency",
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
                    stop('.panel');
                    if (data.status === 'Successful') {
                        $('#addCurrencyModal').modal('hide');
                        iziToast.success({ timeout: 5000, icon: 'fa fa-check', title: 'OK', message: msg.success });
                        console.log(!currenciesTable.data().any())
                        if (!currenciesTable.data().any()) {
                            PopulateTable(currenciesTable, 'currency-table', inTxtCurrencyName, 'one')
                        } else {
                            PopulateTable(currenciesTable, 'currency-table', inTxtCurrencyName)
                        }
                    } else {}
                },
                statusCode: {
                    404: function() {
                        stop('.panel');
                        iziToast.error({ timeout: 5000, icon: 'fa fa-close', title: 'Not Found', message: msg.notFound });
                    }
                },
                error: function(data) {
                    stop('.panel');
                    iziToast.error({ timeout: 5000, icon: 'fa fa-close', title: 'Error', message: msg.fail });
                }
            });
        }
    });

});