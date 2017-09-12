class ExpensesController < ApplicationController
	before_action :set_user
	def index # /trips/:trip_id/expenses
		@user = User.find_by(access_token: params[:access_token])
		@expenses = Trip.find(params[:trip_id]).expenses
		if @expenses
			render json: @expenses.to_json
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
