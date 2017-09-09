class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(email: params[:sessions][:email].downcase)
    if user && user.authenticate(params[:sessions][:password])
      login(user)
      redirect_to trips_path
    else
      @errors = ['Invalid email/password']
      render 'new'
    end
  end

  def destroy
    logout
    redirect_to login_path
  end
end
