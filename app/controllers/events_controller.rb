class EventsController < ApplicationController

	def index
		@user = User.find_by(access_token: params[:access_token])
		@events = Event.where(destination_id: params[:destination_id])
		if @events
			render json: @events.as_json
		else
			@error = "Error: No events found"
			render json: @error.as_json
		end
	end

	def create
		@event = Event.create(
			title: params[:title],
			category: params[:category].downcase,
			description: params[:description],
			start_time: params[:start_time],
			end_time: params[:end_time],
			destination_id: params[:destination_id]
			)
		if @event.save
				render json: {event: @event}.to_json
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
	end

	def update
	end

	def destroy
	end

end
