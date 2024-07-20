$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true
    });

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: false,
            },
            produtoDeInteresse: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome!'
        },
        submitHandler: function (form) {
            console.log(form)
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    });

    $('.produtos-lista button').click(function () {
        const destino = $('#contato');
        const nomeProduto = $(this).parent().find('h3').text();

        $('#produto-interesse').val(nomeProduto);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})