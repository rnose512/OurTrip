class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new(username: params[:username], email: params[:email], password: params[:password])

      if @user.save
        render json: {
          accessToken: @user.access_token
        }.to_json
      else
        render json: {
          errors: ['Could not create the user']
        }.to_json
      end
  end

end