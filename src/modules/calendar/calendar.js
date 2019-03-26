$(function() {
  $("#datepicker").datepicker({
    dayNamesMin: [ "mon", "tue", "wed", "thu", "fri", "sat", "sun" ],
    showOtherMonths: true,
    selectOtherMonths: true,
    onSelect: function(dateText, inst) {
      $('#datepicker-today').html(inst.currentDay);
    }
  });
  
  $('#datepicker-today').html($('.ui-datepicker-today a').html());
  
  $('#datepicker-gototoday').click(function(){
    $("#datepicker").datepicker("destroy");
    $("#datepicker").datepicker({
      dayNamesMin: [ "mon", "tue", "wed", "thu", "fri", "sat", "sun" ],
      showOtherMonths: true,
      selectOtherMonths: true,
      onSelect: function(dateText, inst) {
        $('#datepicker-today').html(inst.currentDay);
      }
    });
    $("#datepicker").datepicker("refresh");
    $('#datepicker-today').html($('.ui-datepicker-today a').html());
  });
});