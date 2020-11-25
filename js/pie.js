var myPieChart;
$(document).ready(function(){

    myPieChart = c3.generate({
        bindto: '#myPieChart',
        data: {
            columns: [
                ["Dell", 76],
                ["Apple", 65],
                ["HP", 34],
                ["Asus", 55],
                ["Lenovo", 45],
            ],
            type : 'pie',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        },
    });
});