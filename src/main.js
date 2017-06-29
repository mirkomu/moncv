import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
/* import 'bootswatch/darkly/bootstrap.min.css'; */
import './main.css';
import Chart from 'chart.js';

$(document).ready(function () {
    $('.progress').each(function (index) {
        let data = {
            datasets: [{
                data: [$('.progress-bar').attr('aria-valuenow'), 100 - $('.progress-bar').attr('aria-valuenow')],
                backgroundColor: [
                    'rgb(135,206,235)',
                    'rgb(255, 255, 255)'
                ],
                borderColor: [
                    'rgb(70,130,180)',
                    'rgb(70,130,180)'
                ],
                borderWidth: 1
            }]
        };

        let graphiqueHTML = $(this);
        graphiqueHTML.replaceWith('<canvas></canvas>');
        /* eslint-disable no-new */
        new Chart($('canvas:last'), {
            type: 'doughnut',
            data: data,
            options: Chart.defaults.doughnut
        });

        $(this).replaceWith(graphiqueHTML);
    });
});
