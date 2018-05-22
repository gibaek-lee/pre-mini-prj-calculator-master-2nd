$(document).ready(function() {
  window.value = '';

  $('.numButton').on('click', function(){MiniCal.numButton('#input',this)});

  $('.calculate').on('click', function(){MiniCal.calculate('#input',this)});

  $('#clear').on('click', function(){MiniCal.clear('#input')});

  $('#result').on('click', function(){MiniCal.result('#input')});

  $('#delete').on("click", function(){MiniCal.delete('#input')});
});
