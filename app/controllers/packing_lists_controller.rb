class PackingListsController < ApplicationController
	def index
		@packing_list = PackingList.all
		if @packing_list
			render json: @packing_list.to_json
		else
			@error = "Error: No packing list found"
			render json: @error.to_json
		end
	end
end
