
// ========================================
// CONFIGURAÇÕES
// ========================================

const totalRespostas = 22;

const cores = {
    verdeEscuro: "#145438",
    verde: "#218653",
    verdeClaro: "#75c995",
    verdeSuave: "#bde8ca",
    cinza: "#dce8df",
    texto: "#52665a"
};


// ========================================
// GRÁFICO 1 - PIZZA
// FREQUÊNCIA DE UTILIZAÇÃO
// ========================================

const usageChart = new Chart(
    document.getElementById("usageChart"),
    {
        type: "pie",

        data: {

            labels: [
                "Sim, constantemente",
                "Não, nunca usei",
                "Às vezes eu uso"
            ],

            datasets: [{

                data: [5, 0, 17],

                backgroundColor: [
                    cores.verdeEscuro,
                    cores.cinza,
                    cores.verdeClaro
                ],

                borderColor: "#ffffff",
                borderWidth: 4,
                hoverOffset: 10

            }]

        },

        options: {

            responsive: true,
            maintainAspectRatio: false,

            animation: {
                duration: 1000
            },

            plugins: {

                legend: {

                    position: "bottom",

                    labels: {
                        color: cores.texto,
                        padding: 12,
                        usePointStyle: true,
                        font: {
                            family: "DM Sans",
                            size: 10
                        }
                    }

                },

                tooltip: {

                    callbacks: {

                        label: function(context) {

                            const quantidade = context.raw;

                            const percentual =
                                (
                                    quantidade /
                                    totalRespostas *
                                    100
                                ).toLocaleString("pt-BR", {
                                    maximumFractionDigits: 1
                                });

                            return `${quantidade} estudantes (${percentual}%)`;

                        }

                    }

                }

            }

        }

    }

);


// ========================================
// GRÁFICO 2 - BARRAS
// COMPORTAMENTO APÓS PESQUISAR
// ========================================

const learningChart = new Chart(
    document.getElementById("learningChart"),
    {
        type: "bar",

        data: {

            labels: [
                ["Apenas copio", "as respostas"],
                ["Analiso, mas não", "adquiro conhecimento"],
                ["Leio e obtenho", "conhecimentos"]
            ],

            datasets: [{

                label: "Estudantes",

                data: [1, 4, 17],

                backgroundColor: [
                    cores.verdeSuave,
                    cores.verdeClaro,
                    cores.verde
                ],

                borderRadius: 7,
                borderSkipped: false,
                maxBarThickness: 48

            }]

        },

        options: {

            responsive: true,
            maintainAspectRatio: false,

            animation: {
                duration: 1000
            },

            plugins: {

                legend: {
                    display: false
                },

                tooltip: {

                    callbacks: {

                        label: function(context) {

                            const quantidade = context.raw;

                            const percentual =
                                (
                                    quantidade /
                                    totalRespostas *
                                    100
                                ).toLocaleString("pt-BR", {
                                    maximumFractionDigits: 1
                                });

                            return `${quantidade} estudantes (${percentual}%)`;

                        }

                    }

                }

            },

            scales: {

                x: {

                    ticks: {
                        color: cores.texto,

                        font: {
                            family: "DM Sans",
                            size: 9
                        }
                    },

                    grid: {
                        display: false
                    },

                    border: {
                        display: false
                    }

                },

                y: {

                    beginAtZero: true,
                    max: 20,

                    ticks: {
                        stepSize: 5,
                        precision: 0,
                        color: cores.texto
                    },

                    title: {
                        display: true,
                        text: "Estudantes",
                        color: cores.texto
                    },

                    grid: {
                        color: "#eaf1eb"
                    },

                    border: {
                        display: false
                    }

                }

            }

        }

    }

);


// ========================================
// FILTRO INTERATIVO
// ========================================

const chartFilter = document.getElementById("chartFilter");

const usageCard = document.getElementById("usageCard");

const learningCard = document.getElementById("learningCard");


chartFilter.addEventListener("change", function() {

    const opcao = chartFilter.value;

    // Mostrar ou esconder gráfico de pizza

    usageCard.classList.toggle(
        "hidden",
        opcao === "learning"
    );

    // Mostrar ou esconder gráfico de barras

    learningCard.classList.toggle(
        "hidden",
        opcao === "usage"
    );

    // Ajustar os gráficos após a mudança de visualização

    requestAnimationFrame(() => {

        usageChart.resize();
        learningChart.resize();

    });

});


// ========================================
// FIM
// ========================================
