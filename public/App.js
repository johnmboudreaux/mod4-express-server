(function(){
  var $submitBtn;

  function init() {
    cache$Elems();
    bind$Elements();
  }

  function cache$Elems() {
    $submitBtn = $('#submit-btn');
  };

  function bind$Elements() {
    $submitBtn.click(handleClick);
  };

  function handleClick() {
    $.ajax({
      url: '/json',
      method: 'GET',
      dataType: 'json'
    }).done(function(data) {
      console.log(data);
    }).fail(function(error) {
      console.log(error);
    });
  };

  $(init())
})();
