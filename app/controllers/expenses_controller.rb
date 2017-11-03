class ExpensesController < ApplicationController
	before_action :set_user
	def index # /trips/:trip_id/expenses
		@trip = Trip.find(params[:trip_id])
		@attendees = @trip.users.map { |attendee| attendee = attendee.first_name }
		@user = User.find_by(access_token: params[:access_token])
		@what_you_are_owed = @user.loans.reduce(0) { |total, expense| total + expense.total_amount }
		@what_you_owe = @user.debts.reduce(0) { |total, expense| total + expense.total_amount }
		@attendees = @trip.users.map { |attendee| attendee = attendee.first_name }

		if @user.debts && @user.loans
			render json: { expenses: @what_you_are_owed, user_expenses: @what_you_owe, user: @user, trip: @trip  }.to_json
		else
			@error = "Error: No expenses found"
			render json: @error.to_json
		end
	end

	def create
		@trip = Trip.find(1)
		@user = User.find_by(access_token: params[:access_token])
		@expense = @user.loans.new(name: params[:name], total_amount: params[:total_amount], trip_id: @trip.id, payer_id: @user.id)
		if @expense.save
			render json: { expense: @expense, access_token: @user.access_token, hawken: @hawken, hannie: @hannie, ashley: @ashley, peter: @peter, rio: @rio, attendees: @attendees }.to_json
		else
      render json: {
        saved: false
      }.to_json
		end
	end

	 private
    def set_user
        @user = User.find_by(access_token: params[:access_token])
    end
end
