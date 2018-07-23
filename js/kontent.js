$(function() {


    // $('#tabtest').accordion();

    $('#contProducts').tabs();

    // $('#head1').delay(1000).toggle('explode');

var $range=$('#ranges');


    $('#ranges').slider(
        {
            range:true,
            min:0,
            max:120,
            values:[15,80],
            slide: function(event, ui){  '$'+ui.values[0] + '-$' + ui.values[1] }
        
        
                });
console.log(ranges.slider);



        // $('#amount').val("10");
$('#amount').val(
    '€'+ $range.slider('values',0)+'-€'+ $range.slider('values',1)
  
);
console.log( ui.values[0]);

});












