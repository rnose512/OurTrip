class UserTripsController < ApplicationController

	def index
    users = User.all
    attending_users = Trip.first.users
    non_attending_users = users - attending_users
    if non_attending_users
      render json: {non_attending_users: non_attending_users}
    end
	end

	def create
		user_trip = UserTrip.new(trip_id: 1, user_id: 6)
		if user_trip.save
			render json: user_trip
		end
	end
end
