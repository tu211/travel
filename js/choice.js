function disableOptions(selectedOption) {
    // 获取所有的 select 元素
    var selects = document.getElementsByClassName('the_option_of_video');
  
    // 循环遍历所有的 select 元素
    for (var i = 0; i < selects.length; i++) {
      var select = selects[i];
  
      // 获取当前 select 元素中已经选择的选项的值
      var selectedValue = select.value;
  
      // 循环遍历当前 select 元素之外的其他 select 元素
      for (var j = 0; j < selects.length; j++) {
        // 如果不是当前 select 元素，则禁用与当前 select 元素相同值的选项
        if (selects[j] !== select) {
          var options = selects[j].options;
          for (var k = 0; k < options.length; k++) {
            if (options[k].value === selectedValue) {
              options[k].disabled = true;
            }
          }
        }
      }
    }
  }