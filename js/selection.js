document.addEventListener('DOMContentLoaded', function () {
    // 获取相关元素
    const timeInput = document.getElementById('time');
    const sceneryInput = document.getElementsByID('scenery');
    const saveBtn = document.getElementById('save_btn');
    const deleteBtn = document.getElementById('delete_btn');

    // 将保存按钮的点击事件与 saveSelection 函数关联起来
    saveBtn.addEventListener('click', saveSelection);

    // 将删除按钮的点击事件与 deleteSelection 函数关联起来
    deleteBtn.addEventListener('click', deleteSelection);

    function saveSelection() {
        var time_text = timeInput.value;
        var scenery_text = sceneryInput.value;
        alert("Time: " + time_text + "景點: " + scenery_text);
    }

    // 这是你可能需要的删除功能的示例
    function deleteSelection() {
        timeInput.value = ''; // 清空时间输入框
        alert("Selection deleted.");
    }

});