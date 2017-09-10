class TripsController < ApplicationController
	def index
		trips = Trip.all
		render json: trips
	end

	def create
	end

	def new
	end

	def edit
	end

	def show
		trip = Trip.find(params[:id])
		attendees = trip.attendees
		render json: {attendees: attendees, trip: trip}

	end

	def update
	end
end
