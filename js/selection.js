document.addEventListener('DOMContentLoaded', function () {
    var saveBtn = document.getElementById('save_btn');
    var clearBtn = document.getElementById('clear_btn');
    var addBtn = document.getElementById('add_btn');
    var delBtn = document.getElementById('delete_btn');
    var listOutput = document.getElementById('listOutput');
    var savedText = []; 

    saveBtn.addEventListener('click', function () {
        var timeInput = document.getElementById('time').value;
        var scenerySelect = document.getElementById('scenery');
        var selectedIndex = scenerySelect.selectedIndex;
        var selectedOption = scenerySelect.options[selectedIndex];
        var selectedText = selectedOption.text;

        // 将时间和选择的景点信息添加到数组中
        savedText.push("時間：" + timeInput + "\n" + "景點：" + selectedText);
    });

    addBtn.addEventListener('click', function() {
        // 遍历savedText数组中的每个项，创建一个新的li元素，并将其添加到ul中
        listOutput.innerHTML = ""; // 清空现有的列表内容

        savedText.forEach(function(item) {
            var listItem = document.createElement("li");
            listItem.textContent = item;
            listOutput.appendChild(listItem);
        });
    });

    delBtn.addEventListener('click', function() {
        if (savedText.length > 0) {
            // 删除 savedText 数组中的最后一项
            savedText.pop();
            
            // 清空现有的列表内容
            listOutput.innerHTML = "";
            
            // 遍历剩余的 savedText 数组中的每个项，创建一个新的 li 元素，并将其添加到 ul 中
            savedText.forEach(function(item) {
                var listItem = document.createElement("li");
                listItem.textContent = item;
                listOutput.appendChild(listItem);
            });
        }
    });

    clearBtn.addEventListener('click', function() {
        listOutput.innerHTML = ""; // 清空列表内容
        savedText = []; // 清空保存的文本数组
    });
});