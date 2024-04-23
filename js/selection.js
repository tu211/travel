document.addEventListener('DOMContentLoaded', function () {
    // 获取时间输入框的值
    var saveBtn = document.getElementById('save_btn');
    var clearBtn = document.getElementById('clear_btn');
    var addBtn = document.getElementById('add_btn');
    var outputParagraph = document.getElementById('output');
    var savedText = []; // 变量用于存储输入框的值

    saveBtn.addEventListener('click', function () {
        var timeInput = document.getElementById('time').value;
        // 获取景点选择框元素
        var scenerySelect = document.getElementById('scenery');

        // 获取用户选择的选项的索引
        var selectedIndex = scenerySelect.selectedIndex;
        // 用户选择了一个选项
        var selectedOption = scenerySelect.options[selectedIndex];
        var selectedText = selectedOption.text;

        function savedText(newContent) {
            savedText.push(newContent);
            return savedText
        };
    
        // 将时间和选择的景点信息设置为output段落的文本内容
        outputParagraph.textContent = "時間：" + timeInput + "\n" + "景點：" + selectedText;
        // 添加新的内容到数组中
        
        result = savedText("時間：" + timeInput + "\n" + "景點：" + selectedText);
        alert(result);
    });

    addBtn.addEventListener('click', function() {
        outputParagraph.textContent += ("\n時間：" + timeInput + "\n" + "景點：" + selectedText); // 追加新内容
        result = savedText("時間：" + timeInput + "\n" + "景點：" + selectedText);
        alert(result);
    });

    clearBtn.addEventListener('click', function() {
        // 在此处添加删除操作的逻辑
        // 清空output段落的文本内容
        outputParagraph.textContent = "";
    });
});