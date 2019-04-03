$(function() {
  if($(".datepicker")){
    $(".datepicker").datepicker({
      dayNamesMin: [ "mon", "tue", "wed", "thu", "fri", "sat", "sun" ],
      showOtherMonths: true,
      selectOtherMonths: true,
      onSelect: function(dateText, inst) {
        $(this).parent().children('.datepicker-today').html(inst.currentDay);
      }
    });

    $('.datepicker-today').html($('.ui-datepicker-today a').html());

    $('.datepicker-gototoday').click(function(){
      let datepicker = $(this).parent().children('.datepicker');
      let datepickerToday = $(this).parent().children('.datepicker-today');
      $(datepicker).datepicker("destroy");
      $(datepicker).datepicker({
        dayNamesMin: [ "mon", "tue", "wed", "thu", "fri", "sat", "sun" ],
        showOtherMonths: true,
        selectOtherMonths: true,
        onSelect: function(dateText, inst) {
          $(datepickerToday).html(inst.currentDay);
        }
      });
      $(datepicker).datepicker("refresh");
      $(datepickerToday).html($('.ui-datepicker-today a').html());
    });
  }
});