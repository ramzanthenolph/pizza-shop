//business logic

function Delivery(name, phone, address){
  this.name= name;
  this.phone= phone;
  this.address= address
}


//user interface logic
$(document).ready(function(){
    $("#deliver").click(function(){
        $("#deliverydetails").show();
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
            totalPrice = (price + 50) * number;
          }
          break;
        case size = "medium":
          price = 850;
          if(topping === "dd"){
            totalPrice = (price * number);
          }
          else{
            totalPrice = (price + 50)* number;
          }
          break;
        case size = "large":
          price = 1200;
          if(topping === "dd"){
            totalPrice = (price * number);
          }
          else{
            totalPrice = (price +50) * number;
          }
      }
      var newOrder = order(size, number, totalPrice);
      $("p.total").append("Your total is "+newOrder.total+".");
      //alert("your total cost is" +newOrder.total+ ".");
    });

    $("#submit").click(function(event){
      event.preventDefault();
      var name = $("input.deliveryName").val();
      var location = $("input.deliveryAddress").val();
      alert("Hello "+ name + " Your order will arrive at  " + location+ " In 15 minutes with an additional cost of 150 ksh " );
  });
});
