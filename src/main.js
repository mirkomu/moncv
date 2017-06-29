import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
/* import 'bootswatch/darkly/bootstrap.min.css'; */
import './main.css';
import Chart from 'chart.js';

$(document).ready(function () {
    // ----- Effet sur les icones -----
    $('.img-contact, .icones').hide().fadeIn(1500, 'linear');

    // ----- Remplacement des progressbar par des chart -----
    // boucle sur les progressbar
    $('.progress').each(function (index) {
        // Préparation des données en reprenant les valeurs des progressbar
        let data = {
            labels: ['Connaissance', 'Inconnu'],
            datasets: [{
                data: [$('.progress-bar').attr('aria-valuenow'), 100 - $('.progress-bar').attr('aria-valuenow')],
                backgroundColor: [
                    'deepskyblue',
                    'lightblue'
                ],
                borderColor: [
                    'rgb(70,130,180)',
                    'rgb(70,130,180)'
                ],
                borderWidth: 1
            }]
        };

        // Création du graphique
        let graphiqueHTML = $(this);

        // Remplace la progressbar actuelle par le canvas
        graphiqueHTML.replaceWith('<canvas class="graphique"></canvas>');

        // Création du chart
        /* eslint-disable no-new */
        new Chart($('canvas:last'), {
            type: 'doughnut',
            data: data,
            options: {
                legend: {
                    display: false
                }
            }
        });
    });
});
