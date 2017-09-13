class ExpensesController < ApplicationController
	before_action :set_user
	def index # /trips/:trip_id/expenses
		@trip = Trip.find(params[:trip_id])
		@user = User.find_by(access_token: params[:access_token])
		@what_you_are_owed = @user.expenses.reduce(0) { |total, expense| total + expense.total_amount } - (@user.expenses.reduce(0) { |total, expense| total + expense.total_amount } / @trip.users.count)
		@what_you_owe = @user.user_expenses.reduce(0) { |total, expense| total + expense.amount }

		if @user.expenses && @user.user_expenses
			render json: { expenses: @what_you_are_owed, user_expenses: @what_you_owe, user: @user, trip: @trip  }.to_json
		else
			@error = "Error: No expenses found"
			render json: @error.to_json
		end
	end

	def create # /trips/:trip_id/expenses
		trip = Trip.find(params[:trip_id])
		expense = trip.expenses.new(name: params[:name], total_amount: params[:total_amount], trip_id: trip.id, payer_id: current_user.id)
		if expense.save
			render json: { expense: expense, access_token: @user.access_token}.to_json
		else
      render json: {
        saved: false
      }.to_json
		end
	end

	# def edit
	# end

	# def show
	# end

	# def update
	# end

	# def destroy
	# end
	 private

    def set_user
        @user = User.find_by(access_token: params[:access_token])
    end
end
