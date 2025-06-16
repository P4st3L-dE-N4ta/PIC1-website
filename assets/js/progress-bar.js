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


document.addEventListener("DOMContentLoaded", function () {
  const ganttTasks = [
    {
      id: 'task1',
      name: 'Problem Definition',
      start: '2025-06-01',
      end: '2025-06-02',
      progress: 100
    },
    {
      id: 'task2',
      name: 'Initial Interviews',
      start: '2025-06-02',
      end: '2025-06-04',
      progress: 100
    },
    {
      id: 'task3',
      name: 'Early Prototype',
      start: '2025-06-04',
      end: '2025-06-07',
      progress: 100
    },
    {
      id: 'task4',
      name: 'Material Ordering',
      start: '2025-06-07',
      end: '2025-06-10',
      progress: 80
    },
    {
      id: 'task5',
      name: 'Simulations',
      start: '2025-06-10',
      end: '2025-06-15',
      progress: 40
    },
    {
      id: 'task6',
      name: 'Final Prototype',
      start: '2025-06-15',
      end: '2025-06-20',
      progress: 0
    },
    {
      id: 'task7',
      name: 'Demonstration',
      start: '2025-06-20',
      end: '2025-06-22',
      progress: 0
    }
  ];

  $('#ganttCollapse').on('shown.bs.collapse', function () {
    if (!$('#gantt-chart').data('gantt-initialized')) {
      new Gantt("#gantt-chart", ganttTasks);
      $('#gantt-chart').data('gantt-initialized', true);
    }
  });
});


