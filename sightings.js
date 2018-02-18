//Script for the POST using classic jQuery- and Axios-libraries
$(function () {
    $('#submit').click(function (e) {
      e.preventDefault();
      console.log('clikki');
      $('#warning').hide();

      if ($('#count').val() && $('#description').val()) {
        var d = new Date();
        var dISO = d.toISOString();
        var data = {};
        data.id = null;
        data.species = document.getElementById('species').value;
        data.count = document.getElementById('count').value;
        data.description = document.getElementById('description').value;
        data.dateTime = dISO;

        $.ajax
          ({
            type: 'POST',
            url: 'http://localhost:8081/sightings',
            dataType: "html",
            data: JSON.stringify(data),
            contentType: 'application/json',
            success: function (data, textStatus, jQxhr) {
              console.log("toimii: ", data);
              $('#response').html(data);
            },
            error: function (jqXhr, textStatus, errorThrown) {
              console.log(errorThrown);
            }
          });
          window.location.reload(true);
      }
      else
        $('#warning').show();
    });
  });

  $(function () {
    $('#sort').click(function (e) {
        var s = null;})});