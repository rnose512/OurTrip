class UsersController < ApplicationController

  def index
    users = User.all
    render json: {users: users}
  end

  def create
    user = User.new(first_name: params[:first_name], last_name: params[:last_name], email: params[:email], password: params[:password], phone_number: params[:phone_number], emergency_contact: params[:emergency_contact], emergency_contact_phone_number: params[:emergency_contact_phone_number])
    if user.save
      render json: {
        saved: true,
        accessToken: user.access_token
      }.to_json
    else
      render json: {
        saved: false
      }.to_json
    end
  end

end