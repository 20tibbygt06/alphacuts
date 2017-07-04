Snipcart.api.configure('show_continue_shopping', true);

Snipcart.execute('bind', 'order.completed', function(order) {
  var html = $("#cart-content-text").html();
  $(html).insertAfter($("#snipcart-header"));
});
