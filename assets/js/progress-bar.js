/*$(document).ready(function(){

  
  $('#update').click(function() {
      var pb = new progressBar($('#input_progress').val(), $('#input_steps').val(),true);
  });
});*/

$(document).ready(function() {
  var pb = new progressBar(6, 7, true); // currentStep = 5, totalSteps = 7
});

/* todo. Turn into a prototype function */
var progressBar = function (_step,_steps, _showSteps) {  
  this.currentStep = _step;
  this.totalSteps = _steps;
  this.showSteps = false;
  
   $('.progress-wrapper').html('');
  $('.progress-wrapper').append('<div class="progress-bar"></div><div class="steps-wrapper"><ul class="steps"></ul>');
    
  
  for(i = 0; i != _steps; i ++)
    {      
      $(".steps").append("<li></li>");
    }
  
  var steps = $('.steps li').length;  
  var i = 0;
  $.each($('.steps li'), function( index, value ) {    
    if(_showSteps == true)
      {    
        var si = (_step -1);
        const stepLabels = ["Problem Definition", "Initial Interviews", "Early Prototype", "Material Ordering", "Simulations", "Final Prototype", "Demonstration"]; // example labels
        
        if(index == si){
          $(this).prepend('<span class="active">'+ (index + 1) + '</span>' + '<div class="step-label">' + stepLabels[index] + '</div>' +
    '</div>');                    
          }        
          else if(index >= si)
          {
            $(this).prepend('<span>'+ (index + 1) + '</span>' + '</span>' + '<div class="step-label">' + stepLabels[index] + '</div>' +
    '</div>' );
          }
          else if(index <= si)
          {
            $(this).prepend('<span class="halflings halflings-ok"></span>'+ '</span>' + '<div class="step-label">' + stepLabels[index] + '</div>' +
    '</div>' );
          }        
      }    
    i++;
  });   
  var g = (100 / i ).toFixed(4);  
  var stepLength = $('.steps li').first().width();    
  var pbLength = (_step >= steps) ? (g * _step) :  ((g * _step) - (g / 2));

  $('.steps li').css("width", g + '%');    
  $('.progress-bar').css("width", pbLength +"%");  
  
};
progressBar.prototype.updateProgress = function() {  
};



