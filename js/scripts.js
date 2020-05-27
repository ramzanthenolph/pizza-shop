//business logic

function Delivery(name, phone, address){
  this.name= name;
  this.phone= phone;
  this.address= address
}


//user interface logic
$(document).ready(function(){
    $("#deliver").click(function(){
        $("#deliverydetails").append(
        '<div class="deliverydetails"'+
        '<h6>Hi. Fill the delivery</h6>'+
        '<p>Delivery at sh.150</p>'+
        '<div class="form-group">' +
          '<label for="deliveryName">Name</label>' +
          '<input type="text" class="form-control deliveryName">' +
        '</div>' +
        '<div class="form-group">' +
          '<label for="deliveryNumber">Phone Number</label>' +
          '<input type="text" class="form-control deliveryNumber">' +
        '</div>' +
        '<div class="form-group">' +
          '<label for="deliveryAddress">Address</label>' +
          '<input type="text" class="form-control deliveryAddress">' +
        '</div>' +
        '<span class="btn btn-info" id="submit">Submit Details</span><br>'+
        '<span class="btn btn-secondary" id="checkout">Checkout</span>'+
        '<p class="total">Total: </p>'+
        '</div>');
    });
    
    $("#checkout").click(function(){
     
      var size = $("#size option:selected").val();
      var number = $("#number").val();
      var topping = $("#toppings option:selected").val();

      var order = ( s, n, total) => {
        return {s, n, total};
      };
      //check price
      var price, totalPrice;
      switch(size){
        case size = "small":
          price = 550;
          if(topping === "dd"){
            totalPrice = (price * number);
          }
          else{
            totalPrice = (price * number)+ 50;
          }
          break;
        case size = "medium":
          price = 850;
          if(topping === "dd"){
            totalPrice = (price * number);
          }
          else{
            totalPrice = (price * number)+ 50;
          }
          break;
        case size = "large":
          price = 1200;
          if(topping === "dd"){
            totalPrice = (price * number);
          }
          else{
            totalPrice = (price * number)+ 50;
          }
      }
      var newOrder = order(size, number, totalPrice);
      $("p.total").append("<br>"+"<p>Your total is "+newOrder.total+".</p>");
      alert("your total cost is" +newOrder.total+ ".");
    });

    $("#submit").click(function(event){
      event.preventDefault();
      var name = $("input.deliveryName").val();
      var location = $("input.deliveryAddress").val();
      alert("Hello "+ name + " Your order will arrive at  " + location+ " In 15 minutes with an additional cost of 150 ksh " );
  });
});
