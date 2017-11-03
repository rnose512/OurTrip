class UserExpensesController < ApplicationController
  before_action :set_user
  def create
    @user_expense = UserExpense.new(user_id: params[:user_id], amount: params[:amount], expense_id: params[:expense_id])
    if @user_expense.save
      render json: { user_expense: @user_expense }.to_json
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
