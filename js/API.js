(function() {
  window.MiniCal = {};

  MiniCal.numButton = function(tagID,obj){
    value += $(obj).html();
    $(tagID).html(value);
    console.log(value);
  };

  MiniCal.calculate = function(tagID,obj){
    if(value[value.length-1] === '+' || value[value.length-1] === '-' || value[value.length-1] === '*' || value[value.length-1] === '/'){
      return alert('사칙연산이 중복됩니다!!');
    }else{
      value += $(obj).html();
      $(tagID).html(value);
      console.log(value);
      if(value.length === 1 && (value[0] === '*' || value[0] === '/')){
        value = '';
        $(tagID).html('input');
        console.log(value);
        return alert('곱하기와 나누기는 처음에 올 수 없습니다!!');
      }
    }
  }

  MiniCal.clear = function(tagID){
    $(tagID).html('input');
    value = '';
    console.log(value);
  }

  MiniCal.result =  function(tagID){
    $(tagID).html(eval(value));
    value = eval(value);
    console.log(value);
  }

  MiniCal.delete = function(tagID){
    if($(tagID).html()!=='input' && value !==''){
      value = $(tagID).html().slice(0,-1);
      $(tagID).html(value);
    }
    if(!($(tagID).html().length) || value === '') {
      $(tagID).html('input');
      value = '';
    }
    console.log(value);
  }
}());
