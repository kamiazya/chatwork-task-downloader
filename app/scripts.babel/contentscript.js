$(function () {
  $('.roomTask__headerText')
    .append('<button id="download-tasks">ダウンロード</button>');

  $('#download-tasks').on('click', download);
});

function download() {
  var content = '';
  $('.chatInfoTaskContentArea').each(function () { content += '==========================\r\n' + $(this).text().replace(/\n/gi, '\r\n') + '\r\n\r\n' })
  var blob = new Blob([content], { 'type': 'application/x-msdownload' });

  $('<a download="タスク一覧.txt">')
    .attr('href', window.URL.createObjectURL(blob))
    .get(0)
    .click();
}