
$(document).ready(function () {
  $('.date-picker input').datepicker({
    format: 'dd/mm/yyyy',
    language: "pt-BR",
    clearBtn: true,
    autoclose: true,
    startDate: '-0d',
    endDate: '+2m'
  });
});
$(document).ready(function () {
  $("button").click(function () {
      alert("Você clicou em um botão!");
  });
});


$(document).ready(function() {
  // Configuração do DatePicker de Check-In
  $('#CheckInDatePicker').datepicker({
      language: "pt-BR",
      autoclose: true,
      format: "yyyy/mm/dd",
      startDate: '-0d'
  }).on('changeDate', function(e) {
      // A data selecionada no DatePicker de Check-In
      var checkInDate = e.date;
      // Adiciona 1 dia à data de Check-In para definir como a data mínima de Check-Out
      var checkOutMinDate = new Date(checkInDate);
      checkOutMinDate.setDate(checkOutMinDate.getDate() + 1);
      
      // Atualiza o DatePicker de Check-Out
      $('#CheckOutDatePicker').datepicker('setStartDate', checkOutMinDate);
      // Configura a data de Check-Out para ser pelo menos 1 dia após a data de Check-In
      $('#CheckOutDatePicker').datepicker('setDate', checkOutMinDate);
      $('#CheckOutDatePicker').focus()
      console.log(checkOutMinDate)
  });

  // Configuração inicial do DatePicker de Check-Out
  $('#CheckOutDatePicker').datepicker({
      language: "pt-BR",
      autoclose: true,
      format: "yyyy/mm/dd",
      startDate: '+1d' // Começa com uma data mínima de +1 dia a partir de hoje por padrão
  });
});

!function (a) {
  a.fn.datepicker.dates["pt-BR"] =
{
  days: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
  daysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
  daysMin: ["Do", "Se", "Te", "Qu", "Qu", "Se", "Sa"],
  months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
  monthsShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
  today: "Hoje",
  monthsTitle: "Meses",
  clear: "Limpar",
  format: "dd/mm/yyyy"
}
}(jQuery);