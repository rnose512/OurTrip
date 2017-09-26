class EventsController < ApplicationController
	def index
		@user = User.find_by(access_token: params[:access_token])
		@events = Event.where(destination_id: params[:destination_id])
		start_times = @events.map {|event| convert_start_time(event.start_time)}
		end_times = @events.map {|event| convert_end_time(event.end_time)}
		event_info = []
		@events.each_with_index do |event, idx|
			event_info << {event_title: event.title, description: event.description, start_time: start_times[idx], end_time: end_times[idx]}
		end

		if @events
			render json: { event_info: event_info }.to_json
		else
			@error = "Error: No events found"
			render json: @error.as_json
		end
	end

	def create
		event = Event.new(
				title: params[:title],
				category: params[:category].downcase,
				description: params[:description],
				start_time: params[:start_time],
				end_time: params[:end_time],
				destination_id: params[:destination_id])
		if event.save
			render json: {
				saved: true
			}.to_json
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

	private
  def convert_start_time(start_time)
   start_time.strftime("%B %-d, %Y at %l:%M %p")
  end

  def convert_end_time(end_time)
   end_time.strftime("%B %-d, %Y at %l:%M %p")
  end
end
