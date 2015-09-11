$(document).ready(function(){
	console.log("document ready")

	var balance
	var savingsBalance
	balance = 0
	savingsBalance = 0


	$("#balance").click(function(){
		console.log("Balance button works")
		$("#message").text("Your checking balance is: $" + balance.toString() + ", and your savings balance is: $" + savingsBalance.toString())
	})


	$("#deposit").click(function(){
		var amount = parseFloat($("#d_amount").val())
		balance = balance + amount
		$("#message").text("Thank you for your deposit")
	})

	$("#withdraw").click(function(){
		var amount = parseFloat($("#w_amount").val())
		if(amount > balance){
			$("#message").text("Insufficient funds in checking for withdrawl. Please check your balance and try again")
		} else {
			balance = balance - amount
			$("#message").text("Withdrawl complete. Thank You")
		}
	})

	$("#x2save").click(function(){
		var amount = parseFloat($("#x2s_amount").val())
		if(amount > balance){
			$("#message").text("Insufficient funds in checking for transfer. Please check your balance and try again")
		} else {
			balance = balance - amount
			savingsBalance = savingsBalance + amount
			$("#message").text("Transfer of funds from Cheking to Savings complete. Thank you")
		}
	})

	$("#x2check").click(function(){
		var amount = parseFloat($("#x2c_amount").val())
		if(amount > balance){
			$("#message").text("Insufficient funds in savings for transfer. Please check your balance and try again")
		} else {
			balance = balance + amount
			savingsBalance = savingsBalance - amount
			$("#message").text("Transfer of funds from Savings to Checking complete. Thank you")
		}
	})



})