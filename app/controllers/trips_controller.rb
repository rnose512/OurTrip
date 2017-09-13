class TripsController < ApplicationController
    before_action :set_user

    def index
        @trips = @user.trips
        @attendees = @trips[0].users
        render json: { trips: @trips, attendees: @attendees }
    end

    def create
        @trip = Trip.create(
            creator_id: @user.id,
            name: params[:name],
            start_date: params[:start_date],
            end_date: params[:end_date]
            )
        @usertrip = UserTrip.create(
            user_id: @user.id,
            trip_id: @trip.id
            )
        if @trip.save && @usertrip.save
            render json: {trip: @trip, access_token: @user.access_token}.to_json
        else
            render json: {
                saved: false
            }.to_json
        end
    end

    def new
    end

    def edit
    end

    def show
        trip = Trip.find(params[:id])
        users = trip.users
        render json: {users: users, trip: trip}

    end

    def update
    end

    private

    def set_user
        @user = User.find_by(access_token: params[:access_token])
    end
end