function LoadOneCountryIntoTable(link, table, tableId, searchString) {
    // $.ajax({
    //     url: link,
    //     type: 'GET',
    //     dataType: 'json',
    //     beforeSend: function() {
    //         $('#search_term').attr('disabled', true);
    //         $('#btnSearch').html('<i class="fa fa-spinner fa-spin"></i>').attr('disabled', true);
    //         loading('.panel');
    //     },
    //     success: function(data) {
    //         countriesData = [];
    //         let response = data.body
    //         for (let x = 0; x < response.length; x++) {
    //             if (response[x].status == 1) { response[x].status = 'Active' } else { response[x].status = 'Inactive' }
    //             countriesData.push({ countryId: response[x].id, countryCode: response[x].countryCode, countryName: response[x].name, countryStatus: response[x].status, userId: response[x].userId, countryCurrency: response[x].homeCurrency });
    //         }
    //         let filteredData = countriesData.filter((filt) => { filt.countryName === searchString });
    //         $('#search_term').attr('disabled', false);
    //         $('#btnSearch').html('<i class="fa fa-search"></i>').attr('disabled', false);
    //         table.rows().remove().draw();
    //         stop('.panel');
    //         table = $(`#${tableId}`).DataTable();
    //         table.rows.add(filteredData).draw();
    //     },
    //     statusCode: {
    //         404: function() {
    //             toastr('Not Found!!!', 'No record found');
    //             table.rows().remove().draw();
    //         }
    //     },
    //     error: function(data) {
    //         $('#search_term').attr('disabled', false);
    //         $('#btnSearch').html('<i class="fa fa-search"></i>').attr('disabled', false);
    //         stop('.panel');

    //         if (data.responseText === "Unauthorized") {
    //             toastr('Info', 'Please login');
    //             return false;
    //         }
    //     }
    // });
}

function LoadAllCurrenciesIntoTable(link, table, tableId) {
    $.ajax({
        url: link,
        type: 'GET',
        dataType: 'json',
        beforeSend: function() {
            $('#search_term').attr('disabled', true);
            $('#btnSearch').html('<i class="fa fa-spinner fa-spin"></i>').attr('disabled', true);
            loading('.panel');
        },
        success: function(data) {
            currenciesData = [];
            let response = data.body
            for (let x = 0; x < response.length; x++) {
                if (response[x].status == 1) { response[x].status = 'Active' } else { response[x].status = 'Inactive' }
                currenciesData.push({ currencyId: response[x].id, currencyName: response[x].name, currencyStatus: response[x].status, userId: response[x].userId, currencySymbol: response[x].symbol });
            }
            $('#search_term').attr('disabled', false);
            $('#btnSearch').html('<i class="fa fa-search"></i>').attr('disabled', false);
            table.rows().remove().draw();
            stop('.panel');
            table = $(`#${tableId}`).DataTable();
            table.rows.add(currenciesData).draw();
        },
        statusCode: {
            404: function() {
                toastr('Not Found!!!', 'No record found');
                table.rows().remove().draw();
            }
        },
        error: function(data) {
            $('#search_term').attr('disabled', false);
            $('#btnSearch').html('<i class="fa fa-search"></i>').attr('disabled', false);
            stop('.panel');

            if (data.responseText === "Unauthorized") {
                toastr('Info', 'Please login');
                return false;
            }
        }
    });
}

function LoadAllCountriesIntoTable(link, table, tableId) {
    $.ajax({
        url: link,
        type: 'GET',
        dataType: 'json',
        beforeSend: function() {
            $('#search_term').attr('disabled', true);
            $('#btnSearch').html('<i class="fa fa-spinner fa-spin"></i>').attr('disabled', true);
            loading('.panel');
        },
        success: function(data) {
            countriesData = [];
            let response = data.body;
            for (let x = 0; x < response.length; x++) {
                if (response[x].status == 1) { response[x].status = 'Active' } else { response[x].status = 'Inactive' }
                countriesData.push({ countryId: response[x].id, countryCode: response[x].countryCode, countryName: response[x].name, countryStatus: response[x].status, userId: response[x].userId, countryCurrency: response[x].homeCurrency });
            }
            $('#search_term').attr('disabled', false);
            $('#btnSearch').html('<i class="fa fa-search"></i>').attr('disabled', false);
            stop('.panel');
            table.rows().remove().draw();
            stop('.panel');
            table = $(`#${tableId}`).DataTable();
            table.rows.add(countriesData).draw();
        },
        statusCode: {
            404: function() {
                toastr('Not Found!!!', 'No record found');
                table.rows().remove().draw();
            }
        },
        error: function(data) {
            $('#search_term').attr('disabled', false);
            $('#btnSearch').html('<i class="fa fa-search"></i>').attr('disabled', false);
            stop('.panel');

            if (data.responseText === "Unauthorized") {
                toastr('Info', 'Please login');
                return false;
            }
        }
    });

    $('#clearAllModal').on('click', () => {
        $(".all-forms").trigger("reset");
        // $('input, textarea').val('');
        // $('input, textarea, select').removeClass('parsley-success');
        // $('input, textarea, select').removeClass('parsley-error');
        // $('select').val('-1');
    });
}




/*
iziToast.info({position: "center", title: 'Hello', message: 'iziToast.info()'});
iziToast.success({timeout: 5000, icon: 'fa fa-chrome', title: 'OK', message: 'iziToast.sucess() with custom icon!'});
iziToast.warning({position: "bottomLeft", title: 'Caution', message: '日本語環境のテスト'});
iziToast.error({title: 'Error', message: 'Illegal operation'});
// custom toast
    $('#customClick').click(function () {

      iziToast.show({
        color: 'dark',
        icon: 'fa fa-user',
        title: 'Hey',
        message: 'Custom Toast!',
        position: 'center', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
        progressBarColor: 'rgb(0, 255, 184)',
        buttons: [
          [
            '<button>Ok</button>',
            function (instance, toast) {
              alert("Hello world!");
            }
          ],
          [
            '<button>Close</button>',
            function (instance, toast) {
              instance.hide({
                transitionOut: 'fadeOutUp'
              }, toast);
            }
          ]
        ]
      });

    }); // ! .click()

$('#any').click(function(){
  iziToast.error({
    title: 'Errorカラー',
    message: 'iziToast.error()'
  });
});
*/